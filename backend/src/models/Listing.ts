import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface ListingAttributes {
  id: number;
  hostId: number;
  title: string;
  make: string;
  model: string;
  year: number;
  type: 'car' | 'trailer' | 'bakkie' | 'truck' | 'motorcycle' | 'van' | 'suv';
  transmission: 'manual' | 'automatic';
  fuelType: 'petrol' | 'diesel' | 'electric';
  seats: number;
  features: string[];
  pricePerDay: number;
  location: string;
  images: string[];
  availability: Record<string, unknown>; // JSON field for date ranges
  status: 'pending' | 'approved' | 'declined';
  declineReason?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ListingCreationAttributes extends Optional<ListingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Listing extends Model<ListingAttributes, ListingCreationAttributes> implements ListingAttributes {
  public id!: number;
  public hostId!: number;
  public title!: string;
  public make!: string;
  public model!: string;
  public year!: number;
  public type!: 'car' | 'trailer' | 'bakkie' | 'truck' | 'motorcycle' | 'van' | 'suv';
  public transmission!: 'manual' | 'automatic';
  public fuelType!: 'petrol' | 'diesel' | 'electric';
  public seats!: number;
  public features!: string[];
  public pricePerDay!: number;
  public location!: string;
  public images!: string[];
  public availability!: Record<string, unknown>;
  public status!: 'pending' | 'approved' | 'declined';
  public declineReason?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Listing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    hostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
      validate: {
        min: 1900,
        max: new Date().getFullYear() + 1,
      },
    },
    type: {
      type: DataTypes.ENUM('car', 'trailer', 'bakkie', 'truck', 'motorcycle', 'van', 'suv'),
      allowNull: false,
    },
    transmission: {
      type: DataTypes.ENUM('manual', 'automatic'),
      allowNull: false,
    },
    fuelType: {
      type: DataTypes.ENUM('petrol', 'diesel', 'electric'),
      allowNull: false,
    },
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    features: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    pricePerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    availability: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {},
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'declined'),
      allowNull: false,
      defaultValue: 'pending',
    },
    declineReason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Listing',
    tableName: 'listings',
  }
);

// Associations are defined in models/index.ts
