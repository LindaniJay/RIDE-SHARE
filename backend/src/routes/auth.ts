import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { User } from '../models';
import { authenticateToken, AuthRequest } from '../middlewares/auth';
import { getFirebaseAuth } from '../config/firebase';
import { 
  authRateLimit, 
  strictAuthRateLimit, 
  passwordResetRateLimit, 
  registrationRateLimit 
} from '../middlewares/security';
import { 
  emailSchema, 
  passwordSchema, 
  nameSchema, 
  phoneSchema,
  validateAndSanitize 
} from '../middlewares/sanitization';
import { 
  generate2FASecret, 
  verify2FAToken, 
  disable2FA, 
  require2FA 
} from '../middlewares/twoFactorAuth';
import { 
  createSession, 
  refreshSession, 
  logoutSession, 
  logoutAllSessions, 
  getActiveSessions,
  trackSession,
  checkSessionTimeout
} from '../middlewares/sessionManagement';

const router = express.Router();

// Enhanced validation schemas with sanitization
const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  first_name: nameSchema,
  last_name: nameSchema,
  phone: phoneSchema.optional(),
  role: z.enum(['renter', 'host']), // Required role selection
});

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
  twoFactorToken: z.string().optional(),
  rememberMe: z.boolean().optional()
});

// Register with enhanced security
router.post('/register', 
  registrationRateLimit,
  validateAndSanitize(registerSchema),
  async (req, res) => {
    try {
      const { email, password, first_name, last_name, phone, role } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ 
          error: 'User already exists',
          message: 'An account with this email already exists'
        });
      }

      // Enhanced password hashing with higher rounds
      const password_hash = await bcrypt.hash(password, 14);
      
      // Create user with enhanced security
      const user = await User.create({
        first_name,
        last_name,
        email,
        password, // Virtual field for validation
        password_hash,
        phone_number: phone,
        role,
        is_email_verified: false,
        is_phone_verified: false,
        approval_status: 'pending',
        document_status: 'not_uploaded',
        is_active: true,
        failed_login_attempts: 0,
        last_login_at: undefined,
        twoFactorEnabled: false,
        twoFactorSecret: undefined
      });

      // Generate tokens with enhanced security
      const accessToken = jwt.sign(
        { 
          userId: user.id, 
          email: user.email, 
          role: user.role,
          sessionId: require('crypto').randomBytes(32).toString('hex')
        },
        process.env.JWT_SECRET!,
        { expiresIn: '15m' }
      );

      const refreshToken = jwt.sign(
        { 
          userId: user.id, 
          role: user.role,
          sessionId: require('crypto').randomBytes(32).toString('hex')
        },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: '7d' }
      );

      // Set secure cookies
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(201).json({
        success: true,
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          role: user.role,
        },
        accessToken,
        requiresEmailVerification: true
      });
    } catch (error) {
      console.error('Register error:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: 'Validation error', 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      res.status(500).json({ 
        error: 'Internal server error', 
        message: 'Registration failed. Please try again.' 
      });
    }
  }
);

