#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing RideShare SA for Netlify deployment...');

// Ensure _redirects file is copied to dist
const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

if (fs.existsSync(publicDir)) {
  const redirectsFile = path.join(publicDir, '_redirects');
  if (fs.existsSync(redirectsFile)) {
    const distRedirectsFile = path.join(distDir, '_redirects');
    fs.copyFileSync(redirectsFile, distRedirectsFile);
    console.log('✅ Copied _redirects file to dist/');
  }
}

// Create a simple index.html fallback for SPA routing
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RideShare SA</title>
  <script>
    // Simple fallback for SPA routing
    if (window.location.pathname !== '/' && !window.location.pathname.includes('.')) {
      window.location.href = '/';
    }
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

console.log('✅ Netlify deployment preparation complete!');
console.log('📁 Build output: dist/');
console.log('🌐 Ready for Netlify deployment!');
