import express from 'express';
import { z } from 'zod';
import { User, Listing, Booking, Review, Document } from '../models';
import { Op } from 'sequelize';
import { NotificationService } from '../services/notificationService';
import { AuthRequest } from '../middlewares/auth';

const router = express.Router();

// Initialize notification service (this would be passed from app.ts in real implementation)
let notificationService: NotificationService | null = null;

export const setNotificationService = (service: NotificationService) => {
  notificationService = service;
};

// Import centralized authentication middleware
import { authenticateToken, requireRole } from '../middlewares/auth';

// Get all users for admin approval
router.get('/users', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10, status, role } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.approval_status = status;
    if (role) whereClause.role = role;

    const users = await User.findAndCountAll({
      where: whereClause,
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        users: users.rows,
        total: users.count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(users.count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Approve or reject user profile
router.patch('/users/:id/approve', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be approved or rejected' });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.update({
      approval_status: status,
      ...(status === 'rejected' && reason && { rejectionReason: reason })
    });

    // Notify user of profile update
    if (notificationService) {
      await notificationService.notifyUserProfileUpdate(parseInt(user.id), status, reason);
      await notificationService.broadcastAdminUpdates();
    }

    res.json({
      success: true,
      message: `User profile ${status}`,
      data: user
    });
  } catch (error) {
    console.error('Error updating user approval:', error);
    res.status(500).json({ error: 'Failed to update user approval' });
  }
});

// Get all vehicles for admin approval
router.get('/vehicles', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;

    const vehicles = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        vehicles: vehicles.rows,
        total: vehicles.count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(vehicles.count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
});

// Approve or reject vehicle listing
router.patch('/vehicles/:id/approve', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;

    if (!['approved', 'declined'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be approved or declined' });
    }

    const vehicle = await Listing.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    await vehicle.update({
      status,
      ...(status === 'declined' && reason && { declineReason: reason })
    });

    // Notify host of vehicle update
    if (notificationService) {
      await notificationService.notifyVehicleUpdate(parseInt(vehicle.host_id), parseInt(vehicle.id), status, reason);
      await notificationService.broadcastAdminUpdates();
    }

    res.json({
      success: true,
      message: `Vehicle listing ${status}`,
      data: vehicle
    });
  } catch (error) {
    console.error('Error updating vehicle approval:', error);
    res.status(500).json({ error: 'Failed to update vehicle approval' });
  }
});

// Get all bookings for admin review
router.get('/bookings', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;

    const bookings = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        bookings: bookings.rows,
        total: bookings.count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(bookings.count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Get all reviews for admin moderation
router.get('/reviews', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const reviews = await Review.findAndCountAll({
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email']
        },
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        reviews: reviews.rows,
        total: reviews.count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(reviews.count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Get admin dashboard statistics
router.get('/stats', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const [
      totalUsers,
      pendingUsers,
      totalVehicles,
      pendingVehicles,
      totalBookings,
      pendingBookings,
      totalRevenue,
      recentUsers,
      recentVehicles
    ] = await Promise.all([
      User.count(),
      User.count({ where: { approval_status: 'pending' } }),
      Listing.count(),
      Listing.count({ where: { status: 'pending' } }),
      Booking.count(),
      Booking.count({ where: { status: 'pending' } }),
      Booking.sum('total_amount', { where: { status: 'completed' } }) || 0,
      User.findAll({
        where: { approval_status: 'pending' },
        limit: 5,
        order: [['createdAt', 'DESC']]
      }),
      Listing.findAll({
        where: { status: 'pending' },
        limit: 5,
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: User,
            as: 'host',
            attributes: ['firstName', 'lastName']
          }
        ]
      })
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalUsers,
          pendingUsers,
          totalVehicles,
          pendingVehicles,
          totalBookings,
          pendingBookings,
          totalRevenue
        },
        recentActivity: {
          recentUsers,
          recentVehicles
        }
      }
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ error: 'Failed to fetch admin statistics' });
  }
});

// Get pending documents for verification
router.get('/documents', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10, status, documentType } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (documentType) whereClause.documentType = documentType;

    const documents = await Document.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'firstName', 'lastName', 'email']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['uploadedAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        documents: documents.rows,
        total: documents.count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(documents.count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

// Update document status
router.patch('/documents/:id/status', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be approved or rejected' });
    }

    const document = await Document.findByPk(id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    await document.update({
      status,
      reviewedAt: new Date(),
      reviewedBy: req.user!.id,
      ...(status === 'rejected' && reason && { rejectionReason: reason })
    });

    // Notify user of document update
    if (notificationService) {
      // await notificationService.notifyDocumentUpdate(document.userId, document.id, status, reason); // Method doesn't exist
      await notificationService.broadcastAdminUpdates();
    }

    res.json({
      success: true,
      message: `Document ${status}`,
      data: document
    });
  } catch (error) {
    console.error('Error updating document status:', error);
    res.status(500).json({ error: 'Failed to update document status' });
  }
});

// Get disputes for admin review
router.get('/disputes', authenticateToken, requireRole(['admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    // This would typically come from a disputes table
    // For now, we'll return bookings with issues
    const disputes = await Booking.findAndCountAll({
      where: { 
        status: 'cancelled',
        ...(status && { disputeStatus: status })
      },
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['firstName', 'lastName', 'email']
        },
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['title', 'make', 'model']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        disputes: disputes.rows,
        total: disputes.count,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(disputes.count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching disputes:', error);
    res.status(500).json({ error: 'Failed to fetch disputes' });
  }
});

export default router;
