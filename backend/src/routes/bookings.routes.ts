import { Router, Request, Response } from 'express';
import { Booking } from '../models/Booking';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { verifyFirebaseToken, requireAuth, requireHostOrAdmin, AuthenticatedRequest } from '../middleware/auth';
import { paymentRateLimit } from '../middleware/rateLimiter';
import { asyncHandler } from '../middleware/errorHandler';
import { sanitizeInput, bookingSchema } from '../utils/sanitizer';
import { logger } from '../utils/logger';
import { NotificationService } from '../services/notification.service';
import { Op } from 'sequelize';

const router = Router();

// Get all bookings for user
router.get('/', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const {
    page = 1,
    limit = 20,
    status,
    type = 'all' // 'all', 'as_renter', 'as_host'
  } = req.query;

  const offset = (Number(page) - 1) * Number(limit);
  const whereClause: any = {};

  // Filter by user role
  if (type === 'as_renter') {
    whereClause.renter_id = req.user!.id;
  } else if (type === 'as_host') {
    whereClause['$listing.host_id$'] = req.user!.id;
  } else {
    whereClause[Op.or] = [
      { renter_id: req.user!.id },
      { '$listing.host_id$': req.user!.id }
    ];
  }

  if (status) {
    whereClause.status = status;
  }

  try {
    const { count, rows } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'display_name', 'avatar_url', 'phone']
        },
        {
          model: Listing,
          as: 'listing',
          attributes: ['id', 'title', 'price_per_day', 'location', 'images'],
          include: [
            {
              model: User,
              as: 'host',
              attributes: ['id', 'display_name', 'avatar_url', 'phone']
            }
          ]
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset,
    });

    res.json({
      success: true,
      bookings: rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
}));

// Get single booking
router.get('/:id', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'display_name', 'avatar_url', 'phone', 'email']
        },
        {
          model: Listing,
          as: 'listing',
          include: [
            {
              model: User,
              as: 'host',
              attributes: ['id', 'display_name', 'avatar_url', 'phone', 'email']
            }
          ]
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user has access to this booking
    const hasAccess = booking.renter_id === Number(req.user!.id) || 
                     (booking.listing && booking.listing.host_id === Number(req.user!.id));
    
    if (!hasAccess) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error fetching booking:', error);
    res.status(500).json({ error: 'Failed to fetch booking' });
  }
}));

// Create new booking
router.post('/', verifyFirebaseToken, requireAuth, paymentRateLimit, sanitizeInput(bookingSchema), asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const bookingData = {
    ...req.body,
    renter_id: req.user!.id
  };

  try {
    // Check if listing exists and is available
    const listing = await Listing.findByPk(bookingData.listingId);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    if (!listing.approved || !listing.is_available) {
      return res.status(400).json({ error: 'Listing is not available for booking' });
    }

    // Check for date conflicts
    const conflictingBooking = await Booking.findOne({
      where: {
        listingId: bookingData.listingId,
        status: { [Op.in]: ['pending', 'approved', 'active'] },
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

    if (conflictingBooking) {
      return res.status(400).json({ error: 'Dates are not available' });
    }

    const booking = await Booking.create(bookingData);

    // Notify host
    if (listing.host_id) {
      await NotificationService.notifyBookingRequest(
        listing.host_id.toString(),
        req.user!.display_name || req.user!.first_name || 'User',
        `${listing.make} ${listing.model}`
      );
    }

    logger.info(`New booking created: ${booking.id} by user ${req.user!.id}`);

    res.status(201).json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
}));

// Approve booking (host only)
router.patch('/:id/approve', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { host_notes } = req.body;

  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { host_id: req.user!.id }
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found or access denied' });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({ error: 'Booking is not in pending status' });
    }

    booking.approve();
    if (host_notes) {
      booking.host_notes = host_notes;
    }
    await booking.save();

    // Notify renter
    if (booking.renter_id) {
      await NotificationService.notifyBookingApproval(
        booking.renter_id.toString(),
        req.user!.display_name || req.user!.first_name || 'User',
        booking.listing.title
      );
    }

    logger.info(`Booking ${id} approved by user ${req.user!.id}`);

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error approving booking:', error);
    res.status(500).json({ error: 'Failed to approve booking' });
  }
}));

// Reject booking (host only)
router.patch('/:id/reject', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { rejection_reason } = req.body;

  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { host_id: req.user!.id }
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found or access denied' });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({ error: 'Booking is not in pending status' });
    }

    booking.reject();
    if (rejection_reason) {
      booking.cancellation_reason = rejection_reason;
    }
    await booking.save();

    // Notify renter
    if (booking.renter_id) {
      await NotificationService.notifyBookingRejection(
        booking.renter_id.toString(),
        req.user!.display_name || req.user!.first_name || 'User',
        booking.listing.title
      );
    }

    logger.info(`Booking ${id} rejected by user ${req.user!.id}`);

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error rejecting booking:', error);
    res.status(500).json({ error: 'Failed to reject booking' });
  }
}));

// Cancel booking
router.patch('/:id/cancel', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { cancellation_reason } = req.body;

  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Listing,
          as: 'listing'
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user has permission to cancel
    const canCancel = booking.renter_id === Number(req.user!.id) || 
                     (booking.listing && booking.listing.host_id === Number(req.user!.id));
    
    if (!canCancel) {
      return res.status(403).json({ error: 'Access denied' });
    }

    if (!['pending', 'approved'].includes(booking.status)) {
      return res.status(400).json({ error: 'Booking cannot be cancelled' });
    }

    booking.cancel(cancellation_reason || 'Cancelled by user');
    await booking.save();

    logger.info(`Booking ${id} cancelled by user ${req.user!.id}`);

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error cancelling booking:', error);
    res.status(500).json({ error: 'Failed to cancel booking' });
  }
}));

// Start booking (host only)
router.patch('/:id/start', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { pickup_time, pickup_location } = req.body;

  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { host_id: req.user!.id }
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found or access denied' });
    }

    if (booking.status !== 'approved') {
      return res.status(400).json({ error: 'Booking must be approved to start' });
    }

    booking.activate();
    if (pickup_time) booking.pickup_time = new Date(pickup_time);
    if (pickup_location) booking.pickup_location = pickup_location;
    await booking.save();

    logger.info(`Booking ${id} started by user ${req.user!.id}`);

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error starting booking:', error);
    res.status(500).json({ error: 'Failed to start booking' });
  }
}));

// Complete booking (host only)
router.patch('/:id/complete', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { return_time, return_location } = req.body;

  try {
    const booking = await Booking.findByPk(id, {
      include: [
        {
          model: Listing,
          as: 'listing',
          where: { host_id: req.user!.id }
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found or access denied' });
    }

    if (booking.status !== 'active') {
      return res.status(400).json({ error: 'Booking must be active to complete' });
    }

    booking.complete();
    if (return_time) booking.return_time = new Date(return_time);
    if (return_location) booking.return_location = return_location;
    await booking.save();

    logger.info(`Booking ${id} completed by user ${req.user!.id}`);

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    logger.error('Error completing booking:', error);
    res.status(500).json({ error: 'Failed to complete booking' });
  }
}));

export default router;

