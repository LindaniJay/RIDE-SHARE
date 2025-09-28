import express from 'express';
import { z } from 'zod';
import { Op } from 'sequelize';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { authenticateToken, AuthRequest } from '../middlewares/auth';
import { cacheService } from '../services/cache';
import { sequelize } from '../config/database';

const router = express.Router();

// Enhanced validation schemas
const createListingSchema = z.object({
  title: z.string().min(1).max(100),
  make: z.string().min(1).max(50),
  model: z.string().min(1).max(50),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  type: z.enum(['car', 'trailer', 'bakkie', 'truck', 'motorcycle', 'van', 'suv']),
  transmission: z.enum(['manual', 'automatic']),
  fuelType: z.enum(['petrol', 'diesel', 'electric']),
  seats: z.number().int().min(1).max(50),
  features: z.array(z.string()).optional(),
  pricePerDay: z.number().int().min(0).max(10000),
  location: z.string().min(1).max(100),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  images: z.array(z.string().url()).optional(),
  availability: z.any().optional(),
  description: z.string().min(10).max(1000).optional(),
});

const updateListingSchema = createListingSchema.partial();

// Enhanced search with caching
router.get('/', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      search, 
      minPrice, 
      maxPrice, 
      location, 
      type, 
      status,
      sortBy = 'createdAt',
      sortOrder = 'DESC',
      features,
      transmission,
      fuelType,
      seats,
      latitude,
      longitude,
      radius = 50 // km
    } = req.query;
    
    // Type-safe query parameter extraction
    const searchTerm = typeof search === 'string' ? search : undefined;
    const minPriceNum = typeof minPrice === 'string' ? minPrice : undefined;
    const maxPriceNum = typeof maxPrice === 'string' ? maxPrice : undefined;
    const locationStr = typeof location === 'string' ? location : undefined;
    const typeStr = typeof type === 'string' ? type : undefined;
    const statusStr = typeof status === 'string' ? status : undefined;
    const featuresStr = typeof features === 'string' ? features : undefined;
    const transmissionStr = typeof transmission === 'string' ? transmission : undefined;
    const fuelTypeStr = typeof fuelType === 'string' ? fuelType : undefined;
    const seatsNum = typeof seats === 'string' ? seats : undefined;
    const latitudeNum = typeof latitude === 'string' ? latitude : undefined;
    const longitudeNum = typeof longitude === 'string' ? longitude : undefined;
    const radiusNum = typeof radius === 'string' ? radius : undefined;
    
    // Create cache key
    const cacheKey = `listings:${JSON.stringify(req.query)}`;
    
    // Try to get from cache first
    const cachedResult = await cacheService.get(cacheKey);
    if (cachedResult) {
      return res.json(JSON.parse(cachedResult));
    }
    
    const offset = (Number(page) - 1) * Number(limit);
    const whereClause: Record<string, unknown> = {};
    
    // Only show approved listings to public
    if (!req.query.admin) {
      whereClause.status = 'approved';
    }
    
    // Enhanced search functionality
    if (searchTerm) {
      (whereClause as any)[Op.or] = [
        { title: { [Op.iLike]: `%${searchTerm}%` } },
        { make: { [Op.iLike]: `%${searchTerm}%` } },
        { model: { [Op.iLike]: `%${searchTerm}%` } },
        { location: { [Op.iLike]: `%${searchTerm}%` } },
        { description: { [Op.iLike]: `%${searchTerm}%` } },
      ];
    }
    
    // Price filtering
    if (minPriceNum || maxPriceNum) {
      whereClause.pricePerDay = {} as Record<string, unknown>;
      if (minPriceNum) (whereClause.pricePerDay as Record<string, unknown>)[Op.gte] = Number(minPriceNum);
      if (maxPriceNum) (whereClause.pricePerDay as Record<string, unknown>)[Op.lte] = Number(maxPriceNum);
    }
    
    // Location filtering
    if (locationStr) {
      whereClause.location = { [Op.iLike]: `%${locationStr}%` };
    }
    
    // Geographic search
    if (latitudeNum && longitudeNum) {
      const lat = Number(latitudeNum);
      const lng = Number(longitudeNum);
      const rad = Number(radiusNum || 50);
      
      // Simple bounding box search (for production, use PostGIS or similar)
      const latRange = rad / 111; // Rough conversion: 1 degree ≈ 111 km
      const lngRange = rad / (111 * Math.cos(lat * Math.PI / 180));
      
      whereClause.latitude = {
        [Op.between]: [lat - latRange, lat + latRange]
      };
      whereClause.longitude = {
        [Op.between]: [lng - lngRange, lng + lngRange]
      };
    }
    
    // Type filtering
    if (typeStr) {
      whereClause.type = typeStr;
    }
    
    // Status filtering
    if (statusStr) {
      whereClause.status = statusStr;
    }
    
    // Feature filtering
    if (featuresStr) {
      const featureArray = Array.isArray(featuresStr) ? featuresStr : [featuresStr];
      whereClause.features = {
        [Op.contains]: featureArray
      };
    }
    
    // Transmission filtering
    if (transmissionStr) {
      whereClause.transmission = transmissionStr;
    }
    
    // Fuel type filtering
    if (fuelTypeStr) {
      whereClause.fuelType = fuelTypeStr;
    }
    
    // Seats filtering
    if (seatsNum) {
      whereClause.seats = { [Op.gte]: Number(seatsNum) };
    }
    
    // Sorting options
    const orderOptions: [string, string][] = [];
    if (sortBy === 'price') {
      orderOptions.push(['pricePerDay', sortOrder]);
    } else if (sortBy === 'rating') {
      orderOptions.push(['averageRating', sortOrder]);
    } else if (sortBy === 'distance' && latitude && longitude) {
      // For distance sorting, we'd need to calculate distance in the query
      // This is a simplified version
      orderOptions.push(['createdAt', 'DESC']);
    } else {
      orderOptions.push([sortBy, sortOrder]);
    }
    
    const listings = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'rating', 'profileImage'],
        },
      ],
      limit: Number(limit),
      offset,
      order: orderOptions,
    });
    
    // Calculate additional metrics
    const enhancedListings = listings.rows.map(listing => ({
      ...listing.toJSON(),
      // Add calculated fields
      isNew: new Date(listing.createdAt).getTime() > Date.now() - (7 * 24 * 60 * 60 * 1000), // 7 days
      discountPercentage: 0, // No original price field in current model
      // Add distance if coordinates provided (using location string for now)
      distance: null // Distance calculation would need geocoding service
    }));
    
    const result = {
      listings: enhancedListings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: listings.count,
        pages: Math.ceil(listings.count / Number(limit)),
        hasNext: Number(page) * Number(limit) < listings.count,
        hasPrev: Number(page) > 1,
      },
      filters: {
        applied: Object.keys(req.query).length,
        available: {
          types: await getAvailableTypes(),
          locations: await getAvailableLocations(),
          priceRange: await getPriceRange(),
        }
      }
    };
    
    // Cache the result for 5 minutes
    await cacheService.set(cacheKey, JSON.stringify(result), 300);
    
    res.json(result);
  } catch (error) {
    console.error('Enhanced listings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Helper function to calculate distance between two coordinates (currently unused)
// function _calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
//   const R = 6371; // Earth's radius in kilometers
//   const dLat = (lat2 - lat1) * Math.PI / 180;
//   const dLon = (lon2 - lon1) * Math.PI / 180;
//   const a = 
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   return R * c;
// }

// Helper functions for filter options
async function getAvailableTypes() {
  const types = await Listing.findAll({
    attributes: ['type'],
    group: ['type'],
    raw: true
  });
  return types.map(t => t.type);
}

async function getAvailableLocations() {
  const locations = await Listing.findAll({
    attributes: ['location'],
    group: ['location'],
    limit: 20,
    raw: true
  });
  return locations.map(l => l.location);
}

async function getPriceRange() {
  const result = await Listing.findAll({
    attributes: [
      [sequelize.fn('MIN', sequelize.col('pricePerDay')), 'min'],
      [sequelize.fn('MAX', sequelize.col('pricePerDay')), 'max']
    ],
    raw: true
  });
  return result[0];
}

// Enhanced listing creation with validation
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const listingData = createListingSchema.parse(req.body);
    
    // Additional business logic validation
    if (listingData.pricePerDay < 50) {
      return res.status(400).json({ 
        error: 'Price too low', 
        message: 'Minimum price per day is R50' 
      });
    }
    
    if (listingData.year < 2000) {
      return res.status(400).json({ 
        error: 'Vehicle too old', 
        message: 'Vehicles must be from 2000 or newer' 
      });
    }
    
    const listing = await Listing.create({
      ...listingData,
      hostId: req.user!.id,
      status: 'pending', // Requires approval
      features: listingData.features || [], // Ensure features is always an array
      images: listingData.images || [], // Ensure images is always an array
    });
    
    // Clear relevant caches
    await cacheService.del('listings:*');
    
    res.status(201).json(listing);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.errors 
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Enhanced listing update
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = updateListingSchema.parse(req.body);
    
    const listing = await Listing.findByPk(id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    // Check ownership
    if (listing.hostId !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    
    await listing.update(updateData);
    
    // Clear relevant caches
    await cacheService.del('listings:*');
    
    res.json(listing);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation error', 
        details: error.errors 
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
