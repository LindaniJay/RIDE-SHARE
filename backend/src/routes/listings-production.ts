import express from 'express';
import { z } from 'zod';
import { Op } from 'sequelize';
import { Listing, User, Booking, Review } from '../models';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';

const router = express.Router();

// Validation schemas
const createListingSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().optional(),
  make: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  year: z.number().int().min(1900).max(new Date().getFullYear() + 1),
  vehicle_type: z.enum(['car', 'suv', 'bakkie', 'van', 'motorcycle', 'truck']),
  category: z.enum(['economy', 'compact', 'mid_size', 'full_size', 'premium', 'luxury', 'sports']),
  price_per_day: z.number().min(0),
  price_per_week: z.number().min(0).optional(),
  price_per_month: z.number().min(0).optional(),
  location: z.object({
    address: z.string(),
    city: z.string(),
    province: z.string(),
    postal_code: z.string().optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number()
    }).optional()
  }),
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
  features: z.array(z.string()).default([]),
  specifications: z.object({
    engine: z.string().optional(),
    transmission: z.string().optional(),
    fuel_capacity: z.string().optional(),
    towing_capacity: z.string().optional(),
    mileage: z.number().optional()
  }).optional(),
  minimum_rental_days: z.number().int().min(1).default(1),
  maximum_rental_days: z.number().int().min(1).optional(),
  fuel_type: z.enum(['petrol', 'diesel', 'electric', 'hybrid']).default('petrol'),
  transmission: z.enum(['manual', 'automatic', 'semi_automatic']).default('manual'),
  seats: z.number().int().min(1).max(50).default(5),
  mileage: z.number().int().min(0).optional(),
  color: z.string().max(50).optional(),
  license_plate: z.string().max(20).optional(),
  insurance_provider: z.string().max(100).optional(),
  insurance_policy_number: z.string().max(100).optional(),
  roadworthy_certificate: z.string().optional()
});

const updateListingSchema = createListingSchema.partial();

const searchListingsSchema = z.object({
  location: z.string().optional(),
  vehicle_type: z.enum(['car', 'suv', 'bakkie', 'van', 'motorcycle', 'truck']).optional(),
  category: z.enum(['economy', 'compact', 'mid_size', 'full_size', 'premium', 'luxury', 'sports']).optional(),
  min_price: z.number().min(0).optional(),
  max_price: z.number().min(0).optional(),
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  end_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  features: z.array(z.string()).optional(),
  fuel_type: z.enum(['petrol', 'diesel', 'electric', 'hybrid']).optional(),
  transmission: z.enum(['manual', 'automatic', 'semi_automatic']).optional(),
  min_seats: z.number().int().min(1).optional(),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(50).default(10),
  sort_by: z.enum(['price', 'rating', 'distance', 'created_at']).default('created_at'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

// Get all listings (public)
router.get('/', async (req, res) => {
  try {
    const query = searchListingsSchema.parse(req.query);
    const { 
      location, 
      vehicle_type, 
      category, 
      min_price, 
      max_price, 
      start_date, 
      end_date, 
      features, 
      fuel_type, 
      transmission, 
      min_seats,
      page, 
      limit, 
      sort_by, 
      sort_order 
    } = query;

    // Build where clause
    const whereClause: any = {
      status: 'approved',
      approval_status: 'approved'
    };

    if (vehicle_type) {
      whereClause.vehicle_type = vehicle_type;
    }

    if (category) {
      whereClause.category = category;
    }

    if (min_price !== undefined || max_price !== undefined) {
      whereClause.price_per_day = {};
      if (min_price !== undefined) {
        whereClause.price_per_day[Op.gte] = min_price;
      }
      if (max_price !== undefined) {
        whereClause.price_per_day[Op.lte] = max_price;
      }
    }

    if (fuel_type) {
      whereClause.fuel_type = fuel_type;
    }

    if (transmission) {
      whereClause.transmission = transmission;
    }

    if (min_seats) {
      whereClause.seats = { [Op.gte]: min_seats };
    }

    if (features && features.length > 0) {
      whereClause.features = { [Op.contains]: features };
    }

    // Handle date availability
    if (start_date && end_date) {
      const startDate = new Date(start_date);
      const endDate = new Date(end_date);

      // Find conflicting bookings
      const conflictingBookings = await Booking.findAll({
        where: {
          status: ['confirmed', 'approved', 'completed']
        },
        attributes: ['listing_id']
      });

      const conflictingListingIds = conflictingBookings
        .filter(booking => {
          const bookingStart = new Date(booking.start_date);
          const bookingEnd = new Date(booking.end_date);
          return (startDate < bookingEnd && endDate > bookingStart);
        })
        .map(booking => booking.listing_id);

      if (conflictingListingIds.length > 0) {
        whereClause.id = { [Op.notIn]: conflictingListingIds };
      }
    }

    // Handle location search
    if (location) {
      whereClause[Op.or] = [
        { 'location.city': { [Op.iLike]: `%${location}%` } },
        { 'location.province': { [Op.iLike]: `%${location}%` } },
        { 'location.address': { [Op.iLike]: `%${location}%` } }
      ];
    }

    const offset = (page - 1) * limit;

    // Build order clause
    let orderClause: any = [];
    switch (sort_by) {
      case 'price':
        orderClause = [['price_per_day', sort_order]];
        break;
      case 'rating':
        orderClause = [['rating', sort_order], ['total_bookings', 'desc']];
        break;
      case 'distance':
        // For now, just sort by created_at since we don't have user location
        orderClause = [['created_at', 'desc']];
        break;
      default:
        orderClause = [['created_at', sort_order]];
    }

    const { count, rows: listings } = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'rating'],
          where: { is_active: true }
        }
      ],
      order: orderClause,
      limit,
      offset
    });

    res.json({
      listings,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit)
      }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Get listings error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch listings'
    });
  }
});

