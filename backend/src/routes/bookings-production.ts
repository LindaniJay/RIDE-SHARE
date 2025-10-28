import express from 'express';
import { z } from 'zod';
import { Booking, Listing, User, Payment, Review } from '../models';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';

const router = express.Router();

// Validation schemas
const createBookingSchema = z.object({
  listingId: z.string().uuid(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  pickup_location: z.object({
    address: z.string(),
    city: z.string(),
    province: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }).optional(),
  return_location: z.object({
    address: z.string(),
    city: z.string(),
    province: z.string(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }).optional(),
  pickup_time: z.string().datetime().optional(),
  return_time: z.string().datetime().optional(),
  special_requests: z.string().optional(),
  add_ons: z.array(z.object({
    name: z.string(),
    price: z.number(),
    description: z.string().optional()
  })).optional()
});

const updateBookingSchema = z.object({
  status: z.enum(['pending', 'approved', 'active', 'completed', 'cancelled']).optional(),
  payment_status: z.enum(['pending', 'paid', 'failed', 'refunded', 'partially_refunded']).optional(),
  host_notes: z.string().optional(),
  renter_notes: z.string().optional(),
  admin_notes: z.string().optional(),
  cancellation_reason: z.string().optional(),
  cancellation_fee: z.number().min(0).optional(),
  dispute_reason: z.string().optional(),
  dispute_resolution: z.string().optional()
});

// Create booking
router.post('/', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { listingId, startDate: startDateStr, endDate: endDateStr, pickup_location, return_location, pickup_time, return_time, special_requests, add_ons } = createBookingSchema.parse(req.body);

    // Validate dates
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (startDate < today) {
      return res.status(400).json({
        error: 'Invalid start date',
        message: 'Start date cannot be in the past'
      });
    }

    if (endDate <= startDate) {
      return res.status(400).json({
        error: 'Invalid end date',
        message: 'End date must be after start date'
      });
    }

    // Get listing details
    const listing = await Listing.findByPk(listingId, {
      include: [{ model: User, as: 'host' }]
    });

    if (!listing) {
      return res.status(404).json({
        error: 'Listing not found',
        message: 'The requested vehicle listing was not found'
      });
    }

    if (listing.status !== 'approved' || listing.approval_status !== 'approved') {
      return res.status(400).json({
        error: 'Listing not available',
        message: 'This vehicle is not available for booking'
      });
    }

    // Check for date conflicts
    const existingBookings = await Booking.findAll({
      where: {
        listingId,
        status: ['confirmed', 'approved', 'completed']
      }
    });

    const hasConflict = existingBookings.some(booking => {
      const bookingStart = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);
      return (startDate < bookingEnd && endDate > bookingStart);
    });

    if (hasConflict) {
      return res.status(409).json({
        error: 'Date conflict',
        message: 'The selected dates are not available for this vehicle'
      });
    }

    // Calculate pricing
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const subtotal = totalDays * (listing.price_per_day || 0);
    const serviceFee = Math.round(subtotal * 0.1); // 10% service fee
    const insuranceFee = Math.round(subtotal * 0.05); // 5% insurance fee
    const addOnsTotal = add_ons ? add_ons.reduce((sum, addon) => sum + addon.price, 0) : 0;
    const totalAmount = subtotal + serviceFee + insuranceFee + addOnsTotal;

    // Create booking
    const booking = await Booking.create({
      booking_id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      renterId: Number(req.user!.id) || 0,
      hostId: listing.host_id || 0,
      vehicleId: parseInt(listingId),
      listingId: parseInt(listingId),
      startDate: startDate,
      endDate: endDate,
      totalPrice: totalAmount,
      status: 'pending',
      paymentStatus: 'pending',
      pickup_location: pickup_location ? JSON.stringify(pickup_location) : undefined,
      return_location: return_location ? JSON.stringify(return_location) : undefined,
      pickup_time: pickup_time ? new Date(pickup_time) : undefined,
      return_time: return_time ? new Date(return_time) : undefined,
      specialRequests: special_requests
    });

    // Fetch the created booking with relations
    const createdBooking = await Booking.findByPk(booking.id, {
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number'] },
        { 
          model: Listing, 
          as: 'listing',
          include: [{ model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number'] }]
        }
      ]
    });

    res.status(201).json({
      message: 'Booking created successfully',
      booking: createdBooking
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Booking creation error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create booking'
    });
  }
});

