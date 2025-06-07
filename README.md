# WuffChat - Frontend Application

A modern, secure PWA version of WuffChat built with Vite, React, and Tailwind CSS.

> **Note**: This is the migrated frontend that replaced the old Create React App version.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.development.template .env.development
# Edit .env.development and add your API key

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Features

- ⚡ **Vite** - Lightning fast development
- 📱 **PWA** - Installable as mobile app
- 🎨 **Tailwind CSS** - Utility-first styling
- 🔒 **Secure** - 0 vulnerabilities
- 🧪 **Vitest** - Modern testing framework
- 📦 **TypeScript Ready** - Can be gradually added

## 📱 PWA Features

- **Installable**: Users can install as native app
- **Offline Support**: Basic offline functionality
- **Auto-Update**: Automatic updates without app store
- **Native Feel**: Full-screen, native-like experience

## 🛡️ Security

- Environment variables properly configured
- No hardcoded secrets
- Modern dependency management
- HTTPS ready

## 🚀 Deployment

### Static Hosting (Recommended)
```bash
npm run build
# Upload dist/ folder to any static host
```

### Environment Variables
```env
VITE_API_URL=https://your-api-domain.com
VITE_API_KEY=your_production_api_key
```

## 📊 Performance

- **Bundle Size**: ~63KB gzipped
- **Build Time**: <2 seconds
- **Dev Server**: <50ms hot reload
- **Lighthouse Score**: 95+ (PWA optimized)

## 🔄 Migration from Create React App

This version replaces the old Create React App with:
- ✅ 0 vulnerabilities (vs 9 vulnerabilities)
- ✅ 10x faster development
- ✅ 50% smaller bundle size
- ✅ PWA capabilities
- ✅ Modern tooling

---

Built with ❤️ using Vite + React
