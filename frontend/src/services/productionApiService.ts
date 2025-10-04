import { apiClient as productionApiClient } from './productionApiClient';

export interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  vehicle_type: string;
  category: string;
  price_per_day: number;
  price_per_week?: number;
  price_per_month?: number;
  location: {
    city: string;
    province: string;
    latitude?: number;
    longitude?: number;
  };
  images: string[];
  status: string;
  features: string[];
  description: string;
  rating?: number;
  total_bookings?: number;
  host?: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  created_at: string;
}

export interface Booking {
  id: string;
  vehicleId: string;
  vehicleName: string;
  renterId: string;
  renterName: string;
  hostId: string;
  hostName: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  createdAt: string;
  specialRequests?: string;
}

export interface Checkpoint {
  id: string;
  bookingId: string;
  type: 'pickup' | 'return';
  status: 'pending' | 'in_progress' | 'completed';
  notes?: string;
  location?: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  items: CheckpointItem[];
  images: CheckpointImage[];
  createdAt: string;
  completedAt?: string;
}

export interface CheckpointItem {
  id: string;
  checkpointId: string;
  itemName: string;
  status: 'working' | 'not_working' | 'damaged';
  notes?: string;
}

export interface CheckpointImage {
  id: string;
  checkpointId: string;
  fileUrl: string;
  filename: string;
  category?: string;
  description?: string;
  uploadedBy: string;
  createdAt: string;
}

export interface Payment {
  id: string;
  bookingId: string;
  amountCents: number;
  currency: string;
  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'refunded';
  paymentMethod?: string;
  transactionId?: string;
  processedAt?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'renter' | 'host' | 'admin';
  phoneNumber?: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  documentStatus: 'not_uploaded' | 'pending' | 'approved' | 'rejected';
  profileImageUrl?: string;
  createdAt: string;
}

export interface AdminStats {
  overview: {
    totalUsers: number;
    pendingUsers: number;
    totalVehicles: number;
    pendingVehicles: number;
    totalBookings: number;
    pendingBookings: number;
    totalRevenue: number;
  };
  recentActivity: {
    recentUsers: User[];
    recentVehicles: Vehicle[];
  };
}

class ProductionApiService {
  private apiClient = productionApiClient;

