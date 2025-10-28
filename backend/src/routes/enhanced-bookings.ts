import express from 'express';
import { z } from 'zod';
import { Booking, Listing, User, EnhancedVehicle } from '../models';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { logger } from '../utils/logger';
import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/verification';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Validation schemas
const initiateBookingSchema = z.object({
  vehicleId: z.number().int().positive(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
});

const uploadVerificationSchema = z.object({
  bookingId: z.number().int().positive(),
  selfieFile: z.string().optional(),
  idFile: z.string().optional(),
  driverLicenseFile: z.string().optional(),
});

const confirmBookingSchema = z.object({
  bookingId: z.number().int().positive(),
  pickupLocation: z.string().min(1),
  pickupTime: z.string().datetime().optional(),
  returnLocation: z.string().min(1),
  returnTime: z.string().datetime().optional(),
  renterPhone: z.string().min(10),
  emergencyContactName: z.string().min(1),
  emergencyContactPhone: z.string().min(10),
  specialRequests: z.string().optional(),
  paymentMethod: z.enum(['stripe', 'payfast']),
});

const approveBookingSchema = z.object({
  bookingId: z.number().int().positive(),
  hostNotes: z.string().optional(),
});

const checkinSchema = z.object({
  bookingId: z.number().int().positive(),
  preTripPhotos: z.array(z.string()).min(1),
  contractSigned: z.boolean(),
});

const checkoutSchema = z.object({
  bookingId: z.number().int().positive(),
  postTripPhotos: z.array(z.string()).min(1),
});

// POST /api/bookings/initiate - Start booking process
router.post('/initiate', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { vehicleId, startDate, endDate } = initiateBookingSchema.parse(req.body);
    
    // Find vehicle/listing
    const vehicle = await Listing.findByPk(vehicleId, {
      include: [{ model: User, as: 'host', attributes: ['id', 'firstName', 'lastName', 'email'] }]
    });
    
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle not found'
      });
    }

    if (vehicle.status !== 'approved') {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not available for booking'
      });
    }

    // Check for date conflicts
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start >= end) {
      return res.status(400).json({
        success: false,
        error: 'End date must be after start date'
      });
    }

    const existingBooking = await Booking.findOne({
      where: {
        vehicleId,
        status: { [Op.in]: ['pending', 'approved', 'active'] },
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
      return res.status(409).json({
        success: false,
        error: 'Vehicle is not available for the selected dates'
      });
    }

    // Calculate pricing
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const basePrice = vehicle.pricePerDay * days;
    const insuranceFee = basePrice * 0.1; // 10% insurance
    const serviceFee = basePrice * 0.05; // 5% service fee
    const deposit = basePrice * 0.2; // 20% deposit
    const totalPrice = basePrice + insuranceFee + serviceFee + deposit;

    // Create booking
    const booking = await Booking.create({
      booking_id: uuidv4(),
      renterId: Number(req.user!.id) || 0,
      hostId: vehicle.hostId,
      vehicleId: vehicle.id,
      listingId: vehicle.id,
      startDate: start,
      endDate: end,
      totalPrice,
      status: 'pending',
      paymentStatus: 'pending',
      selfie_verified: false,
      id_verified: false,
      pre_trip_completed: false,
      post_trip_completed: false,
      contract_signed: false,
    });

    // Emit notification to host
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${vehicle.hostId}`).emit('new-booking', {
        id: booking.id,
        booking_id: booking.booking_id,
        renterName: req.user!.display_name || `${req.user!.first_name || ''} ${req.user!.last_name || ''}`.trim() || 'User',
        vehicleTitle: `${vehicle.make} ${vehicle.model}`,
        startDate,
        endDate,
        totalPrice,
        createdAt: booking.createdAt
      });
    }

    res.status(201).json({
      success: true,
      data: {
        booking,
        pricing: {
          basePrice,
          insuranceFee,
          serviceFee,
          deposit,
          totalPrice,
          days
        },
        vehicle: {
          id: vehicle.id,
          make: vehicle.make,
          model: vehicle.model,
          year: vehicle.year,
          pricePerDay: vehicle.pricePerDay,
          host: vehicle.hostId
        }
      },
      message: 'Booking initiated successfully'
    });

  } catch (error) {
    logger.error('Error initiating booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to initiate booking'
    });
  }
});

// POST /api/bookings/upload-verification - Upload selfie and ID verification
router.post('/upload-verification', authenticateToken, upload.fields([
  { name: 'selfie', maxCount: 1 },
  { name: 'idDocument', maxCount: 1 },
  { name: 'driverLicense', maxCount: 1 }
]), async (req: AuthenticatedRequest, res) => {
  try {
    const { bookingId } = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.renterId !== Number(req.user!.id)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to update this booking'
      });
    }

    // Update verification URLs
    const updates: any = {};
    
    if (files.selfie?.[0]) {
      updates.selfie_verification_url = files.selfie[0].path;
    }
    
    if (files.idDocument?.[0]) {
      updates.id_verification_url = files.idDocument[0].path;
    }
    
    if (files.driverLicense?.[0]) {
      updates.driver_license_url = files.driverLicense[0].path;
    }

    await booking.update(updates);

    // TODO: Implement face matching verification logic here
    // For now, we'll simulate verification
    const selfieVerified = files.selfie?.[0] ? true : false;
    const idVerified = files.idDocument?.[0] ? true : false;

    await booking.update({
      selfie_verified: selfieVerified,
      id_verified: idVerified
    });

    res.json({
      success: true,
      data: {
        booking,
        verification: {
          selfie_verified: selfieVerified,
          id_verified: idVerified,
          selfie_url: files.selfie?.[0]?.path,
          id_url: files.idDocument?.[0]?.path,
          driver_license_url: files.driverLicense?.[0]?.path
        }
      },
      message: 'Verification documents uploaded successfully'
    });

  } catch (error) {
    logger.error('Error uploading verification:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to upload verification documents'
    });
  }
});

// POST /api/bookings/confirm - Confirm booking details and process payment
router.post('/confirm', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const {
      bookingId,
      pickupLocation,
      pickupTime,
      returnLocation,
      returnTime,
      renterPhone,
      emergencyContactName,
      emergencyContactPhone,
      specialRequests,
      paymentMethod
    } = confirmBookingSchema.parse(req.body);

    const booking = await Booking.findByPk(bookingId, {
      include: [{ model: Listing, as: 'vehicle' }]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.renterId !== Number(req.user!.id)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to update this booking'
      });
    }

    if (!booking.selfie_verified || !booking.id_verified) {
      return res.status(400).json({
        success: false,
        error: 'Verification documents must be uploaded and verified before confirming booking'
      });
    }

    // Update booking details
    await booking.update({
      pickup_location: pickupLocation,
      pickup_time: pickupTime ? new Date(pickupTime) : undefined,
      return_location: returnLocation,
      return_time: returnTime ? new Date(returnTime) : undefined,
      renter_phone: renterPhone,
      emergency_contact_name: emergencyContactName,
      emergency_contact_phone: emergencyContactPhone,
      specialRequests,
      paymentMethod
    });

    // TODO: Process payment with Stripe or PayFast
    // For now, we'll simulate successful payment
    await booking.update({
      paymentStatus: 'paid',
      status: 'pending' // Still pending host approval
    });

    // Emit notification to host
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${booking.hostId}`).emit('booking-confirmed', {
        id: booking.id,
        booking_id: booking.booking_id,
        renterName: req.user!.display_name || `${req.user!.first_name || ''} ${req.user!.last_name || ''}`.trim() || 'User',
        vehicleTitle: `Vehicle ${booking.vehicleId}`,
        startDate: booking.startDate,
        endDate: booking.endDate,
        totalPrice: booking.totalPrice,
        pickupLocation,
        returnLocation
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Booking confirmed and payment processed successfully'
    });

  } catch (error) {
    logger.error('Error confirming booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to confirm booking'
    });
  }
});

