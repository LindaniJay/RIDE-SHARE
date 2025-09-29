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
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        approvalStatus: (user as any).approvalStatus,
        createdAt: user.createdAt
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
        pricePerDay: listing.pricePerDay,
        location: listing.location,
        status: listing.status,
        hostId: listing.hostId,
        createdAt: listing.createdAt
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
        startDate: booking.startDate,
        endDate: booking.endDate,
        totalPrice: booking.totalPrice,
        renterId: booking.renterId,
        vehicleId: booking.vehicleId,
        createdAt: booking.createdAt
      }
    });
  }

  // Notify user of profile approval/rejection
  async notifyUserProfileUpdate(userId: number, status: 'approved' | 'rejected', reason?: string) {
    this.io.emit(`user:${userId}:profile-update`, {
      type: 'profile_status_update',
      data: {
        status,
        reason,
        timestamp: new Date().toISOString()
      }
    });
  }

  // Notify host of vehicle approval/rejection
  async notifyVehicleUpdate(hostId: number, vehicleId: number, status: 'approved' | 'declined', reason?: string) {
    this.io.emit(`user:${hostId}:vehicle-update`, {
      type: 'vehicle_status_update',
      data: {
        vehicleId,
        status,
        reason,
        timestamp: new Date().toISOString()
      }
    });
  }

  // Get pending approvals count for admin dashboard
  async getPendingApprovalsCount() {
    const [pendingUsers, pendingVehicles, pendingBookings] = await Promise.all([
      User.count({ where: { approvalStatus: 'pending' } }),
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
