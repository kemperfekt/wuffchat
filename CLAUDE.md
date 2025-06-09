# DogBot Development Guide

## Project Structure
- `dogbot/` - Meta-repository with documentation and project overview
- `dogbot-api/` - Backend API (FastAPI) - See `dogbot-api/CLAUDE.md` for detailed backend guidance
- `dogbot-web/` - Frontend application (Vite + React)
- `dogbot-data/` - Data management and Weaviate schemas
- `dogbot-www/` - Landing page (wuffchat.de)

## Current Version Strategy
- **v0.2.0**: Current stable system (static flow with rapport enhancements)
- **v0.3.0**: Target agentic system (in development on feature/agentic-v0.3 branches)

## Quick Development Commands

### Cross-Project Setup
```bash
# From this directory (/Users/philippkemper/Code/dogbot/dogbot)
cd ../dogbot-api && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt
cd ../dogbot-web && npm install
cd ../dogbot-data && python -m venv venv && source venv/bin/activate && pip install -r requirements.txt
```

### Running Services
```bash
# API Backend (from dogbot-api/)
source venv/bin/activate && python src/main.py

# Frontend (from dogbot-web/)
npm run dev

# Landing Page (from dogbot-www/)
npm run dev
```

## Repository-Specific Guidance
- **Backend Development**: See `../dogbot-api/CLAUDE.md` for API architecture, testing, and deployment
- **Frontend Development**: Standard Vite + React development in `../dogbot-web/`
- **Data Management**: Weaviate schemas and breed data in `../dogbot-data/`

## Security Notes
- Never commit API keys or sensitive environment variables
- Use `.env.development.template` files as templates
- Set production secrets as environment variables in deployment platforms

## Architecture Overview
Current system implements V2 Communication Strategy with:
- FSM-based conversation flow
- Multi-agent architecture (Dog Agent + Companion Agent)
- Rapport-building techniques with presence markers
- Integration with Weaviate for breed and behavior data

See `.CLAUDE_CONTENT/STRATEGY/V2_COMMUNICATION.md` for detailed communication strategy and agentic roadmap.