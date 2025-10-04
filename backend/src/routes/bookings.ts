import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';
import { Booking } from '../models/Booking';
import { Vehicle } from '../models/Vehicle';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { Op } from 'sequelize';

const router = express.Router();

// Validation schemas
const createBookingSchema = z.object({
  listing_id: z.number(),
  start_date: z.string().transform(str => new Date(str)),
  end_date: z.string().transform(str => new Date(str)),
  totalPrice: z.number().positive(),
  specialRequests: z.string().optional(),
  addOns: z.array(z.object({
    name: z.string(),
    price: z.number().positive()
  })).optional()
});

const updateBookingSchema = z.object({
  start_date: z.string().transform(str => new Date(str)).optional(),
  end_date: z.string().transform(str => new Date(str)).optional(),
  specialRequests: z.string().optional(),
  addOns: z.array(z.object({
    name: z.string(),
    price: z.number().positive()
  })).optional()
});

const bookingActionSchema = z.object({
  action: z.enum(['accept', 'reject', 'cancel']),
  reason: z.string().optional()
});

// Create booking (renter)
router.post('/', authenticateToken, requireRole(['renter', 'admin']), async (req: AuthRequest, res) => {
  try {
    const bookingData = createBookingSchema.parse(req.body);
    
    // Verify vehicle exists and is available
    const vehicle = await Listing.findByPk(bookingData.listing_id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    if (vehicle.status !== 'approved') {
      return res.status(400).json({ error: 'Vehicle is not available for booking' });
    }

    // Check for date conflicts
    const existingBooking = await Booking.findOne({
      where: {
        listing_id: bookingData.listing_id,
        status: { [Op.in]: ['pending', 'confirmed'] },
        [Op.or]: [
          {
            start_date: { [Op.between]: [bookingData.start_date, bookingData.end_date] }
          },
          {
            end_date: { [Op.between]: [bookingData.start_date, bookingData.end_date] }
          },
          {
            [Op.and]: [
              { start_date: { [Op.lte]: bookingData.start_date } },
              { end_date: { [Op.gte]: bookingData.end_date } }
            ]
          }
        ]
      }
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'Vehicle is not available for the selected dates' });
    }

    // Calculate total price with add-ons
    let totalPrice = bookingData.totalPrice;
    if (bookingData.addOns) {
      const addOnTotal = bookingData.addOns.reduce((sum, addOn) => sum + addOn.price, 0);
      totalPrice += addOnTotal;
    }

    // Create booking
    const booking = await Booking.create({
      listing_id: bookingData.listing_id.toString(),
      renter_id: req.user!.id,
      start_date: bookingData.start_date,
      end_date: bookingData.end_date,
      total_amount: totalPrice,
      status: 'pending',
      special_requests: bookingData.specialRequests,
      add_ons: bookingData.addOns || [],
      total_days: Math.ceil((new Date(bookingData.end_date).getTime() - new Date(bookingData.start_date).getTime()) / (1000 * 60 * 60 * 24)),
      price_per_day: 0, // Will be calculated from listing
      subtotal: totalPrice,
      service_fee: 0,
      insurance_fee: 0,
      // tax_amount: 0, // Field doesn't exist in model
      payment_status: 'pending'
    });

    // Include vehicle and renter details in response
    const bookingWithDetails = await Booking.findByPk(booking.id, {
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model', 'pricePerDay', 'location']
        },
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
        }
      ]
    });

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: bookingWithDetails
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's bookings
router.get('/my-bookings', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = { renter_id: req.user!.id };
    if (status) {
      whereClause.status = status;
    }

    const bookings = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model', 'pricePerDay', 'location', 'images']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      bookings: bookings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: bookings.count,
        pages: Math.ceil(bookings.count / Number(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get host's booking requests
router.get('/host-requests', authenticateToken, requireRole(['host', 'admin']), async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    // Get host's vehicles
    const hostVehicles = await Listing.findAll({
      where: { host_id: req.user!.id },
      attributes: ['id']
    });
    const listing_ids = hostVehicles.map(v => v.id);

    const whereClause: any = { listing_id: { [Op.in]: listing_ids } };
    if (status) {
      whereClause.status = status;
    }

    const bookings = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model']
        },
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      bookings: bookings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: bookings.count,
        pages: Math.ceil(bookings.count / Number(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update booking (renter)
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = updateBookingSchema.parse(req.body);

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user owns the booking
    if (booking.renter_id !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Check if booking can be modified
    if (booking.status === 'completed' || booking.status === 'cancelled') {
      return res.status(400).json({ error: 'Cannot modify completed or cancelled booking' });
    }

    // If dates are being changed, check for conflicts
    if (updateData.start_date || updateData.end_date) {
      const start_date = updateData.start_date || booking.start_date;
      const end_date = updateData.end_date || booking.end_date;

      const existingBooking = await Booking.findOne({
        where: {
          listing_id: booking.listing_id,
          id: { [Op.ne]: booking.id },
          status: { [Op.in]: ['pending', 'confirmed'] },
          [Op.or]: [
            {
              start_date: { [Op.between]: [start_date, end_date] }
            },
            {
              end_date: { [Op.between]: [start_date, end_date] }
            },
            {
              [Op.and]: [
                { start_date: { [Op.lte]: start_date } },
                { end_date: { [Op.gte]: end_date } }
              ]
            }
          ]
        }
      });

      if (existingBooking) {
        return res.status(400).json({ error: 'Vehicle is not available for the selected dates' });
      }
    }

    await booking.update(updateData);

    const updatedBooking = await Booking.findByPk(booking.id, {
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model', 'pricePerDay', 'location']
        },
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email']
        }
      ]
    });

    res.json({
      success: true,
      message: 'Booking updated successfully',
      booking: updatedBooking
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle booking action (host/admin)
router.patch('/:id/action', authenticateToken, requireRole(['host', 'admin']), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { action, reason } = bookingActionSchema.parse(req.body);

    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Vehicle,
          as: 'vehicle',
          attributes: ['host_id']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user is the host or admin
    if ((booking as any).vehicle.host_id !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    let newStatus: string;
    switch (action) {
      case 'accept':
        newStatus = 'confirmed';
        break;
      case 'reject':
        newStatus = 'cancelled';
        break;
      case 'cancel':
        newStatus = 'cancelled';
        break;
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }

    await booking.update({
      status: newStatus as 'pending' | 'confirmed' | 'cancelled' | 'completed',
      ...(reason && { cancellation_reason: reason })
    });

    const updatedBooking = await Booking.findByPk(booking.id, {
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model']
        },
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email']
        }
      ]
    });

    res.json({
      success: true,
      message: `Booking ${action}ed successfully`,
      booking: updatedBooking
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Cancel booking (renter)
router.patch('/:id/cancel', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.renter_id !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    if (booking.status === 'completed' || booking.status === 'cancelled') {
      return res.status(400).json({ error: 'Cannot cancel completed or already cancelled booking' });
    }

    await booking.update({
      status: 'cancelled',
      cancellation_reason: reason
    });

    res.json({
      success: true,
      message: 'Booking cancelled successfully',
      booking
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get booking by ID
router.get('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['id', 'title', 'make', 'model', 'pricePerDay', 'location', 'images']
        },
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user has access to this booking
    const hasAccess = booking.renter_id === req.user!.id || 
                     req.user!.role === 'admin' ||
                     (req.user!.role === 'host' && (booking as any).vehicle.host_id === req.user!.id);

    if (!hasAccess) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bookings (admin)
router.get('/', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 10, status, renter_id, host_id } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (renter_id) whereClause.renter_id = renter_id;

    const includeClause: any[] = [
      {
        model: Listing,
        as: 'vehicle',
        attributes: ['id', 'title', 'make', 'model', 'host_id']
      },
      {
        model: User,
        as: 'renter',
        attributes: ['id', 'firstName', 'lastName', 'email']
      }
    ];

    if (host_id) {
      includeClause[0].where = { host_id };
    }

    const bookings = await Booking.findAndCountAll({
      where: whereClause,
      include: includeClause,
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      bookings: bookings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: bookings.count,
        pages: Math.ceil(bookings.count / Number(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;