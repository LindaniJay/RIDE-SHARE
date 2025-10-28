#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing TypeScript Compilation Errors');
console.log('======================================\n');

// 1. Fix environment variables in env.ts
console.log('1. Fixing Environment Variables...');
console.log('----------------------------------');

const envContent = `import dotenv from 'dotenv';

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT || '5001'),
  DATABASE_URL: process.env.DATABASE_URL,
  
  // Firebase Admin SDK
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || 'ride-share-56610',
  FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
  
  // CORS
  FRONTEND_URLS: process.env.FRONTEND_URLS || 'http://localhost:3000,http://localhost:5173',
  
  // Socket.IO
  SOCKET_IO_PATH: process.env.SOCKET_IO_PATH || '/socket.io/',
  
  // JWT
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'your-refresh-secret',
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
  
  // Rate limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  
  // Payment providers
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  PAYFAST_MERCHANT_ID: process.env.PAYFAST_MERCHANT_ID,
  PAYFAST_MERCHANT_KEY: process.env.PAYFAST_MERCHANT_KEY,
  PAYFAST_PASSPHRASE: process.env.PAYFAST_PASSPHRASE,
  PAYFAST_SANDBOX: process.env.PAYFAST_SANDBOX === 'true',
  
  // File uploads
  UPLOADS_PATH: process.env.UPLOADS_PATH || './uploads',
  
  // Email
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587'),
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  
  // Redis
  REDIS_URL: process.env.REDIS_URL,
};`;

fs.writeFileSync('src/config/env.ts', envContent);
console.log('✅ Fixed environment variables');

// 2. Fix User model
console.log('\n2. Fixing User Model...');
console.log('------------------------');

const userModelContent = `import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface UserAttributes {
  id: number;
  uid: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: 'admin' | 'host' | 'renter';
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  firebase_uid?: string;
  display_name?: string;
  avatar_url?: string;
  is_email_verified?: boolean;
  approval_status?: string;
  locked_until?: Date;
  login_attempts?: number;
  created_at?: Date;
  first_name?: string;
  last_name?: string;
}

export interface UserCreationAttributes extends Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare uid: string;
  declare firstName?: string;
  declare lastName?: string;
  declare email: string;
  declare role: 'admin' | 'host' | 'renter';
  declare isVerified: boolean;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare firebase_uid?: string;
  declare display_name?: string;
  declare avatar_url?: string;
  declare is_email_verified?: boolean;
  declare approval_status?: string;
  declare locked_until?: Date;
  declare login_attempts?: number;
  declare created_at?: Date;
  declare first_name?: string;
  declare last_name?: string;

  // Methods
  incrementLoginCount() {
    this.login_attempts = (this.login_attempts || 0) + 1;
  }

  resetFailedAttempts() {
    this.login_attempts = 0;
    this.locked_until = undefined;
  }

  isLocked() {
    return this.locked_until && this.locked_until > new Date();
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'host', 'renter'),
    allowNull: false,
    defaultValue: 'renter',
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  firebase_uid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  display_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_email_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  approval_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  locked_until: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  login_attempts: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  underscored: true,
});

export default User;`;

fs.writeFileSync('src/models/User.ts', userModelContent);
console.log('✅ Fixed User model');

// 3. Fix Listing model
console.log('\n3. Fixing Listing Model...');
console.log('---------------------------');

