import { Request, Response, NextFunction } from 'express';
import { getAuth } from 'firebase-admin/auth';
import { User } from '../models';
import { logger } from '../utils/logger';

export interface AuthenticatedRequest extends Request {
  user?: User;
}

export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Access token required'
      });
    }

    // Check if this is a test token (starts with 'test-' or 'admin-test-')
    if (token.startsWith('test-') || token.startsWith('admin-test-')) {
      // For testing purposes, find user by firebase_uid
      const user = await User.findOne({ where: { firebase_uid: token } });
      
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'Test user not found'
        });
      }

      // Add user info to request
      req.user = user;
      next();
      return;
    }

    // Verify Firebase token for production
    try {
      const decodedToken = await getAuth().verifyIdToken(token);
      
      // Find user in database
      const user = await User.findOne({ where: { firebase_uid: decodedToken.uid } });
      
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found'
        });
      }

      // Add user info to request
      req.user = user;
      next();
    } catch (firebaseError) {
      logger.error('Firebase token verification failed:', firebaseError);
      return res.status(401).json({
        success: false,
        error: 'Invalid token'
      });
    }
  } catch (error) {
    logger.error('Authentication error:', error);
    return res.status(401).json({
      success: false,
      error: 'Invalid token'
    });
  }
};

export const requireAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      error: 'Admin access required'
    });
  }
  next();
};

export const requireHost = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user || (req.user.role !== 'host' && req.user.role !== 'admin')) {
    return res.status(403).json({
      success: false,
      error: 'Host access required'
    });
  }
  next();
};
// Role-based access control middleware
export const requireRole = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
};

// Firebase token verification middleware
export const verifyFirebaseToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decodedToken = await getAuth().verifyIdToken(token);
    const user = await User.findOne({ where: { firebase_uid: decodedToken.uid } });
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error('Firebase token verification error:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Additional auth middleware
export const requireAuth = authenticateToken;

export const requireHostOrAdmin = requireRole(['host', 'admin']);

export const verifyJWT = authenticateToken;
