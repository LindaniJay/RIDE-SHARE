/**
 * Production API Client
 * Replaces all mock data with real API calls
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

class ProductionApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('auth_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Request failed');
      }

      return { data };
    } catch (error) {
      console.error('API request failed:', error);
      return { error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Authentication
  async register(userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: 'renter' | 'host' | 'admin';
    phone_number?: string;
  }) {
    return this.request<{ user: any; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(credentials: { email: string; password: string }) {
    const response = await this.request<{ user: any; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.data?.token) {
      this.token = response.data.token;
      localStorage.setItem('auth_token', response.data.token);
    }

    return response;
  }

  async logout() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  async getProfile() {
    return this.request<{
      id: string;
      email: string;
      first_name: string;
      last_name: string;
      role: string;
      phone_number?: string;
    }>('/auth/profile');
  }

  // Listings
  async getListings(filters?: {
    location?: string;
    start_date?: string;
    end_date?: string;
    vehicle_type?: string;
    min_price?: number;
    max_price?: number;
  }) {
    const queryParams = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined) {
          queryParams.append(key, value.toString());
        }
      });
    }

    const endpoint = `/listings${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    return this.request<any[]>(endpoint);
  }

  async getListing(id: string) {
    return this.request<any>(`/listings/${id}`);
  }

  async createListing(listingData: {
    title: string;
    description: string;
    make: string;
    model: string;
    year: number;
    vehicle_type: string;
    price_per_day: number;
    location: any;
    images: string[];
    features: string[];
  }) {
    return this.request<any>('/listings', {
      method: 'POST',
      body: JSON.stringify(listingData),
    });
  }

  async updateListing(id: string, listingData: any) {
    return this.request<any>(`/listings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(listingData),
    });
  }

  async deleteListing(id: string) {
    return this.request<void>(`/listings/${id}`, {
      method: 'DELETE',
    });
  }

  // Bookings
  async createBooking(bookingData: {
    listing_id: string;
    start_date: string;
    end_date: string;
    special_requests?: string;
  }) {
    return this.request<any>('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async getMyBookings() {
    return this.request<any[]>('/bookings/my-bookings');
  }

  async getHostBookings() {
    return this.request<any[]>('/bookings/host-bookings');
  }

  async updateBookingStatus(id: string, status: string, reason?: string) {
    return this.request<any>(`/bookings/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status, reason }),
    });
  }

  async cancelBooking(id: string, reason?: string) {
    return this.request<any>(`/bookings/${id}/cancel`, {
      method: 'POST',
      body: JSON.stringify({ reason }),
    });
  }

  // Payments
  async createPayment(paymentData: {
    booking_id: string;
    amount: number;
    payment_method: string;
  }) {
    return this.request<any>('/payments', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  }

  async processPayment(id: string) {
    return this.request<any>(`/payments/${id}/process`, {
      method: 'POST',
    });
  }

  async getMyPayments() {
    return this.request<any[]>('/payments/my-payments');
  }

  // Reviews
  async createReview(reviewData: {
    listing_id: string;
    booking_id: string;
    rating: number;
    comment: string;
  }) {
    return this.request<any>('/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
  }

  async getListingReviews(listingId: string) {
    return this.request<any[]>(`/reviews/listing/${listingId}`);
  }

  // Admin
  async getAdminLogs() {
    return this.request<any[]>('/admin/logs');
  }

  async overrideBooking(bookingId: string, status: string, reason?: string) {
    return this.request<any>('/admin/override-booking', {
      method: 'POST',
      body: JSON.stringify({ booking_id: bookingId, status, reason }),
    });
  }

  async removeListing(id: string) {
    return this.request<void>(`/admin/listings/${id}`, {
      method: 'DELETE',
    });
  }

  // Notifications
  async getNotifications() {
    return this.request<any[]>('/notifications');
  }

  async markNotificationAsRead(id: string) {
    return this.request<any>(`/notifications/${id}/read`, {
      method: 'PUT',
    });
  }

  // Dashboard Stats
  async getDashboardStats() {
    return this.request<{
      total_bookings: number;
      total_earnings: number;
      pending_approvals: number;
      recent_activity: any[];
    }>('/dashboard/stats');
  }

  async getHostStats() {
    return this.request<{
      total_listings: number;
      total_bookings: number;
      total_earnings: number;
      pending_bookings: number;
    }>('/dashboard/host-stats');
  }

  async getAdminStats() {
    return this.request<{
      total_users: number;
      total_listings: number;
      total_bookings: number;
      total_revenue: number;
      pending_approvals: number;
    }>('/dashboard/admin-stats');
  }
}

// Export singleton instance
export const apiClient = new ProductionApiClient();
export default apiClient;
