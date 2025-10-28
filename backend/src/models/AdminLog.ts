import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface AdminLogAttributes {
  id: number;
  adminId: number;
  action: string;
  targetType: 'user' | 'listing' | 'booking' | 'payment';
  targetId: number;
  details?: any;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  admin_id?: number;
  target_type?: string;
  target_id?: number;
  created_at?: Date;
}

export interface AdminLogCreationAttributes extends Omit<AdminLogAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class AdminLog extends Model<InferAttributes<AdminLog>, InferCreationAttributes<AdminLog>> {
  declare id: CreationOptional<number>;
  declare adminId: number;
  declare action: string;
  declare targetType: 'user' | 'listing' | 'booking' | 'payment';
  declare targetId: number;
  declare details?: any;
  declare ipAddress?: string;
  declare userAgent?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare admin_id?: number;
  declare target_type?: string;
  declare target_id?: number;
  declare created_at?: Date;
  
  // Missing properties from errors
  declare user_id?: number;
}

AdminLog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'admin_id',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  targetType: {
    type: DataTypes.ENUM('user', 'listing', 'booking', 'payment'),
    allowNull: false,
    field: 'target_type',
  },
  targetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'target_id',
  },
  details: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userAgent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  target_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  target_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  // Missing properties from errors
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'AdminLog',
  tableName: 'admin_logs',
  timestamps: true,
  underscored: true,
});

export default AdminLog;