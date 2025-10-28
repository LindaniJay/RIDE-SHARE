import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { Listing, User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/listings - Get all approved listings (search endpoint)
router.get('/', async (req, res) => {
  try {
    const { status = 'approved', city, make, priceRange } = req.query;
    
    const whereClause: any = { status };
    
    if (city) {
      whereClause.city = { [require('sequelize').Op.iLike]: `%${city}%` };
    }
    
    if (make) {
      whereClause.make = { [require('sequelize').Op.iLike]: `%${make}%` };
    }
    
    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.toString().split('-').map(Number);
      if (minPrice) whereClause.pricePerDay = { [require('sequelize').Op.gte]: minPrice };
      if (maxPrice) whereClause.pricePerDay = { ...whereClause.pricePerDay, [require('sequelize').Op.lte]: maxPrice };
    }

    const listings = await Listing.findAll({
      where: whereClause,
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'name', 'email']
      }],
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: listings,
      count: listings.length
    });
  } catch (error) {
    logger.error('Error fetching listings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch listings'
    });
  }
});

// GET /api/listings/host/:uid - Get host's listings
router.get('/host/:uid', authenticateToken, async (req, res) => {
  try {
    const { uid } = req.params;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const listings = await Listing.findAll({
      where: { hostId: user.id },
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: listings,
      count: listings.length
    });
  } catch (error) {
    logger.error('Error fetching host listings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch host listings'
    });
  }
});

// POST /api/listings/create - Create a new listing
router.post('/create', authenticateToken, async (req, res) => {
  try {
    const { uid, make, model, year, pricePerDay, image, city, description, features, fuelType, transmission, seats, mileage } = req.body;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Create new listing (default status: pending)
    const listing = await Listing.create({
      hostId: Number(user.id) || 0,
      make,
      model,
      year,
      pricePerDay,
      image,
      city,
      description,
      features,
      fuelType,
      transmission,
      seats,
      mileage,
      status: 'pending'
    });

    // Emit notification to admin room
    const io = req.app.get('io');
    if (io) {
      io.to('admin-room').emit('new-listing', {
        id: listing.id,
        make,
        model,
        hostName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        city,
        createdAt: listing.createdAt
      });
    }

    res.status(201).json({
      success: true,
      data: listing,
      message: 'Listing created successfully and is pending approval'
    });
  } catch (error) {
    logger.error('Error creating listing:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create listing'
    });
  }
});

// GET /api/listings/:id - Get specific listing
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const listing = await Listing.findByPk(id, {
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone']
      }]
    });

    if (!listing) {
      return res.status(404).json({
        success: false,
        error: 'Listing not found'
      });
    }

    res.json({
      success: true,
      data: listing
    });
  } catch (error) {
    logger.error('Error fetching listing:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch listing'
    });
  }
});

export default router;