# WebSocket and CORS Fixes

## Issues Fixed

### 1. ✅ CORS Configuration Issues

**Problem:** Multiple servers had inconsistent CORS configurations with hardcoded URLs.

**Solution:** 
- Unified CORS configuration across all servers
- Added support for multiple frontend URLs (3000, 3001, 5173, 4173)
- Added proper headers for WebSocket connections
- Fixed preflight request handling

**Files Modified:**
- `backend/src/production-server.ts`
- `backend/src/app.ts`
- `backend/src/socket.ts`
- `backend/simple-server.js`

### 2. ✅ WebSocket CORS Configuration

**Problem:** WebSocket connections were failing due to CORS mismatches.

**Solution:**
- Added comprehensive CORS configuration for Socket.io
- Included all frontend URLs in WebSocket CORS origins
- Added proper headers for WebSocket authentication
- Fixed connection timeout issues

**Files Modified:**
- `backend/src/socket.ts`
- `backend/src/production-server.ts`
- `backend/simple-server.js`

### 3. ✅ Nginx WebSocket Proxy

**Problem:** Nginx wasn't properly configured for WebSocket connections.

**Solution:**
- Added dedicated WebSocket proxy configuration
- Fixed WebSocket upgrade headers
- Added proper timeout settings
- Configured WebSocket path routing

**Files Modified:**
- `nginx.conf`

### 4. ✅ Frontend WebSocket Configuration

**Problem:** Frontend services had hardcoded URLs and poor error handling.

**Solution:**
- Made WebSocket URLs configurable via environment variables
- Added fallback URL configuration
- Improved error handling and reconnection logic
- Added proper authentication token handling

**Files Modified:**
- `frontend/src/services/websocketService.ts`
- `frontend/src/services/socketService.ts`

## Configuration Details

### Backend CORS Configuration

```javascript
// Unified CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:4173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Session-ID'],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count']
}));
```

### WebSocket CORS Configuration

```javascript
// Socket.io CORS configuration
const io = new IOServer(server, {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5173',
      'http://localhost:4173'
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }
});
```

### Nginx WebSocket Configuration

```nginx
# WebSocket routes
location /socket.io/ {
    proxy_pass http://backend;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
    proxy_read_timeout 86400;
}
```

## Testing

### Automated Testing

Run the comprehensive test suite:

```bash
# Run WebSocket and CORS tests
node backend/test-websocket-cors.js

# Or use the npm script
npm run test:websocket
```

### Manual Testing

1. **Health Check:**
   ```bash
   curl http://localhost:5001/api/health
   ```

2. **WebSocket Test:**
   - Open browser to: `http://localhost:5001/socket.io/`
   - Should see Socket.io client library

3. **CORS Test:**
   ```bash
   curl -H "Origin: http://localhost:5173" \
        -H "Access-Control-Request-Method: GET" \
        -H "Access-Control-Request-Headers: Content-Type" \
        -X OPTIONS \
        http://localhost:5001/api/health
   ```

## Environment Variables

Create a `.env` file with:

```env
NODE_ENV=development
PORT=5001
FRONTEND_URL=http://localhost:5173
FRONTEND_URLS=http://localhost:3000,http://localhost:3001,http://localhost:5173,http://localhost:4173
SOCKET_IO_PATH=/socket.io
```

## Frontend Configuration

The frontend services now use environment variables:

```typescript
// WebSocket service configuration
const baseUrl = import.meta.env.VITE_WS_URL || import.meta.env.VITE_API_URL || 'http://localhost:5001';
```

## Troubleshooting

### Common Issues

1. **WebSocket Connection Failed:**
   - Check if server is running on port 5001
   - Verify CORS configuration includes your frontend URL
   - Check browser console for CORS errors

2. **CORS Errors:**
   - Ensure frontend URL is in the CORS origins list
   - Check that preflight requests are handled properly
   - Verify headers are correctly configured

3. **Nginx WebSocket Issues:**
   - Ensure nginx configuration includes WebSocket proxy
   - Check that WebSocket upgrade headers are set
   - Verify proxy timeout settings

### Debug Commands

```bash
# Check server logs
npm run dev

# Test WebSocket connection
node backend/test-websocket-cors.js

# Check nginx configuration
nginx -t

# Test CORS manually
curl -H "Origin: http://localhost:5173" -X OPTIONS http://localhost:5001/api/health
```

## Files Created/Modified

### New Files:
- `backend/test-websocket-cors.js` - Comprehensive test suite
- `backend/setup-websocket-cors.js` - Setup script
- `WEBSOCKET_CORS_FIXES.md` - This documentation

### Modified Files:
- `backend/src/production-server.ts` - Fixed CORS and WebSocket config
- `backend/src/app.ts` - Updated CORS configuration
- `backend/src/socket.ts` - Fixed WebSocket CORS
- `backend/simple-server.js` - Updated CORS config
- `nginx.conf` - Added WebSocket proxy configuration
- `frontend/src/services/websocketService.ts` - Made URLs configurable
- `frontend/src/services/socketService.ts` - Updated URL configuration

## Next Steps

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Run tests:**
   ```bash
   npm run test:websocket
   ```

3. **Check frontend connection:**
   - Open frontend application
   - Check browser console for WebSocket connection logs
   - Verify real-time features work

4. **Monitor logs:**
   - Watch server logs for connection attempts
   - Check for any CORS or WebSocket errors
   - Verify authentication flow

The WebSocket and CORS issues should now be resolved with proper configuration across all servers and frontend services.

