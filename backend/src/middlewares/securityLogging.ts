import { Request, Response, NextFunction } from 'express';
import { AuthRequest } from './auth';

// Security event logging
export const logSecurityEvent = (event: string, details: any) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    event,
    details,
    severity: getSeverityLevel(event)
  };
  
  console.log(`[SECURITY] ${JSON.stringify(logEntry)}`);
  
  // In production, send to security monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to external security monitoring service
    // Example: sendToSecurityService(logEntry);
  }
};

// Get severity level for security events
const getSeverityLevel = (event: string): 'low' | 'medium' | 'high' | 'critical' => {
  const criticalEvents = [
    'multiple_failed_logins',
    'account_lockout',
    'suspicious_activity',
    'admin_access_attempt',
    'data_breach_attempt'
  ];
  
  const highEvents = [
    'failed_login',
    'invalid_token',
    'rate_limit_exceeded',
    'unauthorized_access'
  ];
  
  const mediumEvents = [
    'password_reset_request',
    'session_timeout',
    '2fa_failure'
  ];
  
  if (criticalEvents.includes(event)) return 'critical';
  if (highEvents.includes(event)) return 'high';
  if (mediumEvents.includes(event)) return 'medium';
  return 'low';
};

// Log authentication attempts
export const logAuthAttempt = (req: Request, res: Response, next: NextFunction) => {
  const originalSend = res.send;
  
  res.send = function(data) {
    const statusCode = res.statusCode;
    const email = req.body?.email;
    
    if (req.path.includes('/login')) {
      if (statusCode === 200) {
        logSecurityEvent('successful_login', {
          email,
          ip: req.ip,
          userAgent: req.headers['user-agent']
        });
      } else if (statusCode === 401) {
        logSecurityEvent('failed_login', {
          email,
          ip: req.ip,
          userAgent: req.headers['user-agent'],
          reason: 'invalid_credentials'
        });
      } else if (statusCode === 423) {
        logSecurityEvent('account_lockout', {
          email,
          ip: req.ip,
          userAgent: req.headers['user-agent']
        });
      }
    }
    
    return originalSend.call(this, data);
  };
  
  next();
};

// Log admin actions
export const logAdminAction = (action: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const originalSend = res.send;
    
    res.send = function(data) {
      if (req.user?.role === 'admin') {
        logSecurityEvent('admin_action', {
          action,
          adminId: req.user.id,
          adminEmail: req.user.email,
          ip: req.ip,
          userAgent: req.headers['user-agent'],
          timestamp: new Date().toISOString()
        });
      }
      
      return originalSend.call(this, data);
    };
    
    next();
  };
};

// Log suspicious activity
export const logSuspiciousActivity = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip;
  const userAgent = req.headers['user-agent'];
  const path = req.path;
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /\.\./, // Directory traversal
    /<script/i, // XSS attempts
    /union.*select/i, // SQL injection
    /javascript:/i, // JavaScript injection
    /eval\(/i, // Code injection
    /document\.cookie/i, // Cookie theft attempts
  ];
  
  const bodyString = JSON.stringify(req.body);
  const queryString = JSON.stringify(req.query);
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(bodyString) || pattern.test(queryString) || pattern.test(path)) {
      logSecurityEvent('suspicious_activity', {
        ip,
        userAgent,
        path,
        pattern: pattern.toString(),
        body: req.body,
        query: req.query
      });
      
      return res.status(400).json({
        error: 'Suspicious activity detected',
        message: 'Your request has been blocked for security reasons'
      });
    }
  }
  
  next();
};

// Log rate limit violations
export const logRateLimitViolation = (req: Request, res: Response, next: NextFunction) => {
  const originalSend = res.send;
  
  res.send = function(data) {
    if (res.statusCode === 429) {
      logSecurityEvent('rate_limit_exceeded', {
        ip: req.ip,
        userAgent: req.headers['user-agent'],
        path: req.path,
        method: req.method,
        timestamp: new Date().toISOString()
      });
    }
    
    return originalSend.call(this, data);
  };
  
  next();
};

// Log 2FA events
export const log2FAEvent = (event: string, userId: string, success: boolean) => {
  logSecurityEvent('2fa_event', {
    event,
    userId,
    success,
    timestamp: new Date().toISOString()
  });
};

// Log session events
export const logSessionEvent = (event: string, userId: string, sessionId: string) => {
  logSecurityEvent('session_event', {
    event,
    userId,
    sessionId,
    timestamp: new Date().toISOString()
  });
};

// Log password events
export const logPasswordEvent = (event: string, userId: string, success: boolean) => {
  logSecurityEvent('password_event', {
    event,
    userId,
    success,
    timestamp: new Date().toISOString()
  });
};

// Log data access events
export const logDataAccess = (req: AuthRequest, res: Response, next: NextFunction) => {
  const originalSend = res.send;
  
  res.send = function(data) {
    if (req.user) {
      logSecurityEvent('data_access', {
        userId: req.user.id,
        userRole: req.user.role,
        path: req.path,
        method: req.method,
        ip: req.ip,
        timestamp: new Date().toISOString()
      });
    }
    
    return originalSend.call(this, data);
  };
  
  next();
};
