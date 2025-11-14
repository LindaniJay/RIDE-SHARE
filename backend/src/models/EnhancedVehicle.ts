import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';
import { sequelize } from '../config/database';

export interface EnhancedVehicleAttributes {
  id: number;
  hostId: string;
  
  // Basic Vehicle Information
  make: string;
  model: string;
  year: number;
  type: 'car' | 'suv' | 'truck' | 'van' | 'motorcycle' | 'luxury' | 'electric';
  color: string;
  mileage: number;
  transmission: 'manual' | 'automatic' | 'cvt' | 'semi-automatic';
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'lpg';
  seats: number;
  doors: number;
  engineSize: string;
  vin: string;
  
  // Pricing & Availability
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  minimumRentalDays: number;
  maximumRentalDays?: number;
  isAvailable: boolean;
  
  // Features & Amenities
  features: string[];
  amenities: string[];
  safetyFeatures: string[];
  entertainmentFeatures: string[];
  
  // Insurance & Documentation
  insuranceIncluded: boolean;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
  gpsInstalled: boolean;
  trackingEnabled: boolean;
  
  // Media & Documentation
  coverImage: string;
  interiorImages: string[];
  exteriorImages: string[];
  dashboardImages: string[];
  engineImages: string[];
  wheelImages: string[];
  licenseImages: string[];
  registrationImages: string[];
  videoTourUrl?: string;
  videoTourFile?: string;
  
  // Location & Verification
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  
  // Status & Verification
  listingStatus: 'draft' | 'pending' | 'approved' | 'rejected' | 'active' | 'inactive';
  verified: boolean;
  verificationDate?: Date;
  verificationNotes?: string;
  
  // AI & Metadata
  aiVerified: boolean;
  aiConfidence: number;
  extractedMetadata: {
    detectedMake?: string;
    detectedModel?: string;
    detectedColor?: string;
    detectedYear?: number;
    imageQuality: number;
    lightingScore: number;
    completenessScore: number;
  };
  
  // Quality Scores
  imageQualityScore: number;
  listingCompletenessScore: number;
  hostVerificationScore: number;
  
  // Rejection & Feedback
  rejectionReason?: string;
  adminNotes?: string;
  improvementSuggestions?: string[];
  
  // Analytics
  viewCount: number;
  inquiryCount: number;
  bookingCount: number;
  rating: number;
  ratingCount: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  lastViewedAt?: Date;
}

export interface EnhancedVehicleCreationAttributes extends Omit<EnhancedVehicleAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class EnhancedVehicle extends Model<InferAttributes<EnhancedVehicle>, InferCreationAttributes<EnhancedVehicle>> {
  declare id: CreationOptional<number>;
  declare hostId: string;
  
  // Basic Vehicle Information
  declare make: string;
  declare model: string;
  declare year: number;
  declare type: 'car' | 'suv' | 'truck' | 'van' | 'motorcycle' | 'luxury' | 'electric';
  declare color: string;
  declare mileage: number;
  declare transmission: 'manual' | 'automatic' | 'cvt' | 'semi-automatic';
  declare fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid' | 'lpg';
  declare seats: number;
  declare doors: number;
  declare engineSize: string;
  declare vin: string;
  
  // Pricing & Availability
  declare pricePerDay: number;
  declare pricePerWeek?: number;
  declare pricePerMonth?: number;
  declare minimumRentalDays: number;
  declare maximumRentalDays?: number;
  declare isAvailable: boolean;
  
  // Features & Amenities
  declare features: string[];
  declare amenities: string[];
  declare safetyFeatures: string[];
  declare entertainmentFeatures: string[];
  
  // Insurance & Documentation
  declare insuranceIncluded: boolean;
  declare insuranceProvider?: string;
  declare insurancePolicyNumber?: string;
  declare gpsInstalled: boolean;
  declare trackingEnabled: boolean;
  
  // Media & Documentation
  declare coverImage: string;
  declare interiorImages: string[];
  declare exteriorImages: string[];
  declare dashboardImages: string[];
  declare engineImages: string[];
  declare wheelImages: string[];
  declare licenseImages: string[];
  declare registrationImages: string[];
  declare videoTourUrl?: string;
  declare videoTourFile?: string;
  
  // Location & Verification
  declare location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  
  // Status & Verification
  declare listingStatus: 'draft' | 'pending' | 'approved' | 'rejected' | 'active' | 'inactive';
  declare verified: boolean;
  declare verificationDate?: Date;
  declare verificationNotes?: string;
  
  // AI & Metadata
  declare aiVerified: boolean;
  declare aiConfidence: number;
  declare extractedMetadata: {
    detectedMake?: string;
    detectedModel?: string;
    detectedColor?: string;
    detectedYear?: number;
    imageQuality: number;
    lightingScore: number;
    completenessScore: number;
  };
  
