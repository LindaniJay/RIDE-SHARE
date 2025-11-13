import express from 'express';
import { QueryTypes } from 'sequelize';
import { authenticateToken, requireHost, AuthenticatedRequest } from '../middleware/auth';
import { Listing, Booking, User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/host/earnings - Get host earnings summary
router.get('/earnings', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      logger.warn('Earnings request without authenticated user');
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }
    
    logger.info(`Fetching earnings for host: ${userId}`);
    
    const sequelize = Booking.sequelize!;
    if (!sequelize) {
      throw new Error('Database connection not available');
    }
    
    // Get total earnings from completed bookings
    const earningsResult = await sequelize.query(
      `SELECT COALESCE(SUM(total_price), 0) as "totalEarnings" 
       FROM bookings 
       WHERE status = 'completed' AND host_id = :userId`,
      {
        replacements: { userId },
        type: QueryTypes.SELECT
      }
    ) as any[];
    
    const totalEarnings = parseFloat(earningsResult[0]?.totalEarnings || '0');
    
    // Get monthly earnings
    const monthlyEarningsResult = await sequelize.query(
      `SELECT 
        DATE_TRUNC('month', created_at) as month,
        COALESCE(SUM(total_price), 0) as earnings
       FROM bookings 
       WHERE status = 'completed' AND host_id = :userId
       GROUP BY DATE_TRUNC('month', created_at)
       ORDER BY month DESC`,
      {
        replacements: { userId },
        type: QueryTypes.SELECT
      }
    ) as any[];
    
    const monthlyEarnings = monthlyEarningsResult.map((item: any) => ({
      month: item.month,
      earnings: parseFloat(item.earnings || '0')
    }));

    logger.info(`Earnings fetched successfully for host ${userId}: total=${totalEarnings}`);

    res.json({
      success: true,
      data: {
        totalEarnings: totalEarnings,
        monthlyEarnings: monthlyEarnings
      }
    });
  } catch (error: any) {
    logger.error('Error fetching host earnings:', {
      error: error.message,
      stack: error.stack,
      userId: req.user?.id
    });
    res.status(500).json({
      success: false,
      error: 'Failed to fetch earnings',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/host/requests - Get booking requests for host's listings
router.get('/requests', authenticateToken, requireHost, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    
    const requests = await Booking.findAll({
      where: { status: 'pending' },
      include: [{
        model: Listing,
        as: 'listing',
        where: { hostId: userId }
      }, {
        model: User,
        as: 'renter',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: requests,
      count: requests.length
    });
  } catch (error) {
    logger.error('Error fetching host requests:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch booking requests'
    });
  }
});

// GET /api/host/approved - Get approved bookings for host's listings
router.get('/approved', authenticateToken, requireHost, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    
    const approvedBookings = await Booking.findAll({
      where: { status: 'confirmed' },
      include: [{
        model: Listing,
        as: 'listing',
        where: { hostId: userId }
      }, {
        model: User,
        as: 'renter',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: approvedBookings,
      count: approvedBookings.length
    });
  } catch (error) {
    logger.error('Error fetching approved bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch approved bookings'
    });
  }
});

// GET /api/host/performance - Get host performance metrics
router.get('/performance', authenticateToken, requireHost, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    
    // Get total bookings
    const totalBookings = await Booking.count({
      include: [{
        model: Listing,
        as: 'listing',
        where: { hostId: userId }
      }]
    });
    
    // Get completed bookings
    const completedBookings = await Booking.count({
      where: { status: 'completed' },
      include: [{
        model: Listing,
        as: 'listing',
        where: { hostId: userId }
      }]
    });
    
    // Get average rating (if reviews exist)
    const avgRating = 4.5; // Placeholder - would need reviews table
    
    // Get response rate
    const responseRate = totalBookings > 0 ? (completedBookings / totalBookings) * 100 : 0;

    res.json({
      success: true,
      data: {
        totalBookings,
        completedBookings,
        avgRating,
        responseRate: Math.round(responseRate)
      }
    });
  } catch (error) {
    logger.error('Error fetching host performance:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch performance metrics'
    });
  }
});

// GET /api/host/maintenance - Get maintenance log for host's vehicles
router.get('/maintenance', authenticateToken, requireHost, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    
    // This would typically come from a maintenance table
    // For now, return mock data
    const maintenanceLog = [
      {
        id: 1,
        vehicleId: 1,
        type: 'Service',
        description: 'Regular oil change and inspection',
        date: new Date().toISOString(),
        cost: 500
      }
    ];

    res.json({
      success: true,
      data: maintenanceLog
    });
  } catch (error) {
    logger.error('Error fetching maintenance log:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch maintenance log'
    });
  }
});

// GET /api/host/profile - Get host profile information
router.get('/profile', authenticateToken, requireHost, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    
    const user = await User.findByPk(userId, {
      attributes: ['id', 'firstName', 'lastName', 'email', 'phone', 'profileImage', 'isVerified']
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    logger.error('Error fetching host profile:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch profile'
    });
  }
});

export default router;
