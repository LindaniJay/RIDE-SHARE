import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface CheckpointImageAttributes {
  id: number;
  checkpointId: number;
  imageUrl: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  checkpoint_id?: number;
  image_url?: string;
  created_at?: Date;
}

export interface CheckpointImageCreationAttributes extends Omit<CheckpointImageAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class CheckpointImage extends Model<InferAttributes<CheckpointImage>, InferCreationAttributes<CheckpointImage>> {
  declare id: CreationOptional<number>;
  declare checkpointId: number;
  declare imageUrl: string;
  declare description?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare checkpoint_id?: number;
  declare image_url?: string;
  declare created_at?: Date;
}

CheckpointImage.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  checkpointId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'checkpoints',
      key: 'id',
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  checkpoint_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'CheckpointImage',
  tableName: 'checkpoint_images',
  timestamps: true,
  underscored: true,
});

export default CheckpointImage;