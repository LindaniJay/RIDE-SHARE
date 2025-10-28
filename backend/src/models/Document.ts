import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface DocumentAttributes {
  id: number;
  userId: number;
  type: 'id_document' | 'drivers_license' | 'proof_of_address' | 'insurance_document' | 'other' | 'id_verification' | 'vehicle_registration' | 'insurance';
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Additional fields for compatibility
  user_id?: number;
  document_type?: string;
  file_path?: string;
  created_at?: Date;
  
  // Missing properties from errors
  reviewed_at?: Date;
  reviewedBy?: number;
  title?: string;
}

export interface DocumentCreationAttributes extends Omit<DocumentAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Document extends Model<InferAttributes<Document>, InferCreationAttributes<Document>> {
  declare id: CreationOptional<number>;
  declare userId: number;
  declare type: 'id_document' | 'drivers_license' | 'proof_of_address' | 'insurance_document' | 'other' | 'id_verification' | 'vehicle_registration' | 'insurance';
  declare filename: string;
  declare originalName: string;
  declare mimeType: string;
  declare size: number;
  declare status: 'pending' | 'approved' | 'rejected';
  declare rejectionReason?: string;
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  
  // Additional fields for compatibility
  declare user_id?: number;
  declare document_type?: string;
  declare file_path?: string;
  declare created_at?: Date;
  
  // Missing properties from errors
  declare reviewed_at?: Date;
  declare reviewedBy?: number;
  declare title?: string;
}

Document.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  type: {
    type: DataTypes.ENUM('id_document', 'drivers_license', 'proof_of_address', 'insurance_document', 'other', 'id_verification', 'vehicle_registration', 'insurance'),
    allowNull: false,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mimeType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    allowNull: false,
    defaultValue: 'pending',
  },
  rejectionReason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  
  // Additional fields for compatibility
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  document_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  file_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  // Missing properties from errors
  reviewed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  reviewedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Document',
  tableName: 'documents',
  timestamps: true,
  underscored: true,
});

export default Document;