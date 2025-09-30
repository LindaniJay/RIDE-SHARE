import { notificationService } from './notificationService';

export interface CalendarIntegration {
  provider: 'google' | 'outlook' | 'apple' | 'yahoo';
  connected: boolean;
  syncEnabled: boolean;
  lastSync: string;
  events: Array<{
    id: string;
    title: string;
    start: string;
    end: string;
    allDay: boolean;
    location?: string;
    description?: string;
  }>;
}

export interface MapsIntegration {
  provider: 'google' | 'mapbox' | 'here' | 'openstreetmap';
  apiKey: string;
  features: {
    geocoding: boolean;
    directions: boolean;
    places: boolean;
    traffic: boolean;
    streetView: boolean;
  };
  usage: {
    requests: number;
    limit: number;
    resetDate: string;
  };
}

export interface WeatherIntegration {
  provider: 'openweather' | 'weatherbit' | 'accuweather';
  apiKey: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    country: string;
  };
  data: {
    current: {
      temperature: number;
      condition: string;
      humidity: number;
      windSpeed: number;
      visibility: number;
    };
    forecast: Array<{
      date: string;
      high: number;
      low: number;
      condition: string;
      precipitation: number;
    }>;
    alerts: Array<{
      type: string;
      severity: 'low' | 'medium' | 'high';
      message: string;
      validUntil: string;
    }>;
  };
}

export interface SocialLoginIntegration {
  provider: 'google' | 'facebook' | 'linkedin' | 'twitter' | 'apple';
  enabled: boolean;
  clientId: string;
  clientSecret: string;
  scope: string[];
  redirectUri: string;
  status: 'active' | 'inactive' | 'error';
  lastSync: string;
}

export interface ThirdPartyApp {
  id: string;
  name: string;
  description: string;
  category: 'productivity' | 'communication' | 'analytics' | 'payment' | 'other';
  icon: string;
  connected: boolean;
  permissions: string[];
  dataShared: string[];
  lastUsed: string;
  status: 'active' | 'inactive' | 'error';
}

export interface APIKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  createdAt: string;
  lastUsed: string;
  expiresAt?: string;
  status: 'active' | 'revoked' | 'expired';
}

export interface Webhook {
  id: string;
  url: string;
  events: string[];
  secret: string;
  status: 'active' | 'inactive' | 'error';
  lastTriggered: string;
  successRate: number;
}

export interface IntegrationAnalytics {
  totalIntegrations: number;
  activeIntegrations: number;
  mostUsed: Array<{
    integration: string;
    usage: number;
    lastUsed: string;
  }>;
  errors: Array<{
    integration: string;
    error: string;
    timestamp: string;
    count: number;
  }>;
  performance: Array<{
    integration: string;
    averageResponseTime: number;
    successRate: number;
    uptime: number;
  }>;
}

