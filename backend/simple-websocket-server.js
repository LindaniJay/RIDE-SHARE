const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'http://localhost:5173',
    'http://localhost:4173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));

// Socket.io configuration
const io = socketIo(server, {
  cors: corsOptions,
  path: '/socket.io/',
  transports: ['websocket', 'polling']
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'WebSocket server is running',
    timestamp: new Date().toISOString()
  });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('✅ Client connected:', socket.id);
  
  // Join user to their personal room
  socket.on('join-user-room', (userId) => {
    socket.join(`user-${userId}`);
    console.log(`User ${userId} joined their room`);
  });
  
  // Handle admin notifications
  socket.on('admin-notification', (data) => {
    console.log('Admin notification:', data);
    io.emit('admin-notification', data);
  });
  
  // Handle user notifications
  socket.on('user-notification', (data) => {
    console.log('User notification:', data);
    if (data.userId) {
      socket.to(`user-${data.userId}`).emit('notification', data);
    }
  });
  
  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log('🚀 WebSocket server running on port', PORT);
  console.log('📡 Socket.io path: /socket.io/');
  console.log('🔗 Health check: http://localhost:' + PORT + '/api/health');
  console.log('🌐 WebSocket test: http://localhost:' + PORT + '/socket.io/');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});

