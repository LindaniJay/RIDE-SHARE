#!/bin/bash

# Netlify build script for RideShare SA
echo "🚀 Building RideShare SA for Netlify deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running TypeScript type checking..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output: dist/"
    echo "🌐 Ready for Netlify deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
