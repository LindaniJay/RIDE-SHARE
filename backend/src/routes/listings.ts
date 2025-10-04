import express from 'express';
import { z } from 'zod';
import { Op } from 'sequelize';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { authenticateToken, AuthRequest } from '../middlewares/auth';

const router = express.Router();

// Validation schemas
const createListingSchema = z.object({
  title: z.string().min(1),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  type: z.enum(['car', 'trailer', 'bakkie', 'truck', 'motorcycle', 'van', 'suv']),
  transmission: z.enum(['manual', 'automatic']),
  fuelType: z.enum(['petrol', 'diesel', 'electric']),
  seats: z.number().int().min(1),
  features: z.array(z.string()).optional(),
  pricePerDay: z.number().int().min(0),
  location: z.string().min(1),
  images: z.array(z.string()).optional(),
  availability: z.any().optional(),
});

const updateListingSchema = createListingSchema.partial();

const approveListingSchema = z.object({
  status: z.enum(['approved', 'declined']),
  declineReason: z.string().optional(),
});

// Get all listings (public)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search, minPrice, maxPrice, location, type, status } = req.query;
    
    // Type-safe query parameter extraction
    const searchTerm = typeof search === 'string' ? search : undefined;
    const minPriceNum = typeof minPrice === 'string' ? minPrice : undefined;
    const maxPriceNum = typeof maxPrice === 'string' ? maxPrice : undefined;
    const locationStr = typeof location === 'string' ? location : undefined;
    const typeStr = typeof type === 'string' ? type : undefined;
    const statusStr = typeof status === 'string' ? status : undefined;
    
    const offset = (Number(page) - 1) * Number(limit);
    const whereClause: Record<string, unknown> = {};
    
    // Only show approved listings to public
    if (!req.query.admin) {
      whereClause.status = 'approved';
    }
    
    if (searchTerm) {
      (whereClause as any)[Op.or] = [
        { title: { [Op.like]: `%${searchTerm}%` } },
        { make: { [Op.like]: `%${searchTerm}%` } },
        { model: { [Op.like]: `%${searchTerm}%` } },
        { location: { [Op.like]: `%${searchTerm}%` } },
      ];
    }
    
    if (minPriceNum) {
      whereClause.pricePerDay = { ...(whereClause.pricePerDay as Record<string, unknown>), [Op.gte]: Number(minPriceNum) };
    }
    
    if (maxPriceNum) {
      whereClause.pricePerDay = { ...(whereClause.pricePerDay as Record<string, unknown>), [Op.lte]: Number(maxPriceNum) };
    }
    
    if (locationStr) {
      whereClause.location = { [Op.like]: `%${locationStr}%` };
    }
    
    if (typeStr) {
      whereClause.type = typeStr;
    }
    
    if (statusStr) {
      whereClause.status = statusStr;
    }
    
    const listings = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'name', 'email', 'phoneNumber'],
        },
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      listings: listings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: listings.count,
        pages: Math.ceil(listings.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'name', 'email', 'phoneNumber'],
        },
      ],
    });
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    res.json(listing);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create listing (host only)
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'host') {
      return res.status(403).json({ error: 'Only hosts can create listings' });
    }
    
    const listingData = createListingSchema.parse(req.body);
    
    const listing = await Listing.create({
      ...listingData,
      host_id: req.user!.id,
      features: listingData.features || [],
      images: listingData.images || [],
      // availability: listingData.availability || { available: true, blockedDates: [] }, // Field doesn't exist in model
      status: 'pending',
      approval_status: 'pending',
      is_featured: false,
      total_bookings: 0,
      total_earnings: 0,
      minimum_rental_days: 1,
      category: 'economy',
      vehicle_type: listingData.type === 'trailer' ? 'truck' : listingData.type, // Map type to vehicle_type, handle trailer
      price_per_day: listingData.pricePerDay || 0,
      fuel_type: listingData.fuelType || 'petrol',
      transmission: listingData.transmission || 'manual',
      seats: listingData.seats || 4,
    });
    
    res.status(201).json(listing);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update listing (host only)
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    if (listing.host_id !== req.user!.id) {
      return res.status(403).json({ error: 'You can only update your own listings' });
    }
    
    const updateData = updateListingSchema.parse(req.body);
    
    await listing.update(updateData);
    
    res.json(listing);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Approve/Decline listing (admin only)
router.put('/:id/approve', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Only admins can approve listings' });
    }
    
    const listing = await Listing.findByPk(req.params.id);
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    const approvalData = approveListingSchema.parse(req.body);
    
    await listing.update({
      ...approvalData,
      status: approvalData.status === 'declined' ? 'rejected' : approvalData.status
    });
    
    res.json(listing);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete listing (host only)
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const listing = await Listing.findByPk(req.params.id);
    
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    if (listing.host_id !== req.user!.id) {
      return res.status(403).json({ error: 'You can only delete your own listings' });
    }
    
    await listing.destroy();
    
    res.json({ message: 'Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get host's listings
router.get('/host/my-listings', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'host') {
      return res.status(403).json({ error: 'Only hosts can view their listings' });
    }
    
    const { page = 1, limit = 10, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const whereClause: Record<string, unknown> = { host_id: req.user!.id };
    if (status) {
      whereClause.status = status;
    }
    
    const listings = await Listing.findAndCountAll({
      where: whereClause,
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      listings: listings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: listings.count,
        pages: Math.ceil(listings.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get pending listings (admin only)
router.get('/admin/pending', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Only admins can view pending listings' });
    }
    
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const listings = await Listing.findAndCountAll({
      where: { status: 'pending' },
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'name', 'email', 'phoneNumber'],
        },
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      listings: listings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: listings.count,
        pages: Math.ceil(listings.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

