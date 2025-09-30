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
  vehicleId: z.number(),
  startDate: z.string().transform(str => new Date(str)),
  endDate: z.string().transform(str => new Date(str)),
  totalPrice: z.number().positive(),
  specialRequests: z.string().optional(),
  addOns: z.array(z.object({
    name: z.string(),
    price: z.number().positive()
  })).optional()
});

const updateBookingSchema = z.object({
  startDate: z.string().transform(str => new Date(str)).optional(),
  endDate: z.string().transform(str => new Date(str)).optional(),
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
    const vehicle = await Listing.findByPk(bookingData.vehicleId);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    if (vehicle.status !== 'approved') {
      return res.status(400).json({ error: 'Vehicle is not available for booking' });
    }

    // Check for date conflicts
    const existingBooking = await Booking.findOne({
      where: {
        vehicleId: bookingData.vehicleId,
        status: { [Op.in]: ['pending', 'confirmed'] },
        [Op.or]: [
          {
            startDate: { [Op.between]: [bookingData.startDate, bookingData.endDate] }
          },
          {
            endDate: { [Op.between]: [bookingData.startDate, bookingData.endDate] }
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: bookingData.startDate } },
              { endDate: { [Op.gte]: bookingData.endDate } }
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
      vehicleId: bookingData.vehicleId,
      renterId: req.user!.id,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      totalPrice,
      status: 'pending',
      specialRequests: bookingData.specialRequests,
      addOns: bookingData.addOns || []
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

    const whereClause: any = { renterId: req.user!.id };
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
      where: { hostId: req.user!.id },
      attributes: ['id']
    });
    const vehicleIds = hostVehicles.map(v => v.id);

    const whereClause: any = { vehicleId: { [Op.in]: vehicleIds } };
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
    if (booking.renterId !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Check if booking can be modified
    if (booking.status === 'completed' || booking.status === 'cancelled') {
      return res.status(400).json({ error: 'Cannot modify completed or cancelled booking' });
    }

    // If dates are being changed, check for conflicts
    if (updateData.startDate || updateData.endDate) {
      const startDate = updateData.startDate || booking.startDate;
      const endDate = updateData.endDate || booking.endDate;

      const existingBooking = await Booking.findOne({
        where: {
          vehicleId: booking.vehicleId,
          id: { [Op.ne]: booking.id },
          status: { [Op.in]: ['pending', 'confirmed'] },
          [Op.or]: [
            {
              startDate: { [Op.between]: [startDate, endDate] }
            },
            {
              endDate: { [Op.between]: [startDate, endDate] }
            },
            {
              [Op.and]: [
                { startDate: { [Op.lte]: startDate } },
                { endDate: { [Op.gte]: endDate } }
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
          attributes: ['hostId']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user is the host or admin
    if ((booking as any).vehicle.hostId !== req.user!.id && req.user!.role !== 'admin') {
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
      ...(reason && { cancellationReason: reason })
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

    if (booking.renterId !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    if (booking.status === 'completed' || booking.status === 'cancelled') {
      return res.status(400).json({ error: 'Cannot cancel completed or already cancelled booking' });
    }

    await booking.update({
      status: 'cancelled',
      cancellationReason: reason,
      cancelledAt: new Date()
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
    const hasAccess = booking.renterId === req.user!.id || 
                     req.user!.role === 'admin' ||
                     (req.user!.role === 'host' && (booking as any).vehicle.hostId === req.user!.id);

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
    const { page = 1, limit = 10, status, renterId, hostId } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (renterId) whereClause.renterId = renterId;

    const includeClause: any[] = [
      {
        model: Listing,
        as: 'vehicle',
        attributes: ['id', 'title', 'make', 'model', 'hostId']
      },
      {
        model: User,
        as: 'renter',
        attributes: ['id', 'firstName', 'lastName', 'email']
      }
    ];

    if (hostId) {
      includeClause[0].where = { hostId };
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