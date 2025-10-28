import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
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
  
  // Missing properties from errors
  vehicle_type?: string;
  price_per_week?: number;
  price_per_month?: number;
  rating_average?: number;
  rating_count?: number;
  rating?: number;
  maximum_rental_days?: number;
  fuel_type?: string;
  color?: string;
  license_plate?: string;
  insurance_provider?: string;
  insurance_policy_number?: string;
  rejection_reason?: string;
  documents?: any;
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
  
  // Missing properties from errors
  declare vehicle_type?: string;
  declare price_per_week?: number;
  declare price_per_month?: number;
  declare rating_average?: number;
  declare rating_count?: number;
  declare rating?: number;
  declare maximum_rental_days?: number;
  declare fuel_type?: string;
  declare color?: string;
  declare license_plate?: string;
  declare insurance_provider?: string;
  declare insurance_policy_number?: string;
  declare rejection_reason?: string;
  declare documents?: any;

  // Methods
  incrementViewCount() {
    // Implementation for view count increment
    return this;
  }
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
    field: 'host_id',
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
    field: 'price_per_day',
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
  
  // Missing properties from errors
  vehicle_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price_per_week: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  price_per_month: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  rating_average: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
    defaultValue: 0,
  },
  rating_count: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
    defaultValue: 0,
  },
  maximum_rental_days: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fuel_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  license_plate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  insurance_provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  insurance_policy_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rejection_reason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  documents: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Listing',
  tableName: 'listings',
  timestamps: true,
  underscored: true,
});

export default Listing;