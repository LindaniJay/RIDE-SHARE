import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface ApprovalRequestAttributes {
  id: number;
  requestType: string;
  entityId: number;
  submittedBy: 'renter' | 'host';
  status: 'Pending' | 'UnderReview' | 'Approved' | 'Declined' | 'RequiresMoreInfo';
  submittedById: string;
  reviewedById?: string;
  reviewNotes?: string;
  createdAt: Date;
  updatedAt: Date;
  reviewedAt?: Date;
}

export interface ApprovalRequestCreationAttributes extends Optional<ApprovalRequestAttributes, 'id' | 'status' | 'reviewedById' | 'reviewNotes' | 'reviewedAt' | 'createdAt' | 'updatedAt'> {}

export class ApprovalRequest extends Model<ApprovalRequestAttributes, ApprovalRequestCreationAttributes> implements ApprovalRequestAttributes {
  public id!: number;
  public requestType!: string;
  public entityId!: number;
  public submittedBy!: 'renter' | 'host';
  public status!: 'Pending' | 'UnderReview' | 'Approved' | 'Declined' | 'RequiresMoreInfo';
  public submittedById!: string;
  public reviewedById?: string;
  public reviewNotes?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public reviewedAt?: Date;
}

ApprovalRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    requestType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['DocumentVerification', 'VehicleListing', 'InsuranceVerification', 'ProfileVerification', 'VehicleApproval']]
      }
    },
    entityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'ID of the related entity (user, vehicle, listing, etc.)'
    },
    submittedBy: {
      type: DataTypes.ENUM('renter', 'host'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'UnderReview', 'Approved', 'Declined', 'RequiresMoreInfo'),
      allowNull: false,
      defaultValue: 'Pending',
    },
    submittedById: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'submitted_by_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    reviewedById: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'reviewed_by_id',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    reviewNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    reviewedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'ApprovalRequest',
    tableName: 'approval_requests',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  }
);

export default ApprovalRequest;
