const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Basic routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Auth routes
app.post('/api/auth/register', (req, res) => {
  console.log('Register request received');
  res.json({ 
    success: true, 
    message: 'User registered successfully',
    user: { id: 1, email: req.body.email }
  });
});

app.post('/api/auth/verify-token', (req, res) => {
  console.log('Token verification request received');
  res.json({ 
    success: true, 
    message: 'Token verified',
    user: { id: 1, role: 'user' }
  });
});

app.post('/api/auth/login', (req, res) => {
  console.log('Login request received');
  res.json({ 
    success: true, 
    message: 'Login successful',
    token: 'mock-jwt-token',
    user: { id: 1, email: req.body.email, role: 'user' }
  });
});

// Admin routes
app.post('/api/admin/verify-token', (req, res) => {
  console.log('Admin token verification request received');
  res.json({ 
    success: true, 
    message: 'Admin token verified',
    user: { id: 1, role: 'admin' }
  });
});

app.post('/api/admin/login', (req, res) => {
  console.log('Admin login request received');
  res.json({ 
    success: true, 
    message: 'Admin login successful',
    token: 'mock-admin-jwt-token',
    user: { id: 1, email: req.body.email, role: 'admin' }
  });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
  
  // Echo back any message
  socket.on('message', (data) => {
    console.log('Received message:', data);
    socket.emit('message', { echo: data, timestamp: new Date() });
  });
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`🚀 Test server running on http://localhost:${PORT}`);
  console.log(`📊 WebSocket available at ws://localhost:${PORT}/socket.io/`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});