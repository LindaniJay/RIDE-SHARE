import { io, Socket } from 'socket.io-client';

class WebSocketService {
  public socket: Socket | null = null;
  private baseUrl: string;
  private connecting = false;

  constructor() {
    // Use centralized WebSocket URL helper
    // In development, defaults to 'http://localhost:5001'
    // In production, uses VITE_WS_URL if set
    this.baseUrl = import.meta.env.VITE_WS_URL || 
      (import.meta.env.DEV ? 'http://localhost:5001' : 'ws://localhost:5001');
    console.log('WebSocket service initialized with URL:', this.baseUrl);
  }

  async connect(token?: string) {
    if (this.socket?.connected) {
      console.log('WebSocket already connected');
      return;
    }
    if (this.connecting) {
      console.log('WebSocket connection is already in progress');
      return;
    }

    this.connecting = true;
    console.log('Connecting to WebSocket at:', this.baseUrl);
    
    // Try to get Firebase token if not provided
    let authToken: string | null = token || null;
    if (!authToken) {
      try {
        const { getFirebaseToken } = await import('../utils/firebaseAuth');
        authToken = await getFirebaseToken();
      } catch (error) {
        console.log('No Firebase token available, connecting without authentication');
      }
    }

    // Disconnect existing socket if any
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }

    this.socket = io(this.baseUrl, {
      transports: ['websocket', 'polling'],
      timeout: 20000,
      // Keep a single shared connection
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      auth: {
        token: authToken
      }
    });

    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.connecting = false;
    });

    this.socket.on('disconnect', (reason) => {
      console.log('WebSocket disconnected:', reason);
      this.connecting = false;
      if (reason === 'io server disconnect') {
        // Server disconnected, try to reconnect
        this.socket?.connect();
      }
    });

    this.socket.on('error', (error: any) => {
      console.error('WebSocket error:', error);
      this.connecting = false;
    });

    this.socket.on('reconnect', (attemptNumber) => {
      console.log('WebSocket reconnected after', attemptNumber, 'attempts');
    });

    this.socket.on('reconnect_error', (error) => {
      console.error('WebSocket reconnection error:', error);
      this.connecting = false;
    });

    this.socket.on('reconnect_failed', () => {
      console.error('WebSocket reconnection failed');
      this.connecting = false;
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  subscribeToNotifications(callback: (notification: any) => void) {
    if (this.socket) {
      this.socket.on('notification', callback);
      this.socket.on('user:notification', callback);
    }
  }

  subscribeToAdminUpdates(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('admin:new-user', callback);
      this.socket.on('admin:new-vehicle', callback);
      this.socket.on('admin:new-booking', callback);
      this.socket.on('admin:dashboard-update', callback);
    }
  }

  subscribeToRenterUpdates(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('renter:booking-update', callback);
      this.socket.on('renter:payment-update', callback);
      this.socket.on('renter:vehicle-available', callback);
    }
  }

  subscribeToHostUpdates(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('host:booking-request', callback);
      this.socket.on('host:vehicle-approval', callback);
      this.socket.on('host:payment-received', callback);
    }
  }

  subscribeToUserUpdates(userId: string, callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on(`user:${userId}:profile-update`, callback);
      this.socket.on(`user:${userId}:vehicle-update`, callback);
      this.socket.on(`user:${userId}:booking-update`, callback);
    }
  }

  sendMessage(message: any) {
    if (this.socket) {
      this.socket.emit('message', message);
    }
  }

  joinRoom(room: string) {
    if (this.socket) {
      this.socket.emit('join_room', room);
    }
  }

  leaveRoom(room: string) {
    if (this.socket) {
      this.socket.emit('leave_room', room);
    }
  }

  // Chat functionality
  joinBookingRoom(bookingId: number) {
    if (this.socket && this.socket.connected) {
      this.socket.emit('join-booking', { bookingId });
    }
  }

  leaveBookingRoom(bookingId: number) {
    if (this.socket && this.socket.connected) {
      this.socket.emit('leave-booking', { bookingId });
    }
  }

  sendChatMessage(bookingId: number, message: string, recipientId?: number) {
    if (this.socket && this.socket.connected) {
      this.socket.emit('send-message', {
        bookingId,
        message,
        recipientId,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Typing indicators
  startTyping(bookingId: number, recipientId: number) {
    if (this.socket && this.socket.connected) {
      this.socket.emit('typing-start', { bookingId, recipientId });
    }
  }

  stopTyping(bookingId: number, recipientId: number) {
    if (this.socket && this.socket.connected) {
      this.socket.emit('typing-stop', { bookingId, recipientId });
    }
  }

  // Event listeners
  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  off(event: string, callback?: (data: any) => void) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }

  // Chat message handlers
  onChatMessage(callback: (message: any) => void) {
    if (this.socket) {
      this.socket.on('chat-message', callback);
    }
  }

  offChatMessage(callback: (message: any) => void) {
    if (this.socket) {
      this.socket.off('chat-message', callback);
    }
  }

  // Booking update handlers
  onBookingUpdate(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('booking-update', callback);
    }
  }

  offBookingUpdate(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.off('booking-update', callback);
    }
  }

  // Notification handlers
  onNotification(callback: (notification: any) => void) {
    if (this.socket) {
      this.socket.on('notification', callback);
    }
  }

  offNotification(callback: (notification: any) => void) {
    if (this.socket) {
      this.socket.off('notification', callback);
    }
  }

  // Connection status
  getConnectionStatus() {
    return {
      connected: this.socket?.connected || false,
      connecting: this.connecting
    };
  }
}

export default new WebSocketService();
