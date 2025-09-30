import express from 'express';
import { Op } from 'sequelize';
import { Listing } from '../models/Listing';
import { User } from '../models/User';

const router = express.Router();

// Get all vehicles (redirect to listings)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search, minPrice, maxPrice, location, type, status } = req.query;
    
    const offset = (Number(page) - 1) * Number(limit);
    const whereClause: Record<string, unknown> = {};
    
    // Only show approved listings to public
    if (!status) {
      whereClause.status = 'approved';
    } else {
      whereClause.status = status;
    }
    
    if (search) {
      (whereClause as any)[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { make: { [Op.like]: `%${search}%` } },
        { model: { [Op.like]: `%${search}%` } },
        { location: { [Op.like]: `%${search}%` } },
      ];
    }
    
    if (minPrice) {
      whereClause.pricePerDay = { ...(whereClause.pricePerDay as any), [Op.gte]: Number(minPrice) };
    }
    
    if (maxPrice) {
      whereClause.pricePerDay = { ...(whereClause.pricePerDay as any), [Op.lte]: Number(maxPrice) };
    }
    
    if (location) {
      whereClause.location = { [Op.like]: `%${location}%` };
    }
    
    if (type) {
      whereClause.type = type;
    }
    
    const vehicles = await Listing.findAndCountAll({
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
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      vehicles: vehicles.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: vehicles.count,
        pages: Math.ceil(vehicles.count / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Search vehicles endpoint
router.get('/search', async (req, res) => {
  // Just call the main vehicles logic directly
  try {
    const vehicles = await Listing.findAll({
      where: { status: 'approved' },
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email']
        }
      ]
    });
    res.json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get vehicle by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const vehicle = await Listing.findByPk(id, {
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
        },
      ],
    });
    
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    
    res.json(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;