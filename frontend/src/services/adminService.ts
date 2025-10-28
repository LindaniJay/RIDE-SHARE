import { auth } from '../config/firebase';

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
    recentUsers: any[];
    recentVehicles: any[];
  };
}

export interface AdminUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  documentStatus: 'pending' | 'approved' | 'rejected';
  phoneNumber?: string;
  createdAt: string;
}

export interface AdminVehicle {
  id: number;
  title: string;
  make: string;
  model: string;
  year: number;
  status: string;
  location: string;
  pricePerDay: number;
  images?: string[];
  owner?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: string;
  declineReason?: string;
}

export class AdminService {
  private static baseUrl = '/api/admin';

  private static async getAuthToken(): Promise<string> {
    try {
      const user = auth.currentUser;
      if (!user) {
        throw new Error('No authenticated user found');
      }
      
      const token = await user.getIdToken();
      return token;
    } catch (error) {
      console.error('Error getting auth token:', error);
      throw new Error('Failed to get authentication token');
    }
  }

  static async getStats(): Promise<AdminStats> {
    try {
      const token = await this.getAuthToken();
      
      // Backend exposes GET /admin/dashboard-stats
      const response = await fetch(`${this.baseUrl}/dashboard-stats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch admin stats');
      }

      const data = await response.json();
      return data.stats;
    } catch (error) {
      console.error('Error fetching admin stats:', error);
      throw error;
    }
  }

  static async getUsers(page = 1, limit = 10, status?: string, role?: string) {
    try {
      const token = await this.getAuthToken();
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
        ...(role && { role })
      });

      const response = await fetch(`${this.baseUrl}/users?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  static async approveUser(userId: number, status: 'approved' | 'rejected', reason?: string) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${this.baseUrl}/users/${userId}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status,
          reason
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update user status');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  static async getVehicles(page = 1, limit = 10, status?: string) {
    try {
      const token = await this.getAuthToken();
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status })
      });

      const response = await fetch(`${this.baseUrl}/vehicles?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch vehicles');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      throw error;
    }
  }

  static async approveVehicle(vehicleId: number, status: 'approved' | 'declined', reason?: string) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${this.baseUrl}/vehicles/${vehicleId}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,
          reason
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update vehicle status');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating vehicle:', error);
      throw error;
    }
  }

  static async getBookings(page = 1, limit = 10, status?: string) {
    try {
      const token = await this.getAuthToken();
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status })
      });

      const response = await fetch(`${this.baseUrl}/bookings?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  }

  static async getReviews(page = 1, limit = 10) {
    try {
      const token = await this.getAuthToken();
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });

      const response = await fetch(`${this.baseUrl}/reviews?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  }

  static async getDocuments(page = 1, limit = 10, status?: string) {
    try {
      const token = await this.getAuthToken();
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status })
      });

      const response = await fetch(`${this.baseUrl}/documents?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching documents:', error);
      throw error;
    }
  }

  static async getDisputes(page = 1, limit = 10, status?: string) {
    try {
      const token = await this.getAuthToken();
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status })
      });

      const response = await fetch(`${this.baseUrl}/disputes?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch disputes');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching disputes:', error);
      throw error;
    }
  }

  static async approveBooking(bookingId: string, status: 'approved' | 'declined', reason?: string) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${this.baseUrl}/bookings/${bookingId}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status,
          reason
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update booking status');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating booking:', error);
      throw error;
    }
  }
}
