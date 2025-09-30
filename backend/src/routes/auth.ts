import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { User } from '../models';
import { authenticateToken, AuthRequest } from '../middlewares/auth';
import { getFirebaseAuth } from '../config/firebase';

const router = express.Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
  role: z.enum(['renter', 'host']), // Required role selection
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone, role } = registerSchema.parse(req.body);

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash password manually
    const passwordHash = await bcrypt.hash(password, 12);
    
    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password, // Virtual field for validation
      passwordHash,
      phoneNumber: phone,
      role,
      isEmailVerified: false,
    });

    // Generate tokens with role
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: '7d' }
    );

    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      accessToken,
    });
  } catch (error) {
    console.error('Register error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Find user
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate tokens with role
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_REFRESH_SECRET!,
      { expiresIn: '7d' }
    );

    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      accessToken,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Refresh token
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token required' });
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as { userId: number };
    const user = await User.findByPk(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    // Generate new access token with role
    const accessToken = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('refreshToken');
  res.json({ message: 'Logout successful' });
});

// Get current user
router.get('/me', authenticateToken, async (req: AuthRequest, res) => {
  res.json({
    user: {
      id: req.user!.id,
      email: req.user!.email,
      firstName: req.user!.firstName,
      lastName: req.user!.lastName,
      role: req.user!.role,
    },
  });
});

// Forgot password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      // Don't reveal if user exists or not for security
      return res.json({ message: 'If an account with that email exists, we sent a password reset link.' });
    }

    // Generate reset token (in production, use crypto.randomBytes)
    const resetToken = jwt.sign(
      { userId: user.id, type: 'password_reset' },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    // In a real implementation, you would:
    // 1. Store the reset token in database with expiration
    // 2. Send email with reset link
    // 3. Use a proper email service like SendGrid, AWS SES, etc.
    
    console.log(`Password reset token for ${email}: ${resetToken}`);
    console.log(`Reset link: ${process.env.FRONTEND_URL}/reset-password/${resetToken}`);

    res.json({ 
      message: 'If an account with that email exists, we sent a password reset link.',
      // In development, include the reset link for testing
      ...(process.env.NODE_ENV === 'development' && { resetLink: `${process.env.FRONTEND_URL}/reset-password/${resetToken}` })
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Reset password
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ error: 'Token and password are required' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long' });
    }

    // Verify reset token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number; type: string };
    
    if (decoded.type !== 'password_reset') {
      return res.status(400).json({ error: 'Invalid reset token' });
    }

    // Find user
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update password
    const passwordHash = await bcrypt.hash(password, 12);
    await user.update({ passwordHash });

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Change password (authenticated users)
router.post('/change-password', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current password and new password are required' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'New password must be at least 8 characters long' });
    }

    // Verify current password
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isValidPassword = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Update password
    const passwordHash = await bcrypt.hash(newPassword, 12);
    await user.update({ passwordHash });

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Firebase token verification endpoint
router.post('/verify-firebase-token', async (req, res) => {
  try {
    const { idToken, email } = req.body;

    if (!idToken) {
      return res.status(400).json({ 
        success: false, 
        error: 'Firebase ID token is required' 
      });
    }

    const firebaseAuth = getFirebaseAuth();
    if (!firebaseAuth) {
      return res.status(500).json({ 
        success: false, 
        error: 'Firebase Admin SDK not configured' 
      });
    }

    // Verify the Firebase ID token
    const decodedToken = await firebaseAuth.verifyIdToken(idToken);
    
    // Check if user exists in our database
    let user = await User.findOne({ where: { email: decodedToken.email } });
    
    if (!user) {
      // If user doesn't exist in our database, create them
      // This handles the case where admin users exist in Firebase but not in our database
      user = await User.create({
        firstName: decodedToken.name?.split(' ')[0] || 'Admin',
        lastName: decodedToken.name?.split(' ').slice(1).join(' ') || 'User',
        email: decodedToken.email!,
        password: 'firebase-auth', // Virtual field
        passwordHash: 'firebase-auth', // Placeholder since we're using Firebase auth
        role: 'admin', // Default to admin for Firebase users
        isEmailVerified: decodedToken.email_verified || false,
        phoneNumber: decodedToken.phone_number || undefined,
      });
    }

    // Check if user has admin role (either from database or Firebase custom claims)
    const isAdmin = user.role === 'admin' || 
                   decodedToken.role === 'admin' || 
                   decodedToken.isAdmin === true;

    if (!isAdmin) {
      return res.status(403).json({ 
        success: false, 
        error: 'Admin access required' 
      });
    }

    // Generate our own JWT token for API access
    const accessToken = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role,
        firebaseUid: decodedToken.uid 
      },
      process.env.JWT_SECRET!,
      { expiresIn: '15m' }
    );

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          firebaseUid: decodedToken.uid,
        },
        accessToken,
      }
    });
  } catch (error) {
    console.error('Firebase token verification error:', error);
    
    if (error instanceof Error && error.message.includes('Firebase ID token has expired')) {
      return res.status(401).json({ 
        success: false, 
        error: 'Firebase token has expired' 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Token verification failed' 
    });
  }
});

export default router;
