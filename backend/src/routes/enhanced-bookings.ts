import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { EnhancedVehicle, User, Booking, Notification } from '../models';
import { logger } from '../utils/logger';
import { Op } from 'sequelize';

const router = express.Router();

// Validation schemas
const createBookingSchema = z.object({
  vehicleId: z.number().int().positive(),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  pickupLocation: z.string().min(1),
  returnLocation: z.string().min(1),
  specialRequests: z.string().optional(),
  emergencyContactName: z.string().min(1),
  emergencyContactPhone: z.string().min(1)
});

const updateBookingSchema = z.object({
  status: z.enum(['confirmed', 'cancelled', 'completed']).optional(),
  adminNotes: z.string().optional(),
  cancellationReason: z.string().optional()
});

// POST /api/enhanced-bookings - Create new booking
router.post('/', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const validation = createBookingSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'Invalid booking data',
        details: validation.error.errors
      });
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const {
      vehicleId,
      startDate,
      endDate,
      pickupLocation,
      returnLocation,
      specialRequests,
      emergencyContactName,
      emergencyContactPhone
    } = validation.data;

    // Check if vehicle exists and is available
    const vehicle = await EnhancedVehicle.findByPk(vehicleId, {
      include: [{ model: User, as: 'host' }]
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle not found'
      });
    }

    if (vehicle.listingStatus !== 'approved') {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not available for booking'
      });
    }

    if (!vehicle.isAvailable) {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is currently not available'
      });
    }

    // Check for date conflicts
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    if (startDateObj >= endDateObj) {
      return res.status(400).json({
        success: false,
        error: 'End date must be after start date'
      });
    }

    if (startDateObj < new Date()) {
      return res.status(400).json({
        success: false,
        error: 'Start date cannot be in the past'
      });
    }

    // Check for existing bookings
    const existingBooking = await Booking.findOne({
      where: {
        vehicleId: vehicleId,
        status: {
          [Op.in]: ['pending', 'confirmed', 'active']
        },
        [Op.or]: [
          {
            startDate: {
              [Op.between]: [startDateObj, endDateObj]
            }
          },
          {
            endDate: {
              [Op.between]: [startDateObj, endDateObj]
            }
          },
          {
            [Op.and]: [
              { startDate: { [Op.lte]: startDateObj } },
              { endDate: { [Op.gte]: endDateObj } }
            ]
          }
        ]
      }
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is already booked for the selected dates'
      });
    }

    // Calculate total price
    const daysDiff = Math.ceil((endDateObj.getTime() - startDateObj.getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = daysDiff * Number(vehicle.pricePerDay);

    // Create booking
    const booking = await Booking.create({
      bookingId: `BK-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      renterId: userId,
      hostId: String(vehicle.hostId), // UUID string
      vehicleId: vehicleId,
      listingId: vehicleId, // Using vehicleId as listingId for compatibility
      startDate: startDateObj,
      endDate: endDateObj,
      totalPrice: totalPrice,
      total_amount: totalPrice,
      status: 'pending',
      paymentStatus: 'pending',
      pickup_location: pickupLocation,
      return_location: returnLocation,
      specialRequests: specialRequests,
      emergency_contact_name: emergencyContactName,
      emergency_contact_phone: emergencyContactPhone,
      renter_phone: req.user?.phone_number || '',
      display_name: `${req.user?.firstName || ''} ${req.user?.lastName || ''}`.trim()
    });

    // Create notifications
    await Notification.create({
      userId: String(vehicle.hostId),
      message: `New booking request for your ${vehicle.make} ${vehicle.model}`,
      type: 'booking_request',
      isRead: false
    });

    await Notification.create({
      userId: userId,
      message: `Booking request submitted for ${vehicle.make} ${vehicle.model}`,
      type: 'booking_submitted',
      isRead: false
    });

    logger.info(`New booking created: ${booking.id}`, {
      renterId: userId,
      hostId: vehicle.hostId, // UUID, not Number
      vehicleId: vehicleId,
      totalPrice: totalPrice
    });

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking request submitted successfully'
    });

  } catch (error) {
    logger.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create booking'
    });
  }
});

// GET /api/enhanced-bookings - Get user's bookings
router.get('/', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    const { status, page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const whereClause: any = {
      [Op.or]: [
        { renterId: userId },
        { hostId: userId }
      ]
    };

    if (status) {
      whereClause.status = status;
    }

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number']
        },
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number']
        },
        {
          model: EnhancedVehicle,
          as: 'vehicle',
          attributes: ['id', 'make', 'model', 'year', 'type', 'coverImage', 'pricePerDay']
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: bookings,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });

  } catch (error) {
    logger.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch bookings'
    });
  }
});

// GET /api/enhanced-bookings/:id - Get single booking
router.get('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number']
        },
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number']
        },
        {
          model: EnhancedVehicle,
          as: 'vehicle',
          attributes: ['id', 'make', 'model', 'year', 'type', 'coverImage', 'pricePerDay', 'location']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    // Check if user can access this booking
    if (booking.renterId !== userId && booking.hostId !== userId && req.user?.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to view this booking'
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

// PATCH /api/enhanced-bookings/:id - Update booking (host/admin only)
router.patch('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;
    const validation = updateBookingSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        error: 'Invalid update data',
        details: validation.error.errors
      });
    }

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const booking = await Booking.findByPk(id);
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    // Check if user can update this booking
    if (booking.hostId !== userId && req.user?.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to update this booking'
      });
    }

    const { status, adminNotes, cancellationReason } = validation.data;

    const updateData: any = {};
    if (status) updateData.status = status;
    if (adminNotes) updateData.adminNotes = adminNotes;
    if (cancellationReason) updateData.cancellationReason = cancellationReason;

    await booking.update(updateData);

    // Create notification for renter
    await Notification.create({
      userId: booking.renterId,
      message: `Your booking ${booking.bookingId} has been ${status}`,
      type: 'booking_updated',
      isRead: false
    });

    logger.info(`Booking updated: ${booking.id}`, {
      updatedBy: userId,
      status: status,
      bookingId: booking.bookingId
    });

    res.json({
      success: true,
      data: booking,
      message: 'Booking updated successfully'
    });

  } catch (error) {
    logger.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update booking'
    });
  }
});

// GET /api/enhanced-bookings/vehicle/:vehicleId - Get bookings for a specific vehicle
router.get('/vehicle/:vehicleId', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { vehicleId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    // Check if user owns the vehicle
    const vehicle = await EnhancedVehicle.findByPk(vehicleId);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle not found'
      });
    }

    if (String(vehicle.hostId) !== String(userId) && req.user?.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to view bookings for this vehicle'
      });
    }

    const bookings = await Booking.findAll({
      where: { vehicleId: Number(vehicleId) },
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: bookings
    });

  } catch (error) {
    logger.error('Error fetching vehicle bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch vehicle bookings'
    });
  }
});

export default router;