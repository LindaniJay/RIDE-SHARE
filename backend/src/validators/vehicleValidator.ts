import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

// Import express-validator functions directly
const body = require('express-validator').body;
const validationResult = require('express-validator').validationResult;

// Image validation constants
const MIN_IMAGE_RESOLUTION = 1080;
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_VIDEO_SIZE = 30 * 1024 * 1024; // 30MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ALLOWED_VIDEO_TYPES = ['video/mp4'];

// Required image categories and minimum counts
const REQUIRED_IMAGE_CATEGORIES = {
  exterior: 3,
  interior: 2,
  dashboard: 1,
};

export const validateVehicleListing = [
  // Basic Information
  body('make')
    .notEmpty()
    .withMessage('Make is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Make must be between 2 and 50 characters'),
  
  body('model')
    .notEmpty()
    .withMessage('Model is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Model must be between 2 and 50 characters'),
  
  body('year')
    .isInt({ min: 1995, max: new Date().getFullYear() + 2 })
    .withMessage(`Year must be between 1995 and ${new Date().getFullYear() + 2}`),
  
  body('type')
    .isIn(['car', 'suv', 'truck', 'van', 'motorcycle', 'luxury', 'electric'])
    .withMessage('Invalid vehicle type'),
  
  body('color')
    .notEmpty()
    .withMessage('Color is required')
    .isLength({ min: 2, max: 30 })
    .withMessage('Color must be between 2 and 30 characters'),
  
  body('mileage')
    .isInt({ min: 0 })
    .withMessage('Mileage must be a positive number'),
  
  body('transmission')
    .isIn(['manual', 'automatic', 'cvt', 'semi-automatic'])
    .withMessage('Invalid transmission type'),
  
  body('fuelType')
    .isIn(['petrol', 'diesel', 'electric', 'hybrid', 'lpg'])
    .withMessage('Invalid fuel type'),
  
  body('seats')
    .isInt({ min: 1, max: 50 })
    .withMessage('Seats must be between 1 and 50'),
  
  body('doors')
    .isInt({ min: 2, max: 6 })
    .withMessage('Doors must be between 2 and 6'),
  
  body('engineSize')
    .notEmpty()
    .withMessage('Engine size is required'),
  
  body('vin')
    .isLength({ min: 17, max: 17 })
    .withMessage('VIN must be exactly 17 characters')
    .matches(/^[A-HJ-NPR-Z0-9]{17}$/)
    .withMessage('Invalid VIN format'),
  
  // Pricing
  body('pricePerDay')
    .isFloat({ min: 0.01 })
    .withMessage('Price per day must be greater than 0'),
  
  body('minimumRentalDays')
    .isInt({ min: 1 })
    .withMessage('Minimum rental days must be at least 1'),
  
  // Location
  body('location.address')
    .notEmpty()
    .withMessage('Address is required'),
  
  body('location.city')
    .notEmpty()
    .withMessage('City is required'),
  
  body('location.state')
    .notEmpty()
    .withMessage('State is required'),
  
  body('location.country')
    .notEmpty()
    .withMessage('Country is required'),
  
  body('location.postalCode')
    .notEmpty()
    .withMessage('Postal code is required'),
  
  body('location.coordinates.latitude')
    .isFloat({ min: -90, max: 90 })
    .withMessage('Invalid latitude'),
  
  body('location.coordinates.longitude')
    .isFloat({ min: -180, max: 180 })
    .withMessage('Invalid longitude'),
  
  // Features
  body('features')
    .isArray()
    .withMessage('Features must be an array'),
  
  body('amenities')
    .isArray()
    .withMessage('Amenities must be an array'),
  
  body('safetyFeatures')
    .isArray()
    .withMessage('Safety features must be an array'),
  
  body('entertainmentFeatures')
    .isArray()
    .withMessage('Entertainment features must be an array'),
  
  // Media validation
  body('coverImage')
    .notEmpty()
    .withMessage('Cover image is required'),
  
  body('exteriorImages')
    .isArray({ min: REQUIRED_IMAGE_CATEGORIES.exterior })
    .withMessage(`At least ${REQUIRED_IMAGE_CATEGORIES.exterior} exterior images are required`),
  
  body('interiorImages')
    .isArray({ min: REQUIRED_IMAGE_CATEGORIES.interior })
    .withMessage(`At least ${REQUIRED_IMAGE_CATEGORIES.interior} interior images are required`),
  
  body('dashboardImages')
    .isArray({ min: REQUIRED_IMAGE_CATEGORIES.dashboard })
    .withMessage(`At least ${REQUIRED_IMAGE_CATEGORIES.dashboard} dashboard image is required`),
  
  // Insurance
  body('insuranceIncluded')
    .isBoolean()
    .withMessage('Insurance included must be a boolean'),
  
  body('gpsInstalled')
    .isBoolean()
    .withMessage('GPS installed must be a boolean'),
  
  body('trackingEnabled')
    .isBoolean()
    .withMessage('Tracking enabled must be a boolean'),
];

