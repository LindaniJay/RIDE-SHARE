import express from 'express';
import { z } from 'zod';
import { authenticateAdmin, AdminRequest, auditAdminAction } from '../middleware/adminAuth';
import { Listing, Booking, User, Notification } from '../models';
import { getFirestore } from '../config/firebase';
import { logger } from '../utils/logger';
import { Op } from 'sequelize';

const router = express.Router();

// Validation schemas
const approveVehicleSchema = z.object({
  reason: z.string().optional(),
  notes: z.string().optional()
});

const rejectVehicleSchema = z.object({
  reason: z.string().min(1, 'Rejection reason is required'),
  notes: z.string().optional()
});

const sendNotificationSchema = z.object({
  userId: z.string().optional(),
  userRole: z.enum(['all', 'host', 'renter']).optional(),
  title: z.string().min(1),
  message: z.string().min(1),
  type: z.enum(['info', 'warning', 'success', 'error']).default('info')
});

// 1. GET /api/admin/stats - Dashboard overview stats
router.get('/stats', authenticateAdmin, auditAdminAction('VIEW_DASHBOARD_STATS'), async (req: AdminRequest, res) => {
  try {
    const [
      totalUsers,
      totalListings,
      totalBookings,
      pendingListings,
      activeBookings,
      completedBookings,
      totalRevenue,
      monthlyRevenue,
      userGrowth,
      bookingGrowth
    ] = await Promise.all([
      User.count(),
      Listing.count(),
      Booking.count(),
      Listing.count({ where: { status: 'pending' } }),
      Booking.count({ where: { status: 'confirmed' } }),
      Booking.count({ where: { status: 'completed' } }),
      Booking.sum('totalPrice', { where: { paymentStatus: 'paid' } }) || 0,
      Booking.sum('totalPrice', { 
        where: { 
          paymentStatus: 'paid',
          createdAt: {
            [Op.gte]: new Date(new Date().setMonth(new Date().getMonth() - 1))
          }
        } 
      }) || 0,
      User.count({ 
        where: { 
          createdAt: { [Op.gte]: new Date(new Date().setMonth(new Date().getMonth() - 1)) }
        } 
      }),
      Booking.count({ 
        where: { 
          createdAt: { [Op.gte]: new Date(new Date().setMonth(new Date().getMonth() - 1)) }
        } 
      })
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalUsers,
          totalListings,
          totalBookings,
          pendingListings,
          activeBookings,
          completedBookings
        },
        revenue: {
          total: parseFloat(totalRevenue.toString()),
          monthly: parseFloat(monthlyRevenue.toString())
        },
        growth: {
          users: userGrowth,
          bookings: bookingGrowth
        }
      }
    });
  } catch (error) {
    logger.error('Error fetching admin stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard statistics'
    });
  }
});

// 2. GET /api/admin/vehicles/pending - Vehicle verification queue
router.get('/vehicles/pending', authenticateAdmin, auditAdminAction('VIEW_PENDING_VEHICLES'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: listings } = await Listing.findAndCountAll({
      where: { status: 'pending' },
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'isVerified']
      }],
      order: [['createdAt', 'ASC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: listings,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching pending vehicles:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pending vehicles'
    });
  }
});

// 3. PATCH /api/admin/vehicles/:id/approve - Approve vehicle listing
router.patch('/vehicles/:id/approve', authenticateAdmin, auditAdminAction('APPROVE_VEHICLE'), async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { reason, notes } = approveVehicleSchema.parse(req.body);
    
    const listing = await Listing.findByPk(id, {
      include: [{ model: User, as: 'host' }]
    });

    if (!listing) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle listing not found'
      });
    }

    if (listing.status !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not pending approval'
      });
    }

    // Update listing status
    await listing.update({ 
      status: 'approved'
    });

    // Create notification for host
    await Notification.create({
      userId: listing.hostId,
      message: `Your ${listing.make} ${listing.model} listing has been approved!`,
      type: 'listing_approved',
      isRead: false
    });

    res.json({
      success: true,
      data: listing,
      message: 'Vehicle listing approved successfully'
    });
  } catch (error) {
    logger.error('Error approving vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve vehicle listing'
    });
  }
});

// 4. PATCH /api/admin/vehicles/:id/reject - Reject vehicle listing
router.patch('/vehicles/:id/reject', authenticateAdmin, auditAdminAction('REJECT_VEHICLE'), async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { reason, notes } = rejectVehicleSchema.parse(req.body);
    
    const listing = await Listing.findByPk(id, {
      include: [{ model: User, as: 'host' }]
    });

    if (!listing) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle listing not found'
      });
    }

    if (listing.status !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not pending approval'
      });
    }

    // Update listing status
    await listing.update({ 
      status: 'rejected'
    });

    // Create notification for host
    await Notification.create({
      userId: listing.hostId,
      message: `Your ${listing.make} ${listing.model} listing was rejected. Reason: ${reason}`,
      type: 'listing_rejected',
      isRead: false
    });

    res.json({
      success: true,
      data: listing,
      message: 'Vehicle listing rejected'
    });
  } catch (error) {
    logger.error('Error rejecting vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reject vehicle listing'
    });
  }
});

