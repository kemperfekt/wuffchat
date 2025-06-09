# Contributing to WuffChat (DogBot)

Thank you for your interest in contributing to WuffChat! We welcome contributions from developers, dog behavior experts, and anyone passionate about helping dog owners understand their furry friends better.

## 🐕 About the Project

**WuffChat** is an AI-powered conversational assistant that helps dog owners understand their furry friends by explaining behavior from the dog's perspective. The project uses advanced AI and a comprehensive knowledge base about canine instincts to provide empathetic, instinct-based behavioral analysis.

> **Technical Note**: This project is internally referred to as "DogBot" in repositories and code. WuffChat is the public-facing brand name.

## 🏗️ Repository Structure

This is a meta-repository that contains multiple specialized components:

| Repository | Purpose | Tech Stack |
|------------|---------|------------|
| **dogbot-agent** | Backend API & AI Logic | FastAPI, GPT-4, Weaviate |
| **dogbot-web** | Chat Interface | Vite, React, PWA, Tailwind |
| **dogbot-ops** | Data & Schema Management | Python, Content-as-Code |
| **dogbot-www** | Landing Page | Static HTML, Tailwind |

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (3.11 or higher)
- **Git**
- **OpenAI API Key** (for AI functionality)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kemperfekt/dogbot.git
   cd dogbot
   ```

2. **Set up the backend**
   ```bash
   cd dogbot-agent
   python -m venv venv
   source venv/bin/activate  # or `venv\Scripts\activate` on Windows
   pip install -r requirements.txt
   
   # Set environment variables
   export OPENAI_API_KEY=your_key_here
   
   # Run tests
   pytest
   
   # Start the API server
   uvicorn src.main:app --port 8000
   ```

3. **Set up the frontend**
   ```bash
   cd ../dogbot-web
   npm install
   
   # Copy environment template
   cp .env.development.template .env.development
   # Edit .env.development and add your API key
   
   # Run tests
   npm test
   
   # Start development server
   npm run dev
   ```

## 🤝 How to Contribute

### Development Workflow

1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
   ```bash
   # Backend tests
   cd dogbot-agent && pytest
   
   # Frontend tests
   cd dogbot-web && npm test
   ```
5. **Commit your changes** with a descriptive message
   ```bash
   git commit -m 'Add amazing feature: brief description'
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request** against the `main` branch

### Types of Contributions

We welcome various types of contributions:

#### 🐛 Bug Reports
- Use GitHub Issues with the "bug" label
- Include steps to reproduce
- Provide error messages and logs
- Specify your environment (OS, browser, versions)

#### ✨ Feature Requests
- Use GitHub Issues with the "enhancement" label
- Describe the use case and expected behavior
- Consider how it fits with the project's goals

#### 🧠 Knowledge Base Improvements
- Dog behavior expertise is highly valued
- Canine instinct research and documentation
- Training methodology improvements

#### 📝 Documentation
- README improvements
- Code comments and docstrings
- API documentation enhancements
- User guides and tutorials

#### 🧪 Testing
- Unit test improvements
- Integration test coverage
- Performance testing
- User experience testing

## 📋 Coding Standards

### Python (Backend)
- Follow **PEP 8** style guide
- Use **type hints** for function parameters and return values
- Write **docstrings** for all public functions and classes
- Maintain **test coverage** above 80%
- Use **pytest** for testing

### JavaScript/React (Frontend)
- Follow **ESLint** configuration
- Use **functional components** with hooks
- Write **PropTypes** or consider TypeScript
- Follow **React testing best practices**
- Use **Vitest** for testing

### General Guidelines
- Write **clear, descriptive commit messages**
- Keep **pull requests focused** on a single feature/fix
- Include **tests** for new functionality
- Update **documentation** when needed
- Follow the **existing code style** in each repository

## 🧠 Understanding the AI Flow

WuffChat uses a sophisticated finite state machine with 11 states:

```
START → GREETING → CONTEXT_GATHERING → INITIAL_ASSESSMENT 
     → INSTINCT_DIAGNOSIS → DETAILED_SOLUTION → FEEDBACK → END
```

### Core Instincts Model

The system analyzes behavior through four fundamental canine instincts:

- **Jagdinstinkt** (Prey Drive): Chase behavior, resource guarding
- **Territorialinstinkt** (Territorial): Space protection, alert behavior  
- **Rudelinstinkt** (Pack): Social hierarchy, cooperation
- **Sexualinstinkt** (Sexual): Mating behavior, competition

## 🛡️ Security Guidelines

- **Never commit** API keys, passwords, or sensitive data
- Use **environment variables** for configuration
- Follow **security best practices** for user data handling
- Report security vulnerabilities privately to the maintainers

## 🧪 Testing Requirements

### Backend Testing
```bash
cd dogbot-agent
pytest tests/ --cov=src --cov-report=html
```

### Frontend Testing
```bash
cd dogbot-web
npm test -- --coverage
```

### Required Test Coverage
- **New features**: Must include comprehensive tests
- **Bug fixes**: Must include regression tests
- **Minimum coverage**: 80% for new code

## 🚀 Deployment and CI/CD

- **Automatic deployment** on merge to `main`
- **Environment**: Scalingo hosting platform
- **Domains**: 
  - Frontend: app.wuffchat.de
  - API: api.wuffchat.de
  - Landing: wuffchat.de

## 📝 Pull Request Guidelines

### PR Title Format
```
type(scope): brief description

Examples:
feat(web): add dark mode toggle
fix(api): resolve session timeout issue
docs(readme): update installation instructions
```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No sensitive data committed
```

## 🐾 Dog Behavior Expertise

We especially welcome contributions from:

- **Certified dog trainers**
- **Veterinary behaviorists** 
- **Animal psychology researchers**
- **Experienced dog owners** with specific breed knowledge

### Contributing Knowledge
- Review existing instinct categorizations
- Suggest behavior pattern improvements
- Provide training methodology insights
- Share real-world case studies (anonymized)

## 📞 Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Ideas**: Start with a GitHub Discussion
- **Security**: Email maintainers privately

## 🌟 Recognition

Contributors will be:
- Listed in our **Contributors** section
- Credited in **release notes** for significant contributions
- Invited to join our **Contributors** team for ongoing involvement

## 📄 License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

**Happy Contributing!** 🐕✨

Together, we're building something that helps dogs and their humans understand each other better.