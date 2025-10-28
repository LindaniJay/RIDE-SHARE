import { io, Socket } from 'socket.io-client';

class SocketService {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000; // Start with 1 second
  private connecting = false;

  async connect(token?: string): Promise<Socket> {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.socket?.connected) {
          return resolve(this.socket);
        }
        if (this.connecting) {
          console.log('Socket connection already in progress');
          // Wait briefly and resolve existing socket if available
          const wait = setInterval(() => {
            if (this.socket?.connected) {
              clearInterval(wait);
              resolve(this.socket);
            }
          }, 200);
          return;
        }

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
        
        console.log('Connecting to Socket.io with token:', authToken ? 'provided' : 'none');

        // IMPORTANT: do NOT use VITE_API_URL here (may include '/api' path which breaks namespace)
        const baseUrl = import.meta.env.VITE_WS_URL || 'http://localhost:5001';
        this.connecting = true;
        this.socket = io(baseUrl, {
          transports: ['websocket', 'polling'],
          timeout: 20000,
          // keep a single shared connection
          auth: {
            token: authToken
          }
        });

        this.socket.on('connect', () => {
          console.log('Socket connected successfully');
          this.reconnectAttempts = 0;
          this.reconnectDelay = 1000;
          this.connecting = false;
          resolve(this.socket!);
        });

        this.socket.on('connect_error', (error) => {
          console.error('Socket connection error:', error);
          this.connecting = false;
          reject(error);
        });

        this.socket.on('disconnect', (reason) => {
          console.log('Socket disconnected:', reason);
          this.connecting = false;
          if (reason === 'io server disconnect') {
            // Server disconnected, try to reconnect
            this.handleReconnect();
          }
        });

        this.socket.on('error', (error) => {
          console.error('Socket error:', error);
          this.connecting = false;
        });

        // Set up reconnection logic
        this.socket.on('reconnect', (attemptNumber) => {
          console.log('Socket reconnected after', attemptNumber, 'attempts');
          this.reconnectAttempts = 0;
          this.reconnectDelay = 1000;
        });

        this.socket.on('reconnect_error', (error) => {
          console.error('Socket reconnection error:', error);
          this.handleReconnect();
        });

        this.socket.on('reconnect_failed', () => {
          console.error('Socket reconnection failed after maximum attempts');
          this.reconnectAttempts = this.maxReconnectAttempts;
          this.connecting = false;
        });

      } catch (error) {
        console.error('Failed to initialize socket:', error);
        reject(error);
      }
    });
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts}) in ${this.reconnectDelay}ms`);
      
      setTimeout(() => {
        if (this.socket) {
          this.socket.connect();
        }
      }, this.reconnectDelay);
      
      // Exponential backoff
      this.reconnectDelay = Math.min(this.reconnectDelay * 2, 30000);
    } else {
      console.error('Maximum reconnection attempts reached');
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  getSocket(): Socket | null {
    return this.socket;
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  // Notification handlers
  onNotification(callback: (notification: any) => void) {
    if (this.socket) {
      this.socket.on('notification', callback);
    }
  }

  onBookingUpdate(callback: (update: any) => void) {
    if (this.socket) {
      this.socket.on('booking_update', callback);
    }
  }

  onSystemAnnouncement(callback: (announcement: any) => void) {
    if (this.socket) {
      this.socket.on('system_announcement', callback);
    }
  }

  // Chat handlers
  joinChat(bookingId: string) {
    if (this.socket) {
      this.socket.emit('join_chat', bookingId);
    }
  }

  leaveChat(bookingId: string) {
    if (this.socket) {
      this.socket.emit('leave_chat', bookingId);
    }
  }

  sendMessage(data: { bookingId: string; message: string; type: string }) {
    if (this.socket) {
      this.socket.emit('send_message', data);
    }
  }

  onNewMessage(callback: (message: any) => void) {
    if (this.socket) {
      this.socket.on('new_message', callback);
    }
  }

  onUserTyping(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on('user_typing', callback);
    }
  }

  // Typing indicators
  startTyping(bookingId: string) {
    if (this.socket) {
      this.socket.emit('typing_start', bookingId);
    }
  }

  stopTyping(bookingId: string) {
    if (this.socket) {
      this.socket.emit('typing_stop', bookingId);
    }
  }

  // Online status
  setOnline() {
    if (this.socket) {
      this.socket.emit('set_online');
    }
  }

  setOffline() {
    if (this.socket) {
      this.socket.emit('set_offline');
    }
  }

  onUserOnline(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on('user_online', callback);
    }
  }

  onUserOffline(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on('user_offline', callback);
    }
  }

  // Error handling
  onError(callback: (error: any) => void) {
    if (this.socket) {
      this.socket.on('error', callback);
    }
  }

  // Remove all listeners
  removeAllListeners() {
    if (this.socket) {
      this.socket.removeAllListeners();
    }
  }
}

export const socketService = new SocketService();
export default socketService;
