import { io, Socket } from 'socket.io-client';

class WebSocketService {
  public socket: Socket | null = null;
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_WS_URL || 'http://localhost:5001';
  }

  connect(token: string) {
    if (this.socket?.connected) {
      return;
    }

    this.socket = io(this.baseUrl, {
      auth: {
        token
      },
      transports: ['websocket', 'polling']
    });

    this.socket.on('connect', () => {
      console.log('WebSocket connected');
    });

    this.socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
    });

    this.socket.on('error', (error: any) => {
      console.error('WebSocket error:', error);
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
    }
  }

  subscribeToAdminUpdates(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('admin_update', callback);
    }
  }

  subscribeToRenterUpdates(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('renter_update', callback);
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
}

export default new WebSocketService();
