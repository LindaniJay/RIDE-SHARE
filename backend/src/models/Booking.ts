import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface BookingAttributes {
  id: number;
  vehicleId: number;
  renterId: number;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  specialRequests?: string;
  addOns?: { name: string; price: number }[];
  cancellationReason?: string;
  paymentStatus?: 'pending' | 'paid' | 'refunded';
  refundAmount?: number;
  paymentIntentId?: string;
  paymentReference?: string;
  refundReason?: string;
  cancelledAt?: Date;
  refundedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BookingCreationAttributes extends Optional<BookingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Booking extends Model<BookingAttributes, BookingCreationAttributes> implements BookingAttributes {
  public id!: number;
  public vehicleId!: number;
  public renterId!: number;
  public startDate!: Date;
  public endDate!: Date;
  public totalPrice!: number;
  public status!: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  public specialRequests?: string;
  public addOns?: { name: string; price: number }[];
  public cancellationReason?: string;
  public paymentStatus?: 'pending' | 'paid' | 'refunded';
  public refundAmount?: number;
  public paymentIntentId?: string;
  public paymentReference?: string;
  public refundReason?: string;
  public cancelledAt?: Date;
  public refundedAt?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'id',
      },
    },
    renterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'confirmed', 'cancelled', 'completed'),
      allowNull: false,
      defaultValue: 'pending',
    },
    specialRequests: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    addOns: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    cancellationReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    paymentStatus: {
      type: DataTypes.ENUM('pending', 'paid', 'refunded'),
      allowNull: false,
      defaultValue: 'pending',
    },
    refundAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    paymentIntentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    paymentReference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refundReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cancelledAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    refundedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
  }
);

// Associations are defined in models/index.ts
