# WebSocket Setup Guide for RideShareX Backend

This guide explains how to set up and test the WebSocket functionality in the RideShareX backend.

##  Quick Start

### 1. Start the Backend Server

```bash
# Option 1: Use the automated setup script
node setup-websocket-dev.js
npm run dev

# Option 2: Use the PowerShell script (Windows)
.\start-websocket-dev.ps1

# Option 3: Use the batch file (Windows)
start-websocket-dev.bat
```

### 2. Test WebSocket Connection

```bash
# Test basic WebSocket connection
node test-websocket.js

# Run comprehensive test suite
node test-websocket-complete.js
```

## 📋 Configuration Details

### Backend Configuration

- **Port**: 5001 (configurable via `PORT` environment variable)
- **CORS Origins**: 
  - `http://localhost:3000` (React frontend)
  - `http://localhost:5173` (Vite frontend)
- **Socket.io Path**: `/socket.io`
- **Authentication**: Firebase-based (optional for development)

### Frontend Configuration

The frontend is already configured to connect to `http://localhost:5001`:

- **websocketService.ts**: Uses `http://localhost:5001` as base URL
- **socketService.ts**: Uses `http://localhost:5001` as base URL
- **Vite proxy**: Routes `/api` requests to `http://localhost:5001`

## 🔧 Environment Variables

Create a `.env` file in the backend directory with:

```env
NODE_ENV=development
PORT=5001
FRONTEND_URL=http://localhost:3000
FRONTEND_URLS=http://localhost:3000,http://localhost:5173
SOCKET_IO_PATH=/socket.io
```

##  Testing WebSocket Connection

### Manual Testing

1. **Start the backend server**:
   ```bash
   npm run dev
   ```

2. **Check server logs** for:
   ```
    Server running on http://localhost:5001
   Socket.io path: /socket.io
   WebSocket test: http://localhost:5001/socket.io/
   ```

3. **Test WebSocket endpoint**:
   - Open browser to: `http://localhost:5001/socket.io/`
   - Should see Socket.io client library

4. **Run automated tests**:
   ```bash
   node test-websocket-complete.js
   ```

### Frontend Integration Testing

1. **Start the frontend** (port 3000):
   ```bash
   cd ../frontend
   npm run dev
   ```

2. **Check browser console** for WebSocket connection logs:
   ```
   WebSocket service initialized with URL: http://localhost:5001
   Connecting to WebSocket at: http://localhost:5001
   WebSocket connected
   ```

## 🔍 Troubleshooting

### Common Issues

1. **Port 5001 already in use**:
   ```bash
   # Find process using port 5001
   netstat -ano | findstr :5001
   
   # Kill the process (replace PID with actual process ID)
   taskkill /PID <PID> /F
   ```

2. **CORS errors**:
   - Ensure `FRONTEND_URLS` includes your frontend URL
   - Check that frontend is running on the correct port

3. **WebSocket connection fails**:
   - Verify backend server is running
   - Check firewall settings
   - Ensure no proxy is blocking WebSocket connections

4. **Authentication errors**:
   - For development, authentication is optional
   - Check Firebase configuration if using authentication

### Debug Logs

Enable detailed logging by checking the server console for:
- Connection/disconnection events
- Authentication attempts
- Error messages
- CORS configuration

## 📊 WebSocket Events

The backend supports these WebSocket events:

### Client → Server
- `join_chat` - Join a booking chat room
- `leave_chat` - Leave a booking chat room
- `send_message` - Send a chat message
- `typing_start` - User started typing
- `typing_stop` - User stopped typing
- `set_online` - Set user online status
- `set_offline` - Set user offline status

### Server → Client
- `new_message` - New chat message received
- `user_typing` - User typing indicator
- `user_online` - User came online
- `user_offline` - User went offline
- `notification` - General notification
- `booking_update` - Booking status update
- `system_announcement` - System-wide announcement

## 🚀 Production Deployment

For production deployment:

1. **Update CORS origins** to include your production frontend URL
2. **Configure Firebase authentication** properly
3. **Set up SSL/TLS** for secure WebSocket connections
4. **Configure load balancing** if using multiple server instances
5. **Set up Redis** for WebSocket session management across instances

## 📚 Additional Resources

- [Socket.io Documentation](https://socket.io/docs/)
- [WebSocket API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [CORS Configuration Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
