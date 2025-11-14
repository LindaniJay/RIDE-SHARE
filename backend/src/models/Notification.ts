import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface NotificationAttributes {
  id: number;
  userId: string;
  message: string;
  type: 'booking' | 'approval' | 'payment' | 'system' | 'booking_request' | 'booking_approved' | 'booking_rejected' | 'payment_received' | 'listing_approved' | 'listing_rejected' | 'review_received' | 'system_announcement' | 'vehicle_approved' | 'vehicle_rejected' | 'vehicle_pending_approval' | 'booking_submitted' | 'booking_updated';
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  user_id?: string;
  title?: string;
  data?: any;
  is_read?: boolean;
  created_at?: Date;
  
  // Missing properties from errors
  readAt?: Date;
}

export interface NotificationCreationAttributes extends Omit<NotificationAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Notification extends Model<InferAttributes<Notification>, InferCreationAttributes<Notification>> {
  declare id: CreationOptional<number>;
  declare userId: string;
  declare message: string;
  declare type: 'booking' | 'approval' | 'payment' | 'system' | 'booking_request' | 'booking_approved' | 'booking_rejected' | 'payment_received' | 'listing_approved' | 'listing_rejected' | 'review_received' | 'system_announcement' | 'vehicle_approved' | 'vehicle_rejected' | 'vehicle_pending_approval' | 'booking_submitted' | 'booking_updated';
  declare isRead: boolean;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare user_id?: string;
  declare title?: string;
  declare data?: any;
  declare is_read?: boolean;
  declare created_at?: Date;
  
  // Missing properties from errors
  declare readAt?: Date;

  // Methods
  markAsRead() {
    this.isRead = true;
  }
}

Notification.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('booking', 'approval', 'payment', 'system', 'booking_request', 'booking_approved', 'booking_rejected', 'payment_received', 'listing_approved', 'listing_rejected', 'review_received', 'system_announcement', 'vehicle_approved', 'vehicle_rejected', 'vehicle_pending_approval', 'booking_submitted', 'booking_updated'),
    allowNull: false,
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  user_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  is_read: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  // Missing properties from errors
  readAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Notification',
  tableName: 'notifications',
  timestamps: true,
  underscored: true,
});

export default Notification;