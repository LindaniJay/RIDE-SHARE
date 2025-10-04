import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcryptjs';
import { sequelize } from '../config/database';

export interface UserAttributes {
  id: string;
  email: string;
  password?: string; // Virtual field for input
  password_hash?: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  role: 'renter' | 'host' | 'admin';
  is_email_verified: boolean;
  is_phone_verified: boolean;
  approval_status: 'pending' | 'approved' | 'rejected';
  document_status: 'not_uploaded' | 'pending' | 'approved' | 'rejected';
  profile_image_url?: string;
  date_of_birth?: Date;
  address?: any;
  emergency_contact?: any;
  preferences?: any;
  last_login_at?: Date;
  is_active: boolean;
  // Security fields
  failed_login_attempts?: number;
  last_failed_login?: Date;
  twoFactorEnabled?: boolean;
  twoFactorSecret?: string;
  backupCodes?: string;
  sessionTokens?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public email!: string;
  public password?: string; // Virtual field
  public password_hash?: string;
  public first_name!: string;
  public last_name!: string;
  public phone_number?: string;
  public role!: 'renter' | 'host' | 'admin';
  public is_email_verified!: boolean;
  public is_phone_verified!: boolean;
  public approval_status!: 'pending' | 'approved' | 'rejected';
  public document_status!: 'not_uploaded' | 'pending' | 'approved' | 'rejected';
  public profile_image_url?: string;
  public date_of_birth?: Date;
  public address?: any;
  public emergency_contact?: any;
  public preferences?: any;
  public last_login_at?: Date;
  public is_active!: boolean;
  // Security fields
  public failed_login_attempts?: number;
  public last_failed_login?: Date;
  public twoFactorEnabled?: boolean;
  public twoFactorSecret?: string;
  public backupCodes?: string;
  public sessionTokens?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: true
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: true // Allow null for OAuth users
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    role: {
      type: DataTypes.ENUM('renter', 'host', 'admin'),
      allowNull: false,
      defaultValue: 'renter'
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_phone_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    approval_status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'pending'
    },
    document_status: {
      type: DataTypes.ENUM('not_uploaded', 'pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'not_uploaded'
    },
    profile_image_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    address: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    emergency_contact: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    preferences: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: {}
    },
    last_login_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    // Security fields
    failed_login_attempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_failed_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    twoFactorEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    twoFactorSecret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    backupCodes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sessionTokens: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    timestamps: true
  }
);

// Add hooks for password hashing
User.addHook('beforeCreate', async (user: User) => {
  if (user.password && !user.password_hash) {
    user.password_hash = await bcrypt.hash(user.password, 12);
  }
});

User.addHook('beforeUpdate', async (user: User) => {
  if (user.changed('password') && user.password) {
    user.password_hash = await bcrypt.hash(user.password, 12);
  }
});

User.addHook('beforeSave', async (user: User) => {
  if (user.password && !user.password_hash) {
    user.password_hash = await bcrypt.hash(user.password, 12);
  }
});

// Associations are defined in models/index.ts
