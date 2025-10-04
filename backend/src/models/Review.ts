import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface ReviewAttributes {
  id: string;
  booking_id: string;
  reviewer_id: string;
  reviewee_id: string;
  listing_id?: string;
  rating: number;
  title?: string;
  comment?: string;
  review_type: 'renter_to_host' | 'host_to_renter' | 'renter_to_vehicle' | 'host_to_vehicle';
  is_public: boolean;
  is_verified: boolean;
  helpful_count: number;
  response?: string;
  response_date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReviewCreationAttributes extends Optional<ReviewAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  public id!: string;
  public booking_id!: string;
  public reviewer_id!: string;
  public reviewee_id!: string;
  public listing_id?: string;
  public rating!: number;
  public title?: string;
  public comment?: string;
  public review_type!: 'renter_to_host' | 'host_to_renter' | 'renter_to_vehicle' | 'host_to_vehicle';
  public is_public!: boolean;
  public is_verified!: boolean;
  public helpful_count!: number;
  public response?: string;
  public response_date?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    booking_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'bookings',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    reviewer_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    reviewee_id: {
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
      allowNull: true,
      references: {
        model: 'listings',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    review_type: {
      type: DataTypes.ENUM('renter_to_host', 'host_to_renter', 'renter_to_vehicle', 'host_to_vehicle'),
      allowNull: false
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    helpful_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
    underscored: true,
    timestamps: true
  }
);