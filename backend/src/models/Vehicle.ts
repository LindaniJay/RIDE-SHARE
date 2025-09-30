import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface VehicleAttributes {
  id: number;
  hostId: number;
  make: string;
  model: string;
  year: number;
  type: 'car' | 'truck' | 'trailer' | 'motorcycle' | 'van' | 'suv';
  title: string;
  dailyRate: number;
  location: string;
  latitude?: number;
  longitude?: number;
  description: string;
  features: string[];
  images: string[];
  isAvailable: boolean;
  status?: 'pending' | 'approved' | 'rejected';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface VehicleCreationAttributes extends Optional<VehicleAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Vehicle extends Model<VehicleAttributes, VehicleCreationAttributes> implements VehicleAttributes {
  public id!: number;
  public hostId!: number;
  public make!: string;
  public model!: string;
  public year!: number;
  public type!: 'car' | 'truck' | 'trailer' | 'motorcycle' | 'van' | 'suv';
  public title!: string;
  public dailyRate!: number;
  public location!: string;
  public latitude?: number;
  public longitude?: number;
  public description!: string;
  public features!: string[];
  public images!: string[];
  public isAvailable!: boolean;
  public status?: 'pending' | 'approved' | 'rejected';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Vehicle.init(
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
      type: DataTypes.ENUM('car', 'truck', 'trailer', 'motorcycle', 'van', 'suv'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dailyRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    features: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicles',
  }
);

// Associations are defined in models/index.ts