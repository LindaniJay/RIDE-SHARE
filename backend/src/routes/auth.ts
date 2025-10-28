import express from 'express';
import { User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// POST /api/auth/verify - Verify Firebase token and get/create user
router.post('/verify', async (req, res) => {
  try {
    const { uid, email, name, role = 'renter' } = req.body;
    
    if (!uid || !email || !name) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: uid, email, name'
      });
    }

    // Check if user exists
    let user = await User.findOne({ where: { firebase_uid: uid } });
    
    if (!user) {
      // Create new user
      user = await User.create({
        firebase_uid: uid,
        email,
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || '',
        role: role as 'admin' | 'host' | 'renter',
        isVerified: false
      });
    } else {
      // Update existing user info
      await user.update({
        email,
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || '',
        role: role as 'admin' | 'host' | 'renter'
      });
    }

    res.json({
      success: true,
      data: {
        id: user.id,
        firebase_uid: user.firebase_uid,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        email: user.email,
        role: user.role,
        isVerified: user.isVerified
      }
    });
  } catch (error) {
    logger.error('Error verifying user:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to verify user'
    });
  }
});

export default router;