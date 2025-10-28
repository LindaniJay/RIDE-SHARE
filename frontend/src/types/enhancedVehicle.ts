export interface EnhancedVehicleForm {
  // Basic Information
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
  coverImage: File | null;
  interiorImages: File[];
  exteriorImages: File[];
  dashboardImages: File[];
  engineImages: File[];
  wheelImages: File[];
  licenseImages: File[];
  registrationImages: File[];
  videoTourFile?: File;
  videoTourUrl?: string;
  
  // Location
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
  
  // Status
  listingStatus: 'draft' | 'pending' | 'approved' | 'rejected' | 'active' | 'inactive';
}

export interface ImageUploadResult {
  success: boolean;
  url: string;
  filename: string;
  analysis?: {
    isVehicle: boolean;
    confidence: number;
    quality: number;
    lighting: number;
    angle: string;
    suggestions: string[];
  };
}

export interface VehicleListingStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  required: boolean;
}

export interface ImageCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  minCount: number;
  maxCount: number;
  acceptedTypes: string[];
  maxSize: number; // in MB
}

export interface LocationSuggestion {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  formatted: string;
}

export interface VehicleFeature {
  id: string;
  name: string;
  category: 'safety' | 'comfort' | 'entertainment' | 'convenience' | 'performance';
  icon: string;
  description: string;
}

export interface VehicleAmenity {
  id: string;
  name: string;
  category: 'interior' | 'exterior' | 'technology' | 'safety';
  icon: string;
  description: string;
}

export interface ListingPreview {
  id: string;
  coverImage: string;
  make: string;
  model: string;
  year: number;
  type: string;
  color: string;
  pricePerDay: number;
  location: {
    city: string;
    state: string;
  };
  rating: number;
  ratingCount: number;
  features: string[];
  images: string[];
  host: {
    name: string;
    verified: boolean;
    rating: number;
  };
  completenessScore: number;
  verified: boolean;
  aiVerified: boolean;
}

export interface ListingValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
  completenessScore: number;
  missingRequirements: string[];
}

export interface ImageAnalysis {
  isVehicle: boolean;
  confidence: number;
  detectedMake?: string;
  detectedModel?: string;
  detectedColor?: string;
  detectedYear?: number;
  imageQuality: number;
  lightingScore: number;
  angle: 'front' | 'back' | 'side' | 'interior' | 'dashboard' | 'engine' | 'unknown';
  suggestions: string[];
}

export interface MetadataExtraction {
  make?: string;
  model?: string;
  color?: string;
  year?: number;
  location?: {
    latitude: number;
    longitude: number;
  };
  timestamp?: Date;
  camera?: string;
}

export interface ListingSubmissionResult {
  success: boolean;
  vehicleId?: string;
  message: string;
  errors?: string[];
  warnings?: string[];
  nextSteps?: string[];
}
