import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface CheckpointAttributes {
  id: string;
  booking_id: string;
  user_id: string;
  type: 'pickup' | 'return';
  notes?: string;
  status: 'pending' | 'in_progress' | 'completed';
  location?: any;
  completed_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CheckpointCreationAttributes extends Optional<CheckpointAttributes, 'id' | 'notes' | 'location' | 'completed_at' | 'createdAt' | 'updatedAt'> {}

export class Checkpoint extends Model<CheckpointAttributes, CheckpointCreationAttributes> implements CheckpointAttributes {
  public id!: string;
  public booking_id!: string;
  public user_id!: string;
  public type!: 'pickup' | 'return';
  public notes?: string;
  public status!: 'pending' | 'in_progress' | 'completed';
  public location?: any;
  public completed_at?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Checkpoint.init(
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
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    type: {
      type: DataTypes.ENUM('pickup', 'return'),
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
      allowNull: false,
      defaultValue: 'pending'
    },
    location: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Checkpoint',
    tableName: 'checkpoints',
    timestamps: true
  }
);

export default Checkpoint;