class IntegrationService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Calendar Integration
   */
  async connectCalendar(provider: 'google' | 'outlook' | 'apple' | 'yahoo'): Promise<CalendarIntegration> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/calendar/${provider}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Calendar Connected',
          `Your ${provider} calendar has been connected successfully.`,
          'info'
        );
      }

      return data.integration;
    } catch (error) {
      console.error('Error connecting calendar:', error);
      throw error;
    }
  }

  async getCalendarIntegration(provider: string): Promise<CalendarIntegration | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/calendar/${provider}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.integration;
    } catch (error) {
      console.error('Error getting calendar integration:', error);
      return null;
    }
  }

  async syncCalendarEvents(provider: string): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/calendar/${provider}/sync`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      await notificationService.showSystemNotification(
        'Calendar Synced',
        'Your calendar events have been synchronized.',
        'info'
      );
    } catch (error) {
      console.error('Error syncing calendar events:', error);
      throw error;
    }
  }

  /**
   * Maps Integration
   */
  async getMapsIntegration(): Promise<MapsIntegration | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/maps`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.integration;
    } catch (error) {
      console.error('Error getting maps integration:', error);
      return null;
    }
  }

  async updateMapsConfiguration(config: Partial<MapsIntegration>): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/maps`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(config)
      });

      await notificationService.showSystemNotification(
        'Maps Configuration Updated',
        'Your maps integration settings have been updated.',
        'info'
      );
    } catch (error) {
      console.error('Error updating maps configuration:', error);
      throw error;
    }
  }

  async geocodeAddress(address: string): Promise<{
    lat: number;
    lng: number;
    formattedAddress: string;
    components: {
      street: string;
      city: string;
      province: string;
      country: string;
      postalCode: string;
    };
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/maps/geocode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ address })
      });

      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error geocoding address:', error);
      throw error;
    }
  }

  async getDirections(origin: string, destination: string, options?: {
    mode: 'driving' | 'walking' | 'transit' | 'bicycling';
    avoid: string[];
    waypoints: string[];
  }): Promise<{
    distance: number;
    duration: number;
    route: Array<{
      lat: number;
      lng: number;
    }>;
    steps: Array<{
      instruction: string;
      distance: number;
      duration: number;
    }>;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/maps/directions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ origin, destination, options })
      });

      const data = await response.json();
      return data.directions;
    } catch (error) {
      console.error('Error getting directions:', error);
      throw error;
    }
  }

  /**
   * Weather Integration
   */
  async getWeatherIntegration(): Promise<WeatherIntegration | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/weather`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.integration;
    } catch (error) {
      console.error('Error getting weather integration:', error);
      return null;
    }
  }

  async updateWeatherLocation(location: { lat: number; lng: number; city: string; country: string }): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/weather/location`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(location)
      });

      await notificationService.showSystemNotification(
        'Weather Location Updated',
        'Weather data will now be fetched for the new location.',
        'info'
      );
    } catch (error) {
      console.error('Error updating weather location:', error);
      throw error;
    }
  }

  async getWeatherForecast(days: number = 7): Promise<WeatherIntegration['data']> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/weather/forecast?days=${days}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.weather;
    } catch (error) {
      console.error('Error getting weather forecast:', error);
      throw error;
    }
  }

  /**
   * Social Login Integration
   */
  async getSocialLoginIntegrations(): Promise<SocialLoginIntegration[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/social-login`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.integrations || [];
    } catch (error) {
      console.error('Error getting social login integrations:', error);
      return [];
    }
  }

  async updateSocialLoginIntegration(
    provider: string,
    config: Partial<SocialLoginIntegration>
  ): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/social-login/${provider}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(config)
      });

      await notificationService.showSystemNotification(
        'Social Login Updated',
        `${provider} social login configuration has been updated.`,
        'info'
      );
    } catch (error) {
      console.error('Error updating social login integration:', error);
      throw error;
    }
  }

  /**
   * Third-Party Apps
   */
  async getThirdPartyApps(): Promise<ThirdPartyApp[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/third-party`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.apps || [];
    } catch (error) {
      console.error('Error getting third-party apps:', error);
      return [];
    }
  }

  async connectThirdPartyApp(appId: string, permissions: string[]): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/third-party/${appId}/connect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ permissions })
      });

      await notificationService.showSystemNotification(
        'App Connected',
        'Third-party app has been connected successfully.',
        'info'
      );
    } catch (error) {
      console.error('Error connecting third-party app:', error);
      throw error;
    }
  }

  async disconnectThirdPartyApp(appId: string): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/third-party/${appId}/disconnect`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      await notificationService.showSystemNotification(
        'App Disconnected',
        'Third-party app has been disconnected.',
        'info'
      );
    } catch (error) {
      console.error('Error disconnecting third-party app:', error);
      throw error;
    }
  }

  /**
   * API Keys Management
   */
  async getAPIKeys(): Promise<APIKey[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/api-keys`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.keys || [];
    } catch (error) {
      console.error('Error getting API keys:', error);
      return [];
    }
  }

  async createAPIKey(name: string, permissions: string[], expiresAt?: string): Promise<APIKey> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/api-keys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ name, permissions, expiresAt })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'API Key Created',
          'New API key has been generated successfully.',
          'info'
        );
      }

      return data.key;
    } catch (error) {
      console.error('Error creating API key:', error);
      throw error;
    }
  }

  async revokeAPIKey(keyId: string): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/integrations/api-keys/${keyId}/revoke`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      await notificationService.showSystemNotification(
        'API Key Revoked',
        'API key has been revoked successfully.',
        'info'
      );
    } catch (error) {
      console.error('Error revoking API key:', error);
      throw error;
    }
  }

  /**
   * Webhooks Management
   */
  async getWebhooks(): Promise<Webhook[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/webhooks`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.webhooks || [];
    } catch (error) {
      console.error('Error getting webhooks:', error);
      return [];
    }
  }

  async createWebhook(url: string, events: string[]): Promise<Webhook> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/webhooks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ url, events })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Webhook Created',
          'New webhook has been created successfully.',
          'info'
        );
      }

      return data.webhook;
    } catch (error) {
      console.error('Error creating webhook:', error);
      throw error;
    }
  }

  async testWebhook(webhookId: string): Promise<{
    success: boolean;
    responseTime: number;
    statusCode: number;
    error?: string;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/webhooks/${webhookId}/test`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error testing webhook:', error);
      throw error;
    }
  }

  /**
   * Integration Analytics
   */
  async getIntegrationAnalytics(): Promise<IntegrationAnalytics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/analytics`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting integration analytics:', error);
      return {
        totalIntegrations: 0,
        activeIntegrations: 0,
        mostUsed: [],
        errors: [],
        performance: []
      };
    }
  }

  /**
   * Integration Health Check
   */
  async checkIntegrationHealth(integrationId: string): Promise<{
    status: 'healthy' | 'degraded' | 'down';
    responseTime: number;
    lastCheck: string;
    error?: string;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/integrations/${integrationId}/health`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.health;
    } catch (error) {
      console.error('Error checking integration health:', error);
      return {
        status: 'down',
        responseTime: 0,
        lastCheck: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

export const integrationService = new IntegrationService();
