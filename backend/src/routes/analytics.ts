import express from 'express';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import { Booking } from '../models/Booking';
import { Review } from '../models/Review';
import { Op } from 'sequelize';
import { sequelize } from '../config/database';

const router = express.Router();

// Get platform analytics (admin)
router.get('/platform', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { period = 'month' } = req.query;
    
    // Calculate date range
    const now = new Date();
    let startDate: Date;
    
    switch (period) {
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'year':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    // Get comprehensive analytics
    const [
      totalUsers,
      totalVehicles,
      totalBookings,
      totalRevenue,
      userGrowth,
      vehicleGrowth,
      bookingGrowth,
      revenueGrowth,
      topVehicles,
      userActivity,
      bookingStatusDistribution,
      revenueByMonth,
      userRetention,
      averageBookingValue,
      conversionRates
    ] = await Promise.all([
      // Total counts
      User.count(),
      Listing.count(),
      Booking.count(),
      Booking.sum('totalPrice', { where: { status: 'completed' } }) || 0,
      
      // Growth metrics
      User.count({ where: { createdAt: { [Op.gte]: startDate } } }),
      Listing.count({ where: { createdAt: { [Op.gte]: startDate } } }),
      Booking.count({ where: { createdAt: { [Op.gte]: startDate } } }),
      Booking.sum('totalPrice', { 
        where: { 
          status: 'completed',
          createdAt: { [Op.gte]: startDate }
        } 
      }) || 0,
      
      // Top performing vehicles
      Booking.findAll({
        attributes: [
          'vehicleId',
          [sequelize.fn('COUNT', sequelize.col('Booking.id')), 'bookingCount'],
          [sequelize.fn('SUM', sequelize.col('Booking.totalPrice')), 'totalRevenue']
        ],
        include: [
          {
            model: Listing,
            as: 'vehicle',
            attributes: ['title', 'make', 'model']
          }
        ],
        where: { status: 'completed' },
        group: ['vehicleId', 'vehicle.id'],
        order: [[sequelize.literal('bookingCount'), 'DESC']],
        limit: 10
      }),
      
      // User activity
      User.findAll({
        attributes: [
          [sequelize.fn('DATE', sequelize.col('createdAt')), 'date'],
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        where: { createdAt: { [Op.gte]: startDate } },
        group: [sequelize.fn('DATE', sequelize.col('createdAt'))],
        order: [[sequelize.fn('DATE', sequelize.col('createdAt')), 'ASC']]
      }),
      
      // Booking status distribution
      Booking.findAll({
        attributes: [
          'status',
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        group: ['status']
      }),
      
      // Revenue by month
      Booking.findAll({
        attributes: [
          [sequelize.fn('DATE_TRUNC', 'month', sequelize.col('createdAt')), 'month'],
          [sequelize.fn('SUM', sequelize.col('totalPrice')), 'revenue']
        ],
        where: { 
          status: 'completed',
          createdAt: { [Op.gte]: new Date(now.getFullYear(), 0, 1) }
        },
        group: [sequelize.fn('DATE_TRUNC', 'month', sequelize.col('createdAt'))],
        order: [[sequelize.fn('DATE_TRUNC', 'month', sequelize.col('createdAt')), 'ASC']]
      }),
      
      // User retention (simplified)
      User.count({ 
        where: { 
          createdAt: { [Op.lte]: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000) },
          updatedAt: { [Op.gte]: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000) }
        }
      }),
      
      // Average booking value
      Booking.findOne({
        attributes: [
          [sequelize.fn('AVG', sequelize.col('totalPrice')), 'averageValue']
        ],
        where: { status: 'completed' }
      }),
      
      // Conversion rates
      Promise.all([
        User.count({ where: { role: 'renter' } }),
        Booking.count({ where: { status: 'completed' } }),
        User.count({ where: { role: 'host' } }),
        Listing.count({ where: { status: 'approved' } })
      ])
    ]);

    const [renterCount, completedBookings, hostCount, approvedListings] = conversionRates;

    res.json({
      success: true,
      analytics: {
        overview: {
          totalUsers,
          totalVehicles,
          totalBookings,
          totalRevenue: parseFloat(totalRevenue.toString())
        },
        growth: {
          users: userGrowth,
          vehicles: vehicleGrowth,
          bookings: bookingGrowth,
          revenue: parseFloat(revenueGrowth.toString())
        },
        topVehicles,
        userActivity,
        bookingStatusDistribution,
        revenueByMonth,
        userRetention,
        averageBookingValue: parseFloat((averageBookingValue as any)?.averageValue?.toString() || '0'),
        conversionRates: {
          renterToBooking: totalBookings > 0 ? (completedBookings / renterCount) * 100 : 0,
          hostToListing: approvedListings > 0 ? (approvedListings / hostCount) * 100 : 0
        }
      }
    });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get host analytics
router.get('/host', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'host' && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Host access required' });
    }

    const hostId = req.user!.role === 'admin' ? parseInt(req.query.hostId as string) : req.user!.id;
    const { period = 'month' } = req.query;
    
    // Calculate date range
    const now = new Date();
    let startDate: Date;
    
    switch (period) {
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'year':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    // Get host's vehicles
    const hostVehicles = await Listing.findAll({
      where: { hostId },
      attributes: ['id']
    });
    const vehicleIds = hostVehicles.map(v => v.id);

    // Get host analytics
    const [
      totalEarnings,
      periodEarnings,
      totalBookings,
      periodBookings,
      averageRating,
      occupancyRate,
      revenueByVehicle,
      bookingTrends,
      topPerformingVehicles
    ] = await Promise.all([
      // Total earnings
      Booking.sum('totalPrice', {
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          status: 'completed'
        }
      }) || 0,
      
      // Period earnings
      Booking.sum('totalPrice', {
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          status: 'completed',
          createdAt: { [Op.gte]: startDate }
        }
      }) || 0,
      
      // Total bookings
      Booking.count({
        where: {
          vehicleId: { [Op.in]: vehicleIds }
        }
      }),
      
      // Period bookings
      Booking.count({
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          createdAt: { [Op.gte]: startDate }
        }
      }),
      
      // Average rating
      Review.findOne({
        attributes: [
          [sequelize.fn('AVG', sequelize.col('rating')), 'averageRating']
        ],
        include: [
          {
            model: Listing,
            as: 'vehicle',
            where: { hostId },
            attributes: []
          }
        ]
      }),
      
      // Occupancy rate (simplified)
      Booking.findAll({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('id')), 'bookingCount'],
          [sequelize.fn('SUM', sequelize.fn('DATEDIFF', sequelize.col('endDate'), sequelize.col('startDate'))), 'totalDays']
        ],
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          status: 'completed',
          createdAt: { [Op.gte]: startDate }
        }
      }),
      
      // Revenue by vehicle
      Booking.findAll({
        attributes: [
          'vehicleId',
          [sequelize.fn('SUM', sequelize.col('totalPrice')), 'revenue'],
          [sequelize.fn('COUNT', sequelize.col('id')), 'bookingCount']
        ],
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          status: 'completed',
          createdAt: { [Op.gte]: startDate }
        },
        group: ['vehicleId'],
        include: [
          {
            model: Listing,
            as: 'vehicle',
            attributes: ['title', 'make', 'model']
          }
        ]
      }),
      
      // Booking trends
      Booking.findAll({
        attributes: [
          [sequelize.fn('DATE', sequelize.col('createdAt')), 'date'],
          [sequelize.fn('COUNT', sequelize.col('id')), 'count']
        ],
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          createdAt: { [Op.gte]: startDate }
        },
        group: [sequelize.fn('DATE', sequelize.col('createdAt'))],
        order: [[sequelize.fn('DATE', sequelize.col('createdAt')), 'ASC']]
      }),
      
      // Top performing vehicles
      Booking.findAll({
        attributes: [
          'vehicleId',
          [sequelize.fn('COUNT', sequelize.col('id')), 'bookingCount'],
          [sequelize.fn('SUM', sequelize.col('totalPrice')), 'revenue']
        ],
        where: {
          vehicleId: { [Op.in]: vehicleIds },
          status: 'completed'
        },
        group: ['vehicleId'],
        order: [[sequelize.literal('bookingCount'), 'DESC']],
        limit: 5,
        include: [
          {
            model: Listing,
            as: 'vehicle',
            attributes: ['title', 'make', 'model', 'pricePerDay']
          }
        ]
      })
    ]);

    // Calculate platform fee (10%)
    const platformFee = Math.round(parseFloat(periodEarnings.toString()) * 0.1);
    const netEarnings = parseFloat(periodEarnings.toString()) - platformFee;

    res.json({
      success: true,
      analytics: {
        overview: {
          totalEarnings: parseFloat(totalEarnings.toString()),
          periodEarnings: parseFloat(periodEarnings.toString()),
          netEarnings,
          platformFee,
          totalBookings,
          periodBookings,
          averageRating: parseFloat((averageRating as any)?.averageRating?.toString() || '0')
        },
        performance: {
          occupancyRate: occupancyRate.length > 0 ? 
            parseFloat((occupancyRate[0] as any)?.totalDays?.toString() || '0') / (30 * vehicleIds.length) * 100 : 0,
          revenueByVehicle,
          bookingTrends,
          topPerformingVehicles
        }
      }
    });
  } catch (error) {
    console.error('Host analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get renter analytics
router.get('/renter', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'renter' && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Renter access required' });
    }

    const renterId = req.user!.role === 'admin' ? parseInt(req.query.renterId as string) : req.user!.id;
    const { period = 'month' } = req.query;
    
    // Calculate date range
    const now = new Date();
    let startDate: Date;
    
    switch (period) {
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'year':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    // Get renter analytics
    const [
      totalSpent,
      periodSpent,
      totalBookings,
      periodBookings,
      averageBookingValue,
      favoriteVehicleTypes,
      bookingHistory,
      savings
    ] = await Promise.all([
      // Total spent
      Booking.sum('totalPrice', {
        where: {
          renterId,
          status: 'completed'
        }
      }) || 0,
      
      // Period spent
      Booking.sum('totalPrice', {
        where: {
          renterId,
          status: 'completed',
          createdAt: { [Op.gte]: startDate }
        }
      }) || 0,
      
      // Total bookings
      Booking.count({
        where: { renterId }
      }),
      
      // Period bookings
      Booking.count({
        where: {
          renterId,
          createdAt: { [Op.gte]: startDate }
        }
      }),
      
      // Average booking value
      Booking.findOne({
        attributes: [
          [sequelize.fn('AVG', sequelize.col('totalPrice')), 'averageValue']
        ],
        where: {
          renterId,
          status: 'completed'
        }
      }),
      
      // Favorite vehicle types
      Booking.findAll({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('Booking.id')), 'count']
        ],
        where: {
          renterId,
          status: 'completed'
        },
        include: [
          {
            model: Listing,
            as: 'vehicle',
            attributes: ['type']
          }
        ],
        group: ['vehicle.type'],
        order: [[sequelize.literal('count'), 'DESC']]
      }),
      
      // Booking history
      Booking.findAll({
        where: {
          renterId,
          createdAt: { [Op.gte]: startDate }
        },
        include: [
          {
            model: Listing,
            as: 'vehicle',
            attributes: ['title', 'make', 'model', 'type']
          }
        ],
        order: [['createdAt', 'DESC']],
        limit: 10
      }),
      
      // Calculate savings (simplified - compared to traditional rental)
      Booking.sum('totalPrice', {
        where: {
          renterId,
          status: 'completed',
          createdAt: { [Op.gte]: startDate }
        }
      }) || 0
    ]);

    // Calculate potential savings (30% less than traditional rental)
    const traditionalRentalCost = parseFloat(periodSpent.toString()) * 1.3;
    const actualSavings = traditionalRentalCost - parseFloat(periodSpent.toString());

    res.json({
      success: true,
      analytics: {
        overview: {
          totalSpent: parseFloat(totalSpent.toString()),
          periodSpent: parseFloat(periodSpent.toString()),
          totalBookings,
          periodBookings,
          averageBookingValue: parseFloat((averageBookingValue as any)?.averageValue?.toString() || '0'),
          savings: actualSavings
        },
        preferences: {
          favoriteVehicleTypes
        },
        history: {
          recentBookings: bookingHistory
        }
      }
    });
  } catch (error) {
    console.error('Renter analytics error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
