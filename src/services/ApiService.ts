import { firestoreService } from '../config';
import { Vehicle, Booking, User, Message, Notification } from '../types/navigation';

// API Base URL
const API_BASE_URL = 'https://api.rideshare-sa.co.za/api';

// Generic API response type
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Generic API error
class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic API client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(data.message || 'Request failed', response.status);
      }

      return data;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error occurred');
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Create API client instance
const apiClient = new ApiClient(API_BASE_URL);

// Vehicle Service
export class VehicleService {
  static async getVehicles(filters?: {
    location?: string;
    category?: string;
    priceMin?: number;
    priceMax?: number;
    startDate?: string;
    endDate?: string;
  }): Promise<Vehicle[]> {
    try {
      const queryParams = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            queryParams.append(key, value.toString());
          }
        });
      }

      const response = await apiClient.get<Vehicle[]>(`/vehicles?${queryParams}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      throw error;
    }
  }

  static async getVehicleById(id: string): Promise<Vehicle> {
    try {
      const response = await apiClient.get<Vehicle>(`/vehicles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching vehicle:', error);
      throw error;
    }
  }

  static async createVehicle(vehicleData: Partial<Vehicle>): Promise<Vehicle> {
    try {
      const response = await apiClient.post<Vehicle>('/vehicles', vehicleData);
      return response.data;
    } catch (error) {
      console.error('Error creating vehicle:', error);
      throw error;
    }
  }

  static async updateVehicle(id: string, vehicleData: Partial<Vehicle>): Promise<Vehicle> {
    try {
      const response = await apiClient.put<Vehicle>(`/vehicles/${id}`, vehicleData);
      return response.data;
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw error;
    }
  }

  static async deleteVehicle(id: string): Promise<void> {
    try {
      await apiClient.delete(`/vehicles/${id}`);
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      throw error;
    }
  }
}

// Booking Service
export class BookingService {
  static async createBooking(bookingData: {
    vehicleId: string;
    startDate: string;
    endDate: string;
    pickupLocation: string;
    returnLocation: string;
    specialRequests?: string;
  }): Promise<Booking> {
    try {
      const response = await apiClient.post<Booking>('/bookings', bookingData);
      return response.data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }

  static async getBookings(userId: string): Promise<Booking[]> {
    try {
      const response = await apiClient.get<Booking[]>(`/bookings?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  }

  static async getBookingById(id: string): Promise<Booking> {
    try {
      const response = await apiClient.get<Booking>(`/bookings/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching booking:', error);
      throw error;
    }
  }

  static async updateBookingStatus(id: string, status: string): Promise<Booking> {
    try {
      const response = await apiClient.put<Booking>(`/bookings/${id}/status`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw error;
    }
  }

  static async cancelBooking(id: string, reason?: string): Promise<Booking> {
    try {
      const response = await apiClient.put<Booking>(`/bookings/${id}/cancel`, { reason });
      return response.data;
    } catch (error) {
      console.error('Error cancelling booking:', error);
      throw error;
    }
  }
}

// User Service
export class UserService {
  static async updateProfile(userId: string, profileData: Partial<User>): Promise<User> {
    try {
      const response = await apiClient.put<User>(`/users/${userId}`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  static async uploadDocument(userId: string, documentType: string, file: any): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('documentType', documentType);

      const response = await fetch(`${API_BASE_URL}/users/${userId}/documents`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error uploading document:', error);
      throw error;
    }
  }

  static async getProfile(userId: string): Promise<User> {
    try {
      const response = await apiClient.get<User>(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  }
}

// Message Service
export class MessageService {
  static async getMessages(userId: string, otherUserId?: string): Promise<Message[]> {
    try {
      const endpoint = otherUserId 
        ? `/messages?userId=${userId}&otherUserId=${otherUserId}`
        : `/messages?userId=${userId}`;
      
      const response = await apiClient.get<Message[]>(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
  }

  static async sendMessage(messageData: {
    receiverId: string;
    content: string;
    bookingId?: string;
  }): Promise<Message> {
    try {
      const response = await apiClient.post<Message>('/messages', messageData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  static async markAsRead(messageId: string): Promise<void> {
    try {
      await apiClient.put(`/messages/${messageId}/read`);
    } catch (error) {
      console.error('Error marking message as read:', error);
      throw error;
    }
  }
}

// Notification Service
export class NotificationService {
  static async getNotifications(userId: string): Promise<Notification[]> {
    try {
      const response = await apiClient.get<Notification[]>(`/notifications?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      throw error;
    }
  }

  static async markAsRead(notificationId: string): Promise<void> {
    try {
      await apiClient.put(`/notifications/${notificationId}/read`);
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  }

  static async markAllAsRead(userId: string): Promise<void> {
    try {
      await apiClient.put(`/notifications/${userId}/read-all`);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
      throw error;
    }
  }
}

// Payment Service
export class PaymentService {
  static async createPaymentIntent(amount: number, currency: string = 'ZAR'): Promise<{
    clientSecret: string;
    paymentIntentId: string;
  }> {
    try {
      const response = await apiClient.post('/payments/create-intent', {
        amount,
        currency,
      });
      return response.data;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  }

  static async confirmPayment(paymentIntentId: string): Promise<{
    status: string;
    transactionId: string;
  }> {
    try {
      const response = await apiClient.post('/payments/confirm', {
        paymentIntentId,
      });
      return response.data;
    } catch (error) {
      console.error('Error confirming payment:', error);
      throw error;
    }
  }

  static async getPaymentHistory(userId: string): Promise<any[]> {
    try {
      const response = await apiClient.get(`/payments/history?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching payment history:', error);
      throw error;
    }
  }
}

export { ApiError };
export default apiClient;
