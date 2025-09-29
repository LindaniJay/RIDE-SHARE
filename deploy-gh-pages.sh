#!/bin/bash

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Navigate back to root
cd ..

# Copy dist files to root for GitHub Pages
echo "📁 Copying build files..."
cp -r frontend/dist/* .

# Add all files
git add .

# Commit changes
git commit -m "deploy: Update GitHub Pages with latest build"

# Push to main branch
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://lindanijay.github.io/RIDE-SHARE/"
