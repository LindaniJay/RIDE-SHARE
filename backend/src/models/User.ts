import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface UserAttributes {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: 'admin' | 'host' | 'renter';
  isVerified: boolean;
  is_verified?: boolean;
  createdAt: Date;
  updatedAt: Date;
  firebase_uid?: string;
  display_name?: string;
  avatar_url?: string;
  is_email_verified?: boolean;
  approval_status?: string;
  locked_until?: Date;
  login_attempts?: number;
  created_at?: Date;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  document_status?: 'not_uploaded' | 'pending' | 'approved' | 'rejected';
  two_factor_enabled?: boolean;
  two_factor_secret?: string;
  password_hash?: string;
  address?: string;
  emergency_contact?: string;
  preferences?: any;
  last_login_at?: Date;
  is_active?: boolean;
  is_phone_verified?: boolean;
  date_of_birth?: Date;
  updated_at?: Date;
  profile_image_url?: string;
  password?: string;
}

export interface UserCreationAttributes extends Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare firstName?: string;
  declare lastName?: string;
  declare email: string;
  declare role: 'admin' | 'host' | 'renter';
  declare isVerified: boolean;
  declare is_verified?: boolean;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  declare firebase_uid?: string;
  declare display_name?: string;
  declare avatar_url?: string;
  declare is_email_verified?: boolean;
  declare approval_status?: string;
  declare locked_until?: Date;
  declare login_attempts?: number;
  declare created_at?: Date;
  declare first_name?: string;
  declare last_name?: string;
  declare phone_number?: string;
  declare document_status?: 'not_uploaded' | 'pending' | 'approved' | 'rejected';
  declare two_factor_enabled?: boolean;
  declare two_factor_secret?: string;
  declare password_hash?: string;
  declare address?: string;
  declare emergency_contact?: string;
  declare preferences?: any;
  declare last_login_at?: Date;
  declare is_active?: boolean;
  declare is_phone_verified?: boolean;
  declare date_of_birth?: Date;
  declare updated_at?: Date;
  declare profile_image_url?: string;
  declare password?: string;
  declare backup_codes?: string;

  incrementLoginCount() {
    this.login_attempts = (this.login_attempts || 0) + 1;
  }

  resetFailedAttempts() {
    this.login_attempts = 0;
    this.locked_until = undefined;
  }

  isLocked() {
    return this.locked_until && this.locked_until > new Date();
  }

  async save() {
    return super.save();
  }

  toJSON() {
    return super.toJSON();
  }
}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'host', 'renter'),
    allowNull: false,
    defaultValue: 'renter',
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  firebase_uid: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  display_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_email_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  approval_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  locked_until: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  login_attempts: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  document_status: {
    type: DataTypes.ENUM('not_uploaded', 'pending', 'approved', 'rejected'),
    allowNull: true,
    defaultValue: 'not_uploaded',
  },
  two_factor_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  two_factor_secret: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  emergency_contact: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  preferences: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  last_login_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  is_phone_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  profile_image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  backup_codes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  underscored: true,
});

export default User;