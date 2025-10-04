import { Booking } from './bookingService';

export interface BookingWorkflowEvent {
  id: string;
  bookingId: string;
  eventType: 'booking_created' | 'booking_approved' | 'booking_declined' | 'booking_cancelled' | 'booking_completed' | 'payment_processed' | 'payment_failed' | 'host_notified' | 'renter_notified';
  actor: 'renter' | 'host' | 'admin' | 'system';
  timestamp: Date;
  data?: any;
  message: string;
}

export interface BookingWorkflowState {
  bookingId: string;
  currentStep: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  progress: number;
  lastUpdated: Date;
  events: BookingWorkflowEvent[];
  nextActions: string[];
  blockers: string[];
}

export interface NotificationData {
  id: string;
  type: 'booking_created' | 'booking_approved' | 'booking_declined' | 'booking_cancelled' | 'booking_completed' | 'payment_received' | 'payment_failed';
  title: string;
  message: string;
  bookingId: string;
  vehicleTitle: string;
  renterName?: string;
  hostName?: string;
  amount?: number;
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  actionRequired: boolean;
  actionUrl?: string;
}

class BookingWorkflowService {
  private static instance: BookingWorkflowService;
  private eventListeners: Map<string, Function[]> = new Map();
  private workflowStates: Map<string, BookingWorkflowState> = new Map();

  static getInstance(): BookingWorkflowService {
    if (!BookingWorkflowService.instance) {
      BookingWorkflowService.instance = new BookingWorkflowService();
    }
    return BookingWorkflowService.instance;
  }

  // Initialize workflow for a new booking
  initializeWorkflow(booking: Booking): BookingWorkflowState {
    const workflowState: BookingWorkflowState = {
      bookingId: booking.id,
      currentStep: 'booking_created',
      status: booking.status as 'pending' | 'confirmed' | 'cancelled' | 'completed',
      progress: 0,
      lastUpdated: new Date(),
      events: [{
        id: `event_${Date.now()}`,
        bookingId: booking.id,
        eventType: 'booking_created',
        actor: 'renter',
        timestamp: new Date(),
        message: 'Booking request created'
      }],
      nextActions: ['host_approval'],
      blockers: []
    };

    this.workflowStates.set(booking.id, workflowState);
    this.emitEvent('workflow_initialized', { bookingId: booking.id, workflowState });
    
    return workflowState;
  }

  // Process workflow step
  async processStep(bookingId: string, stepId: string, actor: 'renter' | 'host' | 'admin' | 'system', data?: any): Promise<BookingWorkflowState> {
    const workflowState = this.workflowStates.get(bookingId);
    if (!workflowState) {
      throw new Error('Workflow not found for booking');
    }

    const event: BookingWorkflowEvent = {
      id: `event_${Date.now()}`,
      bookingId,
      eventType: this.getEventTypeFromStep(stepId),
      actor,
      timestamp: new Date(),
      data,
      message: this.getEventMessage(stepId, actor)
    };

    workflowState.events.push(event);
    workflowState.currentStep = stepId;
    workflowState.lastUpdated = new Date();
    workflowState.progress = this.calculateProgress(workflowState);

    // Update status based on step
    if (stepId === 'host_approval' && data?.action === 'approve') {
      workflowState.status = 'confirmed';
      workflowState.nextActions = ['vehicle_preparation'];
    } else if (stepId === 'host_approval' && data?.action === 'decline') {
      workflowState.status = 'cancelled';
      workflowState.nextActions = [];
    } else if (stepId === 'booking_complete') {
      workflowState.status = 'completed';
      workflowState.nextActions = [];
    }

    this.workflowStates.set(bookingId, workflowState);
    this.emitEvent('workflow_updated', { bookingId, workflowState, event });

    // Send notifications
    await this.sendNotifications(bookingId, event);

    return workflowState;
  }

  // Get workflow state
  getWorkflowState(bookingId: string): BookingWorkflowState | null {
    return this.workflowStates.get(bookingId) || null;
  }

  // Get all workflow states for a user
  getUserWorkflows(userId: string, userRole: 'renter' | 'host' | 'admin'): BookingWorkflowState[] {
    // In a real implementation, this would filter by user role and associated bookings
    return Array.from(this.workflowStates.values());
  }

