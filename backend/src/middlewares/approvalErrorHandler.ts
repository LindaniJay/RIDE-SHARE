import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'sequelize';
import { ZodError } from 'zod';

export const approvalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Approval Error:', error);

  // Zod validation errors
  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      details: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    });
  }

  // Sequelize validation errors
  if (error instanceof ValidationError) {
    return res.status(400).json({
      success: false,
      error: 'Database Validation Error',
      details: error.errors.map(err => ({
        field: err.path,
        message: err.message,
        value: err.value
      }))
    });
  }

  // Duplicate key errors
  if (error.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({
      success: false,
      error: 'Duplicate Entry',
      message: 'A record with this information already exists'
    });
  }

  // Foreign key constraint errors
  if (error.name === 'SequelizeForeignKeyConstraintError') {
    return res.status(400).json({
      success: false,
      error: 'Invalid Reference',
      message: 'Referenced record does not exist'
    });
  }

  // Rate limiting errors
  if (error.status === 429) {
    return res.status(429).json({
      success: false,
      error: 'Rate Limit Exceeded',
      message: 'Too many requests. Please try again later.'
    });
  }

  // Default error
  return res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
};
