import axios from 'axios';
import type { 
  LoginRequest, 
  RegisterRequest, 
  VehicleFilters, 
  SearchParams, 
  PaymentData,
  User,
  Vehicle,
  Booking,
  ApiResponse,
  PaginatedResponse
} from '../types/api';

const API_BASE_URL = (import.meta as ImportMeta).env?.DEV
  ? '/api'
  : ((import.meta as ImportMeta).env?.VITE_API_URL || '/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: (loginData: LoginRequest) => 
    api.post<ApiResponse<{ user: User; token: string }>>('/auth/login', loginData),
  
  register: (userData: RegisterRequest) => 
    api.post<ApiResponse<{ user: User; token: string }>>('/auth/register', userData),
  
  logout: () => 
    api.post<ApiResponse>('/auth/logout'),
  
  refreshToken: () => 
    api.post<ApiResponse<{ token: string }>>('/auth/refresh'),
  
  getCurrentUser: () => 
    api.get<ApiResponse<User>>('/auth/me'),
};

// Vehicles API
export const vehiclesAPI = {
  getAll: (filters?: VehicleFilters) => 
    api.get<ApiResponse<PaginatedResponse<Vehicle>>>('/vehicles', { params: filters }),
  
  getById: (id: string) => 
    api.get<ApiResponse<Vehicle>>(`/vehicles/${id}`),
  
  create: (vehicleData: Omit<Vehicle, 'id' | 'hostId' | 'host' | 'createdAt' | 'updatedAt'>) => 
    api.post<ApiResponse<Vehicle>>('/vehicles', vehicleData),
  
  update: (id: string, vehicleData: Partial<Omit<Vehicle, 'id' | 'hostId' | 'host' | 'createdAt' | 'updatedAt'>>) => 
    api.put<ApiResponse<Vehicle>>(`/vehicles/${id}`, vehicleData),
  
  delete: (id: string) => 
    api.delete<ApiResponse>(`/vehicles/${id}`),
  
  search: (searchParams: SearchParams) => 
    api.get<ApiResponse<PaginatedResponse<Vehicle>>>('/vehicles/search', { params: searchParams }),
};

// Bookings API
export const bookingsAPI = {
  getAll: () => 
    api.get<ApiResponse<Booking[]>>('/bookings'),
  
  getById: (id: string) => 
    api.get<ApiResponse<Booking>>(`/bookings/${id}`),
  
  create: (bookingData: Omit<Booking, 'id' | 'renterId' | 'renter' | 'vehicle' | 'createdAt' | 'updatedAt'>) => 
    api.post<ApiResponse<Booking>>('/bookings', bookingData),
  
  update: (id: string, bookingData: Partial<Omit<Booking, 'id' | 'renterId' | 'renter' | 'vehicle' | 'createdAt' | 'updatedAt'>>) => 
    api.put<ApiResponse<Booking>>(`/bookings/${id}`, bookingData),
  
  cancel: (id: string) => 
    api.post<ApiResponse<Booking>>(`/bookings/${id}/cancel`),
  
  approve: (id: string) => 
    api.post<ApiResponse<Booking>>(`/bookings/${id}/approve`),
  
  reject: (id: string) => 
    api.post<ApiResponse<Booking>>(`/bookings/${id}/reject`),
};

// Payments API
export const paymentsAPI = {
  createPaymentIntent: (bookingId: string, amount: number) => 
    api.post<ApiResponse<{ clientSecret: string }>>('/payments/create-payment-intent', { bookingId, amount }),
  
  confirmPayment: (paymentIntentId: string) => 
    api.post<ApiResponse<{ status: string }>>('/payments/confirm-payment', { paymentIntentId }),
  
  refund: (paymentId: string) => 
    api.post<ApiResponse<{ status: string }>>('/payments/refund', { paymentId }),
  
  createPayfastPayment: (paymentData: PaymentData) => 
    api.post<ApiResponse<{ paymentUrl: string }>>('/payments/create-payfast-payment', paymentData),
  
  getPaymentMethods: () => 
    api.get<ApiResponse<{ methods: string[] }>>('/payments/methods'),
};

// Dashboard API
export const dashboardAPI = {
  getRenterStats: () => 
    api.get('/dashboard/renter'),
  
  getHostStats: () => 
    api.get('/dashboard/host'),
  
  getAdminStats: () => 
    api.get('/dashboard/admin'),
};

// Approval Requests API
export const approvalRequestsAPI = {
  create: (data: {
    requestType: 'DocumentVerification' | 'VehicleListing' | 'InsuranceVerification' | 'ProfileVerification' | 'VehicleApproval';
    entityId: number;
    submittedBy: 'renter' | 'host';
    reviewNotes?: string;
  }) => 
    api.post<ApiResponse<any>>('/approval-requests', data),
  
  getMyRequests: (params?: { status?: string; requestType?: string; page?: number; limit?: number }) => 
    api.get<ApiResponse<any>>('/approval-requests/my-requests', { params }),
  
  getAll: (params?: { status?: string; requestType?: string; submittedBy?: string; page?: number; limit?: number }) => 
    api.get<ApiResponse<any>>('/approval-requests', { params }),
  
  getPending: (params?: { page?: number; limit?: number }) => 
    api.get<ApiResponse<any>>('/approval-requests/pending', { params }),
  
  update: (id: number, data: { status: 'Approved' | 'Declined'; reviewNotes?: string }) => 
    api.patch<ApiResponse<any>>(`/approval-requests/${id}`, data),
  
  getById: (id: number) => 
    api.get<ApiResponse<any>>(`/approval-requests/${id}`),
  
  getStats: () => 
    api.get<ApiResponse<any>>('/approval-requests/stats/overview'),
  
  bulkUpdate: (data: { requestIds: number[]; status: 'Approved' | 'Declined'; reviewNotes?: string }) => 
    api.patch<ApiResponse<any>>('/approval-requests/bulk', data),
};

export default api;