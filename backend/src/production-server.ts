import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { sequelize } from './config/database';
import { initializeFirebaseAdmin } from './config/firebase';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Production routes
import authRoutes from './routes/auth-production';
import listingRoutes from './routes/listings-production';
import bookingRoutes from './routes/bookings-production';
import paymentRoutes from './routes/payments-production';
import checkpointRoutes from './routes/checkpoints-production';
import vehicleRoutes from './routes/vehicles-production';
import adminProductionRoutes from './routes/admin-production';
import testRoutes from './routes/test';
import simpleTestRoutes from './routes/simple-test';

// Legacy routes (for backward compatibility)
import enhancedListingRoutes from './routes/enhanced-listings';
import legacyVehicleRoutes from './routes/vehicles';
import reviewRoutes from './routes/reviews';
import dashboardRoutes from './routes/dashboard';
import statsRoutes from './routes/stats';
import adminRoutes from './routes/admin';
import userRoutes from './routes/users';
import messageRoutes from './routes/messages';
import analyticsRoutes from './routes/analytics';
import earningsRoutes from './routes/earnings';
import notificationRoutes from './routes/notifications';
import approvalRequestRoutes from './routes/approval-requests';
import firestoreAuthRoutes from './routes/firestore-auth';
import { errorHandler } from './middlewares/errorHandler';

// Import models to ensure they're registered
import './models';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001', 
      'http://localhost:5173',
      'http://localhost:4173'
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }
});

const PORT = process.env.PORT || 5001;

// Import centralized security middleware
import { 
  securityHeaders, 
  apiRateLimit, 
  ipBlocking,
  requestSizeLimit 
} from './middlewares/security';
import { sanitizeRequestBody } from './middlewares/sanitization';

// Apply centralized security middleware
app.use(securityHeaders);
app.use(ipBlocking);
app.use(apiRateLimit);
app.use(requestSizeLimit('10mb'));
app.use(sanitizeRequestBody);

// Compression middleware
app.use(compression());

// Middleware
app.use(helmet());
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
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images and PDF files are allowed'));
    }
  }
});

// Make upload middleware available to routes
app.use((req, res, next) => {
  (req as any).upload = upload;
  next();
});

// Production API routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/checkpoints', checkpointRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/admin', adminProductionRoutes);
app.use('/api/test', testRoutes);
app.use('/api/simple', simpleTestRoutes);

// Legacy routes (for backward compatibility)
app.use('/api/enhanced-listings', enhancedListingRoutes);
app.use('/api/legacy-vehicles', legacyVehicleRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/earnings', earningsRoutes);
app.use('/api/host/earnings', earningsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/host', earningsRoutes);
app.use('/api/approval-requests', approvalRequestRoutes);
app.use('/api/firestore-auth', firestoreAuthRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: 'connected',
    version: '1.0.0'
  });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
  
  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`Client ${socket.id} joined room: ${room}`);
  });
  
  socket.on('leave_room', (room) => {
    socket.leave(room);
    console.log(`Client ${socket.id} left room: ${room}`);
  });
  
  socket.on('message', (data) => {
    console.log('Message received:', data);
    // Broadcast to all clients in the same room
    socket.to(data.room || 'default').emit('message', data);
  });
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
    
    server.listen(PORT, () => {
      console.log(`Production server running on port ${PORT}`);
      console.log(`WebSocket server available at ws://localhost:${PORT}`);
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
