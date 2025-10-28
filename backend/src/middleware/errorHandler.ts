import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';
import { logger } from '../utils/logger';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export class CustomError extends Error implements AppError {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// Global error handler
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  logger.error('Error occurred:', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new CustomError(message, 404);
  }

  // Mongoose duplicate key
  if (err.name === 'MongoError' && (err as { code?: number }).code === 11000) {
    const message = 'Duplicate field value entered';
    error = new CustomError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const validationError = err as unknown as { errors: { message: string }[] };
    const message = Object.values(validationError.errors).map((val) => val.message).join(', ');
    error = new CustomError(message, 400);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = new CustomError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = new CustomError(message, 401);
  }

  // Sequelize errors
  if (err.name === 'SequelizeValidationError') {
    const sequelizeError = err as unknown as { errors: { message: string }[] };
    const message = sequelizeError.errors.map((e) => e.message).join(', ');
    error = new CustomError(message, 400);
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    const message = 'Duplicate entry';
    error = new CustomError(message, 400);
  }

  if (err.name === 'SequelizeForeignKeyConstraintError') {
    const message = 'Invalid reference';
    error = new CustomError(message, 400);
  }

  // Rate limit errors
  if (err.message.includes('Too many requests')) {
    error = new CustomError(err.message, 429);
  }

  // File upload errors
  if (err.message.includes('File too large')) {
    error = new CustomError('File size exceeds limit', 413);
  }

  if (err.message.includes('Invalid file type')) {
    error = new CustomError('Invalid file type', 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
// Async error handler wrapper
export const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// 404 handler
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new CustomError(`Not found - ${req.originalUrl}`, 404);
  next(error);
};


