import DOMPurify from 'isomorphic-dompurify';
import { z } from 'zod';

// HTML sanitization
export const sanitizeHtml = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: []
  });
};

// Text sanitization
export const sanitizeText = (text: string): string => {
  return text
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Email sanitization
export const sanitizeEmail = (email: string): string => {
  return email.toLowerCase().trim();
};

// Phone number sanitization
export const sanitizePhone = (phone: string): string => {
  return phone.replace(/[^\d+\-\s()]/g, '').trim();
};

// URL sanitization
export const sanitizeUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      throw new Error('Invalid protocol');
    }
    return urlObj.toString();
  } catch {
    return '';
  }
};

// Input validation schemas
export const userSchema = z.object({
  display_name: z.string().min(1).max(100).transform(sanitizeText),
  email: z.string().email().transform(sanitizeEmail),
  phone: z.string().optional().transform(val => val ? sanitizePhone(val) : undefined),
  bio: z.string().max(500).optional().transform(val => val ? sanitizeText(val) : undefined),
});

export const listingSchema = z.object({
  title: z.string().min(1).max(200).transform(sanitizeText),
  description: z.string().max(2000).optional().transform(val => val ? sanitizeText(val) : undefined),
  price_per_day: z.number().positive(),
  location: z.string().min(1).max(200).transform(sanitizeText),
  vehicle_type: z.enum(['sedan', 'hatchback', 'suv', 'bakkie', 'coupe', 'convertible']),
  fuel_type: z.enum(['petrol', 'diesel', 'hybrid', 'electric']),
  transmission: z.enum(['manual', 'automatic']),
  year: z.number().int().min(1990).max(new Date().getFullYear() + 1),
  mileage: z.number().int().min(0),
  features: z.array(z.string()).optional(),
  images: z.array(z.string().url()).optional(),
});

export const bookingSchema = z.object({
  listing_id: z.string().uuid(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
  total_price: z.number().positive(),
  special_requests: z.string().max(500).optional().transform(val => val ? sanitizeText(val) : undefined),
});

export const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(1000).optional().transform(val => val ? sanitizeText(val) : undefined),
  booking_id: z.string().uuid(),
});

// Generic input sanitizer middleware
export const sanitizeInput = (schema: z.ZodSchema) => {
  return (req: any, res: any, next: any) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Invalid input',
          details: error.errors
        });
      }
      next(error);
    }
  };
};

