import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface ReviewAttributes {
  id: number;
  bookingId: number;
  reviewerId: number;
  revieweeId: number;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  booking_id?: number;
  reviewer_id?: number;
  reviewee_id?: number;
  created_at?: Date;
  
  // Missing properties from errors
  listing_id?: number;
}

export interface ReviewCreationAttributes extends Omit<ReviewAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Review extends Model<InferAttributes<Review>, InferCreationAttributes<Review>> {
  declare id: CreationOptional<number>;
  declare bookingId: number;
  declare reviewerId: number;
  declare revieweeId: number;
  declare rating: number;
  declare comment?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare booking_id?: number;
  declare reviewer_id?: number;
  declare reviewee_id?: number;
  declare created_at?: Date;
  
  // Missing properties from errors
  declare listing_id?: number;
}

Review.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'bookings',
      key: 'id',
    },
  },
  reviewerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  revieweeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reviewer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reviewee_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  // Missing properties from errors
  listing_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Review',
  tableName: 'reviews',
  timestamps: true,
  underscored: true,
});

export default Review;