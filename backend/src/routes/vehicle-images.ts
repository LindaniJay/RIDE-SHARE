import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { authenticateToken, AuthenticatedRequest, requireRole } from '../middleware/auth';
import { Image, Listing } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// Configure multer for categorized vehicle image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category || 'general';
    const uploadPath = `uploads/vehicles/${category}`;
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req: any, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const category = req.body.category || 'general';
    cb(null, `vehicle-${category}-${req.user?.id || 'unknown'}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per image
    files: 10 // Maximum 10 files per upload
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

// POST /api/vehicle-images/upload - Upload categorized vehicle images
router.post('/upload', authenticateToken, requireRole(['host', 'admin']), upload.array('images', 10), async (req: AuthenticatedRequest, res) => {
  try {
    const { category, listingId } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!category) {
      return res.status(400).json({
        success: false,
        error: 'Category is required'
      });
    }

    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No images provided'
      });
    }

    // Validate category
    const validCategories = ['exterior', 'interior', 'engine', 'license', 'wheels', 'dashboard'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        error: `Invalid category. Must be one of: ${validCategories.join(', ')}`
      });
    }

    // Create image records
    const imageUrls = files.map(file => `/uploads/vehicles/${category}/${file.filename}`);
    const imageRecords = await Promise.all(
      imageUrls.map(url => 
        Image.create({
          listingId: listingId ? parseInt(listingId) : null,
          url,
          category,
          userId: Number(req.user!.id) || 0,
          filename: path.basename(url),
          originalName: files.find(f => f.filename === path.basename(url))?.originalname || '',
          mimeType: files.find(f => f.filename === path.basename(url))?.mimetype || 'image/jpeg',
          size: files.find(f => f.filename === path.basename(url))?.size || 0
        })
      )
    );

    logger.info(`Uploaded ${files.length} ${category} images for user ${req.user!.id}`);

    res.status(201).json({
      success: true,
      message: `${files.length} ${category} images uploaded successfully`,
      images: imageRecords,
      urls: imageUrls
    });

  } catch (error) {
    logger.error('Error uploading vehicle images:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to upload images'
    });
  }
});

// GET /api/vehicle-images/:listingId - Get images for a specific listing
router.get('/:listingId', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { listingId } = req.params;
    const { category } = req.query;

    const whereClause: any = { listingId: parseInt(listingId) };
    if (category) {
      whereClause.category = category;
    }

    const images = await Image.findAll({
      where: whereClause,
      order: [['createdAt', 'ASC']]
    });

    res.json({
      success: true,
      images: images.map(img => ({
        id: img.id,
        url: img.url,
        category: img.category,
        filename: img.filename,
        createdAt: img.createdAt
      }))
    });

  } catch (error) {
    logger.error('Error fetching vehicle images:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch images'
    });
  }
});

// DELETE /api/vehicle-images/:imageId - Delete a specific image
router.delete('/:imageId', authenticateToken, requireRole(['host', 'admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { imageId } = req.params;

    const image = await Image.findByPk(imageId);
    if (!image) {
      return res.status(404).json({
        success: false,
        error: 'Image not found'
      });
    }

    // Check if user owns the image or is admin
    if (image.userId !== Number(req.user!.id) && req.user!.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to delete this image'
      });
    }

    // Delete physical file
    const filePath = path.join(process.cwd(), 'public', image.url);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete database record
    await image.destroy();

    logger.info(`Deleted image ${imageId} for user ${req.user!.id}`);

    res.json({
      success: true,
      message: 'Image deleted successfully'
    });

  } catch (error) {
    logger.error('Error deleting image:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete image'
    });
  }
});

export default router;
