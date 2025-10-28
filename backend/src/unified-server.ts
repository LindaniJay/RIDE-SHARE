import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { env } from './config/env';
import { logger } from './utils/logger';
import { sequelize } from './config/database';
import { initializeFirebase } from './config/firebase';

// Import routes
import authRoutes from './routes/auth';
import listingsRoutes from './routes/listings';
import bookingsRoutes from './routes/bookings';
import adminRoutes from './routes/admin';
import notificationsRoutes from './routes/notifications';
import hostRoutes from './routes/host';
import paymentsRoutes from './routes/payments';
import searchRoutes from './routes/search';
import supportRoutes from './routes/support';

// Import models to ensure they're registered
import './models/User';
import './models/Listing';
import './models/Booking';
import './models/Notification';

const app = express();
const server = createServer(app);

// Initialize Socket.IO with CORS configuration
const io = new SocketIOServer(server, {
  cors: {
    origin: env.FRONTEND_URLS.split(','),
    methods: ['GET', 'POST'],
    credentials: true
  },
  path: env.SOCKET_IO_PATH
});

// Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

app.use(cors({
  origin: env.FRONTEND_URLS.split(','),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(compression());
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
    version: '1.0.0'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/host', hostRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/support', supportRoutes);

// Socket.IO connection handling
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`);
  
  socket.on('join-user-room', (userId: string) => {
    socket.join(`user-${userId}`);
    logger.info(`User ${userId} joined their room`);
  });
  
  socket.on('join-admin-room', () => {
    socket.join('admin-room');
    logger.info('Admin joined admin room');
  });
  
  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });
});

// Make io available to routes
app.set('io', io);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Database and server initialization
const initializeServer = async () => {
  try {
    // Initialize Firebase Admin
    try {
      await initializeFirebase();
      logger.info('Firebase Admin initialized');
    } catch (firebaseError) {
      logger.warn('Firebase Admin initialization failed (continuing without Firebase):', firebaseError);
    }

    // Test database connection
    await sequelize.authenticate();
    logger.info('Database connection established');

    // Sync database models
    await sequelize.sync({ alter: env.NODE_ENV === 'development' });
    logger.info('Database models synchronized');

    // Start server
    const port = env.PORT;
    server.listen(port, '0.0.0.0', () => {
      logger.info(`🚀 Server running on http://localhost:${port}`);
      logger.info(`📱 Environment: ${env.NODE_ENV}`);
      logger.info(`🔗 Frontend URLs: ${env.FRONTEND_URLS}`);
      logger.info(`📊 Socket.io path: ${env.SOCKET_IO_PATH}`);
      logger.info(`🔗 Health check: http://localhost:${port}/api/health`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      logger.info('SIGTERM received, shutting down gracefully');
      server.close(() => {
        logger.info('Process terminated');
        process.exit(0);
      });
    });

    process.on('SIGINT', () => {
      logger.info('SIGINT received, shutting down gracefully');
      server.close(() => {
        logger.info('Process terminated');
        process.exit(0);
      });
    });

  } catch (error) {
    logger.error('Failed to initialize server:', error);
    process.exit(1);
  }
};

// Export for testing
export { app, server, io };

// Start server if not in test environment
if (env.NODE_ENV !== 'test') {
  initializeServer();
}

export default app;