# WuffChat - Frontend Application

A modern, secure PWA version of WuffChat built with Vite, React, and Tailwind CSS.

> **Note**: This is the migrated frontend that replaced the old Create React App version.

---

## 🎯 What is WuffChat?

**WuffChat** is an AI-powered conversational assistant that helps dog owners understand their furry friends by **explaining behavior from the dog's perspective**. Built on V3 agentic architecture with BDI (Beliefs-Desires-Intentions) pattern, WuffChat uses autonomous decision-making and tool integration to provide empathetic, instinct-based behavioral analysis.

> **Technical Note**: This project is internally referred to as "DogBot" in repositories and code. WuffChat is the public-facing brand name.

```mermaid
graph LR
    A[🧑 Dog Owner] -->|Describes Behavior| B[💬 WuffChat]
    B -->|Analyzes| C[🧠 AI Engine]
    C -->|Searches| D[📚 Knowledge Base]
    D -->|Returns| E[🐕 Dog's Perspective]
    E -->|Provides| F[💡 Training Tips]
    F -->|Helps| A
```

## 🏗️ Architecture Overview

```mermaid
graph TB
    subgraph "Frontend"
        UI[dogbot-web<br/>Vite + React PWA]
    end
    
    subgraph "Backend - V3 Agentic Architecture"
        API[dogbot-api<br/>FastAPI]
        AGENT[V3 Agent<br/>BDI Pattern]
        TOOLS[Knowledge Tools<br/>Weaviate Integration]
        AI[GPT-4<br/>Autonomous Decisions]
    end
    
    subgraph "Data Layer"
        VDB[(Weaviate<br/>Vector Knowledge Base)]
        CACHE[(Redis<br/>Session Storage)]
        MOCK[Mock Services<br/>Development Fallback]
    end
    
    subgraph "Infrastructure"
        OPS[dogbot-data<br/>Content Management]
        WWW[dogbot-www<br/>Landing Page]
    end
    
    UI <-->|V3 REST API| API
    API --> AGENT
    AGENT <--> TOOLS
    TOOLS <--> VDB
    TOOLS <--> MOCK
    AGENT --> AI
    API <--> CACHE
    OPS -->|Manages| VDB
    
    style UI fill:#61DAFB,color:#000
    style API fill:#009688,color:#fff
    style AGENT fill:#FF6B35,color:#fff
    style AI fill:#412991,color:#fff
    style VDB fill:#2C2C2C,color:#fff
```

## 🚀 Quick Start

```bash
# Clone the meta repository
git clone https://github.com/kemperfekt/dogbot.git
cd dogbot

# Start the backend (V3 architecture)
cd dogbot-api
pip install -r requirements.txt
export OPENAI_APIKEY=your_key_here
export WEAVIATE_URL=your_weaviate_url
export WEAVIATE_API_KEY=your_weaviate_key
python -m uvicorn src.main:app --port 8000

# In a new terminal, start the frontend
cd ../dogbot-web
npm install
npm run dev

# Set up environment
cp .env.development.template .env.development
# Edit .env.development and add your API key

# Start development server
npm run dev

## 📦 Repository Structure

| Repository | Purpose | Tech Stack | Status |
|------------|---------|------------|--------|
| **[dogbot-api](https://github.com/kemperfekt/dogbot-api)** | V3 Agentic Backend | FastAPI, GPT-4, BDI Architecture | ✅ Production |
| **[dogbot-web](https://github.com/kemperfekt/dogbot-web)** | V3-Compatible Chat Interface | Vite, React, PWA, Tailwind | ✅ Production |
| **[dogbot-data](https://github.com/kemperfekt/dogbot-data)** | Data & Schema Management | Python, Content-as-Code | ✅ Active |
| **[dogbot-www](https://github.com/kemperfekt/dogbot-www)** | Landing Page | Static HTML, Tailwind | ✅ Live |

## 🧠 How It Works

### V3 Agentic Conversation Flow

```mermaid
flowchart TD
    A[User Input] --> B[Belief Extraction]
    B --> C[Agent Decision Making]
    C --> D{Needs Knowledge?}
    D -->|Yes| E[Use Weaviate Tools]
    D -->|No| F[Direct Response]
    E --> G[Integrate Knowledge]
    G --> H[Generate Response]
    F --> H
    H --> I[Update Beliefs]
    I --> J[User Response]
    J --> A
    
    subgraph "Tools Available"
        K[get_perspective]
        L[analyze_instinct]
        M[recommend_exercise]
    end
    
    E -.-> K
    E -.-> L
    E -.-> M
    
    style C fill:#FF6B35,color:#fff
    style E fill:#2C2C2C,color:#fff
```

### Core Instincts Model

WuffChat analyzes behavior through four fundamental canine instincts:

```mermaid
mindmap
  root((Dog Behavior))
    Jagdinstinkt
      Prey Drive
      Chase Behavior
      Resource Guarding
    Territorialinstinkt
      Space Protection
      Boundary Setting
      Alert Behavior
    Rudelinstinkt
      Pack Dynamics
      Social Hierarchy
      Cooperation
    Sexualinstinkt
      Mating Behavior
      Competition
      Hormonal Changes
```

## 🔧 Development

### Local Development Setup

Each repository has its own development environment:

```bash
# Backend development (V3 architecture)
cd dogbot-api
python -m venv .venv
source .venv/bin/activate  # or `.venv\Scripts\activate` on Windows
pip install -r requirements.txt
pip install -r requirements-dev.txt
pytest  # Run tests

# Run V3 architecture
python -m uvicorn src.v3.main:app --port 8000  # V3 only
# OR
python -m uvicorn src.main:app --port 8000      # V2/V3 unified

# Frontend development
cd dogbot-web
npm install
npm test

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

**dogbot-web/.env.development**
```env
VITE_API_URL=http://localhost:8000
VITE_API_KEY=your_api_key_here
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

```mermaid
graph LR
    A[GitHub Push] -->|Webhook| B[Scalingo Build]
    B -->|Deploy| C[Production]
    C --> D[app.wuffchat.de]
    C --> E[api.wuffchat.de]
    C --> F[wuffchat.de]
```

### Manual Deployment

```bash
# Deploy backend
cd dogbot-api
git push scalingo main

# Deploy frontend
cd dogbot-web
git push scalingo main
```

## 📊 API Documentation

The API is fully documented with OpenAPI/Swagger:

- **Local**: http://localhost:8000/docs
- **Production**: https://api.wuffchat.de/docs

### Key Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/v3/start` | POST | Start V3 agentic conversation |
| `/v3/message` | POST | Send message to V3 agent |
| `/v3/session/{session_id}` | GET | Get session state |
| `/v2/message` | POST | V2 compatibility endpoint |
| `/feedback` | POST | Submit feedback |

## 🧪 Testing

```bash
# Run all tests
cd dogbot-api && pytest
cd ../dogbot-web && npm test

# Run specific test suites
pytest tests/v3/agents/test_dog_agent.py
pytest tests/v3/tools/test_weaviate_tool.py
npm test -- --coverage
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🛡️ Security & Privacy

- All conversations are anonymous
- No personal data is stored without consent
- OpenAI API calls use anonymized prompts
- See our [Privacy Policy](https://wuffchat.de/datenschutz.html)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


## 📝 Naming Convention

- **WuffChat**: Public-facing product name (used in marketing, UI, and customer communication)
- **DogBot**: Internal technical name (used in code, repositories, and technical documentation)

This dual naming allows us to maintain technical consistency while presenting a friendly brand to users.

---

Built with ❤️ using Vite + React