  // Quality Scores
  declare imageQualityScore: number;
  declare listingCompletenessScore: number;
  declare hostVerificationScore: number;
  
  // Rejection & Feedback
  declare rejectionReason?: string;
  declare adminNotes?: string;
  declare improvementSuggestions?: string[];
  
  // Analytics
  declare viewCount: number;
  declare inquiryCount: number;
  declare bookingCount: number;
  declare rating: number;
  declare ratingCount: number;
  
  // Timestamps
  declare readonly createdAt: CreationOptional<Date>;
  declare readonly updatedAt: CreationOptional<Date>;
  declare publishedAt?: Date;
  declare lastViewedAt?: Date;

  // Methods
  incrementViewCount() {
    this.viewCount += 1;
    this.lastViewedAt = new Date();
    return this.save();
  }

  calculateCompletenessScore() {
    let score = 0;
    const maxScore = 100;
    
    // Basic info (20 points)
    if (this.make && this.model && this.year) score += 10;
    if (this.color && this.mileage) score += 5;
    if (this.transmission && this.fuelType) score += 5;
    
    // Images (30 points)
    if (this.coverImage) score += 5;
    if (this.exteriorImages.length >= 3) score += 10;
    if (this.interiorImages.length >= 2) score += 10;
    if (this.dashboardImages.length >= 1) score += 5;
    
    // Location (15 points)
    if (this.location.address && this.location.coordinates) score += 15;
    
    // Features (15 points)
    if (this.features.length > 0) score += 10;
    if (this.amenities.length > 0) score += 5;
    
    // Documentation (20 points)
    if (this.vin) score += 5;
    if (this.insuranceIncluded) score += 5;
    if (this.registrationImages.length > 0) score += 10;
    
    this.listingCompletenessScore = Math.min(score, maxScore);
    return this.listingCompletenessScore;
  }
}

EnhancedVehicle.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hostId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'host_id',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  
  // Basic Vehicle Information
  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1995,
      max: new Date().getFullYear() + 2,
    },
  },
  type: {
    type: DataTypes.ENUM('car', 'suv', 'truck', 'van', 'motorcycle', 'luxury', 'electric'),
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  transmission: {
    type: DataTypes.ENUM('manual', 'automatic', 'cvt', 'semi-automatic'),
    allowNull: false,
  },
  fuelType: {
    type: DataTypes.ENUM('petrol', 'diesel', 'electric', 'hybrid', 'lpg'),
    allowNull: false,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 50,
    },
  },
  doors: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 2,
      max: 6,
    },
  },
  engineSize: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vin: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [17, 17],
    },
  },
  
  // Pricing & Availability
  pricePerDay: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  pricePerWeek: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  pricePerMonth: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  minimumRentalDays: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },
  maximumRentalDays: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  
  // Features & Amenities
  features: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  amenities: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  safetyFeatures: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  entertainmentFeatures: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  
  // Insurance & Documentation
  insuranceIncluded: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  insuranceProvider: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  insurancePolicyNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gpsInstalled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  trackingEnabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  
  // Media & Documentation
  coverImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  interiorImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  exteriorImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  dashboardImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  engineImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  wheelImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  licenseImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  registrationImages: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  videoTourUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  videoTourFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
  // Location & Verification
  location: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  
  // Status & Verification
  listingStatus: {
    type: DataTypes.ENUM('draft', 'pending', 'approved', 'rejected', 'active', 'inactive'),
    allowNull: false,
    defaultValue: 'draft',
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  verificationDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  verificationNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  
  // AI & Metadata
  aiVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  aiConfidence: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 1,
    },
  },
  extractedMetadata: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {},
  },
  
  // Quality Scores
  imageQualityScore: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 1,
    },
  },
  listingCompletenessScore: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 1,
    },
  },
  hostVerificationScore: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 1,
    },
  },
  
  // Rejection & Feedback
  rejectionReason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  adminNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  improvementSuggestions: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  
  // Analytics
  viewCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  inquiryCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bookingCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5,
    },
  },
  ratingCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  
  // Timestamps
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  publishedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  lastViewedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'EnhancedVehicle',
  tableName: 'enhanced_vehicles',
  timestamps: true,
  underscored: true,
  indexes: [
    {
      fields: ['host_id'],
    },
    {
      fields: ['listing_status'],
    },
    {
      fields: ['verified'],
    },
    {
      fields: ['type'],
    },
    {
      fields: ['price_per_day'],
    },
    {
      fields: ['rating'],
    },
    {
      fields: ['created_at'],
    },
  ],
});

export default EnhancedVehicle;
