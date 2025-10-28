# RideShare SA - Troubleshooting Guide

## Common Issues and Solutions

### 1. 500 Internal Server Errors

**Symptoms:**
- API calls return 500 status
- Console shows "Internal Server Error"
- Backend logs show unhandled exceptions

**Solutions:**
1. **Check database connection:**
   ```bash
   cd backend
   npm run db:test
   ```

2. **Verify environment variables:**
   - Ensure `backend/.env` exists and has correct values
   - Check Firebase credentials are properly configured

3. **Check backend logs:**
   ```bash
   cd backend
   npm run dev
   ```
   Look for specific error messages in the console.

4. **Reset database:**
   ```bash
   cd backend
   rm database.sqlite
   npm run db:setup
   ```

### 2. WebSocket Connection Issues

**Symptoms:**
- "WebSocket connection failed" errors
- Real-time features not working
- Socket.io connection timeouts

**Solutions:**
1. **Check backend is running:**
   ```bash
   curl http://localhost:5001/api/health
   ```

2. **Verify WebSocket URL:**
   - Check `frontend/.env.local` has correct `VITE_WS_URL`
   - Should be `http://localhost:5001`

3. **Check CORS configuration:**
   - Backend should allow frontend origin
   - Verify `FRONTEND_URL` in backend/.env

4. **Test WebSocket connection:**
   ```javascript
   // In browser console
   const socket = io('http://localhost:5001');
   socket.on('connect', () => console.log('Connected!'));
   ```

### 3. Firebase Authentication Issues

**Symptoms:**
- "Invalid token" errors
- Authentication failures
- User not found errors

**Solutions:**
1. **Check Firebase configuration:**
   - Verify Firebase project ID matches
   - Check API keys in frontend/.env.local

2. **Test Firebase connection:**
   ```javascript
   // In browser console
   import { auth } from './src/config/firebase';
   console.log('Firebase auth:', auth);
   ```

3. **Check backend Firebase setup:**
   - Verify Firebase Admin SDK credentials
   - Check `FIREBASE_PROJECT_ID` in backend/.env

4. **Clear browser cache:**
   - Clear localStorage and sessionStorage
   - Hard refresh the page

### 4. API URL Issues

**Symptoms:**
- "Network Error" in frontend
- API calls fail with CORS errors
- Wrong API endpoints being called

**Solutions:**
1. **Check API URL configuration:**
   - Verify `VITE_API_URL` in frontend/.env.local
   - Should be `http://localhost:5001`

2. **Test API endpoints:**
   ```bash
   curl http://localhost:5001/api/health
   curl http://localhost:5001/api/listings
   ```

3. **Check proxy configuration:**
   - Verify vite.config.ts proxy settings
   - Should proxy `/api` to `http://localhost:5001`

### 5. Database Issues

**Symptoms:**
- "Database connection failed"
- Sequelize errors
- Table not found errors

**Solutions:**
1. **Check database file:**
   ```bash
   ls -la backend/database.sqlite
   ```

2. **Reset database:**
   ```bash
   cd backend
   rm database.sqlite
   npm run db:setup
   ```

3. **Check database models:**
   ```bash
   cd backend
   npm run db:migrate
   ```

### 6. Port Conflicts

**Symptoms:**
- "Port already in use" errors
- Services not starting
- Connection refused errors

**Solutions:**
1. **Check running processes:**
   ```bash
   # Windows
   netstat -ano | findstr :5001
   netstat -ano | findstr :3000
   
   # Mac/Linux
   lsof -i :5001
   lsof -i :3000
   ```

2. **Kill conflicting processes:**
   ```bash
   # Windows
   taskkill /PID <PID_NUMBER> /F
   
   # Mac/Linux
   kill -9 <PID_NUMBER>
   ```

3. **Use different ports:**
   - Change `PORT=5001` in backend/.env
   - Change `VITE_API_URL` in frontend/.env.local

### 7. Build Issues

**Symptoms:**
- Build failures
- TypeScript errors
- Missing dependencies

**Solutions:**
1. **Clean install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check TypeScript:**
   ```bash
   npm run build
   ```

3. **Update dependencies:**
   ```bash
   npm update
   ```

## Development Commands

### Backend Commands
```bash
cd backend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Test database connection
npm run db:test

# Setup database
npm run db:setup

# Run tests
npm test
```

### Frontend Commands
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

## Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=5001
DATABASE_URL=sqlite:./database.sqlite
FIREBASE_PROJECT_ID=ride-share-56610
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5001
VITE_WS_URL=http://localhost:5001
VITE_FIREBASE_PROJECT_ID=ride-share-56610
```

## Logs and Debugging

### Backend Logs
```bash
cd backend
npm run dev
# Check console output for errors
```

### Frontend Logs
```bash
cd frontend
npm run dev
# Check browser console for errors
```

### Database Logs
```bash
cd backend
npm run db:test
# Check database connection
```

## Performance Issues

### Slow API Responses
1. Check database queries
2. Verify indexes are created
3. Check for N+1 query problems

### Memory Issues
1. Check for memory leaks
2. Verify proper cleanup of event listeners
3. Monitor heap usage

### Network Issues
1. Check network latency
2. Verify CDN configuration
3. Check for large payloads

## Getting Help

1. **Check logs first** - Most issues are visible in console output
2. **Verify environment** - Ensure all environment variables are set
3. **Test components** - Try individual API endpoints
4. **Check documentation** - Refer to API documentation
5. **Search issues** - Look for similar problems online

## Quick Fixes

### Reset Everything
```bash
# Stop all services
# Kill any running processes

# Clean install
cd backend && rm -rf node_modules package-lock.json && npm install
cd frontend && rm -rf node_modules package-lock.json && npm install

# Reset database
cd backend && rm database.sqlite && npm run db:setup

# Start services
cd backend && npm run dev &
cd frontend && npm run dev
```

### Common Fixes
1. **Clear browser cache** - Hard refresh (Ctrl+Shift+R)
2. **Restart services** - Stop and restart both frontend and backend
3. **Check ports** - Ensure no conflicts on 3000 and 5001
4. **Verify environment** - Check all .env files exist and are correct
