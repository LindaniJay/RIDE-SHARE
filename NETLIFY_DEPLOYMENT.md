# 🚀 Netlify Deployment Guide for RideShare SA

## Quick Setup Steps

### 1. **Prepare Your Repository**
- ✅ Ensure all code is committed to GitHub
- ✅ Make sure `frontend/` directory contains your React app
- ✅ Verify `package.json` has correct build scripts

### 2. **Deploy to Netlify**

#### Option A: Connect GitHub Repository (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click **"New site from Git"**
4. Choose **"GitHub"** as provider
5. Select your **ridesharex** repository
6. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

#### Option B: Drag & Drop (Quick Test)
1. Build your project locally:
   ```bash
   cd frontend
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag the `frontend/dist` folder to the deploy area

### 3. **Configure Environment Variables**
In Netlify dashboard → Site settings → Environment variables:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_WS_URL=https://your-backend-url.com
```

### 4. **Custom Domain (Optional)**
1. Go to **Domain settings** in Netlify
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `rideshare-sa.com`)
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

### 5. **Backend Hosting Options**

#### Option A: Netlify Functions (Serverless)
- Create `netlify/functions/` directory
- Move your backend logic to serverless functions
- Perfect for API endpoints

#### Option B: Separate Backend Hosting
- Use Railway, Render, or Heroku for backend
- Update `VITE_WS_URL` environment variable
- Backend runs independently

#### Option C: Netlify Edge Functions
- For real-time features
- Global edge deployment
- Great for WebSocket connections

## 🔧 Build Configuration

### Netlify Settings:
- **Framework**: Vite
- **Node version**: 18
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: `frontend`

### Environment Variables Required:
```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Backend URL
VITE_WS_URL=

# App Configuration
VITE_APP_TITLE=RideShare SA
VITE_APP_DESCRIPTION=South Africa's Leading Peer-to-Peer Vehicle Rental Platform
```

## 🚀 Deployment Commands

### Local Build Test:
```bash
cd frontend
npm install
npm run build
npm run preview
```

### Deploy to Netlify:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=frontend/dist
```

## 📊 Monitoring & Analytics

### Netlify Analytics:
- Built-in analytics dashboard
- Page views, unique visitors
- Performance metrics
- Form submissions

### Custom Analytics:
- Google Analytics integration
- Custom event tracking
- User behavior analysis

## 🔒 Security & Performance

### Automatic Features:
- ✅ HTTPS/SSL certificates
- ✅ Global CDN
- ✅ DDoS protection
- ✅ Form spam protection
- ✅ Asset optimization

### Custom Headers:
- Security headers configured
- Cache optimization
- Service worker support

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check Node.js version (use 18)
   - Verify all dependencies installed
   - Check for TypeScript errors

2. **Environment Variables Not Working**
   - Ensure variables start with `VITE_`
   - Redeploy after adding variables
   - Check variable names match exactly

3. **Routing Issues**
   - SPA redirects configured in `netlify.toml`
   - All routes redirect to `index.html`

4. **Backend Connection Issues**
   - Verify `VITE_WS_URL` is correct
   - Check CORS settings on backend
   - Ensure backend is deployed and accessible

## 📞 Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Community**: [community.netlify.com](https://community.netlify.com)
- **Status**: [status.netlify.com](https://status.netlify.com)

---

**Ready to deploy? Follow the steps above and your RideShare SA app will be live on Netlify! 🎉**