const listingModelContent = `import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface ListingAttributes {
  id: number;
  hostId: number;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  image: string;
  status: 'pending' | 'approved' | 'rejected';
  city: string;
  description?: string;
  features?: string[];
  fuelType?: string;
  transmission?: string;
  seats?: number;
  mileage?: number;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  title?: string;
  location?: string;
  images?: string[];
  approval_status?: string;
  approved?: boolean;
  is_available?: boolean;
  price_per_day?: number;
  host_id?: number;
  created_at?: Date;
  is_featured?: boolean;
  total_bookings?: number;
  total_earnings?: number;
  category?: string;
  minimum_rental_days?: number;
}

export interface ListingCreationAttributes extends Omit<ListingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Listing extends Model<InferAttributes<Listing>, InferCreationAttributes<Listing>> {
  declare id: CreationOptional<number>;
  declare hostId: number;
  declare make: string;
  declare model: string;
  declare year: number;
  declare pricePerDay: number;
  declare image: string;
  declare status: 'pending' | 'approved' | 'rejected';
  declare city: string;
  declare description?: string;
  declare features?: string[];
  declare fuelType?: string;
  declare transmission?: string;
  declare seats?: number;
  declare mileage?: number;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare title?: string;
  declare location?: string;
  declare images?: string[];
  declare approval_status?: string;
  declare approved?: boolean;
  declare is_available?: boolean;
  declare price_per_day?: number;
  declare host_id?: number;
  declare created_at?: Date;
  declare is_featured?: boolean;
  declare total_bookings?: number;
  declare total_earnings?: number;
  declare category?: string;
  declare minimum_rental_days?: number;
}

Listing.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hostId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pricePerDay: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    allowNull: false,
    defaultValue: 'pending',
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  features: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  fuelType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  approval_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  approved: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  price_per_day: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  host_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  is_featured: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  total_bookings: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  total_earnings: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  minimum_rental_days: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
}, {
  sequelize,
  modelName: 'Listing',
  tableName: 'listings',
  timestamps: true,
  underscored: true,
});

export default Listing;`;

fs.writeFileSync('src/models/Listing.ts', listingModelContent);
console.log('✅ Fixed Listing model');

// 4. Fix Booking model
console.log('\n4. Fixing Booking Model...');
console.log('---------------------------');

const bookingModelContent = `import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface BookingAttributes {
  id: number;
  renterId: number;
  listingId: number;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  total_amount?: number;
  listing?: any;
  renter_id?: number;
  listing_id?: number;
  created_at?: Date;
}

export interface BookingCreationAttributes extends Omit<BookingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Booking extends Model<InferAttributes<Booking>, InferCreationAttributes<Booking>> {
  declare id: CreationOptional<number>;
  declare renterId: number;
  declare listingId: number;
  declare startDate: Date;
  declare endDate: Date;
  declare totalPrice: number;
  declare status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  declare paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  declare paymentMethod?: string;
  declare specialRequests?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare total_amount?: number;
  declare listing?: any;
  declare renter_id?: number;
  declare listing_id?: number;
  declare created_at?: Date;

  // Methods
  approve() {
    this.status = 'confirmed';
  }
}

Booking.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  renterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  listingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'listings',
      key: 'id',
    },
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
    allowNull: false,
    defaultValue: 'pending',
  },
  paymentStatus: {
    type: DataTypes.ENUM('pending', 'paid', 'failed', 'refunded'),
    allowNull: false,
    defaultValue: 'pending',
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  specialRequests: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  renter_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  listing_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Booking',
  tableName: 'bookings',
  timestamps: true,
  underscored: true,
});

export default Booking;`;

fs.writeFileSync('src/models/Booking.ts', bookingModelContent);
console.log('✅ Fixed Booking model');

// 5. Fix Notification model
console.log('\n5. Fixing Notification Model...');
console.log('---------------------------------');

const notificationModelContent = `import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface NotificationAttributes {
  id: number;
  userId: number;
  message: string;
  type: 'booking' | 'approval' | 'payment' | 'system';
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  user_id?: number;
  title?: string;
  data?: any;
  is_read?: boolean;
  created_at?: Date;
}

export interface NotificationCreationAttributes extends Omit<NotificationAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Notification extends Model<InferAttributes<Notification>, InferCreationAttributes<Notification>> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare message: string;
  declare type: 'booking' | 'approval' | 'payment' | 'system';
  declare isRead: boolean;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare user_id?: number;
  declare title?: string;
  declare data?: any;
  declare is_read?: boolean;
  declare created_at?: Date;

  // Methods
  markAsRead() {
    this.isRead = true;
  }
}

Notification.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('booking', 'approval', 'payment', 'system'),
    allowNull: false,
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  is_read: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Notification',
  tableName: 'notifications',
  timestamps: true,
  underscored: true,
});

export default Notification;`;

