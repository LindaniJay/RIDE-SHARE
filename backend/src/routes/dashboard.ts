import express from 'express';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { Booking } from '../models/Booking';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { Op } from 'sequelize';

const router = express.Router();

// Get renter dashboard stats
router.get('/renter', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user!.id;
    
    // Get booking statistics
    const totalBookings = await Booking.count({
      where: { renterId: userId }
    });
    
    const activeBookings = await Booking.count({
      where: { 
        renterId: userId,
        status: ['pending', 'confirmed']
      }
    });
    
    const completedBookings = await Booking.count({
      where: { 
        renterId: userId,
        status: 'completed'
      }
    });
    
    // Get total spent
    const totalSpent = await Booking.sum('total_amount', {
      where: { 
        renterId: userId,
        status: 'completed'
      }
    }) || 0;
    
    // Get recent bookings
    const recentBookings = await Booking.findAll({
      where: { renterId: userId },
      include: [
        {
          model: Listing,
          as: 'listing',
        },
      ],
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    res.json({
      stats: {
        totalBookings,
        activeBookings,
        completedBookings,
        totalSpent: parseFloat(totalSpent.toString()),
      },
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get host dashboard stats
router.get('/host', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user!.id;
    
    // Get vehicle statistics
    const totalVehicles = await Listing.count({
      where: { hostId: userId }
    });
    
    const availableVehicles = await Listing.count({
      where: { 
        hostId: userId,
        status: 'approved'
      }
    });
    
    // Get booking statistics for host's vehicles
    const totalBookings = await Booking.count({
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { hostId: userId }
        }
      ]
    });
    
    const upcomingBookings = await Booking.count({
      where: {
        status: 'confirmed',
        startDate: { [Op.gte]: new Date() }
      },
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { hostId: userId }
        }
      ]
    });
    
    // Get total earnings
    const hostVehicles = await Listing.findAll({
      where: { hostId: userId },
      attributes: ['id']
    });
    const listing_ids = hostVehicles.map(v => v.id);
    
    const totalEarnings = await Booking.sum('total_amount', {
      where: {
        status: 'completed',
        listingId: { [Op.in]: listing_ids }
      }
    }) || 0;
    
    // Get recent bookings for host's vehicles
    const recentBookings = await Booking.findAll({
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { hostId: userId }
        },
        {
          model: User,
          as: 'user',
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    res.json({
      stats: {
        totalVehicles,
        availableVehicles,
        totalBookings,
        upcomingBookings,
        totalEarnings: parseFloat(totalEarnings.toString()),
      },
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get admin dashboard stats
router.get('/admin', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    // Check if user is admin
    if (req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    // Get platform statistics
    const totalUsers = await User.count();
    const totalVehicles = await Listing.count();
    const totalBookings = await Booking.count();
    
    const activeUsers = await User.count({
      where: {
        [Op.or]: [
          { role: 'renter' },
          { role: 'host' }
        ]
      }
    });
    
    // Get recent activity
    const recentUsers = await User.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    const recentBookings = await Booking.findAll({
      include: [
        {
          model: Listing,
          as: 'listing',
        },
        {
          model: User,
          as: 'user',
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: 5,
    });
    
    res.json({
      stats: {
        totalUsers,
        activeUsers,
        totalVehicles,
        totalBookings,
      },
      recentUsers,
      recentBookings,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;


