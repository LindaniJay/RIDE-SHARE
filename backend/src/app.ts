import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { initializeFirebaseAdmin } from './config/firebase';
import { 
  securityHeaders, 
  apiRateLimit, 
  ipBlocking,
  requestSizeLimit 
} from './middlewares/security';
import { sanitizeRequestBody } from './middlewares/sanitization';
// Production routes
import authRoutes from './routes/auth';
import listingRoutes from './routes/listings-production';
import bookingRoutes from './routes/bookings-production';
import paymentRoutes from './routes/payments-production';
import checkpointRoutes from './routes/checkpoints-production';
import adminProductionRoutes from './routes/admin-production';

// Legacy routes (for backward compatibility) - Consolidated
import reviewRoutes from './routes/reviews';
import userRoutes from './routes/users';
import messageRoutes from './routes/messages';
import analyticsRoutes from './routes/analytics';
import earningsRoutes from './routes/earnings';
import notificationRoutes from './routes/notifications';
import documentRoutes from './routes/documents';
import approvalRequestRoutes from './routes/approval-requests';
import firestoreAuthRoutes from './routes/firestore-auth';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false
}));

// Security headers
app.use(securityHeaders);

// IP blocking
app.use(ipBlocking);

// Enhanced rate limiting
app.use(apiRateLimit);

// Request size limiting
app.use(requestSizeLimit('10mb'));

// Compression middleware
app.use(compression());

// CORS with enhanced security
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL!] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Session-ID'],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count']
}));

// Enhanced logging
app.use(morgan('combined', {
  skip: (req, res) => res.statusCode < 400
}));

// Body parsing with enhanced security
app.use(express.json({ 
  limit: '10mb',
  verify: (req, res, buf) => {
    // Additional security checks can be added here
    if (buf.length > 10 * 1024 * 1024) {
      throw new Error('Request too large');
    }
  }
}));
app.use(express.urlencoded({ 
  extended: true, 
  limit: '10mb' 
}));

// Input sanitization
app.use(sanitizeRequestBody);

// Production API routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/checkpoints', checkpointRoutes);
app.use('/api/admin', adminProductionRoutes);

// Legacy routes (for backward compatibility) - Consolidated
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/earnings', earningsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/approval-requests', approvalRequestRoutes);
app.use('/api/firestore-auth', firestoreAuthRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

// Database connection and server start
const startServer = async () => {
  try {
    // Initialize Firebase Admin SDK
    initializeFirebaseAdmin();
    
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    await sequelize.sync({ force: false });
    console.log('Database synchronized.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
    process.exit(1);
  }
};

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  startServer();
}

export default app;
