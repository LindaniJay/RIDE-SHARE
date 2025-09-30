import { notificationService } from './notificationService';

export interface SafetyChecklist {
  id: string;
  type: 'pre-rental' | 'post-rental' | 'inspection';
  items: Array<{
    id: string;
    name: string;
    description: string;
    required: boolean;
    completed: boolean;
    notes?: string;
    photos?: string[];
  }>;
  completed: boolean;
  completedAt?: string;
  completedBy: string;
}

export interface IncidentReport {
  id: string;
  bookingId: string;
  type: 'accident' | 'damage' | 'theft' | 'breakdown' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  photos: string[];
  witnesses: Array<{
    name: string;
    contact: string;
  }>;
  reportedAt: string;
  status: 'pending' | 'investigating' | 'resolved';
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
  isPrimary: boolean;
}

export interface TrackingData {
  bookingId: string;
  vehicleId: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    timestamp: string;
  };
  speed: number;
  heading: number;
  status: 'parked' | 'moving' | 'idle';
  batteryLevel?: number;
  fuelLevel?: number;
}

export interface SafetySettings {
  emergencyContacts: EmergencyContact[];
  autoEmergencySMS: boolean;
  speedLimitAlerts: boolean;
  geofenceAlerts: boolean;
  panicButtonEnabled: boolean;
  shareLocationWithContacts: boolean;
}