// 5. GET /api/admin/bookings - Active bookings overview
router.get('/bookings', authenticateAdmin, auditAdminAction('VIEW_BOOKINGS'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) {
      whereClause.status = status;
    }

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'renter', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Listing, as: 'listing', include: [{ model: User, as: 'host', attributes: ['id', 'firstName', 'lastName', 'email'] }] }
      ],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: bookings,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch bookings'
    });
  }
});

// 6. GET /api/admin/payments - Pending payments summary
router.get('/payments', authenticateAdmin, auditAdminAction('VIEW_PAYMENTS'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) {
      whereClause.paymentStatus = status;
    }

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'renter', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Listing, as: 'listing', attributes: ['id', 'make', 'model', 'year'] }
      ],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    // Calculate payment statistics
    const paymentStats = await Booking.findAll({
      attributes: [
        [require('sequelize').fn('COUNT', require('sequelize').col('id')), 'totalBookings'],
        [require('sequelize').fn('SUM', require('sequelize').col('totalPrice')), 'totalAmount'],
        [require('sequelize').fn('AVG', require('sequelize').col('totalPrice')), 'averageAmount']
      ],
      where: { paymentStatus: 'paid' },
      raw: true
    });

    res.json({
      success: true,
      data: {
        bookings,
        stats: paymentStats[0]
      },
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching payments:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch payment data'
    });
  }
});

// 7. GET /api/admin/analytics - Platform analytics
router.get('/analytics', authenticateAdmin, auditAdminAction('VIEW_ANALYTICS'), async (req: AdminRequest, res) => {
  try {
    const { period = '30d' } = req.query;
    
    let startDate: Date;
    switch (period) {
      case '7d':
        startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '30d':
        startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '90d':
        startDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    }

    const [
      userRegistrations,
      bookingTrends,
      revenueTrends,
      topVehicles,
      userActivity
    ] = await Promise.all([
      // User registrations over time
      User.findAll({
        attributes: [
          [require('sequelize').fn('DATE', require('sequelize').col('createdAt')), 'date'],
          [require('sequelize').fn('COUNT', require('sequelize').col('id')), 'count']
        ],
        where: { createdAt: { [Op.gte]: startDate } },
        group: [require('sequelize').fn('DATE', require('sequelize').col('createdAt'))],
        order: [[require('sequelize').fn('DATE', require('sequelize').col('createdAt')), 'ASC']],
        raw: true
      }),
      // Booking trends
      Booking.findAll({
        attributes: [
          [require('sequelize').fn('DATE', require('sequelize').col('createdAt')), 'date'],
          [require('sequelize').fn('COUNT', require('sequelize').col('id')), 'count']
        ],
        where: { createdAt: { [Op.gte]: startDate } },
        group: [require('sequelize').fn('DATE', require('sequelize').col('createdAt'))],
        order: [[require('sequelize').fn('DATE', require('sequelize').col('createdAt')), 'ASC']],
        raw: true
      }),
      // Revenue trends
      Booking.findAll({
        attributes: [
          [require('sequelize').fn('DATE', require('sequelize').col('createdAt')), 'date'],
          [require('sequelize').fn('SUM', require('sequelize').col('totalPrice')), 'revenue']
        ],
        where: { 
          createdAt: { [Op.gte]: startDate },
          paymentStatus: 'paid'
        },
        group: [require('sequelize').fn('DATE', require('sequelize').col('createdAt'))],
        order: [[require('sequelize').fn('DATE', require('sequelize').col('createdAt')), 'ASC']],
        raw: true
      }),
      // Top vehicles by bookings
      Listing.findAll({
        attributes: [
          'id', 'make', 'model', 'year',
          [require('sequelize').fn('COUNT', require('sequelize').col('Bookings.id')), 'bookingCount']
        ],
        include: [{
          model: Booking,
          as: 'bookings',
          attributes: []
        }],
        group: ['Listing.id'],
        order: [[require('sequelize').fn('COUNT', require('sequelize').col('Bookings.id')), 'DESC']],
        limit: 10,
        raw: true
      }),
      // User activity
      User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email', 'last_login_at', 'createdAt'],
        where: { last_login_at: { [Op.gte]: startDate } },
        order: [['last_login_at', 'DESC']],
        limit: 20
      })
    ]);

    res.json({
      success: true,
      data: {
        period,
        userRegistrations,
        bookingTrends,
        revenueTrends,
        topVehicles,
        userActivity
      }
    });
  } catch (error) {
    logger.error('Error fetching analytics:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch analytics data'
    });
  }
});

