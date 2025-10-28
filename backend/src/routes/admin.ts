import express from 'express';
import { authenticateAdmin } from '../middleware/adminAuth';
import { Listing, Booking, User, Notification } from '../models';
import { setAdminCustomClaims } from '../config/firebase';
import { logger } from '../utils/logger';
import bcrypt from 'bcryptjs';

const router = express.Router();

// GET /api/admin/dashboard-stats - Get admin dashboard statistics
router.get('/dashboard-stats', authenticateAdmin, async (req, res) => {
  try {
    const totalUsers = await User.count();
    const totalListings = await Listing.count();
    const totalBookings = await Booking.count();
    const pendingListings = await Listing.count({ where: { status: 'pending' } });
    const activeBookings = await Booking.count({ where: { status: 'confirmed' } });
    
    // Calculate total revenue
    const revenueResult = await Booking.findOne({
      where: { paymentStatus: 'paid' },
      attributes: [
        [require('sequelize').fn('SUM', require('sequelize').col('totalPrice')), 'totalRevenue']
      ],
      raw: true
    });
    
    const totalRevenue = (revenueResult as any)?.totalRevenue || 0;

    res.json({
      success: true,
      data: {
        totalUsers,
        totalListings,
        totalBookings,
        pendingListings,
        activeBookings,
        totalRevenue: parseFloat(totalRevenue.toString())
      }
    });
  } catch (error) {
    logger.error('Error fetching dashboard stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard statistics'
    });
  }
});

// GET /api/admin/pending-listings - Get all pending listings
router.get('/pending-listings', authenticateAdmin, async (req, res) => {
  try {
    const listings = await Listing.findAll({
      where: { status: 'pending' },
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone']
      }],
      order: [['createdAt', 'ASC']]
    });

    res.json({
      success: true,
      data: listings,
      count: listings.length
    });
  } catch (error) {
    logger.error('Error fetching pending listings:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pending listings'
    });
  }
});

// GET /api/admin/users - Get all users
router.get('/users', authenticateAdmin, async (req, res) => {
  try {
    const { page = 1, limit = 10, role } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    const whereClause: any = {};
    if (role) {
      whereClause.role = role;
    }

    const { count, rows: users } = await User.findAndCountAll({
      where: whereClause,
      attributes: ['id', 'uid', 'name', 'email', 'role', 'isVerified', 'createdAt'],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: users,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users'
    });
  }
});

// PUT /api/admin/listings/:id/approve - Approve a listing
router.put('/listings/:id/approve', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    
    const listing = await Listing.findByPk(id, {
      include: [{
        model: User,
        as: 'host'
      }]
    });

    if (!listing) {
      return res.status(404).json({
        success: false,
        error: 'Listing not found'
      });
    }

    if (listing.status !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Listing is not pending approval'
      });
    }

    // Update listing status
    await listing.update({ status: 'approved' });

    // Create notification for host
    await Notification.create({
      userId: listing.hostId,
      message: `Your ${listing.make} ${listing.model} listing has been approved!`,
      type: 'approval',
      isRead: false
    });

    // Emit notification to host
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${listing.hostId}`).emit('listing-approved', {
        id: listing.id,
        make: listing.make,
        model: listing.model,
        message: 'Your listing has been approved!'
      });
    }

    res.json({
      success: true,
      data: listing,
      message: 'Listing approved successfully'
    });
  } catch (error) {
    logger.error('Error approving listing:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve listing'
    });
  }
});

// PUT /api/admin/listings/:id/reject - Reject a listing
router.put('/listings/:id/reject', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;
    
    const listing = await Listing.findByPk(id, {
      include: [{
        model: User,
        as: 'host'
      }]
    });

    if (!listing) {
      return res.status(404).json({
        success: false,
        error: 'Listing not found'
      });
    }

    if (listing.status !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Listing is not pending approval'
      });
    }

    // Update listing status
    await listing.update({ status: 'rejected' });

    // Create notification for host
    await Notification.create({
      userId: listing.hostId,
      message: `Your ${listing.make} ${listing.model} listing was rejected. ${reason || 'Please review the requirements and try again.'}`,
      type: 'approval',
      isRead: false
    });

    // Emit notification to host
    const io = req.app.get('io');
    if (io) {
      io.to(`user-${listing.hostId}`).emit('listing-rejected', {
        id: listing.id,
        make: listing.make,
        model: listing.model,
        message: 'Your listing was rejected. Please review the requirements and try again.'
      });
    }

    res.json({
      success: true,
      data: listing,
      message: 'Listing rejected successfully'
    });
  } catch (error) {
    logger.error('Error rejecting listing:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reject listing'
    });
  }
});

// POST /api/admin/create-admin - Create a new admin user (super admin only)
router.post('/create-admin', authenticateAdmin, async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        error: 'Email, password, firstName, and lastName are required'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create admin user in database
    const adminUser = await User.create({
      email,
      firstName,
      lastName,
      role: 'admin',
      isVerified: true,
      password_hash: passwordHash,
      firebase_uid: undefined // Will be set when they first login with Firebase
    });

    // Set Firebase custom claims (this will be done when they first login)
    // For now, we'll create a placeholder that will be updated on first login

    logger.info(`Admin user created: ${email} by admin ${(req as any).admin?.email}`);

    res.json({
      success: true,
      data: {
        id: adminUser.id,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role
      },
      message: 'Admin user created successfully. They can now login with their credentials.'
    });
  } catch (error) {
    logger.error('Error creating admin user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create admin user'
    });
  }
});

// POST /api/admin/set-firebase-claims - Set Firebase custom claims for admin user
router.post('/set-firebase-claims', authenticateAdmin, async (req, res) => {
  try {
    const { firebaseUid } = req.body;

    if (!firebaseUid) {
      return res.status(400).json({
        success: false,
        error: 'Firebase UID is required'
      });
    }

    // Set admin custom claims
    await setAdminCustomClaims(firebaseUid, {
      admin: true,
      role: 'admin'
    });

    // Update user in database with Firebase UID
    const user = await User.findOne({ where: { firebase_uid: firebaseUid } });
    if (user && user.role === 'admin') {
      // User is already in database and is admin
      logger.info(`Firebase custom claims set for admin: ${user.email}`);
    }

    res.json({
      success: true,
      message: 'Firebase custom claims set successfully'
    });
  } catch (error) {
    logger.error('Error setting Firebase custom claims:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to set Firebase custom claims'
    });
  }
});

export default router;