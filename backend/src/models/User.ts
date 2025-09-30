import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcryptjs';
import { sequelize } from '../config/database';

export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string; // Virtual field for input
  passwordHash: string;
  role: 'renter' | 'host' | 'admin';
  phoneNumber?: string;
  isEmailVerified?: boolean;
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  documentStatus?: 'pending' | 'verified' | 'rejected';
  rating?: number;
  profileImage?: string;
  documents?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string; // Virtual field
  public passwordHash!: string;
  public role!: 'renter' | 'host' | 'admin';
  public phoneNumber?: string;
  public isEmailVerified?: boolean;
  public rating?: number;
  public profileImage?: string;
  public documents?: any;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('renter', 'host', 'admin'),
      allowNull: false,
      defaultValue: 'renter',
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    approvalStatus: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    },
    rejectionReason: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    documentStatus: {
      type: DataTypes.ENUM('pending', 'verified', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: true,
      defaultValue: 0.00,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    documents: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

// Add hooks for password hashing
User.addHook('beforeCreate', async (user: User) => {
  if (user.password && !user.passwordHash) {
    user.passwordHash = await bcrypt.hash(user.password, 12);
  }
});

User.addHook('beforeUpdate', async (user: User) => {
  if (user.changed('password') && user.password) {
    user.passwordHash = await bcrypt.hash(user.password, 12);
  }
});

User.addHook('beforeSave', async (user: User) => {
  if (user.password && !user.passwordHash) {
    user.passwordHash = await bcrypt.hash(user.password, 12);
  }
});

// Associations are defined in models/index.ts
