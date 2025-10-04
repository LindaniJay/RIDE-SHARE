import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';
import { Listing, User, AdminLog } from '../models';
import { Op } from 'sequelize';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Configure multer for vehicle image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/vehicles';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req: any, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `vehicle-${req.user?.id || 'unknown'}-${uniqueSuffix}${path.extname(file.originalname)}`);
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
const createVehicleSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1000),
  make: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  year: z.number().min(1900).max(new Date().getFullYear() + 1),
  vehicle_type: z.enum(['car', 'suv', 'bakkie', 'van', 'motorcycle', 'truck']),
  category: z.enum(['economy', 'compact', 'mid_size', 'full_size', 'premium', 'luxury', 'sports']),
  price_per_day: z.number().min(0),
  price_per_week: z.number().min(0).optional(),
  price_per_month: z.number().min(0).optional(),
  location: z.object({
    city: z.string(),
    province: z.string(),
    latitude: z.number().optional(),
    longitude: z.number().optional()
  }),
  features: z.array(z.string()).optional(),
  minimum_rental_days: z.number().min(1).optional(),
  maximum_rental_days: z.number().min(1).optional(),
  fuel_type: z.enum(['petrol', 'diesel', 'electric', 'hybrid']).optional(),
  transmission: z.enum(['manual', 'automatic', 'semi_automatic']).optional(),
  seats: z.number().min(1).optional(),
  mileage: z.number().min(0).optional(),
  color: z.string().optional(),
  license_plate: z.string().optional()
});

const updateVehicleStatusSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected']),
  reason: z.string().optional()
});

const searchVehiclesSchema = z.object({
  query: z.string().optional(),
  location: z.string().optional(),
  vehicle_type: z.string().optional(),
  category: z.string().optional(),
  min_price: z.number().optional(),
  max_price: z.number().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional()
});

// GET /api/vehicles - Search vehicles (only approved)
router.get('/', async (req, res) => {
  try {
    console.log('Vehicles endpoint called');
    
    const {
      query,
      location,
      vehicle_type,
      category,
      min_price,
      max_price,
      start_date,
      end_date,
      page = 1,
      limit = 20
    } = searchVehiclesSchema.parse(req.query);

    const offset = (page - 1) * limit;
    const whereClause: any = {
      status: 'approved', // Only show approved vehicles
      approval_status: 'approved'
    };

    // Search by query
    if (query) {
      whereClause[Op.or] = [
        { title: { [Op.iLike]: `%${query}%` } },
        { description: { [Op.iLike]: `%${query}%` } },
        { make: { [Op.iLike]: `%${query}%` } },
        { model: { [Op.iLike]: `%${query}%` } }
      ];
    }

    // Filter by location
    if (location) {
      whereClause['location.city'] = { [Op.iLike]: `%${location}%` };
    }

    // Filter by vehicle type
    if (vehicle_type) {
      whereClause.vehicle_type = vehicle_type;
    }

    // Filter by category
    if (category) {
      whereClause.category = category;
    }

    // Filter by price range
    if (min_price !== undefined) {
      whereClause.price_per_day = { [Op.gte]: min_price };
    }
    if (max_price !== undefined) {
      whereClause.price_per_day = { [Op.lte]: max_price };
    }

    const { count, rows: vehicles } = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['createdAt', 'DESC']],
      limit,
      offset
    });

    // Format response for frontend
    const formattedVehicles = vehicles.map(vehicle => ({
      id: vehicle.id,
      title: vehicle.title,
      description: vehicle.description,
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
      vehicle_type: vehicle.vehicle_type,
      category: vehicle.category,
      price_per_day: vehicle.price_per_day,
      price_per_week: vehicle.price_per_week,
      price_per_month: vehicle.price_per_month,
      location: vehicle.location,
      images: vehicle.images,
      features: vehicle.features,
      host: (vehicle as any).host,
      status: vehicle.status,
      rating: vehicle.rating || 4.5,
      total_bookings: vehicle.total_bookings || 0,
      created_at: vehicle.createdAt
    }));

    res.json({
      success: true,
      vehicles: formattedVehicles,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil(count / limit)
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
});

