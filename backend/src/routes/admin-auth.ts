import express from 'express';
import { authenticateAdmin, AdminRequest } from '../middleware/adminAuth';
import { setAdminCustomClaims, getAuth } from '../config/firebase';
import { User } from '../models';
import { logger } from '../utils/logger';
import bcrypt from 'bcryptjs';

const router = express.Router();

/**
 * Create admin user endpoint
 * POST /api/admin-auth/create-admin
 */
router.post('/create-admin', async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }

    // Check if admin already exists
    const existingAdmin = await User.findOne({ where: { email, role: 'admin' } });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        error: 'Admin user already exists'
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create admin user in database
    const adminUser = await User.create({
      email,
      firstName: firstName || 'Admin',
      lastName: lastName || 'User',
      role: 'admin',
      isVerified: true,
      password_hash: passwordHash,
      firebase_uid: undefined // Will be set when Firebase user is created
    });

    logger.info(`Admin user created in database: ${adminUser.email}`);

    res.json({
      success: true,
      message: 'Admin user created successfully',
      admin: {
        id: adminUser.id,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role
      }
    });
  } catch (error) {
    logger.error('Error creating admin user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create admin user'
    });
  }
});

/**
 * Set Firebase custom claims for admin user
 * POST /api/admin-auth/set-firebase-claims
 */
router.post('/set-firebase-claims', authenticateAdmin, async (req: AdminRequest, res) => {
  try {
    const { uid } = req.body;

    if (!uid) {
      return res.status(400).json({
        success: false,
        error: 'Firebase UID is required'
      });
    }

    // Set custom claims
    await setAdminCustomClaims(uid, {
      admin: true,
      role: 'admin'
    });

    // Update database user with Firebase UID
    const adminUser = await User.findOne({ where: { id: req.admin?.id } });
    if (adminUser) {
      await adminUser.update({ firebase_uid: uid });
    }

    logger.info(`Firebase custom claims set for admin: ${uid}`);

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

/**
 * Verify admin token endpoint
 * POST /api/admin-auth/verify-admin-token
 */
router.post('/verify-admin-token', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        error: 'Token is required'
      });
    }

    // Verify Firebase token
    const auth = getAuth();
    const decodedToken = await auth.verifyIdToken(token);

    // Find user in database
    const user = await User.findOne({ where: { firebase_uid: decodedToken.uid } });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Check if user is admin
    if (user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Admin privileges required'
      });
    }

    res.json({
      success: true,
      admin: {
        id: user.id,
        uid: user.firebase_uid,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        isAdmin: true
      },
      decodedToken: {
        uid: decodedToken.uid,
        email: decodedToken.email,
        admin: decodedToken.admin || false,
        role: decodedToken.role || 'user'
      }
    });
  } catch (error) {
    logger.error('Admin token verification error:', error);
    res.status(401).json({
      success: false,
      error: 'Invalid admin token'
    });
  }
});

/**
 * Get admin profile
 * GET /api/admin-auth/profile
 */
router.get('/profile', authenticateAdmin, async (req: AdminRequest, res) => {
  try {
    const adminUser = await User.findOne({ where: { id: req.admin?.id } });

    if (!adminUser) {
      return res.status(404).json({
        success: false,
        error: 'Admin user not found'
      });
    }

    res.json({
      success: true,
      admin: {
        id: adminUser.id,
        uid: adminUser.firebase_uid,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
        isAdmin: true,
        createdAt: adminUser.createdAt,
        updatedAt: adminUser.updatedAt
      }
    });
  } catch (error) {
    logger.error('Error getting admin profile:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get admin profile'
    });
  }
});

/**
 * Update admin profile
 * PUT /api/admin-auth/profile
 */
router.put('/profile', authenticateAdmin, async (req: AdminRequest, res) => {
  try {
    const { firstName, lastName } = req.body;
    const adminUser = await User.findOne({ where: { id: req.admin?.id } });

    if (!adminUser) {
      return res.status(404).json({
        success: false,
        error: 'Admin user not found'
      });
    }

    // Update profile
    await adminUser.update({
      firstName: firstName || adminUser.firstName,
      lastName: lastName || adminUser.lastName
    });

    logger.info(`Admin profile updated: ${adminUser.email}`);

    res.json({
      success: true,
      message: 'Admin profile updated successfully',
      admin: {
        id: adminUser.id,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
        isAdmin: true
      }
    });
  } catch (error) {
    logger.error('Error updating admin profile:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update admin profile'
    });
  }
});

/**
 * Change admin password
 * PUT /api/admin-auth/change-password
 */
router.put('/change-password', authenticateAdmin, async (req: AdminRequest, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        error: 'Current password and new password are required'
      });
    }

    const adminUser = await User.findOne({ where: { id: req.admin?.id } });

    if (!adminUser) {
      return res.status(404).json({
        success: false,
        error: 'Admin user not found'
      });
    }

    // Verify current password
    if (adminUser.password_hash) {
      const isValidPassword = await bcrypt.compare(currentPassword, adminUser.password_hash);
      if (!isValidPassword) {
        return res.status(400).json({
          success: false,
          error: 'Current password is incorrect'
        });
      }
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 12);

    // Update password
    await adminUser.update({ password_hash: newPasswordHash });

    logger.info(`Admin password changed: ${adminUser.email}`);

    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    logger.error('Error changing admin password:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to change password'
    });
  }
});

export default router;