// Get user's bookings
router.get('/my-bookings', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const whereClause: any = { renter_id: req.user!.id };
    if (status) {
      whereClause.status = status;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { 
          model: Listing, 
          as: 'listing',
          include: [{ model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }]
        },
        { model: Payment, as: 'payments' }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      bookings,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });

  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch bookings'
    });
  }
});

// Get host's bookings
router.get('/host-bookings', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    // Verify user is a host
    const user = await User.findByPk(req.user!.id);
    if (!user || user.role !== 'host') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'Only hosts can access this endpoint'
      });
    }

    const { status, page = 1, limit = 10 } = req.query;
    
    const whereClause: any = {};
    if (status) {
      whereClause.status = status;
    }

    const offset = (Number(page) - 1) * Number(limit);

    // Get bookings for host's listings
    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number'] },
        { 
          model: Listing, 
          as: 'listing',
          where: { host_id: req.user!.id },
          include: [{ model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }]
        },
        { model: Payment, as: 'payments' }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      bookings,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });

  } catch (error) {
    console.error('Get host bookings error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch host bookings'
    });
  }
});

// Get single booking
router.get('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id, {
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number'] },
        { 
          model: Listing, 
          as: 'listing',
          include: [{ model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number'] }]
        },
        { model: Payment, as: 'payments' },
        { model: Review, as: 'reviews' }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        error: 'Booking not found',
        message: 'The requested booking was not found'
      });
    }

    // Check if user has access to this booking
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const hasAccess = 
      booking.renterId === Number(user.id) || 
      (user.role === 'host' && (booking as any).listing?.host_id === user.id) ||
      user.role === 'admin';

    if (!hasAccess) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to view this booking'
      });
    }

    res.json({ booking });

  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch booking'
    });
  }
});

// Update booking
router.put('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = updateBookingSchema.parse(req.body);

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({
        error: 'Booking not found',
        message: 'The requested booking was not found'
      });
    }

    // Check permissions
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const listing = await Listing.findByPk(booking.listingId);
    if (!listing) {
      return res.status(404).json({
        error: 'Listing not found',
        message: 'Associated listing not found'
      });
    }

    const canUpdate = 
      booking.renterId === Number(user.id) || 
      (user.role === 'host' && listing.host_id === Number(user.id)) ||
      user.role === 'admin';

    if (!canUpdate) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to update this booking'
      });
    }

    // Update booking
    await booking.update(updateData);

    // Fetch updated booking with relations
    const updatedBooking = await Booking.findByPk(id, {
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { 
          model: Listing, 
          as: 'listing',
          include: [{ model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }]
        },
        { model: Payment, as: 'payments' }
      ]
    });

    res.json({
      message: 'Booking updated successfully',
      booking: updatedBooking
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Update booking error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update booking'
    });
  }
});

// Cancel booking
router.post('/:id/cancel', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({
        error: 'Booking not found',
        message: 'The requested booking was not found'
      });
    }

    // Check if booking can be cancelled
    if (booking.status === 'cancelled') {
      return res.status(400).json({
        error: 'Booking already cancelled',
        message: 'This booking has already been cancelled'
      });
    }

    if (booking.status === 'completed') {
      return res.status(400).json({
        error: 'Cannot cancel completed booking',
        message: 'Completed bookings cannot be cancelled'
      });
    }

    // Check permissions
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const canCancel = 
      booking.renterId === Number(user.id) || 
      user.role === 'admin';

    if (!canCancel) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to cancel this booking'
      });
    }

    // Calculate cancellation fee based on how close to start date
    const startDate = new Date(booking.startDate);
    const now = new Date();
    const daysUntilStart = Math.ceil((startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    let cancellationFee = 0;
    if (daysUntilStart < 1) {
      cancellationFee = (booking.totalPrice || 0) * 0.5; // 50% fee for same-day cancellation
    } else if (daysUntilStart < 3) {
      cancellationFee = (booking.totalPrice || 0) * 0.25; // 25% fee for cancellation within 3 days
    } else if (daysUntilStart < 7) {
      cancellationFee = (booking.totalPrice || 0) * 0.1; // 10% fee for cancellation within a week
    }

    // Update booking
    await booking.update({
      status: 'cancelled',
      cancellation_reason: reason,
      cancellation_fee: cancellationFee
    });

    res.json({
      message: 'Booking cancelled successfully',
      cancellation_fee: cancellationFee
    });

  } catch (error) {
    console.error('Cancel booking error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to cancel booking'
    });
  }
});

export default router;

