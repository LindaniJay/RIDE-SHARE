import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface BookingAttributes {
  id: string;
  renter_id: string;
  listing_id: string;
  start_date: Date;
  end_date: Date;
  total_days: number;
  price_per_day: number;
  subtotal: number;
  service_fee: number;
  insurance_fee: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'approved' | 'declined' | 'cancelled' | 'completed' | 'disputed';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded';
  pickup_location?: any;
  return_location?: any;
  pickup_time?: Date;
  return_time?: Date;
  special_requests?: string;
  add_ons?: any[];
  cancellation_reason?: string;
  cancellation_fee?: number;
  host_notes?: string;
  renter_notes?: string;
  admin_notes?: string;
  dispute_reason?: string;
  dispute_resolution?: string;
  createdAt?: Date;
  updatedAt?: Date;
  
  // Associated models
  renter?: any;
  listing?: any;
  payments?: any[];
  reviews?: any[];
  checkpoints?: any[];
}

export interface BookingCreationAttributes extends Optional<BookingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Booking extends Model<BookingAttributes, BookingCreationAttributes> implements BookingAttributes {
  public id!: string;
  public renter_id!: string;
  public listing_id!: string;
  public start_date!: Date;
  public end_date!: Date;
  public total_days!: number;
  public price_per_day!: number;
  public subtotal!: number;
  public service_fee!: number;
  public insurance_fee!: number;
  public total_amount!: number;
  public status!: 'pending' | 'confirmed' | 'approved' | 'declined' | 'cancelled' | 'completed' | 'disputed';
  public payment_status!: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded';
  public pickup_location?: any;
  public return_location?: any;
  public pickup_time?: Date;
  public return_time?: Date;
  public special_requests?: string;
  public add_ons?: any[];
  public cancellation_reason?: string;
  public cancellation_fee?: number;
  public host_notes?: string;
  public renter_notes?: string;
  public admin_notes?: string;
  public dispute_reason?: string;
  public dispute_resolution?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Booking.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    renter_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    listing_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'listings',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    price_per_day: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    service_fee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    insurance_fee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'approved', 'declined', 'cancelled', 'completed', 'disputed'),
      allowNull: false,
      defaultValue: 'pending'
    },
    payment_status: {
      type: DataTypes.ENUM('pending', 'paid', 'failed', 'refunded', 'partially_refunded'),
      allowNull: false,
      defaultValue: 'pending'
    },
    pickup_location: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    return_location: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    pickup_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    return_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    special_requests: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    add_ons: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: []
    },
    cancellation_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancellation_fee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: 0
      }
    },
    host_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    renter_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admin_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dispute_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dispute_resolution: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
    underscored: true,
    timestamps: true
  }
);