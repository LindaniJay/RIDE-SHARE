import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface CheckpointItemAttributes {
  id: number;
  checkpointId: number;
  itemName: string;
  condition: 'good' | 'damaged' | 'missing';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  checkpoint_id?: number;
  item_name?: string;
  created_at?: Date;
}

export interface CheckpointItemCreationAttributes extends Omit<CheckpointItemAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class CheckpointItem extends Model<InferAttributes<CheckpointItem>, InferCreationAttributes<CheckpointItem>> {
  declare id: CreationOptional<number>;
  declare checkpointId: number;
  declare itemName: string;
  declare condition: 'good' | 'damaged' | 'missing';
  declare notes?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare checkpoint_id?: number;
  declare item_name?: string;
  declare created_at?: Date;
}

CheckpointItem.init({
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
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.ENUM('good', 'damaged', 'missing'),
    allowNull: false,
    defaultValue: 'good',
  },
  notes: {
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
  item_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'CheckpointItem',
  tableName: 'checkpoint_items',
  timestamps: true,
  underscored: true,
});

export default CheckpointItem;