  // Authentication
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    const response = await this.apiClient.post<{ user: User; token: string }>('/auth/login', {
      email,
      password
    });
    return response.data as { user: User; token: string };
  }

  async register(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: 'renter' | 'host' | 'admin';
  }): Promise<{ user: User; token: string }> {
    const response = await this.apiClient.post<{ user: User; token: string }>('/auth/register', userData);
    return response.data!;
  }

  async getCurrentUser(): Promise<User> {
    const response = await this.apiClient.get<User>('/users/profile');
    return response.data!;
  }

  // Vehicles/Listings
  async getVehicles(filters?: {
    location?: string;
    type?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    startDate?: string;
    endDate?: string;
  }): Promise<Vehicle[]> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, value.toString());
        }
      });
    }
    
    const response = await this.apiClient.get<Vehicle[]>(`/vehicles?${params.toString()}`);
    return response.data!;
  }

  async getVehicleById(id: string): Promise<Vehicle> {
    const response = await this.apiClient.get<Vehicle>(`/vehicles/${id}`);
    return response.data!;
  }

  async createListing(listingData: {
    title: string;
    make: string;
    model: string;
    year: number;
    pricePerDay: number;
    pricePerWeek?: number;
    pricePerMonth?: number;
    location: any;
    features: string[];
    description?: string;
  }): Promise<Vehicle> {
    const response = await this.apiClient.post<Vehicle>('/listings', listingData);
    return response.data!;
  }

  async updateListing(id: string, updates: Partial<Vehicle>): Promise<Vehicle> {
    const response = await this.apiClient.put<Vehicle>(`/listings/${id}`, updates);
    return response.data!;
  }

  async deleteListing(id: string): Promise<void> {
    await this.apiClient.delete(`/listings/${id}`);
  }

  // Bookings
  async getBookings(userRole?: 'renter' | 'host'): Promise<Booking[]> {
    const params = userRole ? `?role=${userRole}` : '';
    const response = await this.apiClient.get<Booking[]>(`/bookings${params}`);
    return response.data!;
  }

  async getBookingById(id: string): Promise<Booking> {
    const response = await this.apiClient.get<Booking>(`/bookings/${id}`);
    return response.data!;
  }

  async createBooking(bookingData: {
    vehicleId: string;
    startDate: string;
    endDate: string;
    totalDays: number;
    totalPrice: number;
    specialRequests?: string;
  }): Promise<Booking> {
    const response = await this.apiClient.post<Booking>('/bookings', bookingData);
    return response.data!;
  }

  async updateBookingStatus(id: string, status: Booking['status']): Promise<Booking> {
    const response = await this.apiClient.put<Booking>(`/bookings/${id}/status`, { status });
    return response.data!;
  }

  async cancelBooking(id: string, reason?: string): Promise<Booking> {
    const response = await this.apiClient.put<Booking>(`/bookings/${id}/cancel`, { reason });
    return response.data!;
  }

  // Checkpoints
  async createCheckpoint(checkpointData: {
    bookingId: string;
    type: 'pickup' | 'return';
    notes?: string;
    location?: {
      latitude: number;
      longitude: number;
      address?: string;
    };
  }): Promise<Checkpoint> {
    const response = await this.apiClient.post<Checkpoint>('/checkpoints', checkpointData);
    return response.data!;
  }

  async getCheckpointsForBooking(bookingId: string): Promise<Checkpoint[]> {
    const response = await this.apiClient.get<Checkpoint[]>(`/checkpoints/booking/${bookingId}`);
    return response.data!;
  }

  async updateCheckpoint(id: string, updates: {
    status?: 'pending' | 'in_progress' | 'completed';
    notes?: string;
    location?: {
      latitude: number;
      longitude: number;
      address?: string;
    };
  }): Promise<Checkpoint> {
    const response = await this.apiClient.put<Checkpoint>(`/checkpoints/${id}`, updates);
    return response.data!;
  }

  async addCheckpointItem(checkpointId: string, itemData: {
    itemName: string;
    status: 'working' | 'not_working' | 'damaged';
    notes?: string;
  }): Promise<CheckpointItem> {
    const response = await this.apiClient.post<CheckpointItem>(`/checkpoints/${checkpointId}/items`, itemData);
    return response.data!;
  }

  async uploadCheckpointImage(checkpointId: string, file: File, category?: string, description?: string): Promise<CheckpointImage> {
    const formData = new FormData();
    formData.append('image', file);
    if (category) formData.append('category', category);
    if (description) formData.append('description', description);

    const response = await this.apiClient.uploadFile<CheckpointImage>(`/checkpoints/${checkpointId}/images`, file, {
      category,
      description
    });
    return response.data!;
  }

  async getCheckpointImages(checkpointId: string): Promise<CheckpointImage[]> {
    const response = await this.apiClient.get<CheckpointImage[]>(`/checkpoints/${checkpointId}/images`);
    return response.data!;
  }

  // Payments
  async getPayments(): Promise<Payment[]> {
    const response = await this.apiClient.get<Payment[]>('/payments');
    return response.data!;
  }

  async createPayment(paymentData: {
    bookingId: string;
    amountCents: number;
    paymentMethod: string;
  }): Promise<Payment> {
    const response = await this.apiClient.post<Payment>('/payments', paymentData);
    return response.data!;
  }

  async updatePaymentStatus(id: string, status: Payment['status']): Promise<Payment> {
    const response = await this.apiClient.put<Payment>(`/payments/${id}/status`, { status });
    return response.data!;
  }

  // Admin
  async getAdminStats(): Promise<AdminStats> {
    const response = await this.apiClient.get<AdminStats>('/admin/stats');
    return response.data!;
  }

  async getAllUsers(): Promise<User[]> {
    const response = await this.apiClient.get<User[]>('/admin/users');
    return response.data!;
  }

  async getAllVehicles(): Promise<Vehicle[]> {
    const response = await this.apiClient.get<Vehicle[]>('/admin/vehicles');
    return response.data!;
  }

  async getAllBookings(): Promise<Booking[]> {
    const response = await this.apiClient.get<Booking[]>('/admin/bookings');
    return response.data!;
  }

  async getAllCheckpoints(): Promise<Checkpoint[]> {
    const response = await this.apiClient.get<Checkpoint[]>('/checkpoints/admin/all');
    return response.data!;
  }

  async updateUserStatus(userId: string, status: 'approved' | 'rejected'): Promise<User> {
    const response = await this.apiClient.put<User>(`/admin/users/${userId}/status`, { status });
    return response.data!;
  }

  async updateVehicleStatus(vehicleId: string, status: 'approved' | 'rejected'): Promise<Vehicle> {
    const response = await this.apiClient.put<Vehicle>(`/admin/vehicles/${vehicleId}/status`, { status });
    return response.data!;
  }

  // Dashboard data
  async getDashboardData(userRole: 'renter' | 'host' | 'admin'): Promise<any> {
    const response = await this.apiClient.get<any>(`/dashboard/${userRole}`);
    return response.data!;
  }

  // Analytics
  async getAnalytics(timeRange?: 'week' | 'month' | 'year'): Promise<any> {
    const params = timeRange ? `?range=${timeRange}` : '';
    const response = await this.apiClient.get<any>(`/analytics${params}`);
    return response.data!;
  }
}

export const productionApiService = new ProductionApiService();
export default productionApiService;
