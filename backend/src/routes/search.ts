import express from 'express';
import { Listing, User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/search - Search for available vehicles
router.get('/', async (req, res) => {
  try {
    const { 
      location, 
      make, 
      type, 
      minPrice, 
      maxPrice, 
      startDate, 
      endDate,
      fuelType,
      transmission,
      seats
    } = req.query;
    
    const whereClause: any = { 
      status: 'approved' 
    };
    
    // Apply filters
    if (location) {
      whereClause.city = { [require('sequelize').Op.iLike]: `%${location}%` };
    }
    
    if (make) {
      whereClause.make = { [require('sequelize').Op.iLike]: `%${make}%` };
    }
    
    if (type) {
      whereClause.model = { [require('sequelize').Op.iLike]: `%${type}%` };
    }
    
    if (minPrice) {
      whereClause.pricePerDay = { [require('sequelize').Op.gte]: parseFloat(minPrice.toString()) };
    }
    
    if (maxPrice) {
      whereClause.pricePerDay = { 
        ...whereClause.pricePerDay, 
        [require('sequelize').Op.lte]: parseFloat(maxPrice.toString()) 
      };
    }
    
    if (fuelType) {
      whereClause.fuelType = fuelType;
    }
    
    if (transmission) {
      whereClause.transmission = transmission;
    }
    
    if (seats) {
      whereClause.seats = { [require('sequelize').Op.gte]: parseInt(seats.toString()) };
    }

    const listings = await Listing.findAll({
      where: whereClause,
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone']
      }],
      order: [['createdAt', 'DESC']]
    });

    // If date filters are provided, check availability
    let availableListings = listings;
    if (startDate && endDate) {
      const start = new Date(startDate.toString());
      const end = new Date(endDate.toString());
      
      // Check for conflicting bookings
      const conflictingBookings = await require('../models').Booking.findAll({
        where: {
          status: ['pending', 'confirmed'],
          [require('sequelize').Op.or]: [
            {
              startDate: { [require('sequelize').Op.between]: [start, end] }
            },
            {
              endDate: { [require('sequelize').Op.between]: [start, end] }
            },
            {
              [require('sequelize').Op.and]: [
                { startDate: { [require('sequelize').Op.lte]: start } },
                { endDate: { [require('sequelize').Op.gte]: end } }
              ]
            }
          ]
        },
        attributes: ['listingId']
      });
      
      const conflictingListingIds = conflictingBookings.map((b: any) => b.listingId);
      availableListings = listings.filter(listing => !conflictingListingIds.includes(listing.id));
    }

    res.json({
      success: true,
      data: availableListings,
      count: availableListings.length,
      filters: {
        location,
        make,
        type,
        minPrice,
        maxPrice,
        startDate,
        endDate
      }
    });
  } catch (error) {
    logger.error('Error searching listings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to search listings'
    });
  }
});

// GET /api/search/suggestions - Get search suggestions
router.get('/suggestions', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.toString().length < 2) {
      return res.json({
        success: true,
        data: []
      });
    }

    // Get unique makes and models
    const makes = await Listing.findAll({
      where: {
        status: 'approved',
        make: { [require('sequelize').Op.iLike]: `%${q}%` }
      },
      attributes: ['make'],
      group: ['make'],
      limit: 5
    });

    const models = await Listing.findAll({
      where: {
        status: 'approved',
        model: { [require('sequelize').Op.iLike]: `%${q}%` }
      },
      attributes: ['model'],
      group: ['model'],
      limit: 5
    });

    const cities = await Listing.findAll({
      where: {
        status: 'approved',
        city: { [require('sequelize').Op.iLike]: `%${q}%` }
      },
      attributes: ['city'],
      group: ['city'],
      limit: 5
    });

    const suggestions = [
      ...makes.map(item => ({ type: 'make', value: item.make })),
      ...models.map(item => ({ type: 'model', value: item.model })),
      ...cities.map(item => ({ type: 'city', value: item.city }))
    ];

    res.json({
      success: true,
      data: suggestions
    });
  } catch (error) {
    logger.error('Error getting search suggestions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get suggestions'
    });
  }
});

export default router;
