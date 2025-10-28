import { Router, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { verifyFirebaseToken, requireAuth, AuthenticatedRequest } from '../middleware/auth';
import { authRateLimit } from '../middleware/rateLimiter';
import { asyncHandler } from '../middleware/errorHandler';
import { sanitizeInput, userSchema } from '../utils/sanitizer';
import { logger } from '../utils/logger';
import { getFirebaseAuth } from '../config/firebase';
import { User } from '../models/User';

const router = Router();

// Apply rate limiting to auth routes
router.use(authRateLimit);

// Login with Firebase token
router.post('/login', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { firebaseToken } = req.body;

  if (!firebaseToken) {
    return res.status(400).json({ 
      message: 'Firebase token is required',
      error: 'Missing authentication token' 
    });
  }

  try {
    const result = await AuthService.loginWithFirebase(firebaseToken);
    
    if (!result) {
      return res.status(401).json({ 
        message: 'Invalid Firebase token',
        error: 'Authentication failed' 
      });
    }

    logger.info(`User ${result.user.id} logged in successfully with role: ${result.user.role}`);
    
    res.json({
      success: true,
      message: 'Login successful',
      user: result.user.toJSON(),
      tokens: result.tokens,
      role: result.user.role
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ 
      message: 'Login failed',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}));

// Refresh JWT token
router.post('/refresh', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: 'Refresh token is required' });
  }

  try {
    const tokens = await AuthService.refreshToken(refreshToken);
    
    if (!tokens) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    res.json({
      success: true,
      tokens,
    });
  } catch (error) {
    logger.error('Token refresh error:', error);
    res.status(500).json({ error: 'Token refresh failed' });
  }
}));

// Get current user
router.get('/me', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  res.json({
    success: true,
    user: req.user,
  });
}));

// Update user profile
router.put('/profile', verifyFirebaseToken, requireAuth, sanitizeInput(userSchema), asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const user = await req.user;
  
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  // Update user fields
  Object.assign(user, req.body);
  await user.save();

  logger.info(`User ${user.id} profile updated`);
  
  res.json({
    success: true,
    user: user.toJSON(),
  });
}));

// Enable 2FA
router.post('/2fa/enable', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const user = await req.user;
  
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  if (user.two_factor_enabled) {
    return res.status(400).json({ error: '2FA is already enabled' });
  }

  const secret = AuthService.generate2FASecret();
  user.two_factor_secret = secret;
  user.two_factor_enabled = true;
  await user.save();

  logger.info(`2FA enabled for user ${user.id}`);
  
  res.json({
    success: true,
    secret,
    message: '2FA has been enabled. Please save your recovery codes.',
  });
}));

// Disable 2FA
router.post('/2fa/disable', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { token } = req.body;
  const user = await req.user;
  
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  if (!user.two_factor_enabled) {
    return res.status(400).json({ error: '2FA is not enabled' });
  }

  if (!AuthService.verify2FAToken(token, user.two_factor_secret!)) {
    return res.status(400).json({ error: 'Invalid 2FA token' });
  }

  user.two_factor_enabled = false;
  user.two_factor_secret = undefined;
  await user.save();

  logger.info(`2FA disabled for user ${user.id}`);
  
  res.json({
    success: true,
    message: '2FA has been disabled',
  });
}));

// Verify 2FA token
router.post('/2fa/verify', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { token } = req.body;
  const user = await req.user;
  
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  if (!user.two_factor_enabled) {
    return res.status(400).json({ error: '2FA is not enabled' });
  }

  const isValid = AuthService.verify2FAToken(token, user.two_factor_secret!);
  
  if (!isValid) {
    return res.status(400).json({ error: 'Invalid 2FA token' });
  }

  res.json({
    success: true,
    message: '2FA token verified',
  });
}));

// Logout (client-side token removal)
router.post('/logout', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  logger.info(`User ${req.user?.id} logged out`);
  
  res.json({
    success: true,
    message: 'Logged out successfully',
  });
}));

