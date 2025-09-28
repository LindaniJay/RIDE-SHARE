import express from 'express';
import { z } from 'zod';
import { Op } from 'sequelize';
import { Booking } from '../models/Booking';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { authenticateToken, AuthRequest } from '../middlewares/auth';

const router = express.Router();

// Validation schemas
const createBookingSchema = z.object({
  listingId: z.number().int().positive(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  totalPrice: z.number().int().positive(),
});

const updateBookingSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'cancelled', 'completed']).optional(),
});

// Get user's bookings
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const whereClause: any = { renterId: req.user!.id };
    if (status) {
      whereClause.status = status;
    }
    
    const bookings = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Listing,
          as: 'listing',
          include: [
            {
              model: User,
              as: 'host',
              attributes: ['id', 'name', 'email', 'phoneNumber'],
            },
          ],
        },
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      bookings: bookings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: bookings.count,
        pages: Math.ceil(bookings.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get booking by ID
router.get('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const booking = await Booking.findOne({
      where: { 
        id: req.params.id,
        renterId: req.user!.id 
      },
      include: [
        {
          model: Listing,
          as: 'listing',
          include: [
            {
              model: User,
              as: 'host',
              attributes: ['id', 'name', 'email', 'phoneNumber'],
            },
          ],
        },
      ],
    });
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create booking
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const bookingData = createBookingSchema.parse(req.body);
    
    // Check if listing exists and is approved
    const listing = await Listing.findByPk(bookingData.listingId);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    if (listing.status !== 'approved') {
      return res.status(400).json({ error: 'Listing is not approved for booking' });
    }
    
    // Check for date conflicts
    const startDate = new Date(bookingData.startDate);
    const endDate = new Date(bookingData.endDate);
    
    if (startDate >= endDate) {
      return res.status(400).json({ error: 'End date must be after start date' });
    }
    
    const conflictingBooking = await Booking.findOne({
      where: {
        listingId: bookingData.listingId,
        status: ['confirmed', 'pending'],
        [Op.or]: [
          {
            startDate: { [Op.between]: [startDate, endDate] },
          },
          {
            endDate: { [Op.between]: [startDate, endDate] },
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: startDate } },
              { endDate: { [Op.gte]: endDate } },
            ],
          },
        ],
      },
    });
    
    if (conflictingBooking) {
      return res.status(400).json({ error: 'Listing is not available for the selected dates' });
    }
    
    const booking = await Booking.create({
      ...bookingData,
      renterId: req.user!.id,
      status: 'pending',
      startDate: new Date(bookingData.startDate),
      endDate: new Date(bookingData.endDate),
    });
    
    res.status(201).json(booking);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update booking
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    // Check if user owns the booking or is the listing host
    const listing = await Listing.findByPk(booking.listingId);
    if (booking.renterId !== req.user!.id && listing?.hostId !== req.user!.id) {
      return res.status(403).json({ error: 'You can only update your own bookings' });
    }
    
    const updateData = updateBookingSchema.parse(req.body);
    
    await booking.update(updateData);
    
    res.json(booking);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Cancel booking
router.post('/:id/cancel', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    if (booking.renterId !== req.user!.id) {
      return res.status(403).json({ error: 'You can only cancel your own bookings' });
    }
    
    if (booking.status === 'cancelled') {
      return res.status(400).json({ error: 'Booking is already cancelled' });
    }
    
    if (booking.status === 'completed') {
      return res.status(400).json({ error: 'Cannot cancel completed booking' });
    }
    
    await booking.update({ status: 'cancelled' });
    
    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
