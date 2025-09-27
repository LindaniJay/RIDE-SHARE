import axios from 'axios';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';

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
  login: (email: string, password: string) => 
    api.post('/auth/login', { email, password }),
  
  register: (userData: any) => 
    api.post('/auth/register', userData),
  
  logout: () => 
    api.post('/auth/logout'),
  
  refreshToken: () => 
    api.post('/auth/refresh'),
  
  getCurrentUser: () => 
    api.get('/auth/me'),
};

// Vehicles API
export const vehiclesAPI = {
  getAll: (filters?: any) => 
    api.get('/vehicles', { params: filters }),
  
  getById: (id: string) => 
    api.get(`/vehicles/${id}`),
  
  create: (vehicleData: any) => 
    api.post('/vehicles', vehicleData),
  
  update: (id: string, vehicleData: any) => 
    api.put(`/vehicles/${id}`, vehicleData),
  
  delete: (id: string) => 
    api.delete(`/vehicles/${id}`),
  
  search: (searchParams: any) => 
    api.get('/vehicles/search', { params: searchParams }),
};

// Bookings API
export const bookingsAPI = {
  getAll: () => 
    api.get('/bookings'),
  
  getById: (id: string) => 
    api.get(`/bookings/${id}`),
  
  create: (bookingData: any) => 
    api.post('/bookings', bookingData),
  
  update: (id: string, bookingData: any) => 
    api.put(`/bookings/${id}`, bookingData),
  
  cancel: (id: string) => 
    api.post(`/bookings/${id}/cancel`),
  
  approve: (id: string) => 
    api.post(`/bookings/${id}/approve`),
  
  reject: (id: string) => 
    api.post(`/bookings/${id}/reject`),
};

// Payments API
export const paymentsAPI = {
  createPaymentIntent: (bookingId: string, amount: number) => 
    api.post('/payments/create-payment-intent', { bookingId, amount }),
  
  confirmPayment: (paymentIntentId: string) => 
    api.post('/payments/confirm-payment', { paymentIntentId }),
  
  refund: (paymentId: string) => 
    api.post('/payments/refund', { paymentId }),
  
  createPayfastPayment: (paymentData: any) => 
    api.post('/payments/create-payfast-payment', paymentData),
  
  getPaymentMethods: () => 
    api.get('/payments/methods'),
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

export default api;