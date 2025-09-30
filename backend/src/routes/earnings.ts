import express from 'express';
import { authenticateToken, requireHost } from '../middlewares/auth';
import { Booking, Vehicle } from '../models';

const router = express.Router();

// Get host earnings overview
router.get('/', authenticateToken, requireHost, async (req, res) => {
  try {
    const hostId = req.user!.id;
    
    // Get all bookings for host's vehicles
    const bookings = await Booking.findAll({
      include: [{
        model: Vehicle,
        where: { hostId },
        attributes: ['id', 'title', 'pricePerDay']
      }],
      where: {
        status: ['confirmed', 'completed']
      }
    });

    // Calculate earnings
    const totalEarnings = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
    
    // Monthly earnings (current month)
    const currentMonth = new Date();
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const monthlyBookings = bookings.filter(booking => 
      new Date(booking.createdAt) >= startOfMonth
    );
    const monthlyEarnings = monthlyBookings.reduce((sum, booking) => sum + booking.totalPrice, 0);

    // Pending payouts (completed bookings not yet paid out)
    const pendingPayouts = bookings
      .filter(booking => booking.status === 'completed')
      .reduce((sum, booking) => sum + booking.totalPrice, 0);

    const completedBookings = bookings.filter(booking => booking.status === 'completed').length;

    res.json({
      success: true,
      data: {
        totalEarnings,
        monthlyEarnings,
        pendingPayouts,
        completedBookings,
        bookings: bookings.map(booking => ({
          id: booking.id,
          vehicleTitle: (booking as any).Vehicle?.title,
          totalPrice: booking.totalPrice,
          status: booking.status,
          startDate: booking.startDate,
          endDate: booking.endDate,
          createdAt: booking.createdAt
        }))
      }
    });
  } catch (error) {
    console.error('Error fetching earnings:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch earnings data' 
    });
  }
});

// Get earnings by vehicle
router.get('/by-vehicle', authenticateToken, requireHost, async (req, res) => {
  try {
    const hostId = req.user!.id;
    
    const vehicles = await Vehicle.findAll({
      where: { hostId },
      include: [{
        model: Booking,
        where: {
          status: ['confirmed', 'completed']
        },
        required: false
      }]
    });

    const vehicleEarnings = vehicles.map(vehicle => {
      const totalEarnings = (vehicle as any).bookings?.reduce((sum: number, booking: any) => sum + booking.totalPrice, 0) || 0;
      const bookingCount = (vehicle as any).bookings?.length || 0;
      
      return {
        vehicleId: vehicle.id,
        title: (vehicle as any).title,
        totalEarnings,
        bookingCount,
        averageEarnings: bookingCount > 0 ? totalEarnings / bookingCount : 0
      };
    });

    res.json({
      success: true,
      data: vehicleEarnings
    });
  } catch (error) {
    console.error('Error fetching vehicle earnings:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch vehicle earnings' 
    });
  }
});

// Get monthly earnings breakdown
router.get('/monthly', authenticateToken, requireHost, async (req, res) => {
  try {
    const hostId = req.user!.id;
    const { year = new Date().getFullYear() } = req.query;
    
    const startOfYear = new Date(Number(year), 0, 1);
    const endOfYear = new Date(Number(year), 11, 31);
    
    const bookings = await Booking.findAll({
      include: [{
        model: Vehicle,
        where: { hostId }
      }],
      where: {
        status: ['confirmed', 'completed'],
        createdAt: {
          [require('sequelize').Op.between]: [startOfYear, endOfYear]
        }
      }
    });

    // Group by month
    const monthlyData = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      monthName: new Date(Number(year), i).toLocaleString('default', { month: 'long' }),
      earnings: 0,
      bookings: 0
    }));

    bookings.forEach(booking => {
      const month = new Date(booking.createdAt).getMonth();
      monthlyData[month].earnings += booking.totalPrice;
      monthlyData[month].bookings += 1;
    });

    res.json({
      success: true,
      data: monthlyData
    });
  } catch (error) {
    console.error('Error fetching monthly earnings:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch monthly earnings' 
    });
  }
});

export default router;
