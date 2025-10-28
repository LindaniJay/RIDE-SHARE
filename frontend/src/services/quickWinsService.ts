import { notificationService } from './notificationService';

export interface DarkModeSettings {
  enabled: boolean;
  theme: 'light' | 'dark' | 'auto';
  customColors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface FavoriteVehicle {
  id: string;
  vehicleId: string;
  userId: string;
  addedAt: string;
  notes?: string;
  tags: string[];
}

export interface BookingCalendar {
  date: string;
  available: boolean;
  price?: number;
  bookings: Array<{
    id: string;
    startTime: string;
    endTime: string;
    status: 'confirmed' | 'pending' | 'cancelled';
  }>;
}

export interface NotificationSettings {
  email: {
    bookingUpdates: boolean;
    paymentNotifications: boolean;
    promotionalOffers: boolean;
    weeklyDigest: boolean;
  };
  push: {
    bookingUpdates: boolean;
    messages: boolean;
    priceAlerts: boolean;
    nearbyVehicles: boolean;
  };
  sms: {
    bookingConfirmations: boolean;
    paymentReceipts: boolean;
    emergencyAlerts: boolean;
  };
}

export interface SocialLoginProvider {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
  clientId: string;
  scope: string[];
}

export interface VehicleComparison {
  id: string;
  vehicles: Array<{
    vehicleId: string;
    make: string;
    model: string;
    year: number;
    dailyRate: number;
    features: string[];
    rating: number;
    location: string;
  }>;
  criteria: {
    price: number;
    features: string[];
    location: string;
    availability: string[];
  };
  createdAt: string;
}

export interface RentalHistory {
  id: string;
  bookingId: string;
  vehicle: {
    make: string;
    model: string;
    year: number;
    image: string;
  };
  dates: {
    start: string;
    end: string;
    duration: number;
  };
  totalCost: number;
  status: 'completed' | 'cancelled' | 'refunded';
  rating?: number;
  review?: string;
  receipt: {
    id: string;
    url: string;
    downloadUrl: string;
  };
  createdAt: string;
}

class QuickWinsService {
  private readonly API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

  /**
   * Dark Mode Management
   */
  async getDarkModeSettings(): Promise<DarkModeSettings> {
    try {
      const settings = localStorage.getItem('darkModeSettings');
      if (settings) {
        return JSON.parse(settings);
      }
    } catch (error) {
      console.error('Error getting dark mode settings:', error);
    }

    return {
      enabled: false,
      theme: 'auto'
    };
  }

  async setDarkModeSettings(settings: DarkModeSettings): Promise<void> {
    try {
      localStorage.setItem('darkModeSettings', JSON.stringify(settings));
      
      // Apply theme to document
      this.applyDarkMode(settings);
      
      await notificationService.showSystemNotification(
        'Theme Updated',
        `Dark mode ${settings.enabled ? 'enabled' : 'disabled'}.`,
        'info'
      );
    } catch (error) {
      console.error('Error setting dark mode:', error);
    }
  }

  private applyDarkMode(settings: DarkModeSettings): void {
    const root = document.documentElement;
    
    if (settings.enabled) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (settings.customColors) {
      Object.entries(settings.customColors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
      });
    }
  }