class SafetyService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';
  private trackingInterval: NodeJS.Timeout | null = null;

  /**
   * Get safety checklist
   */
  async getSafetyChecklist(type: 'pre-rental' | 'post-rental' | 'inspection'): Promise<SafetyChecklist> {
    const checklists = {
      'pre-rental': {
        id: 'pre-rental',
        type: 'pre-rental' as const,
        items: [
          {
            id: 'exterior-damage',
            name: 'Exterior Damage Check',
            description: 'Inspect vehicle exterior for any damage',
            required: true,
            completed: false
          },
          {
            id: 'interior-cleanliness',
            name: 'Interior Cleanliness',
            description: 'Check interior cleanliness and condition',
            required: true,
            completed: false
          },
          {
            id: 'tire-condition',
            name: 'Tire Condition',
            description: 'Check tire condition and pressure',
            required: true,
            completed: false
          },
          {
            id: 'lights-functionality',
            name: 'Lights Functionality',
            description: 'Test all lights (headlights, brake lights, indicators)',
            required: true,
            completed: false
          },
          {
            id: 'fuel-level',
            name: 'Fuel Level',
            description: 'Check fuel level and note starting amount',
            required: true,
            completed: false
          },
          {
            id: 'documents-present',
            name: 'Required Documents',
            description: 'Verify all required documents are present',
            required: true,
            completed: false
          }
        ],
        completed: false,
        completedBy: ''
      },
      'post-rental': {
        id: 'post-rental',
        type: 'post-rental' as const,
        items: [
          {
            id: 'return-condition',
            name: 'Return Condition',
            description: 'Document vehicle condition upon return',
            required: true,
            completed: false
          },
          {
            id: 'fuel-level-return',
            name: 'Fuel Level Return',
            description: 'Check and document fuel level',
            required: true,
            completed: false
          },
          {
            id: 'personal-items',
            name: 'Personal Items',
            description: 'Remove all personal items from vehicle',
            required: true,
            completed: false
          },
          {
            id: 'key-return',
            name: 'Key Return',
            description: 'Return vehicle keys to host',
            required: true,
            completed: false
          }
        ],
        completed: false,
        completedBy: ''
      },
      'inspection': {
        id: 'inspection',
        type: 'inspection' as const,
        items: [
          {
            id: 'comprehensive-check',
            name: 'Comprehensive Vehicle Check',
            description: 'Complete vehicle inspection',
            required: true,
            completed: false
          },
          {
            id: 'safety-equipment',
            name: 'Safety Equipment',
            description: 'Check safety equipment (first aid, emergency kit)',
            required: true,
            completed: false
          },
          {
            id: 'maintenance-items',
            name: 'Maintenance Items',
            description: 'Check for any maintenance needs',
            required: false,
            completed: false
          }
        ],
        completed: false,
        completedBy: ''
      }
    };

    return checklists[type];
  }

  /**
   * Complete safety checklist
   */
  async completeSafetyChecklist(
    checklistId: string,
    completedItems: Array<{ id: string; completed: boolean; notes?: string; photos?: string[] }>
  ): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/checklist/${checklistId}/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ completedItems })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Safety Checklist Completed',
          'Your safety checklist has been completed successfully.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error completing safety checklist:', error);
      throw error;
    }
  }

  /**
   * Report incident
   */
  async reportIncident(incident: Omit<IncidentReport, 'id' | 'reportedAt' | 'status'>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/incidents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(incident)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Incident Reported',
          'Your incident report has been submitted. Emergency services have been notified if required.',
          'warning'
        );
      }

      return data;
    } catch (error) {
      console.error('Error reporting incident:', error);
      throw error;
    }
  }

  /**
   * Get emergency contacts
   */
  async getEmergencyContacts(): Promise<EmergencyContact[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/emergency-contacts`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.contacts || [];
    } catch (error) {
      console.error('Error getting emergency contacts:', error);
      return [];
    }
  }

  /**
   * Add emergency contact
   */
  async addEmergencyContact(contact: Omit<EmergencyContact, 'id'>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/emergency-contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(contact)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding emergency contact:', error);
      throw error;
    }
  }

  /**
   * Update emergency contact
   */
  async updateEmergencyContact(contactId: string, contact: Partial<EmergencyContact>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/emergency-contacts/${contactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(contact)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating emergency contact:', error);
      throw error;
    }
  }

  /**
   * Delete emergency contact
   */
  async deleteEmergencyContact(contactId: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/emergency-contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting emergency contact:', error);
      throw error;
    }
  }

  /**
   * Start vehicle tracking
   */
  async startTracking(bookingId: string): Promise<void> {
    try {
      // Request location permission
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by this browser');
      }

      // Start tracking interval
      this.trackingInterval = setInterval(async () => {
        await this.updateLocation(bookingId);
      }, 30000); // Update every 30 seconds

      await notificationService.showSystemNotification(
        'Tracking Started',
        'Vehicle tracking has been activated for your safety.',
        'info'
      );
    } catch (error) {
      console.error('Error starting tracking:', error);
      throw error;
    }
  }

  /**
   * Stop vehicle tracking
   */
  async stopTracking(): Promise<void> {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval);
      this.trackingInterval = null;
    }

    await notificationService.showSystemNotification(
      'Tracking Stopped',
      'Vehicle tracking has been deactivated.',
      'info'
    );
  }

  /**
   * Update location
   */
  private async updateLocation(bookingId: string): Promise<void> {
    try {
      const position = await this.getCurrentPosition();
      
      const trackingData: TrackingData = {
        bookingId,
        vehicleId: '', // Will be set by backend
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          address: '', // Will be geocoded by backend
          timestamp: new Date().toISOString()
        },
        speed: position.coords.speed || 0,
        heading: position.coords.heading || 0,
        status: position.coords.speed > 5 ? 'moving' : 'parked'
      };

      this.currentTrackingData = trackingData;

      // Send to backend
      await fetch(`${this.API_BASE_URL}/safety/tracking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(trackingData)
      });
    } catch (error) {
      console.error('Error updating location:', error);
    }
  }

  /**
   * Get current position
   */
  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    });
  }

  /**
   * Get tracking data
   */
  async getTrackingData(bookingId: string): Promise<TrackingData[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/tracking/${bookingId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.trackingData || [];
    } catch (error) {
      console.error('Error getting tracking data:', error);
      return [];
    }
  }

  /**
   * Trigger panic button
   */
  async triggerPanicButton(bookingId: string, location: { lat: number; lng: number }): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/panic`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          bookingId,
          location,
          timestamp: new Date().toISOString()
        })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Emergency Alert Sent',
          'Emergency services and your contacts have been notified.',
          'error'
        );
      }

      return data;
    } catch (error) {
      console.error('Error triggering panic button:', error);
      throw error;
    }
  }

  /**
   * Get safety settings
   */
  async getSafetySettings(): Promise<SafetySettings> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/settings`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.settings;
    } catch (error) {
      console.error('Error getting safety settings:', error);
      return {
        emergencyContacts: [],
        autoEmergencySMS: false,
        speedLimitAlerts: true,
        geofenceAlerts: true,
        panicButtonEnabled: true,
        shareLocationWithContacts: false
      };
    }
  }

  /**
   * Update safety settings
   */
  async updateSafetySettings(settings: Partial<SafetySettings>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(settings)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating safety settings:', error);
      throw error;
    }
  }

  /**
   * Get incident reports
   */
  async getIncidentReports(): Promise<IncidentReport[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/incidents`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.incidents || [];
    } catch (error) {
      console.error('Error getting incident reports:', error);
      return [];
    }
  }

  /**
   * Get safety analytics
   */
  async getSafetyAnalytics(): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/safety/analytics`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting safety analytics:', error);
      return {};
    }
  }

  /**
   * Check if location is within geofence
   */
  isWithinGeofence(
    location: { lat: number; lng: number },
    geofence: { center: { lat: number; lng: number }; radius: number }
  ): boolean {
    const distance = this.calculateDistance(
      location,
      geofence.center
    );
    
    return distance <= geofence.radius;
  }

  /**
   * Calculate distance between two points
   */
  private calculateDistance(
    point1: { lat: number; lng: number },
    point2: { lat: number; lng: number }
  ): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = this.deg2rad(point2.lat - point1.lat);
    const dLng = this.deg2rad(point2.lng - point1.lng);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(point1.lat)) * Math.cos(this.deg2rad(point2.lat)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}

export const safetyService = new SafetyService();
