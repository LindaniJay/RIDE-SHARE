export interface Booking {
  id: string;
  vehicleId: string;
  vehicleTitle: string;
  vehicleImage: string;
  vehicleMake: string;
  vehicleModel: string;
  hostId: string;
  hostName: string;
  renterId: string;
  renterName: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  createdAt: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  specialRequests?: string;
  rating?: number;
  review?: string;
}

export interface CreateBookingData {
  vehicleId: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  specialRequests?: string;
  renterId: string;
  renterName: string;
  hostId: string;
  hostName: string;
  vehicleTitle: string;
  vehicleImage: string;
  vehicleMake: string;
  vehicleModel: string;
}

class BookingService {
  private getApiBaseUrl(): string {
    // Use centralized API URL helper to ensure proxy is used in development
    return import.meta.env.DEV 
      ? '/api'
      : (import.meta.env.VITE_API_URL || '/api');
  }
  
  private get API_BASE_URL(): string {
    return this.getApiBaseUrl();
  }
  private storageKey = 'rideshare_bookings';

  private getStoredBookings(): Booking[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading bookings from localStorage:', error);
      return [];
    }
  }

  private saveBookings(bookings: Booking[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(bookings));
    } catch (error) {
      console.error('Error saving bookings to localStorage:', error);
    }
  }

  async createBooking(bookingData: CreateBookingData): Promise<Booking> {
    try {
      // Use unified booking API
      const { authenticatedPost } = await import('../utils/apiClient');
      const response = await authenticatedPost(`${this.API_BASE_URL}/bookings/unified`, {
        vehicleId: bookingData.vehicleId,
        startDate: bookingData.startDate,
        endDate: bookingData.endDate,
        totalPrice: bookingData.totalPrice,
        specialRequests: bookingData.specialRequests
      });

      if (response.ok) {
        const result = await response.json();
        const apiBooking = result.data.booking;
        
        // Convert API booking to our format
        const newBooking: Booking = {
          id: apiBooking.id,
          vehicleId: apiBooking.vehicleId,
          vehicleTitle: apiBooking.listing?.make + ' ' + apiBooking.listing?.model || bookingData.vehicleTitle,
          vehicleImage: apiBooking.listing?.images?.[0] || bookingData.vehicleImage,
          vehicleMake: apiBooking.listing?.make || bookingData.vehicleMake,
          vehicleModel: apiBooking.listing?.model || bookingData.vehicleModel,
          hostId: apiBooking.hostId,
          hostName: apiBooking.listing?.host?.firstName + ' ' + apiBooking.listing?.host?.lastName || bookingData.hostName,
          renterId: apiBooking.renterId,
          renterName: apiBooking.renter?.firstName + ' ' + apiBooking.renter?.lastName || bookingData.renterName,
          startDate: apiBooking.startDate,
          endDate: apiBooking.endDate,
          totalDays: Math.ceil((new Date(apiBooking.endDate).getTime() - new Date(apiBooking.startDate).getTime()) / (1000 * 60 * 60 * 24)),
          totalPrice: apiBooking.totalPrice,
          status: apiBooking.status,
          createdAt: apiBooking.createdAt,
          paymentStatus: apiBooking.paymentStatus,
          specialRequests: apiBooking.specialRequests
        };

        // Store in localStorage as backup
        const existingBookings = this.getStoredBookings();
        const updatedBookings = [...existingBookings, newBooking];
        this.saveBookings(updatedBookings);

        window.dispatchEvent(new CustomEvent('bookingCreated', { 
          detail: newBooking 
        }));

        return newBooking;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create booking via API');
      }
    } catch (error) {
      console.error('Booking creation failed:', error);
      
      // Re-throw error instead of falling back to localStorage
      // This ensures API issues are properly surfaced
      throw new Error(error instanceof Error ? error.message : 'Failed to create booking');
    }
  }

  async getRenterBookings(renterId: string): Promise<Booking[]> {
    try {
      const { authenticatedGet } = await import('../utils/apiClient');
      const response = await authenticatedGet(`${this.API_BASE_URL}/bookings/unified`);

      if (response.ok) {
        const result = await response.json();
        return result.data.map((booking: any) => ({
          id: booking.id,
          vehicleId: booking.vehicleId,
          vehicleTitle: booking.listing?.make + ' ' + booking.listing?.model || '',
          vehicleImage: booking.listing?.images?.[0] || '',
          vehicleMake: booking.listing?.make || '',
          vehicleModel: booking.listing?.model || '',
          hostId: booking.hostId,
          hostName: booking.listing?.host?.firstName + ' ' + booking.listing?.host?.lastName || '',
          renterId: booking.renterId,
          renterName: booking.renter?.firstName + ' ' + booking.renter?.lastName || '',
          startDate: booking.startDate,
          endDate: booking.endDate,
          totalDays: Math.ceil((new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) / (1000 * 60 * 60 * 24)),
          totalPrice: booking.totalPrice,
          status: booking.status,
          createdAt: booking.createdAt,
          paymentStatus: booking.paymentStatus,
          specialRequests: booking.specialRequests
        }));
      } else {
        throw new Error('Failed to fetch bookings from API');
      }
    } catch (error) {
      console.error('API fetch failed, falling back to localStorage:', error);
      const allBookings = this.getStoredBookings();
      return allBookings.filter(booking => booking.renterId === renterId);
    }
  }

  async updatePaymentStatus(bookingId: string, paymentStatus: Booking['paymentStatus']): Promise<Booking | null> {
    const allBookings = this.getStoredBookings();
    const bookingIndex = allBookings.findIndex(booking => booking.id === bookingId);
    
    if (bookingIndex === -1) {
      throw new Error('Booking not found');
    }

    allBookings[bookingIndex].paymentStatus = paymentStatus;
    
    if (paymentStatus === 'paid') {
      allBookings[bookingIndex].status = 'confirmed';
    }
    
    this.saveBookings(allBookings);

    window.dispatchEvent(new CustomEvent('bookingUpdated', { 
      detail: allBookings[bookingIndex] 
    }));

    return allBookings[bookingIndex];
  }
}

export const bookingService = new BookingService();
export default bookingService;
