import express from 'express';
import { z } from 'zod';
import { Review } from '../models/Review';
import { Listing } from '../models/Listing';
import { User } from '../models/User';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';

const router = express.Router();

// Validation schemas
const createReviewSchema = z.object({
  listing_id: z.number().int().positive(),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(1),
});

const updateReviewSchema = z.object({
  rating: z.number().int().min(1).max(5).optional(),
  comment: z.string().min(1).optional(),
});

// Get reviews for a listing
router.get('/listing/:listing_id', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const reviews = await Review.findAndCountAll({
      where: { listing_id: req.params.listing_id },
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'name'],
        },
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      reviews: reviews.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: reviews.count,
        pages: Math.ceil(reviews.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's reviews
router.get('/my-reviews', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const reviews = await Review.findAndCountAll({
      where: { reviewer_id: req.user!.id },
      include: [
        {
          model: Listing,
          as: 'listing',
          attributes: ['id', 'title', 'make', 'model', 'year'],
        },
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']],
    });
    
    res.json({
      reviews: reviews.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: reviews.count,
        pages: Math.ceil(reviews.count / Number(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'renter',
          attributes: ['id', 'name'],
        },
        {
          model: Listing,
          as: 'listing',
          attributes: ['id', 'title', 'make', 'model', 'year'],
        },
      ],
    });
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create review
router.post('/', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const reviewData = createReviewSchema.parse(req.body);
    
    // Check if listing exists
    const listing = await Listing.findByPk(reviewData.listing_id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    
    // Check if user has a completed booking for this listing
    const { Booking } = require('../models/Booking');
    const completedBooking = await Booking.findOne({
      where: {
        listing_id: reviewData.listing_id,
        reviewer_id: req.user!.id,
        status: 'completed',
      },
    });
    
    if (!completedBooking) {
      return res.status(400).json({ 
        error: 'You can only review listings you have completed bookings for' 
      });
    }
    
    // Check if user has already reviewed this listing
    const existingReview = await Review.findOne({
      where: {
        listing_id: reviewData.listing_id,
        reviewer_id: req.user!.id,
      },
    });
    
    if (existingReview) {
      return res.status(400).json({ error: 'You have already reviewed this listing' });
    }
    
    const review = await Review.create({
      // required fields
      rating: reviewData.rating,
      comment: reviewData.comment,
      bookingId: completedBooking.id,
      reviewerId: req.user!.id, // UUID string
      revieweeId: String(listing.hostId), // UUID string
      // compatibility fields
      reviewer_id: req.user!.id, // UUID string
      reviewee_id: String(listing.hostId), // UUID string
      listing_id: reviewData.listing_id,
    });
    
    res.status(201).json(review);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update review
router.put('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    if (String(review.reviewer_id) !== req.user!.id) {
      return res.status(403).json({ error: 'You can only update your own reviews' });
    }
    
    const updateData = updateReviewSchema.parse(req.body);
    
    await review.update(updateData);
    
    res.json(review);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete review
router.delete('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    
    if (String(review.reviewer_id) !== req.user!.id) {
      return res.status(403).json({ error: 'You can only delete your own reviews' });
    }
    
    await review.destroy();
    
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;



