import { Server as IOServer } from 'socket.io';
import { Server as HTTPServer } from 'http';
import { logger } from './utils/logger';
import { User } from './models/User';
import { getFirebaseAuth } from './config/firebase';
import { env } from './config/env';

export let io: IOServer;

export const initializeSocket = (server: HTTPServer) => {
  // Parse multiple frontend URLs
  const frontendUrls = env.FRONTEND_URLS.split(',').map(url => url.trim());
  
  io = new IOServer(server, {
    path: env.SOCKET_IO_PATH,
    cors: {
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:5173',
        'http://localhost:4173',
        ...frontendUrls
      ],
      methods: ['GET', 'POST'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
    }
  });

  // Authentication middleware for Socket.io - Optional for development
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.split(' ')[1];
      
      // Allow connection without authentication in development
      if (!token) {
        if (env.NODE_ENV === 'development') {
          // Create a mock user for development
          socket.data.user = {
            id: 'dev-user',
            display_name: 'Development User',
            role: 'admin',
            firebase_uid: 'dev-uid'
          };
          return next();
        }
        return next(new Error('Authentication error: No token provided'));
      }

      // Verify Firebase token
      const firebaseAuth = getFirebaseAuth();
      if (!firebaseAuth) {
        if (env.NODE_ENV === 'development') {
          // Allow connection in development even without Firebase
          socket.data.user = {
            id: 'dev-user',
            display_name: 'Development User',
            role: 'admin',
            firebase_uid: 'dev-uid'
          };
          return next();
        }
        return next(new Error('Authentication error: Firebase not configured'));
      }

      const decodedToken = await firebaseAuth.verifyIdToken(token);
      const user = await User.findOne({ where: { firebase_uid: decodedToken.uid } });
      if (!user || user.isLocked()) {
        return next(new Error('Authentication error: Invalid Firebase token'));
      }
      
      socket.data.user = user;
      next();
    } catch (error) {
      logger.error('Socket authentication error:', error);
      if (env.NODE_ENV === 'development') {
        // Allow connection in development even with auth errors
        socket.data.user = {
          id: 'dev-user',
          display_name: 'Development User',
          role: 'admin',
          firebase_uid: 'dev-uid'
        };
        return next();
      }
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    const user = socket.data.user;
    logger.info(`🔌 User ${user.id} (${user.display_name}) connected to socket ${socket.id}`);
    logger.info(`📊 Total connected users: ${io.engine.clientsCount}`);

    // Join user to their personal room
    socket.join(`user_${user.id}`);

    // Join user to role-based rooms
    socket.join(`role_${user.role}`);

    // Handle chat messages
    socket.on('join_chat', (bookingId: string) => {
      socket.join(`booking_${bookingId}`);
      logger.info(`User ${user.id} joined chat for booking ${bookingId}`);
    });

    socket.on('leave_chat', (bookingId: string) => {
      socket.leave(`booking_${bookingId}`);
      logger.info(`User ${user.id} left chat for booking ${bookingId}`);
    });

    socket.on('send_message', async (data: { bookingId: string; message: string; type: string }) => {
      try {
        // Validate booking access
        const { Booking } = await import('./models/Booking');
        const booking = await Booking.findByPk(data.bookingId, {
          include: [
            {
              model: User,
              as: 'renter'
            },
            {
              model: (await import('./models/Listing')).Listing,
              as: 'listing',
              include: [
                {
                  model: User,
                  as: 'host'
                }
              ]
            }
          ]
        });

        if (!booking) {
          socket.emit('error', { message: 'Booking not found' });
          return;
        }

        // Check if user has access to this booking
        const hasAccess = booking.renter_id === user.id || 
                         (booking.listing && booking.listing.host_id === user.id);
        
        if (!hasAccess) {
          socket.emit('error', { message: 'Access denied' });
          return;
        }

        // Broadcast message to booking room
        const messageData = {
          id: Date.now().toString(),
          bookingId: data.bookingId,
          senderId: user.id,
          senderName: user.display_name,
          message: data.message,
          type: data.type,
          timestamp: new Date().toISOString()
        };

        io.to(`booking_${data.bookingId}`).emit('new_message', messageData);
        
        logger.info(`Message sent in booking ${data.bookingId} by user ${user.id}`);
      } catch (error) {
        logger.error('Error handling chat message:', error);
        socket.emit('error', { message: 'Failed to send message' });
      }
    });

    // Handle typing indicators
    socket.on('typing_start', (bookingId: string) => {
      socket.to(`booking_${bookingId}`).emit('user_typing', {
        userId: user.id,
        userName: user.display_name,
        isTyping: true
      });
    });

    socket.on('typing_stop', (bookingId: string) => {
      socket.to(`booking_${bookingId}`).emit('user_typing', {
        userId: user.id,
        userName: user.display_name,
        isTyping: false
      });
    });

    // Handle online status
    socket.on('set_online', () => {
      socket.broadcast.emit('user_online', {
        userId: user.id,
        userName: user.display_name
      });
    });

    socket.on('set_offline', () => {
      socket.broadcast.emit('user_offline', {
        userId: user.id,
        userName: user.display_name
      });
    });

    // Handle disconnect
    socket.on('disconnect', (reason) => {
      logger.info(`🔌 User ${user.id} (${user.display_name}) disconnected: ${reason}`);
      logger.info(`📊 Total connected users: ${io.engine.clientsCount - 1}`);
      
      // Notify others that user went offline
      socket.broadcast.emit('user_offline', {
        userId: user.id,
        userName: user.display_name
      });
    });

    // Handle errors
    socket.on('error', (error) => {
      logger.error(`Socket error for user ${user.id}:`, error);
    });
  });

  logger.info('Socket.io server initialized');
  return io;
};

// Utility functions for sending notifications
export const sendNotificationToUser = (userId: string, notification: any) => {
  if (io) {
    io.to(`user_${userId}`).emit('notification', notification);
  }
};

export const sendNotificationToRole = (role: string, notification: any) => {
  if (io) {
    io.to(`role_${role}`).emit('notification', notification);
  }
};

export const sendNotificationToBooking = (bookingId: string, notification: any) => {
  if (io) {
    io.to(`booking_${bookingId}`).emit('booking_update', notification);
  }
};

export const sendSystemAnnouncement = (notification: any) => {
  if (io) {
    io.emit('system_announcement', notification);
  }
};
// Export will be available after initialization

