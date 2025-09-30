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
    const newBooking: Booking = {
      id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      paymentStatus: 'pending'
    };

    const existingBookings = this.getStoredBookings();
    const updatedBookings = [...existingBookings, newBooking];
    this.saveBookings(updatedBookings);

    window.dispatchEvent(new CustomEvent('bookingCreated', { 
      detail: newBooking 
    }));

    return newBooking;
  }

  async getRenterBookings(renterId: string): Promise<Booking[]> {
    const allBookings = this.getStoredBookings();
    return allBookings.filter(booking => booking.renterId === renterId);
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