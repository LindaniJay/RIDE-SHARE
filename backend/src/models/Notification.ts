import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface NotificationAttributes {
  id: string;
  user_id: string;
  type: 'booking_created' | 'booking_confirmed' | 'booking_cancelled' | 'payment_received' | 'payment_failed' | 'review_received' | 'system_announcement' | 'security_alert';
  title: string;
  message: string;
  data?: any;
  is_read: boolean;
  is_sent: boolean;
  sent_at?: Date;
  read_at?: Date;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  expires_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NotificationCreationAttributes extends Optional<NotificationAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Notification extends Model<NotificationAttributes, NotificationCreationAttributes> implements NotificationAttributes {
  public id!: string;
  public user_id!: string;
  public type!: 'booking_created' | 'booking_confirmed' | 'booking_cancelled' | 'payment_received' | 'payment_failed' | 'review_received' | 'system_announcement' | 'security_alert';
  public title!: string;
  public message!: string;
  public data?: any;
  public is_read!: boolean;
  public is_sent!: boolean;
  public sent_at?: Date;
  public read_at?: Date;
  public priority!: 'low' | 'medium' | 'high' | 'urgent';
  public expires_at?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Notification.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
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
      type: DataTypes.ENUM('booking_created', 'booking_confirmed', 'booking_cancelled', 'payment_received', 'payment_failed', 'review_received', 'system_announcement', 'security_alert'),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {}
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    read_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high', 'urgent'),
      allowNull: false,
      defaultValue: 'medium'
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Notification',
    tableName: 'notifications',
    underscored: true,
    timestamps: true
  }
);
