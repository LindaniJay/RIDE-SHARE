import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface PaymentAttributes {
  id: number;
  bookingId: number;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  booking_id?: number;
  payment_intent_id?: string;
  stripe_payment_intent_id?: string;
  payfast_payment_id?: string;
  created_at?: Date;
  
  // Missing properties from errors
  renter_id?: string;
  host_id?: string;
  payment_method?: string;
  paymentStatus?: string;
  payment_metadata?: any;
  processed_at?: Date;
  payment_provider?: string;
  refund_amount?: number;
  refund_reason?: string;
}

export interface PaymentCreationAttributes extends Omit<PaymentAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Payment extends Model<InferAttributes<Payment>, InferCreationAttributes<Payment>> {
  declare id: CreationOptional<number>;
  declare bookingId: number;
  declare amount: number;
  declare currency: string;
  declare status: 'pending' | 'completed' | 'failed' | 'refunded';
  declare paymentMethod: string;
  declare transactionId?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare booking_id?: number;
  declare payment_intent_id?: string;
  declare stripe_payment_intent_id?: string;
  declare payfast_payment_id?: string;
  declare created_at?: Date;
  
  // Missing properties from errors
  declare renter_id?: string;
  declare host_id?: string;
  declare payment_method?: string;
  declare paymentStatus?: string;
  declare payment_metadata?: any;
  declare processed_at?: Date;
  declare payment_provider?: string;
  declare refund_amount?: number;
  declare refund_reason?: string;

  // Methods
  markAsCompleted(transactionId?: string) {
    this.status = 'completed';
    if (transactionId) {
      this.transactionId = transactionId;
    }
  }

  isCompleted() {
    return this.status === 'completed';
  }

  isFailed() {
    return this.status === 'failed';
  }

  isRefunded() {
    return this.status === 'refunded';
  }

  isPending() {
    return this.status === 'pending';
  }

  refund(amount: number, reason?: string) {
    // Implementation for refund logic
    return this;
  }
}

Payment.init({
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
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ZAR',
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed', 'refunded'),
    allowNull: false,
    defaultValue: 'pending',
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transactionId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  booking_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  payment_intent_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stripe_payment_intent_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  payfast_payment_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  // Missing properties from errors
  renter_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  host_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  payment_metadata: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  processed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  payment_provider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  refund_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  refund_reason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Payment',
  tableName: 'payments',
  timestamps: true,
  underscored: true,
});

export default Payment;