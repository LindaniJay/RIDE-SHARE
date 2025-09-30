import { Vehicle } from '../types';
import { notificationService } from './notificationService';

export interface BookingRequest {
  vehicleId: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  returnLocation: string;
  specialRequests?: string;
  totalPrice: number;
  totalDays: number;
}

export interface RecurringBookingRequest extends BookingRequest {
  recurrence: {
    type: 'weekly' | 'monthly';
    frequency: number; // Every X weeks/months
    endDate: string; // When to stop recurring
    maxOccurrences?: number;
  };
}

export interface GroupBookingRequest {
  vehicleIds: string[];
  startDate: string;
  endDate: string;
  pickupLocation: string;
  returnLocation: string;
  groupSize: number;
  groupName: string;
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
  specialRequests?: string;
  totalPrice: number;
}

export interface WaitlistRequest {
  vehicleId: string;
  preferredStartDate: string;
  preferredEndDate: string;
  maxPrice?: number;
  flexibleDates: boolean;
  notificationPreferences: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

export interface BookingModification {
  bookingId: string;
  changes: {
    startDate?: string;
    endDate?: string;
    pickupLocation?: string;
    returnLocation?: string;
    specialRequests?: string;
  };
  reason: string;
}

export interface InstantBookingSettings {
  enabled: boolean;
  autoApprove: boolean;
  maxAdvanceDays: number;
  minAdvanceHours: number;
  requiredVerification: string[];
}

class BookingService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Create a regular booking
   */
  async createBooking(request: BookingRequest): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showBookingNotification('created', {
          id: data.bookingId,
          vehicleName: data.vehicleName
        });
      }

      return data;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  }

  /**
   * Create a recurring booking
   */
  async createRecurringBooking(request: RecurringBookingRequest): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/recurring`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Recurring Booking Created',
          `Your recurring booking has been set up for ${data.occurrences} occurrences.`,
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error creating recurring booking:', error);
      throw error;
    }
  }

  /**
   * Create a group booking
   */
  async createGroupBooking(request: GroupBookingRequest): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/group`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Group Booking Created',
          `Your group booking for ${request.groupSize} people has been submitted.`,
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error creating group booking:', error);
      throw error;
    }
  }

  /**
   * Join waitlist for a vehicle
   */
  async joinWaitlist(request: WaitlistRequest): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Added to Waitlist',
          'You will be notified when the vehicle becomes available.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error joining waitlist:', error);
      throw error;
    }
  }

  /**
   * Get waitlist status
   */
  async getWaitlistStatus(vehicleId: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/waitlist/${vehicleId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting waitlist status:', error);
      return null;
    }
  }

  /**
   * Create instant booking
   */
  async createInstantBooking(request: BookingRequest): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/instant`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showBookingNotification('confirmed', {
          id: data.bookingId,
          vehicleName: data.vehicleName,
          pickupDate: request.startDate
        });
      }

      return data;
    } catch (error) {
      console.error('Error creating instant booking:', error);
      throw error;
    }
  }

  /**
   * Modify existing booking
   */
  async modifyBooking(modification: BookingModification): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/${modification.bookingId}/modify`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(modification)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Booking Modified',
          'Your booking has been successfully updated.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error modifying booking:', error);
      throw error;
    }
  }

  /**
   * Cancel booking
   */
  async cancelBooking(bookingId: string, reason: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/${bookingId}/cancel`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ reason })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showBookingNotification('cancelled', {
          id: bookingId,
          vehicleName: data.vehicleName
        });
      }

      return data;
    } catch (error) {
      console.error('Error cancelling booking:', error);
      throw error;
    }
  }

  /**
   * Get booking details
   */
  async getBooking(bookingId: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/${bookingId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.booking;
    } catch (error) {
      console.error('Error getting booking:', error);
      return null;
    }
  }

  /**
   * Get user bookings
   */
  async getUserBookings(status?: string, limit: number = 20, offset: number = 0): Promise<any[]> {
    try {
      const params = new URLSearchParams();
      if (status) params.append('status', status);
      params.append('limit', limit.toString());
      params.append('offset', offset.toString());

      const response = await fetch(`${this.API_BASE_URL}/bookings?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.bookings || [];
    } catch (error) {
      console.error('Error getting user bookings:', error);
      return [];
    }
  }

  /**
   * Get booking calendar
   */
  async getBookingCalendar(vehicleId: string, month: number, year: number): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/calendar/${vehicleId}?month=${month}&year=${year}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.calendar;
    } catch (error) {
      console.error('Error getting booking calendar:', error);
      return null;
    }
  }

  /**
   * Check vehicle availability
   */
  async checkAvailability(vehicleId: string, startDate: string, endDate: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/vehicles/${vehicleId}/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ startDate, endDate })
      });

      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error('Error checking availability:', error);
      return false;
    }
  }

  /**
   * Get instant booking settings
   */
  async getInstantBookingSettings(): Promise<InstantBookingSettings> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/instant-settings`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.settings;
    } catch (error) {
      console.error('Error getting instant booking settings:', error);
      return {
        enabled: false,
        autoApprove: false,
        maxAdvanceDays: 30,
        minAdvanceHours: 2,
        requiredVerification: []
      };
    }
  }

  /**
   * Update instant booking settings
   */
  async updateInstantBookingSettings(settings: InstantBookingSettings): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/instant-settings`, {
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
      console.error('Error updating instant booking settings:', error);
      throw error;
    }
  }

  /**
   * Get booking analytics
   */
  async getBookingAnalytics(): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/analytics`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting booking analytics:', error);
      return {};
    }
  }

  /**
   * Calculate booking price
   */
  calculateBookingPrice(
    vehicle: Vehicle,
    startDate: string,
    endDate: string,
    options: {
      insurance?: boolean;
      delivery?: boolean;
      fuel?: boolean;
    } = {}
  ): {
    basePrice: number;
    addOns: { [key: string]: number };
    total: number;
    breakdown: Array<{ name: string; amount: number }>;
  } {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    const basePrice = days * vehicle.dailyRate;
    const addOns: { [key: string]: number } = {};
    const breakdown: Array<{ name: string; amount: number }> = [];

    // Base price
    breakdown.push({
      name: `${days} days × R${vehicle.dailyRate}`,
      amount: basePrice
    });

    // Add-ons
    if (options.insurance) {
      const insuranceCost = basePrice * 0.1; // 10% of base price
      addOns.insurance = insuranceCost;
      breakdown.push({
        name: 'Insurance',
        amount: insuranceCost
      });
    }

    if (options.delivery) {
      const deliveryCost = 150; // Fixed delivery cost
      addOns.delivery = deliveryCost;
      breakdown.push({
        name: 'Delivery & Pickup',
        amount: deliveryCost
      });
    }

    if (options.fuel) {
      const fuelCost = days * 50; // R50 per day for fuel
      addOns.fuel = fuelCost;
      breakdown.push({
        name: 'Fuel Package',
        amount: fuelCost
      });
    }

    const total = basePrice + Object.values(addOns).reduce((sum, cost) => sum + cost, 0);

    return {
      basePrice,
      addOns,
      total,
      breakdown
    };
  }

  /**
   * Get booking reminders
   */
  async getBookingReminders(): Promise<any[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/reminders`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.reminders || [];
    } catch (error) {
      console.error('Error getting booking reminders:', error);
      return [];
    }
  }

  /**
   * Set booking reminder
   */
  async setBookingReminder(bookingId: string, reminderTime: string): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/bookings/${bookingId}/reminder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ reminderTime })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error setting booking reminder:', error);
      throw error;
    }
  }
}

export const bookingService = new BookingService();