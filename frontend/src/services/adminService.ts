import { apiClient } from './apiClient';

export interface AdminUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: 'renter' | 'host' | 'admin';
  phoneNumber?: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  documentStatus: 'pending' | 'verified' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface AdminVehicle {
  id: number;
  title: string;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  location: string;
  status: 'pending' | 'approved' | 'declined';
  declineReason?: string;
  hostId: number;
  host?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: string;
}

export interface AdminBooking {
  id: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  startDate: string;
  endDate: string;
  totalPrice: number;
  renterId: number;
  vehicleId: number;
  renter?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  vehicle?: {
    title: string;
    make: string;
    model: string;
  };
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
    recentUsers: AdminUser[];
    recentVehicles: AdminVehicle[];
  };
}

export class AdminService {
  // Get all users for admin approval
  static async getUsers(params?: {
    page?: number;
    limit?: number;
    status?: string;
    role?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    if (params?.role) queryParams.append('role', params.role);
    
    const url = `/admin/users${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await apiClient.get(url);
    return response.data;
  }

  // Approve or reject user profile
  static async approveUser(userId: number, status: 'approved' | 'rejected', reason?: string) {
    const response = await apiClient.patch(`/admin/users/${userId}/approve`, {
      status,
      reason
    });
    return response.data;
  }

  // Get all vehicles for admin approval
  static async getVehicles(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    
    const url = `/admin/vehicles${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await apiClient.get(url);
    return response.data;
  }

  // Approve or reject vehicle listing
  static async approveVehicle(vehicleId: number, status: 'approved' | 'declined', reason?: string) {
    const response = await apiClient.patch(`/admin/vehicles/${vehicleId}/approve`, {
      status,
      reason
    });
    return response.data;
  }

  // Get all bookings for admin review
  static async getBookings(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    
    const url = `/admin/bookings${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await apiClient.get(url);
    return response.data;
  }

  // Get all reviews for admin moderation
  static async getReviews(params?: {
    page?: number;
    limit?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const url = `/admin/reviews${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await apiClient.get(url);
    return response.data;
  }

  // Get admin dashboard statistics
  static async getStats(): Promise<AdminStats> {
    const response = await apiClient.get('/admin/stats');
    return (response.data as any).data as AdminStats;
  }

  // Get pending documents for verification
  static async getDocuments(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    
    const url = `/admin/documents${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await apiClient.get(url);
    return response.data;
  }

  // Get disputes for admin review
  static async getDisputes(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }) {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    
    const url = `/admin/disputes${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await apiClient.get(url);
    return response.data;
  }
}
