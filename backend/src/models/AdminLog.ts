import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface AdminLogAttributes {
  id: string;
  user_id?: string;
  action: string;
  details?: any;
  ip_address?: string;
  user_agent?: string;
  createdAt?: Date;
}

export interface AdminLogCreationAttributes extends Optional<AdminLogAttributes, 'id' | 'user_id' | 'details' | 'ip_address' | 'user_agent' | 'createdAt'> {}

export class AdminLog extends Model<AdminLogAttributes, AdminLogCreationAttributes> implements AdminLogAttributes {
  public id!: string;
  public user_id?: string;
  public action!: string;
  public details?: any;
  public ip_address?: string;
  public user_agent?: string;
  public readonly createdAt!: Date;
}

AdminLog.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    details: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'AdminLog',
    tableName: 'admin_logs',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  }
);

export default AdminLog;