  /**
   * Favorites Management
   */
  async addToFavorites(vehicleId: string, notes?: string, tags?: string[]): Promise<FavoriteVehicle> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          vehicleId,
          notes,
          tags: tags || []
        })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Added to Favorites',
          'Vehicle has been added to your favorites.',
          'info'
        );
      }

      return data.favorite;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw error;
    }
  }

  async removeFromFavorites(vehicleId: string): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/favorites/${vehicleId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      await notificationService.showSystemNotification(
        'Removed from Favorites',
        'Vehicle has been removed from your favorites.',
        'info'
      );
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw error;
    }
  }

  async getFavorites(): Promise<FavoriteVehicle[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/favorites`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.favorites || [];
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  }

  async updateFavorite(favoriteId: string, updates: Partial<FavoriteVehicle>): Promise<FavoriteVehicle> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/favorites/${favoriteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(updates)
      });

      const data = await response.json();
      return data.favorite;
    } catch (error) {
      console.error('Error updating favorite:', error);
      throw error;
    }
  }

  /**
   * Booking Calendar
   */
  async getBookingCalendar(vehicleId: string, month: number, year: number): Promise<BookingCalendar[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/vehicles/${vehicleId}/calendar?month=${month}&year=${year}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.calendar || [];
    } catch (error) {
      console.error('Error getting booking calendar:', error);
      return [];
    }
  }

  /**
   * Notification Settings
   */
  async getNotificationSettings(): Promise<NotificationSettings> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/notifications/settings`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.settings;
    } catch (error) {
      console.error('Error getting notification settings:', error);
      return {
        email: {
          bookingUpdates: true,
          paymentNotifications: true,
          promotionalOffers: true,
          weeklyDigest: false
        },
        push: {
          bookingUpdates: true,
          messages: true,
          priceAlerts: false,
          nearbyVehicles: false
        },
        sms: {
          bookingConfirmations: true,
          paymentReceipts: false,
          emergencyAlerts: true
        }
      };
    }
  }

  async updateNotificationSettings(settings: NotificationSettings): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/notifications/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(settings)
      });

      await notificationService.showSystemNotification(
        'Settings Updated',
        'Your notification preferences have been saved.',
        'info'
      );
    } catch (error) {
      console.error('Error updating notification settings:', error);
      throw error;
    }
  }

  /**
   * Social Login
   */
  async getSocialLoginProviders(): Promise<SocialLoginProvider[]> {
    return [
      {
        id: 'google',
        name: 'Google',
        icon: 'google',
        enabled: true,
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
        scope: ['email', 'profile']
      },
      {
        id: 'facebook',
        name: 'Facebook',
        icon: 'facebook',
        enabled: true,
        clientId: import.meta.env.VITE_FACEBOOK_APP_ID || '',
        scope: ['email', 'public_profile']
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        icon: 'linkedin',
        enabled: true,
        clientId: import.meta.env.VITE_LINKEDIN_CLIENT_ID || '',
        scope: ['r_liteprofile', 'r_emailaddress']
      }
    ];
  }

  async loginWithSocial(provider: string): Promise<any> {
    try {
      const providers = await this.getSocialLoginProviders();
      const selectedProvider = providers.find(p => p.id === provider);
      
      if (!selectedProvider) {
        throw new Error('Provider not found');
      }

      // In a real implementation, you would redirect to the OAuth provider
      // For now, we'll simulate the process
      const response = await fetch(`${this.API_BASE_URL}/auth/social/${provider}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientId: selectedProvider.clientId,
          scope: selectedProvider.scope
        })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error with social login:', error);
      throw error;
    }
  }

  /**
   * Vehicle Comparison
   */
  async createVehicleComparison(vehicleIds: string[]): Promise<VehicleComparison> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/vehicles/compare`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ vehicleIds })
      });

      const data = await response.json();
      return data.comparison;
    } catch (error) {
      console.error('Error creating vehicle comparison:', error);
      throw error;
    }
  }

  async getVehicleComparison(comparisonId: string): Promise<VehicleComparison | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/vehicles/compare/${comparisonId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.comparison;
    } catch (error) {
      console.error('Error getting vehicle comparison:', error);
      return null;
    }
  }

  /**
   * Rental History
   */
  async getRentalHistory(limit: number = 20, offset: number = 0): Promise<RentalHistory[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/rental-history?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.history || [];
    } catch (error) {
      console.error('Error getting rental history:', error);
      return [];
    }
  }

  async downloadReceipt(bookingId: string): Promise<Blob> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/rental-history/${bookingId}/receipt`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error downloading receipt:', error);
      throw error;
    }
  }

  /**
   * Advanced Filtering
   */
  async getAdvancedFilters(): Promise<{
    priceRange: { min: number; max: number };
    vehicleTypes: string[];
    features: string[];
    locations: string[];
    availability: { start: string; end: string };
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/vehicles/filters`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.filters;
    } catch (error) {
      console.error('Error getting advanced filters:', error);
      return {
        priceRange: { min: 0, max: 10000 },
        vehicleTypes: [],
        features: [],
        locations: [],
        availability: { start: '', end: '' }
      };
    }
  }

  /**
   * Quick Actions
   */
  async performQuickAction(action: string, data: any): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/quick-actions/${action}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        await notificationService.showSystemNotification(
          'Action Completed',
          `Quick action "${action}" completed successfully.`,
          'info'
        );
      }

      return result;
    } catch (error) {
      console.error('Error performing quick action:', error);
      throw error;
    }
  }

  /**
   * User Preferences
   */
  async getUserPreferences(): Promise<{
    language: string;
    currency: string;
    timezone: string;
    units: 'metric' | 'imperial';
    theme: 'light' | 'dark' | 'auto';
    notifications: NotificationSettings;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/user/preferences`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.preferences;
    } catch (error) {
      console.error('Error getting user preferences:', error);
      return {
        language: 'en',
        currency: 'ZAR',
        timezone: 'Africa/Johannesburg',
        units: 'metric',
        theme: 'auto',
        notifications: await this.getNotificationSettings()
      };
    }
  }

  async updateUserPreferences(preferences: Partial<{
    language: string;
    currency: string;
    timezone: string;
    units: 'metric' | 'imperial';
    theme: 'light' | 'dark' | 'auto';
  }>): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/user/preferences`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(preferences)
      });

      await notificationService.showSystemNotification(
        'Preferences Updated',
        'Your preferences have been saved.',
        'info'
      );
    } catch (error) {
      console.error('Error updating user preferences:', error);
      throw error;
    }
  }

  /**
   * Search Suggestions
   */
  async getSearchSuggestions(query: string): Promise<string[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/search/suggestions?q=${encodeURIComponent(query)}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.suggestions || [];
    } catch (error) {
      console.error('Error getting search suggestions:', error);
      return [];
    }
  }

  /**
   * Recent Searches
   */
  async getRecentSearches(): Promise<string[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/search/recent`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.searches || [];
    } catch (error) {
      console.error('Error getting recent searches:', error);
      return [];
    }
  }

  async clearRecentSearches(): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/search/recent`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
    } catch (error) {
      console.error('Error clearing recent searches:', error);
      throw error;
    }
  }
}

export const quickWinsService = new QuickWinsService();
