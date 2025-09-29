#!/bin/bash

# Simple GitHub Pages Deployment Script
echo "🚀 Deploying RideShare SA to GitHub Pages..."

# Build the project
echo "📦 Building project..."
cd frontend
npm run build

# Copy files to root
echo "📁 Copying files to root..."
cd ..
cp -r frontend/dist/* .

# Add and commit
echo "💾 Committing changes..."
git add .
git commit -m "deploy: Update GitHub Pages with latest build"

# Push to main
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://lindanijay.github.io/RIDE-SHARE/"
echo "⏰ Please wait 5-10 minutes for GitHub Pages to update."
