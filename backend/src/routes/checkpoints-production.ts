import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';
import { Checkpoint, CheckpointItem, CheckpointImage, Booking, User } from '../models';
import { Op } from 'sequelize';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Configure multer for checkpoint image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/checkpoints';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req: any, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `checkpoint-${req.params.checkpointId}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Validation schemas
const createCheckpointSchema = z.object({
  booking_id: z.string().uuid(),
  type: z.enum(['pickup', 'return']),
  notes: z.string().optional(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    address: z.string().optional()
  }).optional()
});

const updateCheckpointSchema = z.object({
  status: z.enum(['pending', 'in_progress', 'completed']).optional(),
  notes: z.string().optional(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
    address: z.string().optional()
  }).optional()
});

const createCheckpointItemSchema = z.object({
  item_name: z.string().min(1),
  status: z.enum(['working', 'not_working', 'damaged']),
  notes: z.string().optional()
});

// Create checkpoint
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { booking_id, type, notes, location } = createCheckpointSchema.parse(req.body);
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Verify booking exists and user has access
    const booking = await Booking.findByPk(booking_id, {
      include: [
        { model: User, as: 'renter' },
        { model: User, as: 'host', through: { attributes: [] } }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user is either renter or host
    const isRenter = booking.renter_id === user_id;
    const isHost = (booking as any).listing?.host_id === user_id;

    if (!isRenter && !isHost) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const checkpoint = await Checkpoint.create({
      booking_id,
      user_id,
      type,
      notes,
      location,
      status: 'pending'
    });

    res.status(201).json({
      success: true,
      checkpoint
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error creating checkpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get checkpoints for a booking
router.get('/booking/:bookingId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId } = req.params;
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Verify booking exists and user has access
    const booking = await Booking.findByPk(bookingId, {
      include: [
        { model: User, as: 'renter' },
        { model: User, as: 'host', through: { attributes: [] } }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Check if user is either renter or host
    const isRenter = booking.renter_id === user_id;
    const isHost = (booking as any).listing?.host_id === user_id;

    if (!isRenter && !isHost) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const checkpoints = await Checkpoint.findAll({
      where: { booking_id: bookingId },
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name'] },
        { model: CheckpointItem, as: 'items' },
        { model: CheckpointImage, as: 'images' }
      ],
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      checkpoints
    });
  } catch (error) {
    console.error('Error fetching checkpoints:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update checkpoint
router.put('/:checkpointId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { checkpointId } = req.params;
    const updates = updateCheckpointSchema.parse(req.body);
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const checkpoint = await Checkpoint.findByPk(checkpointId, {
      include: [
        { model: Booking, as: 'booking' }
      ]
    });

    if (!checkpoint) {
      return res.status(404).json({ error: 'Checkpoint not found' });
    }

    // Verify user has access to this checkpoint
    const booking = await Booking.findByPk(checkpoint.booking_id, {
      include: [
        { model: User, as: 'renter' },
        { model: User, as: 'host', through: { attributes: [] } }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const isRenter = booking.renter_id === user_id;
    const isHost = (booking as any).listing?.host_id === user_id;

    if (!isRenter && !isHost) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // If completing checkpoint, set completion timestamp
    if (updates.status === 'completed' && checkpoint.status !== 'completed') {
      // Note: completed_at field doesn't exist in model, using status change only
    }

    await checkpoint.update(updates);

    res.json({
      success: true,
      checkpoint
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error updating checkpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add checkpoint item
router.post('/:checkpointId/items', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { checkpointId } = req.params;
    const { item_name, status, notes } = createCheckpointItemSchema.parse(req.body);
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const checkpoint = await Checkpoint.findByPk(checkpointId, {
      include: [
        { model: Booking, as: 'booking' }
      ]
    });

    if (!checkpoint) {
      return res.status(404).json({ error: 'Checkpoint not found' });
    }

    // Verify user has access to this checkpoint
    const booking = await Booking.findByPk(checkpoint.booking_id, {
      include: [
        { model: User, as: 'renter' },
        { model: User, as: 'host', through: { attributes: [] } }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const isRenter = booking.renter_id === user_id;
    const isHost = (booking as any).listing?.host_id === user_id;

    if (!isRenter && !isHost) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const checkpointItem = await CheckpointItem.create({
      checkpoint_id: checkpointId,
      item_name,
      status,
      notes
    });

    res.status(201).json({
      success: true,
      item: checkpointItem
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error creating checkpoint item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Upload checkpoint image
router.post('/:checkpointId/images', authenticateToken, upload.single('image'), async (req: AuthRequest, res) => {
  try {
    const { checkpointId } = req.params;
    const { category, description } = req.body;
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const checkpoint = await Checkpoint.findByPk(checkpointId, {
      include: [
        { model: Booking, as: 'booking' }
      ]
    });

    if (!checkpoint) {
      return res.status(404).json({ error: 'Checkpoint not found' });
    }

    // Verify user has access to this checkpoint
    const booking = await Booking.findByPk(checkpoint.booking_id, {
      include: [
        { model: User, as: 'renter' },
        { model: User, as: 'host', through: { attributes: [] } }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const isRenter = booking.renter_id === user_id;
    const isHost = (booking as any).listing?.host_id === user_id;

    if (!isRenter && !isHost) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const checkpointImage = await CheckpointImage.create({
      checkpoint_id: checkpointId,
      uploaded_by: user_id,
      file_url: `/uploads/checkpoints/${req.file.filename}`,
      filename: req.file.filename,
      file_size: req.file.size,
      mime_type: req.file.mimetype,
      category: category || 'general',
      description
    });

    res.status(201).json({
      success: true,
      image: checkpointImage
    });
  } catch (error) {
    console.error('Error uploading checkpoint image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get checkpoint images
router.get('/:checkpointId/images', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { checkpointId } = req.params;
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const checkpoint = await Checkpoint.findByPk(checkpointId, {
      include: [
        { model: Booking, as: 'booking' }
      ]
    });

    if (!checkpoint) {
      return res.status(404).json({ error: 'Checkpoint not found' });
    }

    // Verify user has access to this checkpoint
    const booking = await Booking.findByPk(checkpoint.booking_id, {
      include: [
        { model: User, as: 'renter' },
        { model: User, as: 'host', through: { attributes: [] } }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const isRenter = booking.renter_id === user_id;
    const isHost = (booking as any).listing?.host_id === user_id;

    if (!isRenter && !isHost) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const images = await CheckpointImage.findAll({
      where: { checkpoint_id: checkpointId },
      include: [
        { model: User, as: 'uploader', attributes: ['id', 'first_name', 'last_name'] }
      ],
      order: [['created_at', 'DESC']]
    });

    res.json({
      success: true,
      images
    });
  } catch (error) {
    console.error('Error fetching checkpoint images:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Get all checkpoints
router.get('/admin/all', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20, status, type } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (type) whereClause.type = type;

    const { count, rows: checkpoints } = await Checkpoint.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'user', attributes: ['id', 'first_name', 'last_name', 'email'] },
        { model: Booking, as: 'booking', include: [
          { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name'] },
          { model: User, as: 'host', attributes: ['id', 'first_name', 'last_name'] }
        ]},
        { model: CheckpointItem, as: 'items' },
        { model: CheckpointImage, as: 'images' }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      checkpoints,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching all checkpoints:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
