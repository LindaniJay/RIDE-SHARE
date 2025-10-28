import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthenticatedRequest, requireRole } from '../middleware/auth';
import { User, Listing, Booking, Payment, AdminLog } from '../models';
import { Op } from 'sequelize';
import { sequelize } from '../config/database';

const router = express.Router();

// Get pending vehicles for approval
router.get('/vehicles/pending', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: vehicles } = await Listing.findAndCountAll({
      where: { 
        approved: false,
        is_available: true
      },
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email', 'phone'] 
        }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      vehicles,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching pending vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update vehicle approval status
router.patch('/vehicles/:id/status', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be approved or rejected' });
    }

    const vehicle = await Listing.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    await vehicle.update({
      status,
      reviewed_at: new Date(),
      reviewed_by: req.user!.id,
      ...(status === 'rejected' && reason && { rejection_reason: reason })
    });

    res.json({
      success: true,
      message: `Vehicle ${status} successfully`,
      vehicle
    });
  } catch (error) {
    console.error('Error updating vehicle status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get safety incidents
router.get('/safety-incidents', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 20, status, severity } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (severity) whereClause.severity = severity;

    // For now, return empty array since we don't have safety incidents table yet
    // In production, this would query a safety_incidents table
    const incidents: any[] = [];

    res.json({
      success: true,
      incidents,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: 0,
        pages: 0
      }
    });
  } catch (error) {
    console.error('Error fetching safety incidents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user behavior analytics
router.get('/user-behavior-analytics', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { timeRange = 'month' } = req.query;

    // Calculate date range
    const now = new Date();
    let startDate: Date;
    
    switch (timeRange) {
    case 'week':
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case 'month':
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    case 'year':
      startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      break;
    default:
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    // Get user statistics
    const totalUsers = await User.count();
    const activeUsers = await User.count({
      where: {
        last_login_at: { [Op.gte]: startDate }
      }
    });
    const newUsers = await User.count({
      where: {
        created_at: { [Op.gte]: startDate }
      }
    });

    // Get booking statistics
    const totalBookings = await Booking.count({
      where: {
        created_at: { [Op.gte]: startDate }
      }
    });

    // Calculate retention rate (simplified)
    const retentionRate = totalUsers > 0 ? (Number(activeUsers) / Number(totalUsers)) * 100 : 0;

    // User segments
    const frequentRenters = await User.count({
      where: {
        role: 'renter',
        created_at: { [Op.lte]: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) }
      }
    });

    const userSegments = [
      { segment: 'Frequent Renters', count: frequentRenters, percentage: (Number(frequentRenters) / Number(totalUsers)) * 100 },
      { segment: 'Occasional Users', count: Math.floor(Number(totalUsers) * 0.3), percentage: 30 },
      { segment: 'New Users', count: newUsers, percentage: (Number(newUsers) / Number(totalUsers)) * 100 },
      { segment: 'Inactive Users', count: Number(totalUsers) - Number(activeUsers), percentage: ((Number(totalUsers) - Number(activeUsers)) / Number(totalUsers)) * 100 }
    ];

    // Behavior metrics (mock data for now)
    const behaviorMetrics = [
      { metric: 'Avg Session Duration', value: 12.5, trend: 'up', change: 8.2 },
      { metric: 'Pages per Session', value: 4.8, trend: 'up', change: 12.1 },
      { metric: 'Bounce Rate', value: 23.4, trend: 'down', change: -5.3 },
      { metric: 'Return Rate', value: 65.2, trend: 'up', change: 3.7 }
    ];

    // Top actions (mock data for now)
    const topActions = [
      { action: 'Search Vehicles', count: Math.floor(Number(totalBookings) * 1.5), percentage: 45.2 },
      { action: 'View Vehicle Details', count: Math.floor(Number(totalBookings) * 1.2), percentage: 32.6 },
      { action: 'Create Booking', count: totalBookings, percentage: 16.7 },
      { action: 'User Registration', count: newUsers, percentage: 5.5 }
    ];

    // User journey (mock data for now)
    const userJourney = [
      { step: 'Landing Page', users: Math.floor(totalUsers * 1.2), conversionRate: 100 },
      { step: 'Search', users: Math.floor(totalUsers * 0.9), conversionRate: 75 },
      { step: 'Vehicle Details', users: Math.floor(totalUsers * 0.6), conversionRate: 60 },
      { step: 'Booking Form', users: Math.floor(totalUsers * 0.4), conversionRate: 62.2 },
      { step: 'Payment', users: Math.floor(totalUsers * 0.3), conversionRate: 75 },
      { step: 'Confirmation', users: Math.floor(totalUsers * 0.25), conversionRate: 90.5 }
    ];

    const data = {
      totalUsers,
      activeUsers,
      newUsers,
      retentionRate,
      userSegments,
      behaviorMetrics,
      topActions,
      userJourney
    };

    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Error fetching user behavior analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get real-time alerts
router.get('/real-time-alerts', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    // Get pending bookings that need attention
    const pendingBookings = await Booking.count({
      where: { status: 'pending' }
    });

    // Get failed payments
    const failedPayments = await Payment.count({
      where: { status: 'failed' }
    });

    // Get pending vehicle approvals
    const pendingVehicles = await Listing.count({
      where: { status: 'pending' }
    });

    const alerts: any[] = [];

    // Generate alerts based on system state
    if (pendingBookings > 0) {
      alerts.push({
        id: 'pending-bookings',
        type: 'warning',
        title: 'Pending Bookings',
        message: `${pendingBookings} bookings are pending approval`,
        timestamp: new Date().toISOString(),
        priority: 'medium',
        category: 'booking',
        isRead: false,
        actionRequired: true
      });
    }

    if (Number(failedPayments) > 0) {
      alerts.push({
        id: 'failed-payments',
        type: 'error',
        title: 'Payment Failures',
        message: `${failedPayments} payments have failed`,
        timestamp: new Date().toISOString(),
        priority: 'high',
        category: 'payment',
        isRead: false,
        actionRequired: true
      });
    }

    if (pendingVehicles > 0) {
      alerts.push({
        id: 'pending-vehicles',
        type: 'info',
        title: 'Vehicle Approvals',
        message: `${pendingVehicles} vehicles are awaiting approval`,
        timestamp: new Date().toISOString(),
        priority: 'low',
        category: 'vehicle',
        isRead: false,
        actionRequired: true
      });
    }

    res.json({
      success: true,
      alerts
    });
  } catch (error) {
    console.error('Error fetching real-time alerts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get dashboard statistics
router.get('/dashboard-stats', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const totalUsers = await User.count();
    const totalHosts = await User.count({ where: { role: 'host' } });
    const totalRenters = await User.count({ where: { role: 'renter' } });
    const totalVehicles = await Listing.count();
    const approvedVehicles = await Listing.count({ where: { status: 'approved' } });
    const pendingVehicles = await Listing.count({ where: { status: 'pending' } });
    const totalBookings = await Booking.count();
    const activeBookings = await Booking.count({ where: { status: ['confirmed', 'approved'] } });
    const completedBookings = await Booking.count({ where: { status: 'completed' } });

    // Calculate revenue (simplified)
    const revenueResult = await Booking.findOne({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('total_amount')), 'totalRevenue']
      ],
      where: { status: 'completed' }
    });

    const totalRevenue = (revenueResult as any)?.getDataValue('totalRevenue') || 0;

    const stats = {
      users: {
        total: totalUsers,
        hosts: totalHosts,
        renters: totalRenters
      },
      vehicles: {
        total: totalVehicles,
        approved: approvedVehicles,
        pending: pendingVehicles
      },
      bookings: {
        total: totalBookings,
        active: activeBookings,
        completed: completedBookings
      },
      revenue: {
        total: totalRevenue
      }
    };

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all users (admin only)
router.get('/users', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 20, role, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (role) whereClause.role = role;
    if (status) whereClause.approval_status = status;

    const { count, rows: users } = await User.findAndCountAll({
      where: whereClause,
      attributes: { exclude: ['password_hash'] },
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      users,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all vehicles (admin only)
router.get('/vehicles', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;

    const { count, rows: vehicles } = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      vehicles,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bookings (admin only)
router.get('/bookings', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { 
          model: Listing, 
          as: 'listing',
          include: [{ model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }]
        }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      bookings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user status (admin only)
router.put('/users/:id/status', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.update({
      approval_status: status,
      ...(status === 'rejected' && reason && { rejection_reason: reason })
    });

    // Log admin action
    await AdminLog.create({
      adminId: Number(req.user!.id) || 0,
      targetType: 'user',
      targetId: Number(user.id) || 0,
      action: `user_${status}`,
      details: {
        target_user_id: user.id,
        email: user.email,
        status: status,
        reason: reason
      }
    });

    res.json({
      success: true,
      message: `User ${status} successfully`,
      user: {
        id: user.id,
        email: user.email,
        approval_status: user.approval_status
      }
    });
  } catch (error) {
    console.error('Error updating user status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update vehicle status (admin only)
router.put('/vehicles/:id/status', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = req.body;

    const vehicle = await Listing.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    await vehicle.update({
      status: status,
      approval_status: status,
      ...(status === 'rejected' && reason && { rejection_reason: reason })
    });

    // Log admin action
    await AdminLog.create({
      adminId: Number(req.user!.id) || 0,
      targetType: 'listing',
      targetId: vehicle.id,
      action: `vehicle_${status}`,
      details: {
        vehicle_id: vehicle.id,
        title: vehicle.title,
        host_id: vehicle.host_id,
        status: status,
        reason: reason
      }
    });

    res.json({
      success: true,
      message: `Vehicle ${status} successfully`,
      vehicle: {
        id: vehicle.id,
        title: vehicle.title,
        status: vehicle.status,
        approval_status: vehicle.approval_status
      }
    });
  } catch (error) {
    console.error('Error updating vehicle status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;


