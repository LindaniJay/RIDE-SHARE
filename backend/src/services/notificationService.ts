import { Server } from 'socket.io';
import { User, Listing, Booking } from '../models';

export class NotificationService {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  // Notify admin of new user registration
  async notifyNewUserRegistration(user: User) {
    this.io.emit('admin:new-user', {
      type: 'user_registration',
      data: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        approval_status: (user as any).approval_status,
        created_at: user.created_at
      }
    });
  }

  // Notify admin of new vehicle listing
  async notifyNewVehicleListing(listing: Listing) {
    this.io.emit('admin:new-vehicle', {
      type: 'vehicle_listing',
      data: {
        id: listing.id,
        title: listing.title,
        make: listing.make,
        model: listing.model,
        year: listing.year,
        price_per_day: listing.price_per_day,
        location: listing.location,
        status: listing.status,
        host_id: listing.host_id,
        created_at: listing.created_at
      }
    });
  }

  // Notify admin of new booking
  async notifyNewBooking(booking: Booking) {
    this.io.emit('admin:new-booking', {
      type: 'booking_created',
      data: {
        id: booking.id,
        status: booking.status,
        start_date: booking.startDate,
        end_date: booking.endDate,
        total_amount: booking.total_amount,
        renter_id: booking.renterId,
        listing_id: booking.listing_id,
        created_at: booking.created_at
      }
    });
  }

  // Notify user of profile approval/rejection
  async notifyUserProfileUpdate(userId: number, status: 'approved' | 'rejected', reason?: string) {
    const notification = {
      id: `profile_${Date.now()}`,
      type: status === 'approved' ? 'success' : 'error',
      title: status === 'approved' ? 'Profile Approved' : 'Profile Rejected',
      message: status === 'approved' 
        ? 'Your profile has been approved and you can now use all features.'
        : `Your profile was rejected. Reason: ${reason || 'Please contact support.'}`,
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: status === 'approved' ? '/dashboard' : '/profile',
      actionText: status === 'approved' ? 'View Dashboard' : 'Update Profile'
    };

    this.io.emit(`user:${userId}:profile-update`, notification);
    this.io.emit(`user:${userId}:notification`, notification);
  }

  // Notify host of vehicle approval/rejection
  async notifyVehicleUpdate(host_id: number, listing_id: number, status: 'approved' | 'declined', reason?: string) {
    const notification = {
      id: `vehicle_${listing_id}_${Date.now()}`,
      type: status === 'approved' ? 'success' : 'error',
      title: status === 'approved' ? 'Vehicle Approved' : 'Vehicle Rejected',
      message: status === 'approved' 
        ? 'Your vehicle listing has been approved and is now visible to renters.'
        : `Your vehicle listing was rejected. Reason: ${reason || 'Please contact support.'}`,
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: status === 'approved' ? '/dashboard?tab=vehicles' : '/dashboard?tab=vehicles',
      actionText: status === 'approved' ? 'View Vehicles' : 'Update Vehicle'
    };

    this.io.emit(`user:${host_id}:vehicle-update`, notification);
    this.io.emit(`user:${host_id}:notification`, notification);
  }

  // Get pending approvals count for admin dashboard
  async getPendingApprovalsCount() {
    const [pendingUsers, pendingVehicles, pendingBookings] = await Promise.all([
      User.count({ where: { approval_status: 'pending' } }),
      Listing.count({ where: { status: 'pending' } }),
      Booking.count({ where: { status: 'pending' } })
    ]);

    return {
      pendingUsers,
      pendingVehicles,
      pendingBookings,
      total: pendingUsers + pendingVehicles + pendingBookings
    };
  }

  // Notify user of booking status update
  async notifyBookingUpdate(userId: number, bookingId: number, status: string, message: string) {
    const notification = {
      id: `booking_${bookingId}_${Date.now()}`,
      type: status === 'confirmed' ? 'success' : status === 'cancelled' ? 'error' : 'info',
      title: `Booking ${status.charAt(0).toUpperCase() + status.slice(1)}`,
      message,
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: '/dashboard?tab=bookings',
      actionText: 'View Booking'
    };

    this.io.emit(`user:${userId}:booking-update`, notification);
    this.io.emit(`user:${userId}:notification`, notification);
  }

  // Notify user of payment update
  async notifyPaymentUpdate(userId: number, bookingId: number, status: string, amount: number) {
    const notification = {
      id: `payment_${bookingId}_${Date.now()}`,
      type: status === 'completed' ? 'success' : status === 'failed' ? 'error' : 'info',
      title: `Payment ${status.charAt(0).toUpperCase() + status.slice(1)}`,
      message: status === 'completed' 
        ? `Payment of R${amount.toFixed(2)} has been processed successfully.`
        : `Payment of R${amount.toFixed(2)} failed. Please try again.`,
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: '/dashboard?tab=payments',
      actionText: 'View Payments'
    };

    this.io.emit(`user:${userId}:payment-update`, notification);
    this.io.emit(`user:${userId}:notification`, notification);
  }

  // Notify host of new booking request
  async notifyNewBookingRequest(hostId: number, bookingId: number, renterName: string, vehicleName: string) {
    const notification = {
      id: `booking_request_${bookingId}_${Date.now()}`,
      type: 'info',
      title: 'New Booking Request',
      message: `${renterName} has requested to book your ${vehicleName}.`,
      timestamp: new Date().toISOString(),
      read: false,
      actionUrl: '/dashboard?tab=bookings',
      actionText: 'Review Request'
    };

    this.io.emit(`user:${hostId}:booking-request`, notification);
    this.io.emit(`user:${hostId}:notification`, notification);
  }

  // Broadcast admin dashboard updates
  async broadcastAdminUpdates() {
    const pendingCounts = await this.getPendingApprovalsCount();
    
    this.io.emit('admin:dashboard-update', {
      type: 'dashboard_stats',
      data: pendingCounts,
      timestamp: new Date().toISOString()
    });
  }
}
