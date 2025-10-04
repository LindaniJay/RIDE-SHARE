import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface PaymentAttributes {
  id: string;
  booking_id: string;
  renter_id: string;
  amount: number;
  currency: string;
  payment_status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'refunded';
  payment_method?: string;
  payment_provider?: string;
  transaction_id?: string;
  payment_intent_id?: string;
  gateway_response?: any;
  payment_metadata?: any;
  refund_amount?: number;
  refund_reason?: string;
  refund_processed_at?: Date;
  failure_reason?: string;
  processed_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id' | 'payment_method' | 'transaction_id' | 'gateway_response' | 'processed_at' | 'createdAt' | 'updatedAt'> {}

export class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
  public id!: string;
  public booking_id!: string;
  public renter_id!: string;
  public amount!: number;
  public currency!: string;
  public payment_status!: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'refunded';
  public payment_method?: string;
  public payment_provider?: string;
  public transaction_id?: string;
  public payment_intent_id?: string;
  public gateway_response?: any;
  public payment_metadata?: any;
  public refund_amount?: number;
  public refund_reason?: string;
  public refund_processed_at?: Date;
  public failure_reason?: string;
  public processed_at?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Payment.init(
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
    renter_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'ZAR'
    },
    payment_status: {
      type: DataTypes.ENUM('pending', 'processing', 'succeeded', 'failed', 'cancelled', 'refunded'),
      allowNull: false,
      defaultValue: 'pending'
    },
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payment_provider: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_intent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gateway_response: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    payment_metadata: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    refund_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    refund_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    refund_processed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    failure_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    processed_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    timestamps: true
  }
);

export default Payment;