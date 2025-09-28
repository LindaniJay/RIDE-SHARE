// API Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'renter' | 'host' | 'admin';
  phone?: string;
  avatar?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  fuelType: string;
  transmission: string;
  seats: number;
  pricePerDay: number;
  pricePerHour: number;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  features: string[];
  images: string[];
  isAvailable: boolean;
  hostId: string;
  host: User;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  vehicleId: string;
  renterId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  vehicle: Vehicle;
  renter: User;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  bookingId: string;
  vehicleId: string;
  renterId: string;
  rating: number;
  comment: string;
  renter: User;
  createdAt: string;
  updatedAt: string;
}

// API Request/Response Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'renter' | 'host';
}

export interface VehicleFilters {
  type?: string;
  fuelType?: string;
  transmission?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  startDate?: string;
  endDate?: string;
}

export interface SearchParams {
  query?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  fuelType?: string;
  transmission?: string;
  seats?: number;
}

export interface PaymentData {
  bookingId: number;
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  cellNumber?: string;
  currency?: string;
  paymentMethod?: string;
  returnUrl?: string;
  cancelUrl?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
  loading?: boolean;
  user?: User;
  payfastData?: {
    paymentUrl: string;
    redirectUrl?: string;
  };
  methods?: string[];
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Environment variables type
export interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_GA_TRACKING_ID: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
