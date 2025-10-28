import rateLimit from 'express-rate-limit';
import { env } from '../config/env';

// General API rate limiting
export const apiRateLimit = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_REQUESTS,
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: Math.ceil(env.RATE_LIMIT_WINDOW_MS / 1000)
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting for health checks
    return req.path === '/api/health';
  }
});

// Authentication endpoints rate limiting
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: env.AUTH_RATE_LIMIT_MAX,
  message: {
    error: 'Too many authentication attempts, please try again later.',
    retryAfter: 900
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true
});

// Password reset rate limiting
export const passwordResetRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: {
    error: 'Too many password reset attempts, please try again later.',
    retryAfter: 3600
  },
  standardHeaders: true,
  legacyHeaders: false
});

// File upload rate limiting
export const uploadRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    error: 'Too many file uploads, please try again later.',
    retryAfter: 900
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Payment processing rate limiting
export const paymentRateLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5,
  message: {
    error: 'Too many payment attempts, please try again later.',
    retryAfter: 300
  },
  standardHeaders: true,
  legacyHeaders: false
});

