import express from 'express';
import multer from 'multer';
import { Listing as Vehicle } from '../models/Listing';
import Image from '../models/Image';
import { verifyFirebaseToken, requireRole, AuthenticatedRequest } from '../middleware/auth';
import path from 'path';
import { logger } from '../utils/logger';

const router = express.Router();
const uploadPath = process.env.UPLOADS_PATH || path.join(process.cwd(), 'uploads');
const storage = multer.diskStorage({ 
  destination: uploadPath, 
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`) 
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// create vehicle (host)
router.post('/', verifyFirebaseToken, requireRole(['host', 'admin']), upload.array('images', 6), async (req: AuthenticatedRequest, res) => {
  try {
    const { title, description, pricePerDay } = req.body;
    
    if (!title || !description || !pricePerDay) {
      return res.status(400).json({ 
        message: 'Missing required fields', 
        error: 'Title, description, and pricePerDay are required' 
      });
    }

    // derive image URLs from uploaded files (multer has already stored them)
    const files = (req.files && Array.isArray(req.files)) ? (req.files as any[]) : [];
    const urls = files.map((f: any) => `/uploads/${path.basename(f.path)}`);
    const imageUrl = urls[0] || '/uploads/placeholder.png';
    const city = (req.body.city as string) || 'Unknown';

    // create vehicle with default status PENDING and ensure required camelCase fields are present
    const vehicle = await Vehicle.create({ 
      title, 
      description, 
      // required camelCase fields
      pricePerDay: Number(pricePerDay),
      hostId: Number(req.user!.id) || 0,
      image: imageUrl,
      city,
      // keep snake_case fields for compatibility
      price_per_day: pricePerDay, 
      host_id: Number(req.user!.id) || 0,
      make: 'Unknown',
      model: 'Unknown',
      year: new Date().getFullYear(),
      vehicle_type: 'car',
      category: 'economy',
      location: 'Default Location',
      images: urls,
      features: [],
      minimum_rental_days: 1,
      fuel_type: 'petrol',
      transmission: 'manual',
      seats: 5,
      status: 'pending',
      approval_status: 'pending',
      is_featured: false,
      total_bookings: 0,
      total_earnings: 0
    });

    if (urls.length > 0) {
      await Promise.all(urls.map(u => Image.create({ listingId: vehicle.id, url: u })));
    }

    logger.info(`Vehicle created by user ${req.user!.id}: ${vehicle.id}`);
    res.status(201).json({ 
      message: 'Vehicle created successfully',
      vehicle 
    });
  } catch (err) { 
    logger.error('Error creating vehicle:', err);
    res.status(500).json({ 
      message: 'Internal Server Error', 
      error: err instanceof Error ? err.message : 'Unknown error' 
    });
  }
});

// search - only approved unless explicitly asked
router.get('/', async (req: AuthenticatedRequest, res) => {
  try {
    const status = (req.query.status as string) || 'APPROVED';
    const where: any = {};
    if (status) where.status = status.toUpperCase();
    
    const vehicles = await Vehicle.findAll({ 
      where, 
      include: [{ model: Image, as: 'imageList' }] 
    });
    
    logger.info(`Retrieved ${vehicles.length} vehicles with status: ${status}`);
    res.json({ 
      message: 'Vehicles retrieved successfully',
      vehicles 
    });
  } catch (err) { 
    logger.error('Error retrieving vehicles:', err);
    res.status(500).json({ 
      message: 'Internal Server Error', 
      error: err instanceof Error ? err.message : 'Unknown error' 
    });
  }
});

export default router;