// Enhanced login with security features
router.post('/login', 
  authRateLimit,
  validateAndSanitize(loginSchema),
  async (req, res) => {
    try {
      const { email, password, twoFactorToken, rememberMe } = req.body;

      // Find user
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ 
          error: 'Invalid credentials',
          message: 'Email or password is incorrect'
        });
      }

      // Check if account is locked
      if ((user.failed_login_attempts || 0) >= 5) {
        const lockoutTime = user.last_failed_login ? 
          new Date(user.last_failed_login).getTime() + (15 * 60 * 1000) : 0;
        
        if (Date.now() < lockoutTime) {
          return res.status(423).json({
            error: 'Account locked',
            message: 'Account is temporarily locked due to too many failed attempts',
            retryAfter: Math.ceil((lockoutTime - Date.now()) / 1000)
          });
        }
      }

      // Check if user is active
      if (!user.is_active) {
        return res.status(401).json({
          error: 'Account deactivated',
          message: 'Your account has been deactivated. Please contact support.'
        });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password_hash || '');
      if (!isValidPassword) {
        // Increment failed login attempts
        await user.update({
          failed_login_attempts: (user.failed_login_attempts || 0) + 1,
          last_failed_login: new Date()
        });
        
        return res.status(401).json({ 
          error: 'Invalid credentials',
          message: 'Email or password is incorrect'
        });
      }

      // Check if 2FA is required
      if (user.twoFactorEnabled && !twoFactorToken) {
        return res.status(200).json({
          requires2FA: true,
          message: 'Please provide your 2FA token'
        });
      }

      // Verify 2FA token if provided
      if (user.twoFactorEnabled && twoFactorToken) {
        const speakeasy = require('speakeasy');
        const verified = speakeasy.totp.verify({
          secret: user.twoFactorSecret!,
          encoding: 'base32',
          token: twoFactorToken,
          window: 2
        });
        
        if (!verified) {
          return res.status(401).json({
            error: 'Invalid 2FA token',
            message: 'The 2FA token provided is invalid'
          });
        }
      }

      // Reset failed login attempts on successful login
      await user.update({
        failed_login_attempts: 0,
        last_failed_login: undefined,
        last_login_at: new Date()
      });

      // Generate tokens with enhanced security
      const sessionId = require('crypto').randomBytes(32).toString('hex');
      const accessToken = jwt.sign(
        { 
          userId: user.id, 
          email: user.email, 
          role: user.role,
          sessionId
        },
        process.env.JWT_SECRET!,
        { expiresIn: '15m' }
      );

      const refreshToken = jwt.sign(
        { 
          userId: user.id, 
          role: user.role,
          sessionId
        },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: rememberMe ? '30d' : '7d' }
      );

      // Set secure cookies
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: (rememberMe ? 30 : 7) * 24 * 60 * 60 * 1000,
      });

      res.json({
        success: true,
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          role: user.role,
          twoFactorEnabled: user.twoFactorEnabled
        },
        accessToken,
        sessionId
      });
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: 'Validation error', 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      res.status(500).json({ 
        error: 'Internal server error',
        message: 'Login failed. Please try again.'
      });
    }
  }
);

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
      first_name: req.user!.first_name,
      last_name: req.user!.last_name,
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
    const password_hash = await bcrypt.hash(password, 12);
    await user.update({ password_hash });

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

    const isValidPassword = await bcrypt.compare(currentPassword, user.password_hash || '');
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    // Update password
    const password_hash = await bcrypt.hash(newPassword, 12);
    await user.update({ password_hash });

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
        first_name: decodedToken.name?.split(' ')[0] || 'Admin',
        last_name: decodedToken.name?.split(' ').slice(1).join(' ') || 'User',
        email: decodedToken.email!,
        password: 'firebase-auth', // Virtual field
        password_hash: 'firebase-auth', // Placeholder since we're using Firebase auth
        role: 'admin', // Default to admin for Firebase users
        is_email_verified: decodedToken.email_verified || false,
        phone_number: decodedToken.phone_number || undefined,
        is_phone_verified: false,
        approval_status: 'approved',
        document_status: 'not_uploaded',
        is_active: true
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
          first_name: user.first_name,
          last_name: user.last_name,
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

// 2FA Routes
router.post('/2fa/generate', authenticateToken, generate2FASecret);
router.post('/2fa/verify', authenticateToken, verify2FAToken);
router.post('/2fa/disable', authenticateToken, disable2FA);

// Session Management Routes
router.post('/session/create', authenticateToken, createSession);
router.post('/session/refresh', authenticateToken, refreshSession);
router.post('/session/logout', authenticateToken, logoutSession);
router.post('/session/logout-all', authenticateToken, logoutAllSessions);
router.get('/session/active', authenticateToken, getActiveSessions);

// Enhanced password reset with rate limiting
router.post('/forgot-password', 
  passwordResetRateLimit,
  async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }

      // Find user by email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        // Don't reveal if user exists or not for security
        return res.json({ 
          success: true,
          message: 'If an account with that email exists, we sent a password reset link.' 
        });
      }

      // Generate secure reset token
      const resetToken = jwt.sign(
        { userId: user.id, type: 'password_reset' },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' }
      );

      // Store reset token in cache with expiration
      const { cacheService } = require('../services/cache');
      await cacheService.set(`reset_token:${user.id}`, resetToken, 3600); // 1 hour

      // In production, send email with reset link
      console.log(`Password reset token for ${email}: ${resetToken}`);
      console.log(`Reset link: ${process.env.FRONTEND_URL}/reset-password/${resetToken}`);

      res.json({ 
        success: true,
        message: 'If an account with that email exists, we sent a password reset link.',
        // In development, include the reset link for testing
        ...(process.env.NODE_ENV === 'development' && { 
          resetLink: `${process.env.FRONTEND_URL}/reset-password/${resetToken}` 
        })
      });
    } catch (error) {
      console.error('Forgot password error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Enhanced password reset verification
router.post('/reset-password', 
  passwordResetRateLimit,
  async (req, res) => {
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

      // Check if token exists in cache
      const { cacheService } = require('../services/cache');
      const storedToken = await cacheService.get(`reset_token:${decoded.userId}`);
      
      if (!storedToken || storedToken !== token) {
        return res.status(400).json({ error: 'Invalid or expired reset token' });
      }

      // Find user
      const user = await User.findByPk(decoded.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update password with enhanced hashing
      const password_hash = await bcrypt.hash(password, 14);
      await user.update({ 
        password_hash,
        failed_login_attempts: 0,
        last_failed_login: undefined
      });

      // Remove reset token from cache
      await cacheService.del(`reset_token:${decoded.userId}`);

      res.json({ 
        success: true,
        message: 'Password reset successfully' 
      });
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(400).json({ error: 'Invalid or expired reset token' });
      }
      console.error('Reset password error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

export default router;