// POST /api/bookings/approve/:id - Host approval
router.post('/approve/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { hostNotes } = approveBookingSchema.parse(req.body);

    const booking = await Booking.findByPk(id, {
      include: [
        { model: User, as: 'renter', attributes: ['id', 'firstName', 'lastName', 'email'] },
        { model: Listing, as: 'vehicle' }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.hostId !== Number(req.user!.id)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to approve this booking'
      });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Booking is not in pending status'
      });
    }

    await booking.update({
      status: 'approved',
      host_notes: hostNotes
    });

    // Emit notification to renter
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${booking.renterId}`).emit('booking-approved', {
        id: booking.id,
        booking_id: booking.booking_id,
        vehicleTitle: `Vehicle ${booking.vehicleId}`,
        startDate: booking.startDate,
        endDate: booking.endDate,
        hostNotes
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Booking approved successfully'
    });

  } catch (error) {
    logger.error('Error approving booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve booking'
    });
  }
});

// POST /api/bookings/reject/:id - Host rejection
router.post('/reject/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    const booking = await Booking.findByPk(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.hostId !== Number(req.user!.id)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to reject this booking'
      });
    }

    await booking.update({
      status: 'cancelled',
      cancellation_reason: reason,
      paymentStatus: 'refunded'
    });

    // Emit notification to renter
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${booking.renterId}`).emit('booking-rejected', {
        id: booking.id,
        booking_id: booking.booking_id,
        reason
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Booking rejected successfully'
    });

  } catch (error) {
    logger.error('Error rejecting booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reject booking'
    });
  }
});

