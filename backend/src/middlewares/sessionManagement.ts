import { Request, Response, NextFunction } from 'express';
import { User } from '../models';
import { AuthenticatedRequest } from '../middleware/auth';
import { cacheService } from '../services/cache';

// Session configuration
const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes
const REFRESH_TIMEOUT = 7 * 24 * 60 * 60 * 1000; // 7 days
const MAX_CONCURRENT_SESSIONS = 3;

// Track active sessions
export const trackSession = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const user = req.user!;
    const sessionId = req.headers['x-session-id'] as string;
    
    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID required' });
    }
    
    // Check if session exists and is valid
    const sessionKey = `session:${user.id}:${sessionId}`;
    const sessionData = await cacheService.get(sessionKey);
    
    if (!sessionData) {
      return res.status(401).json({ error: 'Invalid or expired session' });
    }
    
    // Update last activity
    await cacheService.set(sessionKey, {
      ...JSON.parse(sessionData),
      lastActivity: new Date().toISOString()
    }, REFRESH_TIMEOUT);
    
    next();
  } catch (error) {
    console.error('Session tracking error:', error);
    res.status(500).json({ error: 'Session validation failed' });
  }
};

// Create new session
export const createSession = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user!;
    const sessionId = generateSessionId();
    const sessionData = {
      userId: user.id,
      email: user.email,
      role: user.role,
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      ipAddress: req.ip,
      userAgent: req.headers['user-agent']
    };
    
    // Store session
    const sessionKey = `session:${user.id}:${sessionId}`;
    await cacheService.set(sessionKey, JSON.stringify(sessionData), REFRESH_TIMEOUT);
    
    // Clean up old sessions if user has too many
    await cleanupOldSessions(Number(user.id));
    
    res.json({
      success: true,
      sessionId,
      expiresAt: new Date(Date.now() + REFRESH_TIMEOUT).toISOString()
    });
  } catch (error) {
    console.error('Session creation error:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
};

// Refresh session
export const refreshSession = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user!;
    const sessionId = req.headers['x-session-id'] as string;
    
    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID required' });
    }
    
    const sessionKey = `session:${user.id}:${sessionId}`;
    const sessionData = await cacheService.get(sessionKey);
    
    if (!sessionData) {
      return res.status(401).json({ error: 'Invalid session' });
    }
    
    // Update session
    const parsedSession = JSON.parse(sessionData);
    await cacheService.set(sessionKey, {
      ...parsedSession,
      lastActivity: new Date().toISOString()
    }, REFRESH_TIMEOUT);
    
    res.json({
      success: true,
      expiresAt: new Date(Date.now() + SESSION_TIMEOUT).toISOString()
    });
  } catch (error) {
    console.error('Session refresh error:', error);
    res.status(500).json({ error: 'Failed to refresh session' });
  }
};

// Logout and invalidate session
export const logoutSession = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user!;
    const sessionId = req.headers['x-session-id'] as string;
    
    if (sessionId) {
      const sessionKey = `session:${user.id}:${sessionId}`;
      await cacheService.del(sessionKey);
    }
    
    res.json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Failed to logout' });
  }
};

// Logout from all devices
export const logoutAllSessions = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user!;
    
    // Get all session keys for user
    const sessionPattern = `session:${user.id}:*`;
    const sessionKeys = await (cacheService as any).keys(sessionPattern);
    
    // Delete all sessions
    if (sessionKeys.length > 0) {
      for (const key of sessionKeys) {
        await cacheService.del(key);
      }
    }
    
    res.json({ 
      success: true, 
      message: 'Logged out from all devices',
      sessionsTerminated: sessionKeys.length
    });
  } catch (error) {
    console.error('Logout all sessions error:', error);
    res.status(500).json({ error: 'Failed to logout from all sessions' });
  }
};

// Get active sessions
export const getActiveSessions = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = req.user!;
    const sessionPattern = `session:${user.id}:*`;
    const sessionKeys = await (cacheService as any).keys(sessionPattern);
    
    const sessions = await Promise.all(
      sessionKeys.map(async (key: string) => {
        const sessionData = await cacheService.get(key);
        if (sessionData) {
          const parsed = JSON.parse(sessionData);
          return {
            sessionId: key.split(':')[2],
            createdAt: parsed.createdAt,
            lastActivity: parsed.lastActivity,
            ipAddress: parsed.ipAddress,
            userAgent: parsed.userAgent,
            isCurrent: key.includes(req.headers['x-session-id'] as string)
          };
        }
        return null;
      })
    );
    
    res.json({
      success: true,
      sessions: sessions.filter(Boolean)
    });
  } catch (error) {
    console.error('Get active sessions error:', error);
    res.status(500).json({ error: 'Failed to get active sessions' });
  }
};

// Clean up old sessions
const cleanupOldSessions = async (userId: number) => {
  try {
    const sessionPattern = `session:${userId}:*`;
    const sessionKeys = await (cacheService as any).keys(sessionPattern);
    
    if (sessionKeys.length > MAX_CONCURRENT_SESSIONS) {
      // Get session data and sort by last activity
      const sessionsWithData = await Promise.all(
        sessionKeys.map(async (key: string) => {
          const data = await cacheService.get(key);
          return { key, data: data ? JSON.parse(data) : null };
        })
      );
      
      // Sort by last activity (oldest first)
      const sortedSessions = sessionsWithData
        .filter((s: any) => s.data)
        .sort((a: any, b: any) => new Date(a.data.lastActivity).getTime() - new Date(b.data.lastActivity).getTime());
      
      // Remove oldest sessions
      const sessionsToRemove = sortedSessions.slice(0, sortedSessions.length - MAX_CONCURRENT_SESSIONS);
      const keysToRemove = sessionsToRemove.map((s: any) => s.key);
      
      if (keysToRemove.length > 0) {
        for (const key of keysToRemove) {
          await cacheService.del(key);
        }
      }
    }
  } catch (error) {
    console.error('Session cleanup error:', error);
  }
};

// Generate secure session ID
const generateSessionId = (): string => {
  return require('crypto').randomBytes(32).toString('hex');
};

// Session timeout middleware
export const checkSessionTimeout = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const user = req.user!;
    const sessionId = req.headers['x-session-id'] as string;
    
    if (!sessionId) {
      return next();
    }
    
    const sessionKey = `session:${user.id}:${sessionId}`;
    const sessionData = await cacheService.get(sessionKey);
    
    if (!sessionData) {
      return res.status(401).json({ error: 'Session expired' });
    }
    
    const parsedSession = JSON.parse(sessionData);
    const lastActivity = new Date(parsedSession.lastActivity);
    const now = new Date();
    
    // Check if session has timed out
    if (now.getTime() - lastActivity.getTime() > SESSION_TIMEOUT) {
      await cacheService.del(sessionKey);
      return res.status(401).json({ error: 'Session timed out' });
    }
    
    next();
  } catch (error) {
    console.error('Session timeout check error:', error);
    res.status(500).json({ error: 'Session validation failed' });
  }
};