// GET /api/vehicles/:id - Get vehicle by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await Listing.findByPk(id, {
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number'] 
        }
      ]
    });

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    // Only show approved vehicles to public
    if (vehicle.status !== 'approved' || vehicle.approval_status !== 'approved') {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.json({
      success: true,
      vehicle: {
        id: vehicle.id,
        title: vehicle.title,
        description: vehicle.description,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        vehicle_type: vehicle.vehicle_type,
        category: vehicle.category,
        price_per_day: vehicle.price_per_day,
        price_per_week: vehicle.price_per_week,
        price_per_month: vehicle.price_per_month,
        location: vehicle.location,
        images: vehicle.images,
        features: vehicle.features,
        host: (vehicle as any).host,
        status: vehicle.status,
        rating: vehicle.rating || 4.5,
        total_bookings: vehicle.total_bookings || 0,
        created_at: vehicle.createdAt
      }
    });
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/vehicles - Create vehicle listing (host only)
router.post('/', authenticateToken, upload.array('images', 5), async (req: AuthRequest, res) => {
  try {
    console.log('Vehicle creation request received');
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);
    
    const user_id = req.user?.id;
    if (!user_id) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Check if user is a host
    const user = await User.findByPk(user_id);
    if (!user || user.role !== 'host') {
      return res.status(403).json({ error: 'Only hosts can create vehicle listings' });
    }

    // Parse FormData fields
    const vehicleData = {
      title: req.body.title,
      description: req.body.description,
      make: req.body.make,
      model: req.body.model,
      year: parseInt(req.body.year),
      vehicle_type: req.body.vehicle_type,
      category: req.body.category,
      price_per_day: parseFloat(req.body.price_per_day),
      price_per_week: req.body.price_per_week ? parseFloat(req.body.price_per_week) : undefined,
      price_per_month: req.body.price_per_month ? parseFloat(req.body.price_per_month) : undefined,
      location: JSON.parse(req.body.location),
      features: req.body.features ? JSON.parse(req.body.features) : [],
      minimum_rental_days: req.body.minimum_rental_days ? parseInt(req.body.minimum_rental_days) : undefined,
      maximum_rental_days: req.body.maximum_rental_days ? parseInt(req.body.maximum_rental_days) : undefined,
      fuel_type: req.body.fuel_type || 'petrol',
      transmission: req.body.transmission || 'manual',
      seats: req.body.seats ? parseInt(req.body.seats) : undefined,
      mileage: req.body.mileage ? parseInt(req.body.mileage) : undefined,
      color: req.body.color,
      license_plate: req.body.license_plate
    };

    // Validate the parsed data
    console.log('Parsed vehicle data:', vehicleData);
    const validatedData = createVehicleSchema.parse(vehicleData);
    console.log('Validated data:', validatedData);
    const uploadedFiles = req.files as Express.Multer.File[];

    // Process uploaded images
    const imageUrls = uploadedFiles.map(file => `/uploads/vehicles/${file.filename}`);

    const vehicle = await Listing.create({
      host_id: user_id,
      title: validatedData.title,
      description: validatedData.description,
      make: validatedData.make,
      model: validatedData.model,
      year: validatedData.year,
      vehicle_type: validatedData.vehicle_type,
      category: validatedData.category,
      price_per_day: validatedData.price_per_day,
      price_per_week: validatedData.price_per_week,
      price_per_month: validatedData.price_per_month,
      location: validatedData.location,
      images: imageUrls,
      features: validatedData.features || [],
      minimum_rental_days: validatedData.minimum_rental_days || 1,
      maximum_rental_days: validatedData.maximum_rental_days,
      fuel_type: validatedData.fuel_type || 'petrol',
      transmission: validatedData.transmission || 'manual',
      seats: validatedData.seats || 5,
      mileage: validatedData.mileage,
      color: validatedData.color,
      license_plate: validatedData.license_plate,
      status: 'pending', // Default to pending for admin approval
      approval_status: 'pending',
      is_featured: false,
      total_bookings: 0,
      total_earnings: 0
    });

    // Log admin action
    await AdminLog.create({
      user_id: user_id,
      action: 'vehicle_listing_created',
      details: {
        vehicle_id: vehicle.id,
        title: vehicle.title,
        status: 'pending'
      }
    });

    res.status(201).json({
      success: true,
      message: 'Vehicle listing created successfully. Awaiting admin approval.',
      vehicle: {
        id: vehicle.id,
        title: vehicle.title,
        status: vehicle.status,
        approval_status: vehicle.approval_status
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error creating vehicle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PATCH /api/vehicles/:id/status - Update vehicle status (admin only)
router.patch('/:id/status', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = updateVehicleStatusSchema.parse(req.body);
    const admin_id = req.user?.id;

    const vehicle = await Listing.findByPk(id, {
      include: [{ model: User, as: 'host' }]
    });

    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }

    // Update vehicle status
    await vehicle.update({
      status: status,
      approval_status: status,
      ...(status === 'rejected' && reason && { rejection_reason: reason })
    });

    // Log admin action
    await AdminLog.create({
      user_id: admin_id,
      action: `vehicle_${status}`,
      details: {
        vehicle_id: vehicle.id,
        title: vehicle.title,
        host_id: vehicle.host_id,
        status: status,
        reason: reason
      }
    });

    res.json({
      success: true,
      message: `Vehicle ${status} successfully`,
      vehicle: {
        id: vehicle.id,
        title: vehicle.title,
        status: vehicle.status,
        approval_status: vehicle.approval_status,
        rejection_reason: (vehicle as any).rejection_reason
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    console.error('Error updating vehicle status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/vehicles/admin/pending - Get pending vehicles (admin only)
router.get('/admin/pending', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: vehicles } = await Listing.findAndCountAll({
      where: {
        status: 'pending',
        approval_status: 'pending'
      },
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['createdAt', 'ASC']], // Oldest first for admin review
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      vehicles: vehicles.map(vehicle => ({
        id: vehicle.id,
        title: vehicle.title,
        description: vehicle.description,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        price_per_day: vehicle.price_per_day,
        location: vehicle.location,
        images: vehicle.images,
        host: (vehicle as any).host,
        status: vehicle.status,
        approval_status: vehicle.approval_status,
        created_at: vehicle.createdAt
      })),
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching pending vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/vehicles/host/:hostId - Get host's vehicles
router.get('/host/:hostId', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { hostId } = req.params;
    const user_id = req.user?.id;

    // Check if user is accessing their own vehicles or is admin
    if (user_id !== hostId && req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const vehicles = await Listing.findAll({
      where: { host_id: hostId },
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      vehicles: vehicles.map(vehicle => ({
        id: vehicle.id,
        title: vehicle.title,
        description: vehicle.description,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        price_per_day: vehicle.price_per_day,
        location: vehicle.location,
        images: vehicle.images,
        status: vehicle.status,
        approval_status: vehicle.approval_status,
        rejection_reason: (vehicle as any).rejection_reason,
        created_at: vehicle.createdAt
      }))
    });
  } catch (error) {
    console.error('Error fetching host vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
