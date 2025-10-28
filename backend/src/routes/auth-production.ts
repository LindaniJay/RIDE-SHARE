import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { User } from '../models';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';

const router = express.Router();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'),
  first_name: z.string().min(1).max(100),
  last_name: z.string().min(1).max(100),
  phone_number: z.string().optional(),
  role: z.enum(['renter', 'host']),
  date_of_birth: z.string().optional(),
  address: z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    province: z.string().optional(),
    postal_code: z.string().optional(),
    country: z.string().default('South Africa')
  }).optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
});

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character')
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, first_name, last_name, phone_number, role, date_of_birth, address } = registerSchema.parse(req.body);

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ 
        error: 'User already exists',
        message: 'An account with this email address already exists'
      });
    }

    // Create user with new schema
    const user = await User.create({
      firebase_uid: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      email,
      password, // Virtual field - will be hashed by model hook
      first_name,
      last_name,
      phone_number,
      role: role.toLowerCase() as 'renter' | 'host' | 'admin',
      isVerified: false,
      date_of_birth: date_of_birth ? new Date(date_of_birth) : undefined,
      address: typeof address === 'object' ? JSON.stringify(address) : address,
      is_email_verified: false,
      is_phone_verified: false,
      approval_status: 'pending',
      document_status: 'not_uploaded',
      is_active: true
    });

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    // Return user data (excluding sensitive information)
    const userResponse = {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      role: user.role,
      is_email_verified: user.is_email_verified,
      approval_status: user.approval_status,
      document_status: user.document_status,
      created_at: user.created_at
    };

    res.status(201).json({
      message: 'User registered successfully',
      user: userResponse,
      token
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Registration error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to register user'
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid credentials',
        message: 'Email or password is incorrect'
      });
    }

    // Check if user is active
    if (!user.is_active) {
      return res.status(401).json({
        error: 'Account deactivated',
        message: 'Your account has been deactivated. Please contact support.'
      });
    }

    // Verify password
    if (!user.password_hash) {
      return res.status(401).json({
        error: 'Invalid credentials',
        message: 'Please reset your password'
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ 
        error: 'Invalid credentials',
        message: 'Email or password is incorrect'
      });
    }

    // Update last login
    await user.update({ last_login_at: new Date() });

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    // Return user data (excluding sensitive information)
    const userResponse = {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      role: user.role,
      is_email_verified: user.is_email_verified,
      approval_status: user.approval_status,
      document_status: user.document_status,
      last_login_at: user.last_login_at,
      created_at: user.created_at
    };

    res.json({
      message: 'Login successful',
      user: userResponse,
      token
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to login'
    });
  }
});

// Get current user profile
router.get('/profile', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const user = await User.findByPk(req.user?.id, {
      attributes: { exclude: ['password_hash'] }
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'User profile not found'
      });
    }

    res.json({
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        role: user.role,
        is_email_verified: user.is_email_verified,
        is_phone_verified: user.is_phone_verified,
        approval_status: user.approval_status,
        document_status: user.document_status,
        profile_image_url: user.profile_image_url,
        date_of_birth: user.date_of_birth,
        address: user.address,
        emergency_contact: user.emergency_contact,
        preferences: user.preferences,
        last_login_at: user.last_login_at,
        is_active: user.is_active,
        created_at: user.created_at,
        updated_at: user.updated_at
      }
    });

  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch profile'
    });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const updateSchema = z.object({
      first_name: z.string().min(1).max(100).optional(),
      last_name: z.string().min(1).max(100).optional(),
      phone_number: z.string().optional(),
      date_of_birth: z.string().optional(),
      address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        province: z.string().optional(),
        postal_code: z.string().optional(),
        country: z.string().optional()
      }).optional(),
      emergency_contact: z.object({
        name: z.string().optional(),
        relationship: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().email().optional()
      }).optional(),
      preferences: z.object({
        notifications: z.boolean().optional(),
        marketing: z.boolean().optional(),
        language: z.string().optional(),
        currency: z.string().optional()
      }).optional()
    });

    const updateData = updateSchema.parse(req.body);

    const user = await User.findByPk(req.user?.id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'User profile not found'
      });
    }

    // Create properly typed update object
    const updateFields: any = { ...updateData };
    
    // Convert date_of_birth string to Date if provided
    if (updateFields.date_of_birth) {
      updateFields.date_of_birth = new Date(updateFields.date_of_birth);
    }

    // Update user
    await user.update(updateFields);

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        role: user.role,
        is_email_verified: user.is_email_verified,
        approval_status: user.approval_status,
        document_status: user.document_status,
        profile_image_url: user.profile_image_url,
        date_of_birth: user.date_of_birth,
        address: user.address,
        emergency_contact: user.emergency_contact,
        preferences: user.preferences,
        last_login_at: user.last_login_at,
        is_active: user.is_active,
        updated_at: user.updated_at
      }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Profile update error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to update profile'
    });
  }
});

// Change password
router.put('/change-password', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { currentPassword, newPassword } = changePasswordSchema.parse(req.body);

    const user = await User.findByPk(req.user?.id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'User profile not found'
      });
    }

    // Verify current password
    if (!user.password_hash) {
      return res.status(400).json({
        error: 'No password set',
        message: 'Please set a password first'
      });
    }

    const isValidPassword = await bcrypt.compare(currentPassword, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({
        error: 'Invalid current password',
        message: 'Current password is incorrect'
      });
    }

    // Update password
    await user.update({ password: newPassword });

    res.json({
      message: 'Password changed successfully'
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Password change error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to change password'
    });
  }
});

// Logout (client-side token removal)
router.post('/logout', authenticateToken, (req: AuthenticatedRequest, res) => {
  res.json({
    message: 'Logout successful'
  });
});

// Refresh token
router.post('/refresh', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const user = await User.findByPk(req.user?.id);
    if (!user || !user.is_active) {
      return res.status(401).json({
        error: 'Invalid token',
        message: 'User not found or inactive'
      });
    }

    // Generate new token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Token refreshed successfully',
      token
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to refresh token'
    });
  }
});

export default router;

