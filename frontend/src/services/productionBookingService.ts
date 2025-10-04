/**
 * Production Booking Service
 * Replaces mock booking data with real API calls
 */

import { apiClient } from './productionApiClient';

export interface Booking {
  id: string;
  renter_id: string;
  listing_id: string;
  start_date: string;
  end_date: string;
  total_days: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'approved' | 'declined' | 'cancelled' | 'completed';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  special_requests?: string;
  created_at: string;
  updated_at: string;
  listing?: any;
  renter?: any;
  payments?: any[];
}

export interface CreateBookingData {
  listing_id: string;
  start_date: string;
  end_date: string;
  special_requests?: string;
}

class ProductionBookingService {
  private bookings: Booking[] = [];
  private listeners: ((bookings: Booking[]) => void)[] = [];

  constructor() {
    this.loadBookingsFromStorage();
  }

  private loadBookingsFromStorage() {
    const storedBookings = localStorage.getItem('rideshare_bookings');
    if (storedBookings) {
      try {
        this.bookings = JSON.parse(storedBookings);
      } catch (error) {
        console.error('Failed to parse bookings from storage:', error);
        this.bookings = [];
      }
    }
  }

  private saveBookingsToStorage() {
    localStorage.setItem('rideshare_bookings', JSON.stringify(this.bookings));
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.bookings));
  }

  async createBooking(bookingData: CreateBookingData): Promise<{ success: boolean; error?: string; booking?: Booking }> {
    try {
      const response = await apiClient.createBooking(bookingData);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      if (response.data) {
        const newBooking = response.data;
        this.bookings.push(newBooking);
        this.saveBookingsToStorage();
        this.notifyListeners();
        return { success: true, booking: newBooking };
      }

      return { success: false, error: 'Booking creation failed' };
    } catch (error) {
      console.error('Create booking error:', error);
      return { success: false, error: 'Booking creation failed' };
    }
  }

  async getRenterBookings(): Promise<Booking[]> {
    try {
      const response = await apiClient.getMyBookings();
      
      if (response.data) {
        this.bookings = response.data;
        this.saveBookingsToStorage();
        this.notifyListeners();
        return response.data;
      }

      return [];
    } catch (error) {
      console.error('Get renter bookings error:', error);
      return [];
    }
  }

  async getHostBookings(): Promise<Booking[]> {
    try {
      const response = await apiClient.getHostBookings();
      
      if (response.data) {
        return response.data;
      }

      return [];
    } catch (error) {
      console.error('Get host bookings error:', error);
      return [];
    }
  }

  async updateBookingStatus(bookingId: string, status: string, reason?: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await apiClient.updateBookingStatus(bookingId, status, reason);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      // Update local bookings
      const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
      if (bookingIndex !== -1) {
        this.bookings[bookingIndex].status = status as any;
        this.saveBookingsToStorage();
        this.notifyListeners();
      }

      return { success: true };
    } catch (error) {
      console.error('Update booking status error:', error);
      return { success: false, error: 'Status update failed' };
    }
  }

  async cancelBooking(bookingId: string, reason?: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await apiClient.cancelBooking(bookingId, reason);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      // Update local bookings
      const bookingIndex = this.bookings.findIndex(b => b.id === bookingId);
      if (bookingIndex !== -1) {
        this.bookings[bookingIndex].status = 'cancelled';
        this.saveBookingsToStorage();
        this.notifyListeners();
      }

      return { success: true };
    } catch (error) {
      console.error('Cancel booking error:', error);
      return { success: false, error: 'Booking cancellation failed' };
    }
  }

  async getBookingById(bookingId: string): Promise<Booking | null> {
    try {
      const response = await apiClient.request(`/bookings/${bookingId}`);
      
      if (response.data) {
        return response.data as Booking;
      }

      return null;
    } catch (error) {
      console.error('Get booking by ID error:', error);
      return null;
    }
  }

  async getBookingsByStatus(status: string): Promise<Booking[]> {
    return this.bookings.filter(booking => booking.status === status);
  }

  async getBookingsByDateRange(startDate: string, endDate: string): Promise<Booking[]> {
    return this.bookings.filter(booking => {
      const bookingStart = new Date(booking.start_date);
      const bookingEnd = new Date(booking.end_date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      return bookingStart >= start && bookingEnd <= end;
    });
  }

  async getBookingsByListing(listingId: string): Promise<Booking[]> {
    return this.bookings.filter(booking => booking.listing_id === listingId);
  }

  async getBookingsByRenter(renterId: string): Promise<Booking[]> {
    return this.bookings.filter(booking => booking.renter_id === renterId);
  }

  async getBookingsByHost(): Promise<Booking[]> {
    try {
      const response = await apiClient.getHostBookings();
      
      if (response.data) {
        return response.data;
      }

      return [];
    } catch (error) {
      console.error('Get host bookings error:', error);
      return [];
    }
  }

  async getBookingStats(): Promise<{
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
  }> {
    const stats = {
      total: this.bookings.length,
      pending: this.bookings.filter(b => b.status === 'pending').length,
      confirmed: this.bookings.filter(b => b.status === 'confirmed').length,
      completed: this.bookings.filter(b => b.status === 'completed').length,
      cancelled: this.bookings.filter(b => b.status === 'cancelled').length,
    };

    return stats;
  }

  // Event listeners for real-time updates
  addListener(listener: (bookings: Booking[]) => void): void {
    this.listeners.push(listener);
  }

  removeListener(listener: (bookings: Booking[]) => void): void {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  // Get all bookings (for admin)
  async getAllBookings(): Promise<Booking[]> {
    try {
      const response = await apiClient.request('/bookings');
      
      if (response.data) {
        return response.data as Booking[];
      }

      return [];
    } catch (error) {
      console.error('Get all bookings error:', error);
      return [];
    }
  }

  // Search bookings
  async searchBookings(query: string): Promise<Booking[]> {
    return this.bookings.filter(booking => 
      booking.id.toLowerCase().includes(query.toLowerCase()) ||
      booking.listing?.title?.toLowerCase().includes(query.toLowerCase()) ||
      booking.renter?.first_name?.toLowerCase().includes(query.toLowerCase()) ||
      booking.renter?.last_name?.toLowerCase().includes(query.toLowerCase())
    );
  }
}

// Export singleton instance
export const bookingService = new ProductionBookingService();
export default bookingService;