// Register new user with Firebase token
router.post('/register', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { firebaseToken, role = 'renter' } = req.body;

  if (!firebaseToken) {
    return res.status(400).json({ 
      message: 'Firebase token is required',
      error: 'Missing authentication token' 
    });
  }

  try {
    const firebaseAuth = getFirebaseAuth();
    if (!firebaseAuth) {
      return res.status(500).json({ 
        message: 'Authentication service unavailable',
        error: 'Firebase not configured' 
      });
    }

    const decodedToken = await firebaseAuth.verifyIdToken(firebaseToken);
    
    // Check if user already exists
    let user = await User.findOne({ where: { firebase_uid: decodedToken.uid } });
    
    if (user) {
      return res.status(200).json({ 
        success: true,
        message: 'User already exists',
        error: 'User is already registered',
        user: user.toJSON(),
        tokens: AuthService.generateTokens(user.id.toString())
      });
    }

    // Create new user
    user = await User.create({
      firebase_uid: decodedToken.uid,
      email: decodedToken.email || '',
      display_name: decodedToken.name || decodedToken.email?.split('@')[0] || 'User',
      firstName: decodedToken.name?.split(' ')[0] || '',
      lastName: decodedToken.name?.split(' ').slice(1).join(' ') || '',
      role: role.toLowerCase() as 'renter' | 'host' | 'admin',
      isVerified: decodedToken.email_verified || false,
      profile_image_url: decodedToken.picture || undefined,
      phone_number: decodedToken.phone_number || undefined
    });

    const tokens = AuthService.generateTokens(user.id.toString());

    logger.info(`New user registered: ${user.id} with role: ${user.role}`);
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: user.toJSON(),
      tokens,
      role: user.role
    });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({ 
      message: 'Registration failed',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}));

// Update user role (admin only)
router.put('/role', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { userId, role } = req.body;

  if (!userId || !role) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      error: 'userId and role are required' 
    });
  }

  if (!['renter', 'host', 'admin'].includes(role.toUpperCase())) {
    return res.status(400).json({ 
      message: 'Invalid role',
      error: 'Role must be RENTER, HOST, or ADMIN' 
    });
  }

  // Check if current user is admin
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ 
      message: 'Access denied',
      error: 'Admin role required' 
    });
  }

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ 
        message: 'User not found',
        error: 'User does not exist' 
      });
    }

    await user.update({ role: role.toUpperCase() });

    logger.info(`User ${userId} role updated to ${role} by admin ${req.user.id}`);
    
    res.json({
      success: true,
      message: 'User role updated successfully',
      user: user.toJSON()
    });
  } catch (error) {
    logger.error('Role update error:', error);
    res.status(500).json({ 
      message: 'Role update failed',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}));

// Verify Firebase token endpoint
router.post('/verify-token', async (req, res) => {
  try {
    const { token } = req.body;
    
    if (!token) {
      return res.status(400).json({
        success: false,
        error: 'Token is required'
      });
    }

    // Verify the Firebase token
    const { getAuth } = require('../config/firebase');
    const decodedToken = await getAuth().verifyIdToken(token);
    
    res.json({
      success: true,
      decodedToken: {
        uid: decodedToken.uid,
        email: decodedToken.email,
        admin: decodedToken.admin || false,
        role: decodedToken.role || 'user',
        customClaims: decodedToken
      }
    });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({
      success: false,
      error: 'Invalid token'
    });
  }
});

// Verify Firebase token endpoint (alternative)
router.post('/verify-firebase', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { firebaseToken } = req.body;

  if (!firebaseToken) {
    return res.status(400).json({ 
      message: 'Firebase token is required',
      error: 'Missing authentication token' 
    });
  }

  try {
    const user = await AuthService.verifyFirebaseToken(firebaseToken);
    
    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid Firebase token',
        error: 'Authentication failed' 
      });
    }

    res.json({
      success: true,
      message: 'Token verified successfully',
      user: user.toJSON(),
    });
  } catch (error) {
    logger.error('Firebase verification error:', error);
    res.status(500).json({ 
      message: 'Token verification failed',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}));

export default router;

