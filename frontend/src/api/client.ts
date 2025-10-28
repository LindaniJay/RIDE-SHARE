import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create axios instance
const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    // In development, always use Vite proxy at /api. In production, use VITE_API_URL if provided.
    baseURL: '/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor to add Firebase auth token
  client.interceptors.request.use(
    async (config) => {
      try {
        const { auth } = await import('../config/firebase');
        const user = auth.currentUser;
        if (user) {
          const token = await user.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
          console.log('API Request with token:', config.url, 'Token length:', token.length);
        } else {
          console.log('API Request without user:', config.url);
        }
      } catch (error) {
        console.error('Error getting Firebase token:', error);
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

      // Handle authentication errors
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // For Firebase, try to refresh the token
          const { auth } = await import('../config/firebase');
          const user = auth.currentUser;
          if (user) {
            const token = await user.getIdToken(true); // Force refresh
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return client(originalRequest);
          }
        } catch (refreshError) {
          // Refresh failed, redirect to login
          console.error('Token refresh failed:', refreshError);
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
    verifyFirebaseToken: '/auth/verify-firebase',
    profile: '/auth/me',
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
    createCheckout: '/payments/stripe/create-intent',
    webhook: '/payments/payfast/notify',
  },
  dashboard: {
    renter: '/dashboard/renter',
    host: '/dashboard/host',
    admin: '/dashboard/admin',
  },
};

export default apiClient;
