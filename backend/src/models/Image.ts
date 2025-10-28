import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface ImageAttributes {
  id: number;
  listingId: number | null;
  url: string;
  category?: string;
  userId?: number;
  filename?: string;
  originalName?: string;
  mimeType?: string;
  size?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageCreationAttributes extends Omit<ImageAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Image extends Model<InferAttributes<Image>, InferCreationAttributes<Image>> {
  declare id: CreationOptional<number>;
  declare listingId: number | null;
  declare url: string;
  declare category?: string;
  declare userId?: number;
  declare filename?: string;
  declare originalName?: string;
  declare mimeType?: string;
  declare size?: number;
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
    allowNull: true,
    references: {
      model: 'listings',
      key: 'id',
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  originalName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mimeType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: true,
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

export default Image;