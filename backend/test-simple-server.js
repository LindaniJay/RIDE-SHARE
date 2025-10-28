const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Simple test server is running'
  });
});

// Test admin endpoint
app.get('/api/admin/dashboard-stats', (req, res) => {
  res.json({
    success: true,
    stats: {
      users: { total: 0, active: 0, pending: 0 },
      vehicles: { total: 0, pending: 0 },
      bookings: { total: 0, pending: 0 },
      revenue: { total: 0 }
    },
    recentActivity: {
      recentUsers: [],
      recentVehicles: []
    }
  });
});

// Test pending vehicles endpoint
app.get('/api/admin/vehicles/pending', (req, res) => {
  res.json({
    success: true,
    vehicles: []
  });
});

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST"]
  }
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('🔌 WebSocket client connected:', socket.id);
  
  socket.on('disconnect', (reason) => {
    console.log('🔌 WebSocket client disconnected:', socket.id, reason);
  });
  
  // Handle authentication (optional for simple server)
  socket.on('authenticate', (data) => {
    console.log('🔐 WebSocket authentication attempt:', data);
    socket.emit('authenticated', { success: true });
  });
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`🚀 Simple test server running on http://localhost:${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📊 Admin stats: http://localhost:${PORT}/api/admin/dashboard-stats`);
  console.log(`🚗 Pending vehicles: http://localhost:${PORT}/api/admin/vehicles/pending`);
  console.log(`🔌 WebSocket test: http://localhost:${PORT}/socket.io/`);
});
