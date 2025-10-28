import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Op } from 'sequelize';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { EnhancedVehicle } from '../models/EnhancedVehicle';
import { User } from '../models';
import { logger } from '../utils/logger';
import aiImageVerification from '../services/aiImageVerification';
import {
  validateVehicleListing,
  validateImageUpload,
  validateVideoUpload,
  validateListingCompleteness,
  checkDuplicateVIN,
  checkHostVerification,
  rateLimitListingCreation
} from '../validators/vehicleValidator';

const router = express.Router();

// Configure multer for image uploads
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category || 'uncategorized';
    const uploadPath = path.join(process.cwd(), 'uploads', 'vehicles', category);
    
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  }
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    files: 20 // Max 20 files per request
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files (JPEG, PNG, WebP) are allowed'));
    }
  }
});

// Configure multer for video uploads
const videoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), 'uploads', 'vehicles', 'videos');
    
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `video-${uniqueSuffix}.mp4`);
  }
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 30 * 1024 * 1024, // 30MB
    files: 1
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
      cb(null, true);
    } else {
      cb(new Error('Only MP4 video files are allowed'));
    }
  }
});

// POST /api/enhanced-vehicles - Create new vehicle listing
router.post('/', 
  authenticateToken,
  checkHostVerification,
  rateLimitListingCreation,
  validateVehicleListing,
  checkDuplicateVIN,
  validateListingCompleteness,
  async (req: AuthenticatedRequest, res: any) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
      }

      const vehicleData = {
        ...req.body,
        hostId: userId,
        listingStatus: 'pending',
        verified: false,
        aiVerified: false,
        aiConfidence: 0,
        imageQualityScore: 0,
        listingCompletenessScore: 0,
        hostVerificationScore: 0,
        viewCount: 0,
        inquiryCount: 0,
        bookingCount: 0,
        rating: 0,
        ratingCount: 0
      };

      // Calculate completeness score
      const vehicle = await EnhancedVehicle.create(vehicleData);
      vehicle.listingCompletenessScore = vehicle.calculateCompletenessScore();
      await vehicle.save();

      logger.info(`New vehicle listing created: ${vehicle.id}`, {
        hostId: userId,
        make: vehicle.make,
        model: vehicle.model,
        status: vehicle.listingStatus
      });

      res.status(201).json({
        success: true,
        data: vehicle,
        message: 'Vehicle listing created successfully. Pending admin approval.'
      });

    } catch (error) {
      logger.error('Error creating vehicle listing:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to create vehicle listing'
      });
    }
  }
);

// POST /api/enhanced-vehicles/:id/images - Upload images for vehicle
router.post('/:id/images',
  authenticateToken,
  imageUpload.array('images', 20),
  validateImageUpload,
  async (req: AuthenticatedRequest, res: any) => {
    try {
      const { id } = req.params;
      const { category } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
      }

      const vehicle = await EnhancedVehicle.findByPk(id);
      if (!vehicle) {
        return res.status(404).json({
          success: false,
          error: 'Vehicle not found'
        });
      }

      if (vehicle.hostId !== Number(userId)) {
        return res.status(403).json({
          success: false,
          error: 'Unauthorized to modify this vehicle'
        });
      }

      const files = req.files as Express.Multer.File[];
      const uploadedImages: string[] = [];
      const analysisResults: any[] = [];

      for (const file of files) {
        const imagePath = path.join('/uploads/vehicles', category || 'uncategorized', file.filename);
        uploadedImages.push(imagePath);

        // AI analysis of the image
        try {
          const imageBuffer = fs.readFileSync(file.path);
          const analysis = await aiImageVerification.analyzeImage(imageBuffer, file.originalname);
          const metadata = await aiImageVerification.extractMetadata(imageBuffer);
          
          analysisResults.push({
            filename: file.filename,
            analysis,
            metadata
          });

          // Validate image requirements
          const validation = aiImageVerification.validateImageRequirements(analysis);
          if (!validation.isValid) {
            logger.warn(`Image validation failed for ${file.filename}:`, validation.errors);
          }

        } catch (analysisError) {
          logger.error(`Error analyzing image ${file.filename}:`, analysisError);
        }
      }

      // Update vehicle with new images
      const currentImages = vehicle[`${category}Images` as keyof EnhancedVehicle] as string[] || [];
      const updatedImages = [...currentImages, ...uploadedImages];
      
      await vehicle.update({
        [`${category}Images`]: updatedImages
      });

      // Recalculate completeness score
      vehicle.listingCompletenessScore = vehicle.calculateCompletenessScore();
      await vehicle.save();

      res.json({
        success: true,
        data: {
          uploadedImages,
          analysisResults,
          completenessScore: vehicle.listingCompletenessScore
        },
        message: 'Images uploaded and analyzed successfully'
      });

    } catch (error) {
      logger.error('Error uploading vehicle images:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to upload images'
      });
    }
  }
);

