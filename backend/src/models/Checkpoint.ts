import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface CheckpointAttributes {
  id: number;
  bookingId: number;
  type: 'pickup' | 'return';
  status: 'pending' | 'completed' | 'cancelled';
  location?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  booking_id?: number;
  checkpoint_type?: string;
  created_at?: Date;
}

export interface CheckpointCreationAttributes extends Omit<CheckpointAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Checkpoint extends Model<InferAttributes<Checkpoint>, InferCreationAttributes<Checkpoint>> {
  declare id: CreationOptional<number>;
  declare bookingId: number;
  declare type: 'pickup' | 'return';
  declare status: 'pending' | 'completed' | 'cancelled';
  declare location?: string;
  declare notes?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare booking_id?: number;
  declare checkpoint_type?: string;
  declare created_at?: Date;
}

Checkpoint.init({
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
  type: {
    type: DataTypes.ENUM('pickup', 'return'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending',
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  notes: {
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
  checkpoint_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Checkpoint',
  tableName: 'checkpoints',
  timestamps: true,
  underscored: true,
});

export default Checkpoint;