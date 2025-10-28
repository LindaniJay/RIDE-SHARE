import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { env } from './config/env';
import { sequelize } from './config/database';
import { initializeFirebaseAdmin } from './config/firebase';
import { apiRateLimit, authRateLimit } from './middleware/rateLimiter';
import { sanitizeInput } from './utils/sanitizer';
import { errorHandler, notFound } from './middleware/errorHandler';
import { logger, morganStream } from './utils/logger';

// Import routes
import authRoutes from './routes/auth.routes';
import adminAuthRoutes from './routes/admin-auth';
import listingRoutes from './routes/listings.routes';
import bookingRoutes from './routes/bookings.routes';
import paymentRoutes from './routes/payments.routes';
import vehicleRoutes from './routes/vehicles';
import notificationRoutes from './routes/notifications';

// Import models to initialize associations
import './models';

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ['\'self\''],
      styleSrc: ['\'self\'', '\'unsafe-inline\''],
      scriptSrc: ['\'self\''],
      imgSrc: ['\'self\'', 'data:', 'https:'],
      connectSrc: ['\'self\''],
      fontSrc: ['\'self\''],
      objectSrc: ['\'none\''],
      mediaSrc: ['\'self\''],
      frameSrc: ['\'none\''],
    },
  },
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:4173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Session-ID'],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count']
}));

// Compression
app.use(compression());

// Logging
app.use(morgan('combined', {
  stream: morganStream,
  skip: (req, res) => res.statusCode < 400
}));

// Body parsing
app.use(express.json({ 
  limit: '10mb',
  verify: (req, res, buf) => {
    if (buf.length > 10 * 1024 * 1024) {
      throw new Error('Request too large');
    }
  }
}));

app.use(express.urlencoded({ 
  extended: true, 
  limit: '10mb' 
}));

// Rate limiting
app.use(apiRateLimit);

// Input sanitization
app.use(sanitizeInput);

// Serve static files
const uploadsPath = env.UPLOADS_PATH;
app.use('/uploads', express.static(uploadsPath));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0'
  });
});

// Test endpoint without authentication
app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit!', new Date().toISOString());
  res.json({ 
    message: 'Backend is working!',
    timestamp: new Date().toISOString()
  });
});

// API routes (temporarily without auth for testing)
app.use('/api/auth', authRateLimit, authRoutes);
app.use('/api/admin-auth', adminAuthRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/notifications', notificationRoutes);

// Admin routes
import adminRoutes from './routes/admin';
import dashboardRoutes from './routes/dashboard';
import approvalRequestRoutes from './routes/approval-requests';
import adminProductionRoutes from './routes/admin-production';
app.use('/api/admin', adminRoutes);
app.use('/api/admin', dashboardRoutes);
app.use('/api/admin', approvalRequestRoutes);
app.use('/api/admin', adminProductionRoutes);

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

// Database connection and server initialization
export const initializeApp = async () => {
  try {
    // Initialize Firebase Admin SDK (non-blocking)
    try {
      initializeFirebaseAdmin();
      logger.info('Firebase Admin SDK initialized successfully');
    } catch (firebaseError) {
      logger.warn('Firebase Admin SDK initialization failed (continuing without Firebase):', firebaseError);
    }
    
    // Test database connection
    await sequelize.authenticate();
    logger.info('Database connection established successfully');
    
    // Sync database (create tables if they don't exist) - non-blocking
    sequelize.sync({ force: false }).then(() => {
      logger.info('Database synchronized');
    }).catch((syncError) => {
      logger.error('Database sync failed:', syncError);
    });
    
    return app;
  } catch (error) {
    logger.error('Unable to initialize app:', error);
    throw error;
  }
};

export default app;