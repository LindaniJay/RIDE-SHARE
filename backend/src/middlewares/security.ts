import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { cacheService } from '../services/cache';

// Enhanced rate limiting for different endpoints
export const createRateLimit = (windowMs: number, max: number, message?: string) => {
  return rateLimit({
    windowMs,
    max,
    message: message || 'Too many requests, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Rate limit exceeded',
        message: message || 'Too many requests, please try again later.',
        retryAfter: Math.round(windowMs / 1000)
      });
    }
  });
};

// Specific rate limits with enhanced security
export const authRateLimit = createRateLimit(
  15 * 60 * 1000, // 15 minutes
  3, // 3 attempts (reduced from 5)
  'Too many authentication attempts, please try again later.'
);

export const strictAuthRateLimit = createRateLimit(
  60 * 60 * 1000, // 1 hour
  5, // 5 attempts per hour
  'Account temporarily locked due to too many failed attempts.'
);

export const apiRateLimit = createRateLimit(
  15 * 60 * 1000, // 15 minutes
  100, // 100 requests
  'Too many API requests, please try again later.'
);

export const uploadRateLimit = createRateLimit(
  60 * 60 * 1000, // 1 hour
  10, // 10 uploads
  'Too many file uploads, please try again later.'
);

export const passwordResetRateLimit = createRateLimit(
  60 * 60 * 1000, // 1 hour
  3, // 3 password reset attempts
  'Too many password reset attempts, please try again later.'
);

export const registrationRateLimit = createRateLimit(
  60 * 60 * 1000, // 1 hour
  5, // 5 registrations per hour
  'Too many registration attempts, please try again later.'
);

// IP-based blocking
export const ipBlocking = async (req: Request, res: Response, next: NextFunction) => {
  const clientIp = req.ip || req.connection.remoteAddress;
  
  if (!clientIp) {
    return next();
  }

  try {
    const blockedKey = `blocked_ip:${clientIp}`;
    const isBlocked = await cacheService.exists(blockedKey);
    
    if (isBlocked) {
      return res.status(403).json({
        error: 'IP address blocked',
        message: 'Your IP address has been temporarily blocked due to suspicious activity.'
      });
    }
  } catch (error) {
    console.error('IP blocking check failed:', error);
  }

  next();
};

// Request size limiting
export const requestSizeLimit = (maxSize: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const contentLength = parseInt(req.headers['content-length'] || '0');
    const maxBytes = parseInt(maxSize.replace(/[^\d]/g, '')) * 1024 * 1024; // Convert MB to bytes

    if (contentLength > maxBytes) {
      return res.status(413).json({
        error: 'Request too large',
        message: `Request size exceeds the maximum allowed size of ${maxSize}.`
      });
    }

    next();
  };
};

// Enhanced security headers
export const securityHeaders = (req: Request, res: Response, next: NextFunction) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // DNS prefetch control
  res.setHeader('X-DNS-Prefetch-Control', 'off');
  
  // Download options
  res.setHeader('X-Download-Options', 'noopen');
  
  // Cross-domain policies
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  
  // Cross-Origin policies
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  
  // Strict Transport Security
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  
  // Enhanced Content Security Policy
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https:; " +
    "connect-src 'self' https:; " +
    "frame-ancestors 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'"
  );
  
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Enhanced Permissions Policy
  res.setHeader('Permissions-Policy', 
    'camera=(), microphone=(), geolocation=(self), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  );

  next();
};

// Request validation
export const validateRequest = (schema: { parse: (data: unknown) => unknown }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      });
      next();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(400).json({
        error: 'Validation error',
        message: 'Invalid request data',
        details: errorMessage
      });
    }
  };
};

// API key validation for external services
export const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'] as string;
  
  if (!apiKey) {
    return res.status(401).json({
      error: 'API key required',
      message: 'Please provide a valid API key in the x-api-key header.'
    });
  }

  // In production, validate against database or external service
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      error: 'Invalid API key',
      message: 'The provided API key is invalid.'
    });
  }

  next();
};
