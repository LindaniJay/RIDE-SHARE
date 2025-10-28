// Core domain types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  phoneNumber?: string;
  role: UserRole;
  isEmailVerified: boolean;
  profileImage?: string;
  approvalStatus: ApprovalStatus;
  documents?: UserDocuments;
  profileCompleted: boolean;
  profileCompletionDate?: Date;
  profileData?: ProfileData;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface UserDocuments {
  id?: string;
  driverLicense?: string;
  proofOfAddress?: string;
  idDocument?: string;
  uploadedAt?: Date;
  status: ApprovalStatus;
  rejectionReason?: string;
  adminNotes?: string;
}

export interface ProfileData {
  id?: string;
  userId: string;
  dateOfBirth: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  emergencyContact: string;
  emergencyPhone: string;
  // Host-specific fields
  businessName?: string;
  businessRegistration?: string;
  bankAccount?: string;
  taxNumber?: string;
  // Document files
  idDocument?: File;
  driverLicense?: File;
  proofOfAddress?: File;
  vehicleRegistration?: File;
  roadworthyCertificate?: File;
  insuranceCertificate?: File;
  submittedAt: Date;
  status: ApprovalStatus;
  adminNotes?: string;
  rejectionReason?: string;
}

export interface VehicleDocuments {
  id?: string;
  vehicleId: string;
  registration?: string;
  roadworthy?: string;
  insurance?: string;
  uploadedAt?: Date;
  status: ApprovalStatus;
  rejectionReason?: string;
  adminNotes?: string;
}

export interface Vehicle {
  id: string;
  hostId: string;
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  pricePerDay: number;
  dailyRate: number;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  images: string[];
  features: VehicleFeature[];
  status: VehicleStatus;
  approvalStatus: ApprovalStatus;
  documents?: VehicleDocuments;
  description: string;
  mileage?: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  seats: number;
  doors: number;
  isAvailable: boolean;
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  renterId: string;
  vehicleId: string;
  hostId: string;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  specialRequests?: string;
  cancellationReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  bookingId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  isVerified: boolean;
  createdAt: Date;
}

// Enums
export type UserRole = 'admin' | 'host' | 'renter';
export type VehicleType = 'car' | 'suv' | 'bakkie' | 'van' | 'motorcycle';
export type VehicleStatus = 'pending' | 'approved' | 'rejected' | 'suspended';
export type BookingStatus = 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';
export type PaymentMethod = 'card' | 'eft' | 'payfast';
export type FuelType = 'petrol' | 'diesel' | 'hybrid' | 'electric';
export type TransmissionType = 'manual' | 'automatic';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  acceptTerms: boolean;
  documents?: {
    idDocument?: File;
    driverLicense?: File;
    proofOfAddress?: File;
  };
}

export interface VehicleForm {
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  pricePerDay: number;
  location: string;
  description: string;
  features: VehicleFeature[];
  images: File[];
  imageCategories?: {
    exterior?: File[];
    interior?: File[];
    engine?: File[];
    license?: File[];
    wheels?: File[];
    dashboard?: File[];
  };
  documents?: {
    registration?: File;
    roadworthy?: File;
    insurance?: File;
  };
}

export interface BookingForm {
  vehicleId: string;
  startDate: string;
  endDate: string;
  specialRequests?: string;
}

// Search and filter types
export interface SearchFilters {
  location?: string;
  startDate?: string;
  endDate?: string;
  vehicleType?: VehicleType[];
  priceRange?: {
    min: number;
    max: number;
  };
  features?: VehicleFeature[];
  rating?: number;
}

export interface VehicleFeature {
  id: string;
  name: string;
  category: 'safety' | 'comfort' | 'entertainment' | 'convenience';
}

// Dashboard types
export interface DashboardStats {
  totalUsers: number;
  totalVehicles: number;
  totalBookings: number;
  totalRevenue: number;
  activeBookings: number;
  pendingApprovals: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Context types

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}