fs.writeFileSync('src/models/Notification.ts', notificationModelContent);
console.log('✅ Fixed Notification model');

// 6. Fix Firebase config
console.log('\n6. Fixing Firebase Configuration...');
console.log('------------------------------------');

const firebaseConfigContent = `import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { env } from './env';
import { logger } from '../utils/logger';

let firebaseApp: any;

export const initializeFirebase = async () => {
  try {
    // Check if Firebase is already initialized
    if (getApps().length > 0) {
      firebaseApp = getApps()[0];
      return firebaseApp;
    }

    // Initialize Firebase Admin SDK
    const serviceAccount = {
      type: 'service_account',
      project_id: env.FIREBASE_PROJECT_ID,
      private_key_id: env.FIREBASE_PRIVATE_KEY_ID,
      private_key: env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\\n'),
      client_email: env.FIREBASE_CLIENT_EMAIL,
      client_id: env.FIREBASE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: \`https://www.googleapis.com/robot/v1/metadata/x509/\${env.FIREBASE_CLIENT_EMAIL}\`
    };

    // Validate required fields
    if (!env.FIREBASE_PROJECT_ID || !env.FIREBASE_PRIVATE_KEY || !env.FIREBASE_CLIENT_EMAIL) {
      throw new Error('Missing required Firebase environment variables');
    }

    firebaseApp = initializeApp({
      credential: cert(serviceAccount as any),
      projectId: env.FIREBASE_PROJECT_ID
    });

    logger.info('Firebase Admin SDK initialized successfully');
    return firebaseApp;
  } catch (error) {
    logger.error('Failed to initialize Firebase Admin SDK:', error);
    throw error;
  }
};

export const initializeFirebaseAdmin = () => {
  return initializeFirebase();
};

export { getAuth };
export const getFirebaseAuth = getAuth;
export default firebaseApp;`;

fs.writeFileSync('src/config/firebase.ts', firebaseConfigContent);
console.log('✅ Fixed Firebase configuration');

// 7. Create Image model for compatibility
console.log('\n7. Creating Image Model...');
console.log('---------------------------');

const imageModelContent = `import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface ImageAttributes {
  id: number;
  listingId: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageCreationAttributes extends Omit<ImageAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Image extends Model<InferAttributes<Image>, InferCreationAttributes<Image>> {
  declare id: CreationOptional<number>;
  declare listingId: number;
  declare url: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
}

Image.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  listingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'listings',
      key: 'id',
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Image',
  tableName: 'images',
  timestamps: true,
  underscored: true,
});

export default Image;`;

fs.writeFileSync('src/models/Image.ts', imageModelContent);
console.log('✅ Created Image model');

// 8. Update model index
console.log('\n8. Updating Model Index...');
console.log('--------------------------');

const modelIndexContent = `import { User } from './User';
import { Listing } from './Listing';
import { Booking } from './Booking';
import { Notification } from './Notification';
import { Image } from './Image';

// Define associations
User.hasMany(Listing, { foreignKey: 'hostId', as: 'listings' });
Listing.belongsTo(User, { foreignKey: 'hostId', as: 'host' });

User.hasMany(Booking, { foreignKey: 'renterId', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'renterId', as: 'renter' });

Listing.hasMany(Booking, { foreignKey: 'listingId', as: 'bookings' });
Booking.belongsTo(Listing, { foreignKey: 'listingId', as: 'listing' });

User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });
Notification.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Listing.hasMany(Image, { foreignKey: 'listingId', as: 'images' });
Image.belongsTo(Listing, { foreignKey: 'listingId', as: 'listing' });

export { User, Listing, Booking, Notification, Image };`;

fs.writeFileSync('src/models/index.ts', modelIndexContent);
console.log('✅ Updated model index');

console.log('\n🎉 TypeScript Error Fixes Complete!');
console.log('====================================');
console.log('Next steps:');
console.log('1. Run: npm run build');
console.log('2. Check for any remaining errors');
console.log('3. Run: npm run dev');
console.log('\nNote: Some production route files may still have errors.');
console.log('Consider removing or updating them as needed.');