  // Subscribe to workflow events
  subscribe(eventType: string, callback: Function): void {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, []);
    }
    this.eventListeners.get(eventType)!.push(callback);
  }

  // Unsubscribe from workflow events
  unsubscribe(eventType: string, callback: Function): void {
    const listeners = this.eventListeners.get(eventType);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  // Emit event to listeners
  private emitEvent(eventType: string, data: any): void {
    const listeners = this.eventListeners.get(eventType);
    if (listeners) {
      listeners.forEach(callback => callback(data));
    }
  }

  // Calculate progress percentage
  private calculateProgress(workflowState: BookingWorkflowState): number {
    const totalSteps = 6; // Total number of workflow steps
    const completedSteps = workflowState.events.filter(e => 
      ['booking_created', 'host_approval', 'vehicle_preparation', 'pickup_handover', 'rental_period', 'return_handover', 'booking_complete'].includes(e.eventType)
    ).length;
    return Math.round((completedSteps / totalSteps) * 100);
  }

  // Get event type from step
  private getEventTypeFromStep(stepId: string): BookingWorkflowEvent['eventType'] {
    switch (stepId) {
      case 'booking_created':
        return 'booking_created';
      case 'host_approval':
        return 'booking_approved';
      case 'booking_cancelled':
        return 'booking_cancelled';
      case 'booking_complete':
        return 'booking_completed';
      case 'payment_processed':
        return 'payment_processed';
      default:
        return 'booking_created';
    }
  }

  // Get event message
  private getEventMessage(stepId: string, actor: string): string {
    switch (stepId) {
      case 'booking_created':
        return 'Booking request created';
      case 'host_approval':
        return `Booking ${actor === 'host' ? 'approved' : 'declined'} by host`;
      case 'vehicle_preparation':
        return 'Vehicle preparation started';
      case 'pickup_handover':
        return 'Vehicle pickup completed';
      case 'rental_period':
        return 'Rental period active';
      case 'return_handover':
        return 'Vehicle return completed';
      case 'booking_complete':
        return 'Booking completed successfully';
      default:
        return 'Workflow step updated';
    }
  }

  // Send notifications to relevant parties
  private async sendNotifications(bookingId: string, event: BookingWorkflowEvent): Promise<void> {
    const workflowState = this.workflowStates.get(bookingId);
    if (!workflowState) return;

    const notifications: NotificationData[] = [];

    // Create notifications based on event type
    switch (event.eventType) {
      case 'booking_created':
        notifications.push({
          id: `notif_${Date.now()}`,
          type: 'booking_created',
          title: 'New Booking Request',
          message: `A new booking request has been created`,
          bookingId,
          vehicleTitle: 'Vehicle Title', // Would come from booking data
          timestamp: new Date(),
          read: false,
          priority: 'high',
          actionRequired: true,
          actionUrl: '/dashboard?tab=bookings'
        });
        break;

      case 'booking_approved':
        notifications.push({
          id: `notif_${Date.now()}`,
          type: 'booking_approved',
          title: 'Booking Approved',
          message: `Your booking has been approved`,
          bookingId,
          vehicleTitle: 'Vehicle Title',
          timestamp: new Date(),
          read: false,
          priority: 'medium',
          actionRequired: false,
          actionUrl: '/dashboard?tab=bookings'
        });
        break;

      case 'booking_declined':
        notifications.push({
          id: `notif_${Date.now()}`,
          type: 'booking_declined',
          title: 'Booking Declined',
          message: `Your booking has been declined`,
          bookingId,
          vehicleTitle: 'Vehicle Title',
          timestamp: new Date(),
          read: false,
          priority: 'low',
          actionRequired: false,
          actionUrl: '/dashboard?tab=bookings'
        });
        break;

      case 'payment_processed':
        notifications.push({
          id: `notif_${Date.now()}`,
          type: 'payment_received',
          title: 'Payment Received',
          message: `Payment has been processed successfully`,
          bookingId,
          vehicleTitle: 'Vehicle Title',
          amount: 1200, // Would come from booking data
          timestamp: new Date(),
          read: false,
          priority: 'medium',
          actionRequired: false
        });
        break;
    }

    // Emit notifications
    notifications.forEach(notification => {
      this.emitEvent('notification_created', { bookingId, notification });
    });
  }

  // Get workflow analytics
  getWorkflowAnalytics(): {
    totalWorkflows: number;
    completedWorkflows: number;
    pendingWorkflows: number;
    averageCompletionTime: number;
    bottlenecks: string[];
  } {
    const workflows = Array.from(this.workflowStates.values());
    
    return {
      totalWorkflows: workflows.length,
      completedWorkflows: workflows.filter(w => w.status === 'completed').length,
      pendingWorkflows: workflows.filter(w => w.status === 'pending').length,
      averageCompletionTime: 0, // Would calculate from actual data
      bottlenecks: [] // Would identify common blockers
    };
  }

  // Admin override capabilities
  async adminOverride(bookingId: string, action: 'approve' | 'decline' | 'cancel', reason: string): Promise<BookingWorkflowState> {
    const workflowState = this.workflowStates.get(bookingId);
    if (!workflowState) {
      throw new Error('Workflow not found for booking');
    }

    const event: BookingWorkflowEvent = {
      id: `event_${Date.now()}`,
      bookingId,
      eventType: action === 'approve' ? 'booking_approved' : action === 'decline' ? 'booking_declined' : 'booking_cancelled',
      actor: 'admin',
      timestamp: new Date(),
      data: { reason, adminOverride: true },
      message: `Admin ${action}d booking: ${reason}`
    };

    workflowState.events.push(event);
    workflowState.status = action === 'approve' ? 'confirmed' : 'cancelled';
    workflowState.lastUpdated = new Date();

    this.workflowStates.set(bookingId, workflowState);
    this.emitEvent('admin_override', { bookingId, workflowState, event });

    return workflowState;
  }
}

export default BookingWorkflowService;