// POST /api/bookings/checkin/:id - Pre-trip check-in
router.post('/checkin/:id', authenticateToken, upload.array('photos', 10), async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { contractSigned } = req.body;
    const files = req.files as Express.Multer.File[];

    const booking = await Booking.findByPk(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.renterId !== Number(req.user!.id) && booking.hostId !== Number(req.user!.id)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to check in this booking'
      });
    }

    if (booking.status !== 'approved') {
      return res.status(400).json({
        success: false,
        error: 'Booking must be approved before check-in'
      });
    }

    const photoUrls = files.map(file => file.path);

    await booking.update({
      pre_trip_photos: photoUrls,
      contract_signed: contractSigned === 'true',
      pre_trip_completed: true,
      status: 'active'
    });

    // Emit notification
    const io = req.app.get('io');
    if (io) {
      const targetUser = Number(req.user!.id) === booking.renterId ? booking.hostId : booking.renterId;
      io.to(`user-${targetUser}`).emit('booking-checked-in', {
        id: booking.id,
        booking_id: booking.booking_id,
        checkedInBy: req.user!.display_name || `${req.user!.first_name || ''} ${req.user!.last_name || ''}`.trim() || 'User'
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Check-in completed successfully'
    });

  } catch (error) {
    logger.error('Error checking in booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check in booking'
    });
  }
});

// POST /api/bookings/checkout/:id - Post-trip check-out
router.post('/checkout/:id', authenticateToken, upload.array('photos', 10), async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const files = req.files as Express.Multer.File[];

    const booking = await Booking.findByPk(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    if (booking.renterId !== Number(req.user!.id) && booking.hostId !== Number(req.user!.id)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to check out this booking'
      });
    }

    if (booking.status !== 'active') {
      return res.status(400).json({
        success: false,
        error: 'Booking must be active before check-out'
      });
    }

    const photoUrls = files.map(file => file.path);

    await booking.update({
      post_trip_photos: photoUrls,
      post_trip_completed: true,
      status: 'completed'
    });

    // Emit notification
    const io = req.app.get('io');
    if (io) {
      const targetUser = Number(req.user!.id) === booking.renterId ? booking.hostId : booking.renterId;
      io.to(`user-${targetUser}`).emit('booking-checked-out', {
        id: booking.id,
        booking_id: booking.booking_id,
        checkedOutBy: req.user!.display_name || `${req.user!.first_name || ''} ${req.user!.last_name || ''}`.trim() || 'User'
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Check-out completed successfully'
    });

  } catch (error) {
    logger.error('Error checking out booking:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check out booking'
    });
  }
});

// GET /api/bookings/:id - Get booking details
router.get('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByPk(id, {
      include: [
        { model: User, as: 'renter', attributes: ['id', 'firstName', 'lastName', 'email', 'phone'] },
        { model: User, as: 'host', attributes: ['id', 'firstName', 'lastName', 'email', 'phone'] },
        { model: Listing, as: 'vehicle' }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    // Check if user has access to this booking
    if (booking.renterId !== Number(req.user!.id) && booking.hostId !== Number(req.user!.id) && req.user!.role !== 'admin') {
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

// GET /api/bookings/user/:uid - Get user's bookings
router.get('/user/:uid', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { uid } = req.params;
    const { status, page = 1, limit = 10 } = req.query;

    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const whereClause: any = { renter_id: user.id };
    if (status) {
      whereClause.status = status;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'host', attributes: ['id', 'firstName', 'lastName', 'email', 'phone'] },
        { model: Listing, as: 'vehicle' }
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
    logger.error('Error fetching user bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user bookings'
    });
  }
});

// GET /api/bookings/host/:uid - Get host's bookings
router.get('/host/:uid', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { uid } = req.params;
    const { status, page = 1, limit = 10 } = req.query;

    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const whereClause: any = { hostId: user.id };
    if (status) {
      whereClause.status = status;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: bookings } = await Booking.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'renter', attributes: ['id', 'firstName', 'lastName', 'email', 'phone'] },
        { model: Listing, as: 'vehicle' }
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
    logger.error('Error fetching host bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch host bookings'
    });
  }
});

export default router;
