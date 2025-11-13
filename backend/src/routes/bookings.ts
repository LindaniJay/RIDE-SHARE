import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { Booking, Listing, User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/bookings/user/:uid - Get renter's bookings
router.get('/user/:uid', authenticateToken, async (req, res) => {
  try {
    const { uid } = req.params;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const bookings = await Booking.findAll({
      where: { renterId: user.id }, // Use renterId (UUID) instead of renter_id
      include: [{
        model: Listing,
        as: 'listing',
        include: [{
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number']
        }]
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: bookings,
      count: bookings.length
    });
  } catch (error) {
    logger.error('Error fetching user bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch bookings'
    });
  }
});

// POST /api/bookings/create - Create a new booking
router.post('/create', authenticateToken, async (req, res) => {
  try {
    const { uid, listingId, startDate, endDate, totalPrice, paymentMethod, specialRequests } = req.body;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Check if listing exists and is approved
    const listing = await Listing.findByPk(listingId);
    if (!listing) {
      return res.status(404).json({
        success: false,
        error: 'Listing not found'
      });
    }

    if (listing.status !== 'approved') {
      return res.status(400).json({
        success: false,
        error: 'Listing is not available for booking'
      });
    }

    // Check for date conflicts
    const { Op } = require('sequelize');
    const start = new Date(startDate);
    const end = new Date(endDate);
    const existingBooking = await Booking.findOne({
      where: {
        listingId,
        status: { [Op.in]: ['pending', 'confirmed', 'active'] },
        [Op.or]: [
          {
            startDate: { [Op.between]: [start, end] }
          },
          {
            endDate: { [Op.between]: [start, end] }
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: start } },
              { endDate: { [Op.gte]: end } }
            ]
          }
        ]
      }
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not available for the selected dates'
      });
    }

    // Create booking
    const booking = await Booking.create({
      bookingId: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      renterId: user.id, // UUID, not Number
      hostId: listing.hostId, // UUID
      vehicleId: listing.id,
      listingId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalPrice,
      paymentMethod,
      specialRequests,
      status: 'pending',
      paymentStatus: 'pending'
    });

    // Emit notification to host
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${listing.hostId}`).emit('new-booking', {
        id: booking.id,
        renterName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        listingTitle: `${listing.make} ${listing.model}`,
        startDate,
        endDate,
        totalPrice,
        createdAt: booking.createdAt
      });
    }

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    logger.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create booking'
    });
  }
});

// DELETE /api/bookings/:id - Cancel a booking
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { uid } = req.body;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.renterId !== user.id) { // UUID comparison, not Number
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to cancel this booking'
      });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Only pending bookings can be cancelled'
      });
    }

    // Update booking status
    await booking.update({ 
      status: 'cancelled',
      paymentStatus: 'refunded'
    });

    res.json({
      success: true,
      message: 'Booking cancelled successfully'
    });
  } catch (error) {
    logger.error('Error cancelling booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to cancel booking'
    });
  }
});

// GET /api/bookings/:id - Get specific booking
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const booking = await Booking.findByPk(id, {
      include: [{
        model: Listing,
        as: 'listing',
        include: [{
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone']
        }]
      }, {
        model: User,
        as: 'renter',
        attributes: ['id', 'name', 'email', 'phone']
      }]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    logger.error('Error fetching booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch booking'
    });
  }
});

export default router;