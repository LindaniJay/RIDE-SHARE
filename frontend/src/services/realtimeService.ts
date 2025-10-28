import { io, Socket } from 'socket.io-client';
// Removed unused import: useAuth

export interface RealtimeMessage {
  id: string;
  type: 'booking_update' | 'chat_message' | 'notification';
  data: any;
  timestamp: Date;
  from?: string;
  to?: string;
}

export interface ChatMessage {
  id: string;
  bookingId: number;
  senderId: number;
  senderName: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
}

export interface BookingUpdate {
  bookingId: number;
  status: string;
  message: string;
  timestamp: Date;
}

export interface Notification {
  id: string;
  type: 'booking_created' | 'booking_approved' | 'booking_rejected' | 'booking_cancelled' | 'payment_received' | 'message_received';
  title: string;
  message: string;
  data?: any;
  timestamp: Date;
  isRead: boolean;
}

class RealtimeService {
  private socket: Socket | null = null;
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000;
  private messageHandlers: Map<string, ((data: any) => void)[]> = new Map();
  private notificationHandlers: ((notification: Notification) => void)[] = [];
  private chatHandlers: ((message: ChatMessage) => void)[] = [];
  private bookingUpdateHandlers: ((update: BookingUpdate) => void)[] = [];

  constructor() {
    // Don't auto-connect to prevent duplicate connections
    // Components should use websocketService instead
    console.log('RealtimeService: Use websocketService for new connections');
  }

  private establishConnection() {
    try {
      this.socket = io('http://localhost:5001', {
        transports: ['websocket', 'polling'],
        timeout: 20000,
        forceNew: true,
        reconnection: true,
        reconnectionDelay: 5000,
        reconnectionAttempts: 3,
        autoConnect: true
      });

      this.setupEventListeners();
    } catch (error) {
      console.error('Failed to connect to WebSocket:', error);
      this.handleReconnect();
    }
  }

