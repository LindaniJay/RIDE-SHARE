import express from 'express';
import { authenticateToken } from '../middlewares/auth';
import { User, Booking, Vehicle } from '../models';

const router = express.Router();

// Get user notifications
router.get('/', authenticateToken, async (req, res) => {
  try {
    const userId = req.user!.id;
    const { page = 1, limit = 20 } = req.query;
    
    // Get notifications based on user role
    let notifications: any[] = [];
    
    if (req.user!.role === 'renter') {
      // Renter notifications: booking updates, payment confirmations, etc.
      const bookings = await Booking.findAll({
        where: { renterId: userId },
        include: [{
          model: Vehicle,
          include: [{
            model: User,
            as: 'host',
            attributes: ['firstName', 'lastName']
          }]
        }],
        order: [['updatedAt', 'DESC']],
        limit: Number(limit),
        offset: (Number(page) - 1) * Number(limit)
      });

      notifications = bookings.map(booking => ({
        id: `booking-${booking.id}`,
        type: 'booking',
        title: getBookingNotificationTitle(booking.status),
        message: getBookingNotificationMessage(booking),
        read: false,
        createdAt: booking.updatedAt,
        data: {
          bookingId: booking.id,
          vehicleTitle: (booking as any).Vehicle?.title,
          hostName: `${(booking as any).Vehicle?.host?.firstName} ${(booking as any).Vehicle?.host?.lastName}`
        }
      }));
    } else if (req.user!.role === 'host') {
      // Host notifications: new booking requests, vehicle approvals, etc.
      const hostVehicles = await Vehicle.findAll({
        where: { hostId: userId },
        include: [{
          model: Booking,
          include: [{
            model: User,
            as: 'renter',
            attributes: ['firstName', 'lastName']
          }]
        }]
      });

      const hostBookings = hostVehicles.flatMap(vehicle => 
        (vehicle as any).bookings?.map((booking: any) => ({
          id: `booking-${booking.id}`,
          type: 'booking',
          title: getHostBookingNotificationTitle(booking.status),
          message: getHostBookingNotificationMessage(booking, vehicle),
          read: false,
          createdAt: booking.createdAt,
          data: {
            bookingId: booking.id,
            vehicleTitle: vehicle.title,
            renterName: `${booking.renter?.firstName} ${booking.renter?.lastName}`
          }
        })) || []
      );

      // Vehicle status notifications
      const vehicleNotifications = hostVehicles.map(vehicle => ({
        id: `vehicle-${vehicle.id}`,
        type: 'vehicle',
        title: getVehicleNotificationTitle((vehicle as any).status),
        message: getVehicleNotificationMessage(vehicle),
        read: false,
        createdAt: vehicle.updatedAt,
        data: {
          vehicleId: vehicle.id,
          vehicleTitle: (vehicle as any).title,
          status: (vehicle as any).status
        }
      }));

      notifications = [...hostBookings, ...vehicleNotifications]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, Number(limit));
    }

    res.json({
      success: true,
      data: {
        notifications,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total: notifications.length
        }
      }
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch notifications' 
    });
  }
});

// Mark notification as read
router.patch('/:notificationId/read', authenticateToken, async (req, res) => {
  try {
    const { notificationId } = req.params;
    
    // In a real implementation, you would update a notifications table
    // For now, we'll just return success
    res.json({
      success: true,
      message: 'Notification marked as read'
    });
  } catch (error) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to mark notification as read' 
    });
  }
});

// Helper functions for notification messages
function getBookingNotificationTitle(status: string): string {
  switch (status) {
    case 'confirmed':
      return 'Booking Confirmed';
    case 'cancelled':
      return 'Booking Cancelled';
    case 'completed':
      return 'Booking Completed';
    default:
      return 'Booking Update';
  }
}

function getBookingNotificationMessage(booking: any): string {
  switch (booking.status) {
    case 'confirmed':
      return `Your booking for ${booking.Vehicle?.title} has been confirmed by the host.`;
    case 'cancelled':
      return `Your booking for ${booking.Vehicle?.title} has been cancelled.`;
    case 'completed':
      return `Your booking for ${booking.Vehicle?.title} has been completed. Please leave a review!`;
    default:
      return `Your booking for ${booking.Vehicle?.title} has been updated.`;
  }
}

function getHostBookingNotificationTitle(status: string): string {
  switch (status) {
    case 'pending':
      return 'New Booking Request';
    case 'confirmed':
      return 'Booking Confirmed';
    case 'cancelled':
      return 'Booking Cancelled';
    default:
      return 'Booking Update';
  }
}

function getHostBookingNotificationMessage(booking: any, vehicle: any): string {
  switch (booking.status) {
    case 'pending':
      return `${booking.renter?.firstName} ${booking.renter?.lastName} has requested to book your ${vehicle.title}.`;
    case 'confirmed':
      return `Your ${vehicle.title} has been booked by ${booking.renter?.firstName} ${booking.renter?.lastName}.`;
    case 'cancelled':
      return `The booking for your ${vehicle.title} has been cancelled.`;
    default:
      return `There's an update to the booking for your ${vehicle.title}.`;
  }
}

function getVehicleNotificationTitle(status: string): string {
  switch (status) {
    case 'approved':
      return 'Vehicle Approved';
    case 'declined':
      return 'Vehicle Declined';
    default:
      return 'Vehicle Status Update';
  }
}

function getVehicleNotificationMessage(vehicle: any): string {
  switch (vehicle.status) {
    case 'approved':
      return `Your vehicle "${vehicle.title}" has been approved and is now available for rent.`;
    case 'declined':
      return `Your vehicle "${vehicle.title}" has been declined. Please check the reason and resubmit.`;
    default:
      return `Your vehicle "${vehicle.title}" status has been updated.`;
  }
}

export default router;
