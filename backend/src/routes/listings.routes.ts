import { Router, Response } from 'express';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { verifyFirebaseToken, requireAuth, requireHostOrAdmin, AuthenticatedRequest } from '../middleware/auth';
import { uploadRateLimit } from '../middleware/rateLimiter';
import { asyncHandler } from '../middleware/errorHandler';
import { sanitizeInput, listingSchema } from '../utils/sanitizer';
import { logger } from '../utils/logger';
import { Op } from 'sequelize';

const router = Router();

// Get all listings with filters
router.get('/', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const {
    page = 1,
    limit = 20,
    search,
    vehicleType,
    fuel_type,
    transmission,
    min_price,
    max_price,
    location,
    sort_by = 'createdAt',
    sort_order = 'DESC',
    approved_only = true
  } = req.query;

  const offset = (Number(page) - 1) * Number(limit);
  const whereClause: any = {};

  // Only show approved listings by default
  if (approved_only === 'true') {
    whereClause.approved = true;
    whereClause.is_available = true;
  }

  // Search filters
  if (search) {
    whereClause[Op.or] = [
      { title: { [Op.iLike]: `%${search}%` } },
      { description: { [Op.iLike]: `%${search}%` } },
      { location: { [Op.iLike]: `%${search}%` } }
    ];
  }

  if (vehicleType) {
    whereClause.vehicleType = vehicleType;
  }

  if (fuel_type) {
    whereClause.fuel_type = fuel_type;
  }

  if (transmission) {
    whereClause.transmission = transmission;
  }

  if (min_price || max_price) {
    whereClause.price_per_day = {};
    if (min_price) whereClause.price_per_day[Op.gte] = Number(min_price);
    if (max_price) whereClause.price_per_day[Op.lte] = Number(max_price);
  }

  if (location) {
    whereClause.location = { [Op.iLike]: `%${location}%` };
  }

  try {
    const { count, rows } = await Listing.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'displayName', 'avatar_url', 'verified']
        }
      ],
      order: [[sort_by as string, sort_order as string]],
      limit: Number(limit),
      offset,
    });

    res.json({
      success: true,
      listings: rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching listings:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch listings',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}));

// Get single listing
router.get('/:id', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findByPk(id, {
      include: [
        {
          model: User,
          as: 'host',
          attributes: ['id', 'displayName', 'avatar_url', 'verified', 'bio']
        }
      ]
    });

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    // Increment view count
    listing.incrementViewCount();
    await listing.save();

    res.json({
      success: true,
      listing
    });
  } catch (error) {
    logger.error('Error fetching listing:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch listing',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}));

// Create new listing
router.post('/', verifyFirebaseToken, requireAuth, requireHostOrAdmin, uploadRateLimit, sanitizeInput(listingSchema), asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const listingData = {
    ...req.body,
    hostId: req.user!.id
  };

  try {
    const listing = await Listing.create(listingData);

    logger.info(`New listing created: ${listing.id} by user ${req.user!.id}`);

    res.status(201).json({
      success: true,
      listing
    });
  } catch (error) {
    logger.error('Error creating listing:', error);
    res.status(500).json({ error: 'Failed to create listing' });
  }
}));

// Update listing
router.put('/:id', verifyFirebaseToken, requireAuth, requireHostOrAdmin, sanitizeInput(listingSchema), asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findOne({
      where: { id, hostId: req.user!.id }
    });

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found or access denied' });
    }

    // Don't allow updates to approved listings
    if (listing.approved) {
      return res.status(400).json({ error: 'Cannot update approved listing' });
    }

    await listing.update(req.body);

    logger.info(`Listing ${id} updated by user ${req.user!.id}`);

    res.json({
      success: true,
      listing
    });
  } catch (error) {
    logger.error('Error updating listing:', error);
    res.status(500).json({ error: 'Failed to update listing' });
  }
}));

// Delete listing
router.delete('/:id', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findOne({
      where: { id, hostId: req.user!.id }
    });

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found or access denied' });
    }

    await listing.destroy();

    logger.info(`Listing ${id} deleted by user ${req.user!.id}`);

    res.json({
      success: true,
      message: 'Listing deleted successfully'
    });
  } catch (error) {
    logger.error('Error deleting listing:', error);
    res.status(500).json({ error: 'Failed to delete listing' });
  }
}));

// Get user's listings
router.get('/user/my-listings', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { page = 1, limit = 20, status } = req.query;
  const offset = (Number(page) - 1) * Number(limit);

  const whereClause: any = { hostId: req.user!.id };

  if (status === 'approved') {
    whereClause.approved = true;
  } else if (status === 'pending') {
    whereClause.approved = false;
  }

  try {
    const { count, rows } = await Listing.findAndCountAll({
      where: whereClause,
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset,
    });

    res.json({
      success: true,
      listings: rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching user listings:', error);
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
}));

// Toggle listing availability
router.patch('/:id/toggle-availability', verifyFirebaseToken, requireAuth, requireHostOrAdmin, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const listing = await Listing.findOne({
      where: { id, hostId: req.user!.id }
    });

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found or access denied' });
    }

    if (!listing.approved) {
      return res.status(400).json({ error: 'Cannot toggle availability of unapproved listing' });
    }

    listing.is_available = !listing.is_available;
    await listing.save();

    logger.info(`Listing ${id} availability toggled by user ${req.user!.id}`);

    res.json({
      success: true,
      listing
    });
  } catch (error) {
    logger.error('Error toggling listing availability:', error);
    res.status(500).json({ error: 'Failed to toggle listing availability' });
  }
}));

export default router;