  private setupEventListeners() {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server');
      this.isConnected = true;
      this.reconnectAttempts = 0;
      this.emit('connection_established');
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Disconnected from WebSocket server:', reason);
      this.isConnected = false;
      this.emit('connection_lost', { reason });
      
      if (reason !== 'io client disconnect') {
        this.handleReconnect();
      }
    });

    this.socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      this.isConnected = false;
      this.emit('connection_error', { error });
      this.handleReconnect();
    });

    // Booking-related events
    this.socket.on('new-booking', (data) => {
      this.handleBookingNotification('booking_created', data);
    });

    this.socket.on('booking-approved', (data) => {
      this.handleBookingUpdate(data);
      this.handleBookingNotification('booking_approved', data);
    });

    this.socket.on('booking-rejected', (data) => {
      this.handleBookingUpdate(data);
      this.handleBookingNotification('booking_rejected', data);
    });

    this.socket.on('booking-cancelled', (data) => {
      this.handleBookingUpdate(data);
      this.handleBookingNotification('booking_cancelled', data);
    });

    this.socket.on('booking-checked-in', (data) => {
      this.handleBookingUpdate(data);
    });

    this.socket.on('booking-checked-out', (data) => {
      this.handleBookingUpdate(data);
    });

    // Chat events
    this.socket.on('chat-message', (data) => {
      this.handleChatMessage(data);
    });

    this.socket.on('message-read', (data) => {
      this.emit('message_read', data);
    });

    // Payment events
    this.socket.on('payment-received', (data) => {
      this.handleBookingNotification('payment_received', data);
    });

    this.socket.on('payment-failed', (data) => {
      this.handleBookingNotification('payment_failed', data);
    });

    // Generic message handler
    this.socket.on('message', (data) => {
      this.emit('message', data);
    });
  }

  private handleReconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      this.emit('connection_failed');
      return;
    }

    this.reconnectAttempts++;
    console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);

    setTimeout(() => {
      this.establishConnection();
    }, this.reconnectInterval * this.reconnectAttempts);
  }

  private handleBookingNotification(type: string, data: any) {
    const notification: Notification = {
      id: `notification_${Date.now()}_${Math.random()}`,
      type: type as any,
      title: this.getNotificationTitle(type),
      message: this.getNotificationMessage(type, data),
      data,
      timestamp: new Date(),
      isRead: false
    };

    this.notificationHandlers.forEach(handler => handler(notification));
    this.emit('notification', notification);
  }

  private handleBookingUpdate(data: any) {
    const update: BookingUpdate = {
      bookingId: data.id || data.bookingId,
      status: data.status || 'updated',
      message: data.message || 'Booking status updated',
      timestamp: new Date()
    };

    this.bookingUpdateHandlers.forEach(handler => handler(update));
    this.emit('booking_update', update);
  }

  private handleChatMessage(data: any) {
    const message: ChatMessage = {
      id: data.id || `msg_${Date.now()}_${Math.random()}`,
      bookingId: data.bookingId,
      senderId: data.senderId,
      senderName: data.senderName,
      message: data.message,
      timestamp: new Date(data.timestamp || Date.now()),
      isRead: false
    };

    this.chatHandlers.forEach(handler => handler(message));
    this.emit('chat_message', message);
  }

  private getNotificationTitle(type: string): string {
    switch (type) {
      case 'booking_created':
        return 'New Booking Request';
      case 'booking_approved':
        return 'Booking Approved';
      case 'booking_rejected':
        return 'Booking Rejected';
      case 'booking_cancelled':
        return 'Booking Cancelled';
      case 'payment_received':
        return 'Payment Received';
      case 'message_received':
        return 'New Message';
      default:
        return 'Notification';
    }
  }

  private getNotificationMessage(type: string, data: any): string {
    switch (type) {
      case 'booking_created':
        return `New booking request for ${data.vehicleTitle || 'your vehicle'}`;
      case 'booking_approved':
        return `Your booking for ${data.vehicleTitle || 'the vehicle'} has been approved`;
      case 'booking_rejected':
        return `Your booking for ${data.vehicleTitle || 'the vehicle'} has been rejected`;
      case 'booking_cancelled':
        return `Booking for ${data.vehicleTitle || 'the vehicle'} has been cancelled`;
      case 'payment_received':
        return `Payment of R${data.amount || '0'} has been received`;
      case 'message_received':
        return `New message from ${data.senderName || 'user'}`;
      default:
        return 'You have a new notification';
    }
  }

  // Public methods
  public connect(userId?: string) {
    if (this.socket && this.isConnected) {
      this.disconnect();
    }
    this.establishConnection();
    
    if (userId && this.socket) {
      this.socket.emit('join', { userId });
    }
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
    this.isConnected = false;
  }

  public isSocketConnected(): boolean {
    return this.isConnected && this.socket !== null;
  }

  // Event handling
  public on(event: string, handler: (data: any) => void) {
    if (!this.messageHandlers.has(event)) {
      this.messageHandlers.set(event, []);
    }
    this.messageHandlers.get(event)!.push(handler);
  }

  public off(event: string, handler: (data: any) => void) {
    const handlers = this.messageHandlers.get(event);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }

  public emit(event: string, data?: any) {
    const handlers = this.messageHandlers.get(event);
    if (handlers) {
      handlers.forEach(handler => handler(data));
    }
  }

  // Notification handling
  public onNotification(handler: (notification: Notification) => void) {
    this.notificationHandlers.push(handler);
  }

  public offNotification(handler: (notification: Notification) => void) {
    const index = this.notificationHandlers.indexOf(handler);
    if (index > -1) {
      this.notificationHandlers.splice(index, 1);
    }
  }

  // Chat handling
  public onChatMessage(handler: (message: ChatMessage) => void) {
    this.chatHandlers.push(handler);
  }

  public offChatMessage(handler: (message: ChatMessage) => void) {
    const index = this.chatHandlers.indexOf(handler);
    if (index > -1) {
      this.chatHandlers.splice(index, 1);
    }
  }

  // Booking update handling
  public onBookingUpdate(handler: (update: BookingUpdate) => void) {
    this.bookingUpdateHandlers.push(handler);
  }

  public offBookingUpdate(handler: (update: BookingUpdate) => void) {
    const index = this.bookingUpdateHandlers.indexOf(handler);
    if (index > -1) {
      this.bookingUpdateHandlers.splice(index, 1);
    }
  }

  // Send messages
  public sendChatMessage(bookingId: number, message: string, recipientId: number) {
    if (this.socket && this.isConnected) {
      this.socket.emit('chat-message', {
        bookingId,
        message,
        recipientId,
        timestamp: new Date()
      });
    }
  }

  public joinBookingRoom(bookingId: number) {
    if (this.socket && this.isConnected) {
      this.socket.emit('join-booking', { bookingId });
    }
  }

  public leaveBookingRoom(bookingId: number) {
    if (this.socket && this.isConnected) {
      this.socket.emit('leave-booking', { bookingId });
    }
  }

  public markMessageAsRead(messageId: string) {
    if (this.socket && this.isConnected) {
      this.socket.emit('mark-message-read', { messageId });
    }
  }

  // Typing indicators
  public startTyping(bookingId: number, recipientId: number) {
    if (this.socket && this.isConnected) {
      this.socket.emit('typing-start', { bookingId, recipientId });
    }
  }

  public stopTyping(bookingId: number, recipientId: number) {
    if (this.socket && this.isConnected) {
      this.socket.emit('typing-stop', { bookingId, recipientId });
    }
  }

  // Connection status
  public getConnectionStatus(): {
    connected: boolean;
    reconnectAttempts: number;
    maxReconnectAttempts: number;
  } {
    return {
      connected: this.isConnected,
      reconnectAttempts: this.reconnectAttempts,
      maxReconnectAttempts: this.maxReconnectAttempts
    };
  }
}

// Export singleton instance
export const realtimeService = new RealtimeService();
export default realtimeService;