// Get single listing
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findByPk(id, {
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email', 'phone_number', 'rating', 'created_at']
        },
        { 
          model: Review, 
          as: 'reviews',
          include: [
            { model: User, as: 'reviewer', attributes: ['id', 'first_name', 'last_name'] }
          ],
          where: { is_public: true },
          order: [['created_at', 'desc']],
          limit: 10
        }
      ]
    });

    if (!listing) {
      return res.status(404).json({
        error: 'Listing not found',
        message: 'The requested vehicle listing was not found'
      });
    }

    if (listing.status !== 'approved' || listing.approval_status !== 'approved') {
      return res.status(404).json({
        error: 'Listing not available',
        message: 'This listing is not currently available'
      });
    }

    res.json({ listing });

  } catch (error) {
    console.error('Get listing error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch listing'
    });
  }
});

// Create listing (host only)
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    // Verify user is a host
    const user = await User.findByPk(req.user!.id);
    if (!user || user.role !== 'host') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'Only hosts can create listings'
      });
    }

    if (user.approval_status !== 'approved') {
      return res.status(403).json({
        error: 'Account not approved',
        message: 'Your host account must be approved before creating listings'
      });
    }

    const listingData = createListingSchema.parse(req.body);

    const listing = await Listing.create({
      ...listingData,
      host_id: user.id,
      status: 'pending',
      approval_status: 'pending',
      is_featured: false,
      total_bookings: 0,
      total_earnings: 0
    });

    // Fetch the created listing with relations
    const createdListing = await Listing.findByPk(listing.id, {
      include: [
        { model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }
      ]
    });

    res.status(201).json({
      message: 'Listing created successfully',
      listing: createdListing
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Create listing error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create listing'
    });
  }
});

// Get host's listings
router.get('/host', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = { host_id: req.user!.id };
    if (status) whereClause.status = status;

    const { count, rows: listings } = await Listing.findAndCountAll({
      where: whereClause,
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      listings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching host listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get host's listings by host ID (for admin access)
router.get('/host/:hostId', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { hostId } = req.params;
    const { page = 1, limit = 20, status } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = { host_id: hostId };
    if (status) whereClause.status = status;

    const { count, rows: listings } = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      listings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching host listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Legacy route for backward compatibility
router.get('/host/my-listings', authenticateToken, async (req: AuthRequest, res) => {
  try {
    // Verify user is a host
    const user = await User.findByPk(req.user!.id);
    if (!user || user.role !== 'host') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'Only hosts can access this endpoint'
      });
    }

    const { status, page = 1, limit = 10 } = req.query;
    
    const whereClause: any = { host_id: user.id };
    if (status) {
      whereClause.status = status;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: listings } = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }
      ],
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      listings,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });

  } catch (error) {
    console.error('Get host listings error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch host listings'
    });
  }
});

// Update listing
router.put('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const updateData = updateListingSchema.parse(req.body);

    const listing = await Listing.findByPk(id);
    if (!listing) {
      return res.status(404).json({
        error: 'Listing not found',
        message: 'The requested listing was not found'
      });
    }

    // Check permissions
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const canUpdate = 
      listing.host_id === user.id || 
      user.role === 'admin';

    if (!canUpdate) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to update this listing'
      });
    }

    // Update listing
    await listing.update(updateData);

    // Fetch updated listing with relations
    const updatedListing = await Listing.findByPk(id, {
      include: [
        { model: User, as: 'host', attributes: ['id', 'first_name', 'last_name', 'email'] }
      ]
    });

    res.json({
      message: 'Listing updated successfully',
      listing: updatedListing
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Update listing error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update listing'
    });
  }
});

// Delete listing
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findByPk(id);
    if (!listing) {
      return res.status(404).json({
        error: 'Listing not found',
        message: 'The requested listing was not found'
      });
    }

    // Check permissions
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const canDelete = 
      listing.host_id === user.id || 
      user.role === 'admin';

    if (!canDelete) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to delete this listing'
      });
    }

    // Check for active bookings
    const activeBookings = await Booking.count({
      where: {
        listing_id: id,
        status: ['confirmed', 'approved', 'completed']
      }
    });

    if (activeBookings > 0) {
      return res.status(400).json({
        error: 'Cannot delete listing',
        message: 'This listing has active bookings and cannot be deleted'
      });
    }

    // Soft delete by setting status to inactive
    await listing.update({ status: 'inactive' });

    res.json({
      message: 'Listing deleted successfully'
    });

  } catch (error) {
    console.error('Delete listing error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to delete listing'
    });
  }
});

export default router;
