import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  const error = err as Error & { status?: number; errors?: { message: string }[] };
  console.error(error.stack);

  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: error.errors,
    });
  }

  if (error.name === 'SequelizeValidationError') {
    return res.status(400).json({
      error: 'Database Validation Error',
      details: error.errors?.map((e: { message: string }) => e.message),
    });
  }

  if (error.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({
      error: 'Duplicate Entry',
      message: 'A record with this information already exists',
    });
  }

  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'Invalid Token',
      message: 'The provided token is invalid',
    });
  }

  if (error.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: 'Token Expired',
      message: 'The provided token has expired',
    });
  }

  res.status(error.status || 500).json({
    error: error.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });
};
