import express from 'express';
import { authenticateToken, AuthRequest } from '../middlewares/auth';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import { Booking } from '../models/Booking';
import { Review } from '../models/Review';
import { Op } from 'sequelize';
import { sequelize } from '../config/database';

const router = express.Router();

// Get platform statistics (public endpoint)
router.get('/', async (req, res) => {
  try {
    // Get total vehicles (approved listings)
    const totalVehicles = await Listing.count({
      where: { status: 'approved' }
    });

    // Get total renters (users with role 'renter')
    const totalRenters = await User.count({
      where: { role: 'renter' }
    });

    // Get total earnings from completed bookings
    const totalEarningsResult = await Booking.findOne({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('totalPrice')), 'totalEarnings']
      ],
      where: { status: 'completed' },
      raw: true
    });
    const totalEarnings = (totalEarningsResult as unknown as { totalEarnings: number })?.totalEarnings || 0;

    // Get active hosts (users with role 'host' who have approved listings)
    const activeHosts = await User.count({
      where: { 
        role: 'host',
        '$listings.status$': 'approved'
      },
      include: [{
        model: Listing,
        as: 'listings',
        required: true
      }]
    });

    // Get completed bookings
    const completedBookings = await Booking.count({
      where: { status: 'completed' }
    });

    // Get average rating from reviews
    const averageRatingResult = await Review.findOne({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('rating')), 'averageRating']
      ],
      raw: true
    });
    const averageRating = (averageRatingResult as unknown as { averageRating: number })?.averageRating || 0;

    const stats = {
      totalVehicles: totalVehicles || 0,
      totalRenters: totalRenters || 0,
      totalEarnings: Math.round(totalEarnings || 0),
      activeHosts: activeHosts || 0,
      completedBookings: completedBookings || 0,
      averageRating: averageRating ? Math.round(averageRating * 10) / 10 : 0 // Round to 1 decimal place
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching platform stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get detailed admin statistics (admin only)
router.get('/admin', authenticateToken, async (req: AuthRequest, res) => {
  if (req.user!.role !== 'admin') {
    return res.status(403).json({ error: 'Only admins can access detailed statistics' });
  }

  try {
    // Get stats for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Recent bookings
    const recentBookings = await Booking.count({
      where: {
        createdAt: {
          [Op.gte]: thirtyDaysAgo
        }
      }
    });

    // Recent revenue
    const recentRevenueResult = await Booking.findOne({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('totalPrice')), 'recentRevenue']
      ],
      where: {
        status: 'completed',
        createdAt: {
          [Op.gte]: thirtyDaysAgo
        }
      },
      raw: true
    });
    const recentRevenue = (recentRevenueResult as any)?.recentRevenue || 0;

    // Pending listings
    const pendingListings = await Listing.count({
      where: { status: 'pending' }
    });

    // Active users (logged in within last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const activeUsers = await User.count({
      where: {
        updatedAt: {
          [Op.gte]: sevenDaysAgo
        }
      }
    });

    const adminStats = {
      recentBookings,
      recentRevenue: Math.round(recentRevenue),
      pendingListings,
      activeUsers,
      // Include basic stats as well
      ...(await getBasicStats())
    };

    res.json(adminStats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Helper function to get basic stats
async function getBasicStats() {
  const totalVehicles = await Listing.count({
    where: { status: 'approved' }
  });

  const totalRenters = await User.count({
    where: { role: 'renter' }
  });

  const totalEarningsResult = await Booking.findOne({
    attributes: [
      [sequelize.fn('SUM', sequelize.col('totalPrice')), 'totalEarnings']
    ],
    where: { status: 'completed' },
    raw: true
  });
  const totalEarnings = (totalEarningsResult as unknown as { totalEarnings: number })?.totalEarnings || 0;

  const activeHosts = await User.count({
    where: { 
      role: 'host',
      '$listings.status$': 'approved'
    },
    include: [{
      model: Listing,
      as: 'listings',
      required: true
    }]
  });

  const completedBookings = await Booking.count({
    where: { status: 'completed' }
  });

  const averageRatingResult = await Review.findOne({
    attributes: [
      [sequelize.fn('AVG', sequelize.col('rating')), 'averageRating']
    ],
    raw: true
  });
  const averageRating = (averageRatingResult as unknown as { averageRating: number })?.averageRating || 0;

  return {
    totalVehicles: totalVehicles || 0,
    totalRenters: totalRenters || 0,
    totalEarnings: Math.round(totalEarnings || 0),
    activeHosts: activeHosts || 0,
    completedBookings: completedBookings || 0,
    averageRating: averageRating ? Math.round(averageRating * 10) / 10 : 0
  };
}

export default router;
