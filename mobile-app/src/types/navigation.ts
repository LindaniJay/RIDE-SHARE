// Navigation Types
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  RoleSelection: undefined;
  ForgotPassword: undefined;
  MainTabs: undefined;
  HostTabs: undefined;
  AdminTabs: undefined;
  VehicleDetail: { vehicleId: string };
  Booking: { vehicleId: string };
  BookingConfirmation: { bookingId: string };
  AddVehicle: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Bookings: undefined;
  Messages: undefined;
  Profile: undefined;
};

export type HostTabParamList = {
  HostDashboard: undefined;
  Vehicles: undefined;
  Earnings: undefined;
  HostBookings: undefined;
  HostProfile: undefined;
};

export type AdminTabParamList = {
  AdminDashboard: undefined;
  Users: undefined;
  Vehicles: undefined;
  Analytics: undefined;
  AdminProfile: undefined;
};

export type DrawerParamList = {
  MainTabs: undefined;
  Settings: undefined;
  Notifications: undefined;
};

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: 'renter' | 'host' | 'admin';
  profileImage?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Vehicle {
  id: string;
  hostId: string;
  make: string;
  model: string;
  year: number;
  category: 'sedan' | 'suv' | 'bakkie' | 'truck' | 'minibus' | 'luxury';
  pricePerDay: number;
  location: {
    address: string;
    city: string;
    province: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  images: string[];
  features: string[];
  fuelType: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  transmission: 'manual' | 'automatic';
  seatingCapacity: number;
  isAvailable: boolean;
  rating: number;
  totalBookings: number;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  vehicleId: string;
  renterId: string;
  hostId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  pickupLocation: string;
  returnLocation: string;
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  bookingId?: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'booking' | 'message' | 'payment' | 'system';
  isRead: boolean;
  createdAt: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
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

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: 'renter' | 'host';
}

export interface VehicleForm {
  make: string;
  model: string;
  year: number;
  category: string;
  pricePerDay: number;
  location: {
    address: string;
    city: string;
    province: string;
  };
  features: string[];
  fuelType: string;
  transmission: string;
  seatingCapacity: number;
  description: string;
}

export interface BookingForm {
  vehicleId: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  returnLocation: string;
  specialRequests?: string;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
}
