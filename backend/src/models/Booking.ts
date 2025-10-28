import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface BookingAttributes {
  id: number;
  booking_id: string; // Unique booking identifier
  renterId: number;
  hostId: number;
  vehicleId: number;
  listingId: number;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'pending' | 'approved' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  specialRequests?: string;
  
  // Enhanced booking fields
  selfie_verification_url?: string;
  id_verification_url?: string;
  driver_license_url?: string;
  pre_trip_photos?: string[];
  post_trip_photos?: string[];
  contract_signed?: boolean;
  
  // Location and timing
  pickup_location?: string;
  pickup_time?: Date;
  return_location?: string;
  return_time?: Date;
  
  // Contact information
  renter_phone?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  
  // Host and admin management
  host_notes?: string;
  admin_notes?: string;
  cancellation_reason?: string;
  cancellation_fee?: number;
  
  // Verification status
  selfie_verified?: boolean;
  id_verified?: boolean;
  pre_trip_completed?: boolean;
  post_trip_completed?: boolean;
  
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  total_amount?: number;
  listing?: any;
  renter_id?: number;
  listing_id?: number;
  created_at?: Date;
  host_id?: number;
  display_name?: string;
}

export interface BookingCreationAttributes extends Omit<BookingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Booking extends Model<InferAttributes<Booking>, InferCreationAttributes<Booking>> {
  declare id: CreationOptional<number>;
  declare booking_id: string;
  declare renterId: number;
  declare hostId: number;
  declare vehicleId: number;
  declare listingId: number;
  declare startDate: Date;
  declare endDate: Date;
  declare totalPrice: number;
  declare status: 'pending' | 'approved' | 'active' | 'completed' | 'cancelled';
  declare paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  declare paymentMethod?: string;
  declare specialRequests?: string;
  
  // Enhanced booking fields
  declare selfie_verification_url?: string;
  declare id_verification_url?: string;
  declare driver_license_url?: string;
  declare pre_trip_photos?: string[];
  declare post_trip_photos?: string[];
  declare contract_signed?: boolean;
  
  // Location and timing
  declare pickup_location?: string;
  declare pickup_time?: Date;
  declare return_location?: string;
  declare return_time?: Date;
  
  // Contact information
  declare renter_phone?: string;
  declare emergency_contact_name?: string;
  declare emergency_contact_phone?: string;
  
  // Host and admin management
  declare host_notes?: string;
  declare admin_notes?: string;
  declare cancellation_reason?: string;
  declare cancellation_fee?: number;
  
  // Verification status
  declare selfie_verified?: boolean;
  declare id_verified?: boolean;
  declare pre_trip_completed?: boolean;
  declare post_trip_completed?: boolean;
  
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare total_amount?: number;
  declare listing?: any;
  declare renter_id?: number;
  declare listing_id?: number;
  declare created_at?: Date;
  declare host_id?: number;
  declare display_name?: string;

  // Methods
  approve() {
    this.status = 'approved';
  }

  reject() {
    this.status = 'cancelled';
  }

  cancel(reason?: string) {
    this.status = 'cancelled';
    if (reason) {
      this.cancellation_reason = reason;
    }
  }

  activate() {
    this.status = 'active';
  }

  complete() {
    this.status = 'completed';
  }
}

Booking.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  booking_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  renterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  hostId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  vehicleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'listings',
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
    type: DataTypes.ENUM('pending', 'approved', 'active', 'completed', 'cancelled'),
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
  
  // Enhanced booking fields
  selfie_verification_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_verification_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  driver_license_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pre_trip_photos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  post_trip_photos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  contract_signed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  
  // Location and timing
  pickup_location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pickup_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  return_location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  return_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  // Contact information
  renter_phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emergency_contact_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emergency_contact_phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
  // Host and admin management
  host_notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  admin_notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cancellation_reason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cancellation_fee: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  
  // Verification status
  selfie_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  id_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  pre_trip_completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  post_trip_completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
  host_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  display_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Booking',
  tableName: 'bookings',
  timestamps: true,
  underscored: true,
});

export default Booking;