// POST /api/enhanced-vehicles/:id/video - Upload video tour
router.post('/:id/video',
  authenticateToken,
  videoUpload.single('video'),
  validateVideoUpload,
  async (req: AuthenticatedRequest, res: any) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
      }

      const vehicle = await EnhancedVehicle.findByPk(id);
      if (!vehicle) {
        return res.status(404).json({
          success: false,
          error: 'Vehicle not found'
        });
      }

      if (vehicle.hostId !== Number(userId)) {
        return res.status(403).json({
          success: false,
          error: 'Unauthorized to modify this vehicle'
        });
      }

      const file = req.file;
      if (!file) {
        return res.status(400).json({
          success: false,
          error: 'No video file uploaded'
        });
      }

      const videoPath = path.join('/uploads/vehicles/videos', file.filename);
      
      await vehicle.update({
        videoTourFile: videoPath
      });

      res.json({
        success: true,
        data: { videoPath },
        message: 'Video tour uploaded successfully'
      });

    } catch (error) {
      logger.error('Error uploading vehicle video:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to upload video'
      });
    }
  }
);

// GET /api/enhanced-vehicles - Get vehicle listings
router.get('/', async (req, res) => {
  try {
    const {
      status = 'approved',
      type,
      city,
      minPrice,
      maxPrice,
      features,
      page = 1,
      limit = 20
    } = req.query;

    const whereClause: any = { listingStatus: status };
    
    if (type) whereClause.type = type;
    if (city) whereClause['location.city'] = city;
    if (minPrice || maxPrice) {
      whereClause.pricePerDay = {};
      if (minPrice) whereClause.pricePerDay[Op.gte] = minPrice;
      if (maxPrice) whereClause.pricePerDay[Op.lte] = maxPrice;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: vehicles } = await EnhancedVehicle.findAndCountAll({
      where: whereClause,
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'isVerified']
      }],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: vehicles,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });

  } catch (error) {
    logger.error('Error fetching vehicle listings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch vehicle listings'
    });
  }
});

// GET /api/enhanced-vehicles/:id - Get single vehicle
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await EnhancedVehicle.findByPk(id, {
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'isVerified']
      }]
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle not found'
      });
    }

    // Increment view count
    await vehicle.incrementViewCount();

    res.json({
      success: true,
      data: vehicle
    });

  } catch (error) {
    logger.error('Error fetching vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch vehicle'
    });
  }
});

// GET /api/enhanced-vehicles/host/:hostId - Get host's vehicles
router.get('/host/:hostId', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { hostId } = req.params;
    const userId = req.user?.id;

    if (Number(userId) !== Number(hostId)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to view these vehicles'
      });
    }

    const vehicles = await EnhancedVehicle.findAll({
      where: { hostId: Number(hostId) },
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: vehicles
    });

  } catch (error) {
    logger.error('Error fetching host vehicles:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch host vehicles'
    });
  }
});

// PUT /api/enhanced-vehicles/:id - Update vehicle
router.put('/:id',
  authenticateToken,
  validateVehicleListing,
  async (req: AuthenticatedRequest, res: any) => {
    try {
      const { id } = req.params;
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          error: 'User not authenticated'
        });
      }

      const vehicle = await EnhancedVehicle.findByPk(id);
      if (!vehicle) {
        return res.status(404).json({
          success: false,
          error: 'Vehicle not found'
        });
      }

      if (vehicle.hostId !== Number(userId)) {
        return res.status(403).json({
          success: false,
          error: 'Unauthorized to modify this vehicle'
        });
      }

      // Don't allow updates to approved vehicles
      if (vehicle.listingStatus === 'approved') {
        return res.status(400).json({
          success: false,
          error: 'Cannot modify approved vehicles'
        });
      }

      await vehicle.update(req.body);
      
      // Recalculate completeness score
      vehicle.listingCompletenessScore = vehicle.calculateCompletenessScore();
      await vehicle.save();

      res.json({
        success: true,
        data: vehicle,
        message: 'Vehicle updated successfully'
      });

    } catch (error) {
      logger.error('Error updating vehicle:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to update vehicle'
      });
    }
  }
);

// DELETE /api/enhanced-vehicles/:id - Delete vehicle
router.delete('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      });
    }

    const vehicle = await EnhancedVehicle.findByPk(id);
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle not found'
      });
    }

    if (vehicle.hostId !== Number(userId)) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized to delete this vehicle'
      });
    }

    await vehicle.destroy();

    res.json({
      success: true,
      message: 'Vehicle deleted successfully'
    });

  } catch (error) {
    logger.error('Error deleting vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete vehicle'
    });
  }
});

export default router;