export const validateImageUpload = (req: Request, res: Response, next: NextFunction) => {
  const files = req.files as Express.Multer.File[];
  
  if (!files || files.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'No files uploaded'
    });
  }
  
  const errors: string[] = [];
  
  for (const file of files) {
    // Check file type
    if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      errors.push(`File ${file.originalname} has invalid type. Only JPEG, PNG, and WebP are allowed.`);
      continue;
    }
    
    // Check file size
    if (file.size > MAX_IMAGE_SIZE) {
      errors.push(`File ${file.originalname} is too large. Maximum size is ${MAX_IMAGE_SIZE / (1024 * 1024)}MB.`);
      continue;
    }
    
    // Check image dimensions (basic check - would need image processing library for accurate check)
    // This is a placeholder - in production, you'd use sharp or jimp to check dimensions
    if (file.size < 100000) { // Very small file might be low quality
      errors.push(`File ${file.originalname} appears to be low quality. Please upload higher resolution images.`);
    }
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Image validation failed',
      details: errors
    });
  }
  
  next();
};

export const validateVideoUpload = (req: Request, res: Response, next: NextFunction) => {
  const files = req.files as Express.Multer.File[];
  
  if (!files || files.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'No video file uploaded'
    });
  }
  
  const file = files[0];
  
  // Check file type
  if (!ALLOWED_VIDEO_TYPES.includes(file.mimetype)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid video format. Only MP4 files are allowed.'
    });
  }
  
  // Check file size
  if (file.size > MAX_VIDEO_SIZE) {
    return res.status(400).json({
      success: false,
      error: `Video file is too large. Maximum size is ${MAX_VIDEO_SIZE / (1024 * 1024)}MB.`
    });
  }
  
  next();
};

export const validateListingCompleteness = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: errors.array()
    });
  }
  
  const {
    exteriorImages,
    interiorImages,
    dashboardImages,
    coverImage,
    location,
    vin
  } = req.body;
  
  const completenessErrors: string[] = [];
  
  // Check required images
  if (!coverImage) {
    completenessErrors.push('Cover image is required');
  }
  
  if (!exteriorImages || exteriorImages.length < REQUIRED_IMAGE_CATEGORIES.exterior) {
    completenessErrors.push(`At least ${REQUIRED_IMAGE_CATEGORIES.exterior} exterior images are required`);
  }
  
  if (!interiorImages || interiorImages.length < REQUIRED_IMAGE_CATEGORIES.interior) {
    completenessErrors.push(`At least ${REQUIRED_IMAGE_CATEGORIES.interior} interior images are required`);
  }
  
  if (!dashboardImages || dashboardImages.length < REQUIRED_IMAGE_CATEGORIES.dashboard) {
    completenessErrors.push(`At least ${REQUIRED_IMAGE_CATEGORIES.dashboard} dashboard image is required`);
  }
  
  // Check location completeness
  if (!location || !location.address || !location.city || !location.coordinates) {
    completenessErrors.push('Complete location information is required');
  }
  
  // Check VIN
  if (!vin || vin.length !== 17) {
    completenessErrors.push('Valid VIN is required');
  }
  
  if (completenessErrors.length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Listing incomplete',
      details: completenessErrors,
      suggestions: [
        'Upload photos from all required angles',
        'Provide complete location information',
        'Ensure VIN is valid and unique'
      ]
    });
  }
  
  next();
};

export const checkDuplicateVIN = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { vin } = req.body;
    const { EnhancedVehicle } = await import('../models/EnhancedVehicle');
    
    if (vin) {
      const existingVehicle = await EnhancedVehicle.findOne({ where: { vin } });
      
      if (existingVehicle) {
        return res.status(400).json({
          success: false,
          error: 'Vehicle with this VIN already exists',
          details: 'Each vehicle can only be listed once'
        });
      }
    }
    
    next();
  } catch (error) {
    logger.error('Error checking VIN uniqueness:', error);
    next(error);
  }
};

export const checkHostVerification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.id;
    const { User } = await import('../models');
    
    if (userId) {
      const user = await User.findByPk(userId);
      
      if (!user || !user.isVerified) {
        return res.status(403).json({
          success: false,
          error: 'Host verification required',
          details: 'You must be a verified host to create listings'
        });
      }
    }
    
    next();
  } catch (error) {
    logger.error('Error checking host verification:', error);
    next(error);
  }
};

export const rateLimitListingCreation = (req: Request, res: Response, next: NextFunction) => {
  // Simple rate limiting - in production, use Redis or similar
  const userId = (req as any).user?.id;
  const now = Date.now();
  
  if (!req.app.locals.listingRateLimit) {
    req.app.locals.listingRateLimit = new Map();
  }
  
  const userLimit = req.app.locals.listingRateLimit.get(userId);
  
  if (userLimit) {
    const timeDiff = now - userLimit.lastListing;
    const maxListingInterval = 5 * 60 * 1000; // 5 minutes
    
    if (timeDiff < maxListingInterval) {
      return res.status(429).json({
        success: false,
        error: 'Rate limit exceeded',
        details: 'Please wait before creating another listing',
        retryAfter: Math.ceil((maxListingInterval - timeDiff) / 1000)
      });
    }
  }
  
  req.app.locals.listingRateLimit.set(userId, { lastListing: now });
  next();
};
