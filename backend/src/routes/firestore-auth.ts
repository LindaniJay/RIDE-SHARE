import express from 'express';
import { z } from 'zod';
import { User } from '../models';
import { getFirebaseAdmin } from '../config/firebase';

const router = express.Router();

// Validation schema for Firestore authentication
const firestoreLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

// Firestore-based authentication endpoint
router.post('/firestore-login', async (req, res) => {
  try {
    const { email, password } = firestoreLoginSchema.parse(req.body);

    // Find user in our database (which syncs with Firestore)
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid credentials' 
      });
    }

    // For admin users from Firestore, use proper password verification
    if (user.role === 'admin') {
      // Check if user has a proper password hash
      if (!user.password_hash || user.password_hash === 'firebase-auth') {
        return res.status(401).json({ 
          success: false, 
          error: 'Admin account requires password reset. Please contact system administrator.' 
        });
      }
      
      // Verify password using bcrypt
      const bcrypt = require('bcryptjs');
      const isValidPassword = await bcrypt.compare(password, user.password_hash);
      
      if (!isValidPassword) {
        return res.status(401).json({ 
          success: false, 
          error: 'Invalid credentials' 
        });
      }

      return res.json({
        success: true,
        data: {
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          }
        }
      });
    }

    // For non-admin users, use regular authentication
    return res.status(401).json({ 
      success: false, 
      error: 'Admin access required' 
    });

  } catch (error) {
    console.error('Firestore authentication error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        error: 'Validation error', 
        details: error.errors 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Authentication failed' 
    });
  }
});

// Sync Firestore users to local database
router.post('/sync-firestore-users', async (req, res) => {
  try {
    const firebaseAdmin = getFirebaseAdmin();
    if (!firebaseAdmin) {
      return res.status(500).json({ 
        success: false, 
        error: 'Firebase Admin SDK not configured' 
      });
    }

    // Get Firestore instance
    const db = firebaseAdmin.firestore();
    
    // Get all users from Firestore
    const usersSnapshot = await db.collection('users').get();
    
    const syncedUsers = [];
    
    for (const doc of usersSnapshot.docs) {
      const userData = doc.data();
      
      // Check if user exists in our database
      let user = await User.findOne({ where: { email: userData.email } });
      
      if (!user) {
        // Create user in our database
        user = await User.create({
          firebase_uid: userData.uid || `firestore-${Date.now()}`,
          display_name: userData.displayName || `${userData.firstName} ${userData.lastName}` || 'User',
          firstName: userData.firstName || 'Admin',
          lastName: userData.lastName || 'User',
          email: userData.email,
          password: 'firestore-sync', // Virtual field
          password_hash: 'firestore-sync', // Placeholder
          role: userData.role || 'admin',
          isVerified: true,
          phone_number: userData.phone_number || null,
          is_phone_verified: false,
          approval_status: 'approved',
          document_status: 'not_uploaded',
          is_active: true
        });
        
        syncedUsers.push({
          id: user.id,
          email: user.email,
          role: user.role,
          source: 'firestore'
        });
      }
    }

    res.json({
      success: true,
      message: `Synced ${syncedUsers.length} users from Firestore`,
      data: syncedUsers
    });

  } catch (error) {
    console.error('Firestore sync error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to sync Firestore users' 
    });
  }
});

export default router;

