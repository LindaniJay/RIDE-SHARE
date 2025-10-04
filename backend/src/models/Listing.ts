import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface ListingAttributes {
  id: string;
  host_id: string;
  title: string;
  description?: string;
  make: string;
  model: string;
  year: number;
  vehicle_type: 'car' | 'suv' | 'bakkie' | 'van' | 'motorcycle' | 'truck';
  category: 'economy' | 'compact' | 'mid_size' | 'full_size' | 'premium' | 'luxury' | 'sports';
  price_per_day: number;
  price_per_week?: number;
  price_per_month?: number;
  location: any;
  images: string[];
  features: string[];
  specifications?: any;
  availability_calendar?: any;
  minimum_rental_days: number;
  maximum_rental_days?: number;
  fuel_type: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic' | 'semi_automatic';
  seats: number;
  mileage?: number;
  color?: string;
  license_plate?: string;
  insurance_provider?: string;
  insurance_policy_number?: string;
  roadworthy_certificate?: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'inactive';
  approval_status: 'pending' | 'approved' | 'rejected';
  rejection_reason?: string;
  is_featured: boolean;
  rating?: number;
  total_bookings: number;
  total_earnings: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ListingCreationAttributes extends Optional<ListingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Listing extends Model<ListingAttributes, ListingCreationAttributes> implements ListingAttributes {
  public id!: string;
  public host_id!: string;
  public title!: string;
  public description?: string;
  public make!: string;
  public model!: string;
  public year!: number;
  public vehicle_type!: 'car' | 'suv' | 'bakkie' | 'van' | 'motorcycle' | 'truck';
  public category!: 'economy' | 'compact' | 'mid_size' | 'full_size' | 'premium' | 'luxury' | 'sports';
  public price_per_day!: number;
  public price_per_week?: number;
  public price_per_month?: number;
  public location!: any;
  public images!: string[];
  public features!: string[];
  public specifications?: any;
  public availability_calendar?: any;
  public minimum_rental_days!: number;
  public maximum_rental_days?: number;
  public fuel_type!: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  public transmission!: 'manual' | 'automatic' | 'semi_automatic';
  public seats!: number;
  public mileage?: number;
  public color?: string;
  public license_plate?: string;
  public insurance_provider?: string;
  public insurance_policy_number?: string;
  public roadworthy_certificate?: string;
  public status!: 'draft' | 'pending' | 'approved' | 'rejected' | 'inactive';
  public approval_status!: 'pending' | 'approved' | 'rejected';
  public is_featured!: boolean;
  public rating?: number;
  public total_bookings!: number;
  public total_earnings!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Listing.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    host_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    make: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1900,
        max: new Date().getFullYear() + 1
      }
    },
    vehicle_type: {
      type: DataTypes.ENUM('car', 'suv', 'bakkie', 'van', 'motorcycle', 'truck'),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('economy', 'compact', 'mid_size', 'full_size', 'premium', 'luxury', 'sports'),
      allowNull: false
    },
    price_per_day: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      }
    },
    price_per_week: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: 0
      }
    },
    price_per_month: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        min: 0
      }
    },
    location: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    images: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: []
    },
    features: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: []
    },
    specifications: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {}
    },
    availability_calendar: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {}
    },
    minimum_rental_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    maximum_rental_days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuel_type: {
      type: DataTypes.ENUM('petrol', 'diesel', 'electric', 'hybrid'),
      allowNull: false,
      defaultValue: 'petrol'
    },
    transmission: {
      type: DataTypes.ENUM('manual', 'automatic', 'semi_automatic'),
      allowNull: false,
      defaultValue: 'manual'
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      validate: {
        min: 1,
        max: 50
      }
    },
    mileage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 0
      }
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    license_plate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    insurance_provider: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    insurance_policy_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    roadworthy_certificate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('draft', 'pending', 'approved', 'rejected', 'inactive'),
      allowNull: false,
      defaultValue: 'draft'
    },
    approval_status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'pending'
    },
    rejection_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true,
      validate: {
        min: 0,
        max: 5
      }
    },
    total_bookings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_earnings: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    modelName: 'Listing',
    tableName: 'listings',
    underscored: true,
    timestamps: true
  }
);