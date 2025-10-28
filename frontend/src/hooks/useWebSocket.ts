import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface WebSocketHook {
  socket: Socket | null;
  isConnected: boolean;
  joinUserRoom: (userId: string) => void;
  joinAdminRoom: () => void;
  leaveRoom: (room: string) => void;
  emit: (event: string, data: any) => void;
  on: (event: string, callback: (data: any) => void) => void;
  off: (event: string, callback?: (data: any) => void) => void;
}

const SOCKET_URL = 'http://localhost:5001';

export const useWebSocket = (): WebSocketHook => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Initialize socket connection
    const socket = io(SOCKET_URL, {
      path: '/socket.io/',
      transports: ['websocket', 'polling']
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('WebSocket connected');
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
      setIsConnected(false);
    });

    socket.on('connect_error', (error) => {
      console.error('WebSocket connection error:', error);
      setIsConnected(false);
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const joinUserRoom = (userId: string) => {
    if (socketRef.current) {
      socketRef.current.emit('join-user-room', userId);
    }
  };

  const joinAdminRoom = () => {
    if (socketRef.current) {
      socketRef.current.emit('join-admin-room');
    }
  };

  const leaveRoom = (room: string) => {
    if (socketRef.current) {
      socketRef.current.emit('leave-room', room);
    }
  };

  const emit = (event: string, data: any) => {
    if (socketRef.current) {
      socketRef.current.emit(event, data);
    }
  };

  const on = (event: string, callback: (data: any) => void) => {
    if (socketRef.current) {
      socketRef.current.on(event, callback);
    }
  };

  const off = (event: string, callback?: (data: any) => void) => {
    if (socketRef.current) {
      if (callback) {
        socketRef.current.off(event, callback);
      } else {
        socketRef.current.off(event);
      }
    }
  };

  return {
    socket: socketRef.current,
    isConnected,
    joinUserRoom,
    joinAdminRoom,
    leaveRoom,
    emit,
    on,
    off
  };
};
