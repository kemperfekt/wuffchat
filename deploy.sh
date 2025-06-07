#!/bin/bash

# WuffChat Deployment Script
# Usage: ./deploy.sh [staging|production]

set -e

ENVIRONMENT=${1:-staging}

echo "🚀 Building WuffChat for $ENVIRONMENT..."

# Build the application
npm run build

echo "✅ Build completed successfully!"

if [ "$ENVIRONMENT" = "production" ]; then
    echo "🔥 Production deployment"
    echo "Upload the 'dist' folder contents to your production server"
    echo "Make sure to set VITE_API_URL and VITE_API_KEY in production environment"
else
    echo "🧪 Staging deployment"
    echo "Upload the 'dist' folder contents to your staging server"
fi

echo ""
echo "📦 Build assets:"
ls -la dist/

echo ""
echo "🌐 PWA files generated:"
ls -la dist/*.webmanifest dist/sw.js dist/registerSW.js 2>/dev/null || echo "PWA files not found"

echo ""
echo "✨ Deployment ready!"
echo "📱 Users can install this as a PWA app"
echo "🔄 Updates will be automatic"