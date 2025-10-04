/**
 * Production Authentication Service
 * Replaces mock authentication with real API calls
 */

import { apiClient } from './productionApiClient';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'renter' | 'host' | 'admin';
  phone_number?: string;
  is_email_verified: boolean;
  approval_status: 'pending' | 'approved' | 'rejected';
}

export interface AuthResponse {
  user: User;
  token: string;
}

class ProductionAuthService {
  private currentUser: User | null = null;
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('auth_token');
    this.loadUserFromStorage();
  }

  private loadUserFromStorage() {
    const userData = localStorage.getItem('user_data');
    if (userData) {
      try {
        this.currentUser = JSON.parse(userData);
      } catch (error) {
        console.error('Failed to parse user data from storage:', error);
        this.clearAuth();
      }
    }
  }

  private saveUserToStorage(user: User) {
    localStorage.setItem('user_data', JSON.stringify(user));
    this.currentUser = user;
  }

  private clearAuth() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    this.token = null;
    this.currentUser = null;
  }

  async register(userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: 'renter' | 'host' | 'admin';
    phone_number?: string;
  }): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      const response = await apiClient.register(userData);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      if (response.data) {
        this.saveUserToStorage(response.data.user);
        return { success: true, user: response.data.user };
      }

      return { success: false, error: 'Registration failed' };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed' };
    }
  }

  async login(email: string, password: string): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      const response = await apiClient.login({ email, password });
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      if (response.data) {
        this.saveUserToStorage(response.data.user);
        return { success: true, user: response.data.user };
      }

      return { success: false, error: 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    }
  }

  async logout(): Promise<void> {
    try {
      await apiClient.logout();
      this.clearAuth();
    } catch (error) {
      console.error('Logout error:', error);
      this.clearAuth();
    }
  }

  async getCurrentUser(): Promise<User | null> {
    if (this.currentUser) {
      return this.currentUser;
    }

    try {
      const response = await apiClient.getProfile();
      
      if (response.data) {
        this.saveUserToStorage(response.data);
        return response.data;
      }

      return null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }

  async updateProfile(profileData: {
    first_name?: string;
    last_name?: string;
    phone_number?: string;
  }): Promise<{ success: boolean; error?: string; user?: User }> {
    try {
      const response = await apiClient.request(`/auth/profile`, {
        method: 'PUT',
        body: JSON.stringify(profileData),
      });
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      if (response.data) {
        this.saveUserToStorage(response.data);
        return { success: true, user: response.data };
      }

      return { success: false, error: 'Profile update failed' };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, error: 'Profile update failed' };
    }
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await apiClient.request('/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      return { success: true };
    } catch (error) {
      console.error('Change password error:', error);
      return { success: false, error: 'Password change failed' };
    }
  }

  isAuthenticated(): boolean {
    return !!this.token && !!this.currentUser;
  }

  getCurrentUserSync(): User | null {
    return this.currentUser;
  }

  getToken(): string | null {
    return this.token;
  }

  hasRole(role: string): boolean {
    return this.currentUser?.role === role;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  isHost(): boolean {
    return this.currentUser?.role === 'host';
  }

  isRenter(): boolean {
    return this.currentUser?.role === 'renter';
  }
}

// Export singleton instance
export const authService = new ProductionAuthService();
export default authService;
