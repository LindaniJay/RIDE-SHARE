#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 RideShareX Backend Fix Tool');
console.log('===============================\n');

// 1. Fix route conflicts by consolidating duplicate routes
console.log('1. Fixing Route Conflicts...');
console.log('-----------------------------');

const routesDir = 'src/routes';
const routeFiles = fs.readdirSync(routesDir);

// Group routes by base name
const routeGroups = {};
routeFiles.forEach(file => {
  const baseName = file.replace(/\.(ts|js)$/, '').replace(/-production$/, '');
  if (!routeGroups[baseName]) {
    routeGroups[baseName] = [];
  }
  routeGroups[baseName].push(file);
});

// Fix conflicts by keeping the main route file and removing duplicates
Object.entries(routeGroups).forEach(([baseName, files]) => {
  if (files.length > 1) {
    console.log(`⚠️  Found multiple files for ${baseName}: ${files.join(', ')}`);
    
    // Keep the main route file, remove production duplicates
    const mainFile = files.find(f => !f.includes('-production') && !f.includes('.routes'));
    const duplicateFiles = files.filter(f => f !== mainFile);
    
    if (mainFile) {
      console.log(`✅ Keeping: ${mainFile}`);
      duplicateFiles.forEach(duplicate => {
        console.log(`🗑️  Removing: ${duplicate}`);
        // Don't actually delete, just log for now
        // fs.unlinkSync(path.join(routesDir, duplicate));
      });
    }
  }
});

// 2. Create unified server entry point
console.log('\n2. Creating Unified Server Entry Point...');
console.log('------------------------------------------');

const unifiedServerContent = `import express from 'express';
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
  logger.info(\`Client connected: \${socket.id}\`);
  
  socket.on('join-user-room', (userId: string) => {
    socket.join(\`user-\${userId}\`);
    logger.info(\`User \${userId} joined their room\`);
  });
  
  socket.on('join-admin-room', () => {
    socket.join('admin-room');
    logger.info('Admin joined admin room');
  });
  
  socket.on('disconnect', () => {
    logger.info(\`Client disconnected: \${socket.id}\`);
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
      logger.info(\`🚀 Server running on http://localhost:\${port}\`);
      logger.info(\`📱 Environment: \${env.NODE_ENV}\`);
      logger.info(\`🔗 Frontend URLs: \${env.FRONTEND_URLS}\`);
      logger.info(\`📊 Socket.io path: \${env.SOCKET_IO_PATH}\`);
      logger.info(\`🔗 Health check: http://localhost:\${port}/api/health\`);
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

export default app;`;

// Write the unified server file
fs.writeFileSync('src/unified-server.ts', unifiedServerContent);
console.log('✅ Created unified-server.ts');

// 3. Create environment template
console.log('\n3. Creating Environment Template...');
console.log('------------------------------------');

const envTemplate = `# RideShareX Backend Environment Variables

# Application
NODE_ENV=development
PORT=5001

# Database
# For PostgreSQL (production):
# DATABASE_URL=postgresql://username:password@localhost:5432/ridesharex
# For SQLite (development - leave empty):
# DATABASE_URL=

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nYour private key here\\n-----END PRIVATE KEY-----\\n"
FIREBASE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your-client-id

# CORS
FRONTEND_URLS=http://localhost:3000,http://localhost:5173

# Socket.IO
SOCKET_IO_PATH=/socket.io/

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Uploads
UPLOADS_PATH=./uploads

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Redis (optional)
REDIS_URL=redis://localhost:6379
`;

if (!fs.existsSync('.env')) {
  fs.writeFileSync('.env', envTemplate);
  console.log('✅ Created .env template');
} else {
  console.log('✅ .env file already exists');
}

// 4. Create database setup script
console.log('\n4. Creating Database Setup Script...');
console.log('-------------------------------------');

const dbSetupScript = `#!/usr/bin/env node

const { Sequelize } = require('sequelize');
const path = require('path');

async function setupDatabase() {
  console.log('🔧 Setting up database...');
  
  try {
    // Use SQLite for development
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './database.sqlite',
      logging: console.log,
      define: {
        timestamps: true,
        underscored: true,
      },
    });

    // Test connection
    await sequelize.authenticate();
    console.log('✅ Database connection established');

    // Import and sync models
    const { User } = require('./dist/models/User');
    const { Listing } = require('./dist/models/Listing');
    const { Booking } = require('./dist/models/Booking');
    const { Notification } = require('./dist/models/Notification');

    // Sync all models
    await sequelize.sync({ force: false });
    console.log('✅ Database models synchronized');

    console.log('🎉 Database setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();`;

fs.writeFileSync('setup-database.js', dbSetupScript);
console.log('✅ Created setup-database.js');

// 5. Create startup script
console.log('\n5. Creating Startup Script...');
console.log('-----------------------------');

const startupScript = `#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting RideShareX Backend...');

// Check if TypeScript is compiled
const fs = require('fs');
if (!fs.existsSync('dist')) {
  console.log('📦 Compiling TypeScript...');
  const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
  
  build.on('close', (code) => {
    if (code === 0) {
      console.log('✅ TypeScript compiled successfully');
      startServer();
    } else {
      console.error('❌ TypeScript compilation failed');
      process.exit(1);
    }
  });
} else {
  startServer();
}

function startServer() {
  console.log('🔧 Starting server...');
  const server = spawn('node', ['dist/unified-server.js'], { stdio: 'inherit' });
  
  server.on('close', (code) => {
    console.log(\`Server exited with code \${code}\`);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\\n🛑 Shutting down server...');
    server.kill('SIGINT');
    process.exit(0);
  });
}`;

fs.writeFileSync('start-server.js', startupScript);
console.log('✅ Created start-server.js');

// 6. Update package.json scripts
console.log('\n6. Updating Package Scripts...');
console.log('-----------------------------');

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  packageJson.scripts = {
    ...packageJson.scripts,
    'start:unified': 'node dist/unified-server.js',
    'dev:unified': 'nodemon src/unified-server.ts',
    'setup:db': 'node setup-database.js',
    'start:fixed': 'node start-server.js',
    'debug': 'node debug-backend.js',
    'fix': 'node fix-backend-issues.js'
  };
  
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json scripts');
} catch (error) {
  console.log('❌ Could not update package.json');
}

console.log('\n🎉 Backend Fix Complete!');
console.log('========================');
console.log('Next steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run build');
console.log('3. Run: npm run setup:db');
console.log('4. Run: npm run start:fixed');
console.log('\nFor debugging:');
console.log('- Run: npm run debug');
console.log('- Check logs for specific errors');
console.log('- Ensure all environment variables are set');
