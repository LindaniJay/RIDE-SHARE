import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create axios instance
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: import.meta.env?.VITE_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor to add auth token
  client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor for error handling
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // Handle token refresh
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            const response = await axios.post(
              `${import.meta.env?.VITE_API_URL || 'http://localhost:5000/api'}/auth/refresh`,
              { refreshToken }
            );

            const { accessToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            
            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return client(originalRequest);
          }
        } catch (refreshError) {
          // Refresh failed, redirect to login
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
      }

      return Promise.reject(error);
    }
  );

  return client;
};

export const apiClient = createApiClient();

// API endpoints
export const apiEndpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
    profile: '/auth/profile',
  },
  vehicles: {
    list: '/vehicles',
    create: '/vehicles',
    get: (id: string) => `/vehicles/${id}`,
    update: (id: string) => `/vehicles/${id}`,
    delete: (id: string) => `/vehicles/${id}`,
  },
  bookings: {
    list: '/bookings',
    create: '/bookings',
    get: (id: string) => `/bookings/${id}`,
    update: (id: string) => `/bookings/${id}`,
    delete: (id: string) => `/bookings/${id}`,
  },
  listings: {
    list: '/listings',
    create: '/listings',
    get: (id: string) => `/listings/${id}`,
    update: (id: string) => `/listings/${id}`,
    delete: (id: string) => `/listings/${id}`,
  },
  reviews: {
    list: '/reviews',
    create: '/reviews',
    get: (id: string) => `/reviews/${id}`,
    update: (id: string) => `/reviews/${id}`,
    delete: (id: string) => `/reviews/${id}`,
  },
  payments: {
    createCheckout: '/payments/create-checkout',
    webhook: '/payments/webhook',
  },
  dashboard: {
    stats: '/dashboard/stats',
    recent: '/dashboard/recent',
  },
};

export default apiClient;
