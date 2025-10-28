// Simple WebSocket test without external dependencies
const WebSocket = require('ws');

console.log('🧪 Testing WebSocket connection to http://localhost:5001');

const socket = io('http://localhost:5001', {
  transports: ['websocket', 'polling'],
  timeout: 10000,
  forceNew: true
});

socket.on('connect', () => {
  console.log('✅ WebSocket connected successfully!');
  console.log('🔌 Socket ID:', socket.id);
  
  // Test sending a message
  socket.emit('test_message', { message: 'Hello from test client!' });
  
  // Disconnect after 3 seconds
  setTimeout(() => {
    console.log('🔌 Disconnecting...');
    socket.disconnect();
  }, 3000);
});

socket.on('connect_error', (error) => {
  console.error('❌ WebSocket connection failed:', error.message);
  process.exit(1);
});

socket.on('disconnect', (reason) => {
  console.log('🔌 WebSocket disconnected:', reason);
  process.exit(0);
});

socket.on('error', (error) => {
  console.error('❌ WebSocket error:', error);
});

// Timeout after 10 seconds
setTimeout(() => {
  console.error('❌ Connection timeout');
  process.exit(1);
}, 10000);