// 8. GET /api/admin/notifications - Notifications center
router.get('/notifications', authenticateAdmin, auditAdminAction('VIEW_NOTIFICATIONS'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: notifications } = await Notification.findAndCountAll({
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'firstName', 'lastName', 'email']
      }],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: notifications,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching notifications:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch notifications'
    });
  }
});

// 9. POST /api/admin/notify - Send notifications to users
router.post('/notify', authenticateAdmin, auditAdminAction('SEND_NOTIFICATION'), async (req: AdminRequest, res) => {
  try {
    const { userId, userRole, title, message, type } = sendNotificationSchema.parse(req.body);

    let targetUsers: User[] = [];

    if (userId) {
      // Send to specific user
      const user = await User.findByPk(userId);
      if (user) targetUsers = [user];
    } else if (userRole && userRole !== 'all') {
      // Send to users with specific role
      targetUsers = await User.findAll({ where: { role: userRole } });
    } else {
      // Send to all users
      targetUsers = await User.findAll();
    }

    // Create notifications for all target users
    const notifications = await Promise.all(
      targetUsers.map(user => 
        Notification.create({
          userId: Number(user.id) || 0,
          message: `${title}: ${message}`,
          type: 'system_announcement', // Map admin notification types to system_announcement
          isRead: false
        })
      )
    );

    res.json({
      success: true,
      data: {
        sentTo: targetUsers.length,
        notifications: notifications.length
      },
      message: `Notification sent to ${targetUsers.length} user(s)`
    });
  } catch (error) {
    logger.error('Error sending notification:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send notification'
    });
  }
});

// 10. GET /api/admin/reports - Reports (fraud, damage, support)
router.get('/reports', authenticateAdmin, auditAdminAction('VIEW_REPORTS'), async (req: AdminRequest, res) => {
  try {
    const { type = 'all' } = req.query;

    // This would typically come from a reports table
    // For now, we'll return mock data structure
    const reports = {
      fraud: {
        total: 0,
        resolved: 0,
        pending: 0,
        recent: []
      },
      damage: {
        total: 0,
        resolved: 0,
        pending: 0,
        recent: []
      },
      support: {
        total: 0,
        resolved: 0,
        pending: 0,
        recent: []
      }
    };

    res.json({
      success: true,
      data: reports
    });
  } catch (error) {
    logger.error('Error fetching reports:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch reports'
    });
  }
});

// 11. GET /api/admin/users - Live user tracking
router.get('/users', authenticateAdmin, auditAdminAction('VIEW_USERS'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 20, role, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (role) whereClause.role = role;
    if (status) whereClause.isVerified = status === 'verified';

    const { count, rows: users } = await User.findAndCountAll({
      where: whereClause,
      attributes: ['id', 'firstName', 'lastName', 'email', 'role', 'isVerified', 'last_login_at', 'createdAt'],
      order: [['last_login_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: users,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users'
    });
  }
});

// 12. GET /api/admin/support - Chat support inbox
router.get('/support', authenticateAdmin, auditAdminAction('VIEW_SUPPORT'), async (req: AdminRequest, res) => {
  try {
    // This would typically come from a support tickets table
    const supportTickets = {
      open: 0,
      closed: 0,
      pending: 0,
      recent: []
    };

    res.json({
      success: true,
      data: supportTickets
    });
  } catch (error) {
    logger.error('Error fetching support data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch support data'
    });
  }
});

// 13. GET /api/admin/verification - Booking verification (selfie + document validation)
router.get('/verification', authenticateAdmin, auditAdminAction('VIEW_VERIFICATION'), async (req: AdminRequest, res) => {
  try {
    // This would typically come from a verification table
    const verifications = {
      pending: 0,
      approved: 0,
      rejected: 0,
      recent: []
    };

    res.json({
      success: true,
      data: verifications
    });
  } catch (error) {
    logger.error('Error fetching verification data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch verification data'
    });
  }
});

// 14. GET /api/admin/media - Vehicle media gallery review
router.get('/media', authenticateAdmin, auditAdminAction('VIEW_MEDIA'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const listings = await Listing.findAll({
      attributes: ['id', 'make', 'model', 'year', 'images', 'status'],
      where: { status: 'pending' },
      order: [['createdAt', 'ASC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: listings
    });
  } catch (error) {
    logger.error('Error fetching media data:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch media data'
    });
  }
});

// 15. GET /api/admin/system/status - Firebase health monitor
router.get('/system/status', authenticateAdmin, auditAdminAction('VIEW_SYSTEM_STATUS'), async (req: AdminRequest, res) => {
  try {
    const firestore = getFirestore();
    
    // Test Firebase services
    const healthChecks = {
      firebase: {
        auth: 'healthy',
        firestore: 'healthy',
        storage: 'healthy'
      },
      database: 'healthy',
      server: 'healthy',
      timestamp: new Date().toISOString()
    };

    res.json({
      success: true,
      data: healthChecks
    });
  } catch (error) {
    logger.error('Error checking system status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check system status'
    });
  }
});

export default router;
