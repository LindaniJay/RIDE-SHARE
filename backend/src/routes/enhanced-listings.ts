import express from 'express';
import { z } from 'zod';
import { Op } from 'sequelize';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { cacheService } from '../services/cache';
import { sequelize } from '../config/database';

const router = express.Router();

// Enhanced validation schemas
const createListingSchema = z.object({
  title: z.string().min(1).max(100),
  make: z.string().min(1).max(50),
  model: z.string().min(1).max(50),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  vehicle_type: z.enum(['car', 'bakkie', 'truck', 'motorcycle', 'van', 'suv']),
  category: z.enum(['economy', 'compact', 'mid_size', 'full_size', 'premium', 'luxury', 'sports']).optional(),
  transmission: z.enum(['manual', 'automatic']),
  fuel_type: z.enum(['petrol', 'diesel', 'electric']),
  seats: z.number().int().min(1).max(50),
  features: z.array(z.string()).optional(),
  price_per_day: z.number().int().min(0).max(10000),
  location: z.object({
    city: z.string(),
    province: z.string(),
    address: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }),
  images: z.array(z.string().url()).optional(),
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
      whereClause.approval_status = 'approved';
    }
    
    // Enhanced search functionality
    if (searchTerm) {
      (whereClause as any)[Op.or] = [
        { title: { [Op.like]: `%${searchTerm}%` } },
        { make: { [Op.like]: `%${searchTerm}%` } },
        { model: { [Op.like]: `%${searchTerm}%` } },
        { location: { [Op.like]: `%${searchTerm}%` } },
        { description: { [Op.like]: `%${searchTerm}%` } },
      ];
    }
    
    // Price filtering
    if (minPriceNum || maxPriceNum) {
      whereClause.price_per_day = {} as Record<string, unknown>;
      if (minPriceNum) (whereClause.price_per_day as any)[Op.gte] = Number(minPriceNum);
      if (maxPriceNum) (whereClause.price_per_day as any)[Op.lte] = Number(maxPriceNum);
    }
    
    // Location filtering - simplified for SQLite compatibility
    if (locationStr) {
      // Simple string matching for SQLite compatibility
      whereClause.location = { [Op.like]: `%${locationStr}%` };
    }
    
    // Geographic search - disabled for SQLite compatibility
    // Note: Geographic search requires PostGIS or similar spatial extensions
    // For now, we'll rely on location string matching
    
    // Type filtering
    if (typeStr) {
      whereClause.vehicle_type = typeStr;
    }
    
    // Status filtering
    if (statusStr) {
      whereClause.status = statusStr;
    }
    
    // Feature filtering - simplified for SQLite
    if (featuresStr) {
      const featureArray = Array.isArray(featuresStr) ? featuresStr : [featuresStr];
      // Use LIKE for SQLite compatibility instead of JSON contains
      whereClause.features = { [Op.like]: `%${featureArray[0]}%` };
    }
    
    // Transmission filtering
    if (transmissionStr) {
      whereClause.transmission = transmissionStr;
    }
    
    // Fuel type filtering
    if (fuelTypeStr) {
      whereClause.fuel_type = fuelTypeStr;
    }
    
    // Seats filtering
    if (seatsNum) {
      whereClause.seats = { [Op.gte]: Number(seatsNum) };
    }
    
    // Sorting options
    const orderOptions: [string, string][] = [];
    if (sortBy === 'price') {
      orderOptions.push(['price_per_day', sortOrder as string]);
    } else if (sortBy === 'rating') {
      orderOptions.push(['rating', sortOrder as string]);
    } else if (sortBy === 'distance' && latitude && longitude) {
      // For distance sorting, we'd need to calculate distance in the query
      // This is a simplified version
      orderOptions.push(['createdAt', 'DESC']);
    } else {
      orderOptions.push([sortBy as string, sortOrder as string]);
    }
    
    const listings = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
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
      isNew: new Date(listing.created_at || listing.createdAt || new Date()).getTime() > Date.now() - (7 * 24 * 60 * 60 * 1000), // 7 days
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
  return types.map(t => (t as any).type);
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
      [sequelize.fn('MIN', sequelize.col('price_per_day')), 'min'],
      [sequelize.fn('MAX', sequelize.col('price_per_day')), 'max']
    ],
    raw: true
  });
  return result[0];
}

// Enhanced listing creation with validation
router.post('/', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const listingData = createListingSchema.parse(req.body);
    
    // Additional business logic validation
    if (listingData.price_per_day < 50) {
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
      hostId: Number(req.user!.id) || 0,
      pricePerDay: listingData.price_per_day,
      image: listingData.images?.[0] || '/uploads/default-vehicle.jpg',
      city: listingData.location?.city || 'Unknown',
      status: 'pending', // Requires approval
      approval_status: 'pending',
      features: listingData.features || [], // Ensure features is always an array
      images: listingData.images || [], // Ensure images is always an array
      is_featured: false,
      total_bookings: 0,
      total_earnings: 0,
      minimum_rental_days: 1,
      category: listingData.category || 'economy',
      mileage: (listingData as any).mileage || 0, // Add required mileage field
      location: typeof listingData.location === 'string' 
        ? listingData.location 
        : `${listingData.location.address || ''}, ${listingData.location.city}, ${listingData.location.province}`,
      // All other fields are already correctly named in the schema
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
router.put('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = updateListingSchema.parse(req.body);
    
    const listing = await Listing.findByPk(id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    // Check ownership
    if (listing.host_id !== Number(req.user!.id) && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }
    
    // Convert location object to string if needed
    if (updateData.location && typeof updateData.location === 'object') {
      (updateData as any).location = `${updateData.location.address || ''}, ${updateData.location.city}, ${updateData.location.province}`;
    }

    await listing.update(updateData as any);
    
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

