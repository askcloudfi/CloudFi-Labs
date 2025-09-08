# CloudFi-Labs

[![Node.js Version](https://img.shields.io/badge/Node.js-18.0.0%2B-brightgreen)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Docker](https://img.shields.io/badge/docker-supported-blue)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-black)](https://expressjs.com/)

> A comprehensive cloud finance platform built with modern technologies

## 📋 Quick Navigation

### 📖 Documentation
- **[📊 Project Overview](./docs/project-overview.md)** - High-level project information and business value
- **[📈 Project Management](./docs/project-management.md)** - Project planning, timelines, and team coordination
- **[🏗️ Architecture Guide](./docs/architecture.md)** - Technical architecture and system design
- **[🛠️ Technology Stack](./docs/technology-stack.md)** - Detailed technology choices and rationale
- **[🚀 Setup Guide](./docs/setup-guide.md)** - Complete development environment setup
- **[🌐 API Documentation](./docs/api-documentation.md)** - REST and GraphQL API reference
- **[🗄️ Database Schema](./docs/database-schema.md)** - Database structure and relationships
- **[📝 Development Guidelines](./docs/development-guidelines.md)** - Coding standards and best practices
- **[🚢 Deployment Guide](./docs/deployment-guide.md)** - Release management and deployment processes

### 🎯 Quick Links
- **[🚀 Get Started](#-quick-start)** - Set up the project in minutes
- **[📜 Available Scripts](#-available-scripts)** - All available npm commands
- **[🔧 Troubleshooting](#-troubleshooting)** - Common issues and solutions
- **[🤝 Contributing](#-contributing)** - How to contribute to the project

## 🚀 Project Overview

CloudFi Labs is a full-stack monorepo application built with Next.js for the frontend and Node.js/Express for the backend, all written in TypeScript. This platform provides comprehensive financial management tools designed for the modern cloud infrastructure.

> 📖 **For detailed project information, see [Project Overview](./docs/project-overview.md)**

## 📈 Project Management

This project follows Agile/Scrum methodology with comprehensive planning and tracking processes.

> 📖 **For complete project management information, see [Project Management Guide](./docs/project-management.md)**

**Current Status:** Phase 2 - Core Features (In Progress)  
**Sprint Goal:** Complete user authentication and enhanced user management features

## 🏗️ Architecture

CloudFi Labs follows a modern, scalable, three-tier architecture:

```
Frontend (Next.js) 
    ↑↓ GraphQL/REST API
GraphQL Layer (Apollo Server)
    ↑↓ Resolvers
Business Logic (Services)
    ↑↓ ORM (Prisma)
MySQL Database
```

> 📖 **For detailed architecture information, see [Architecture Guide](./docs/architecture.md)**
## 🛠️ Technology Stack

CloudFi Labs is built with a modern, enterprise-grade technology stack:

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Apollo Client
- **Backend**: Node.js, Express.js, TypeScript, GraphQL
- **Database**: MySQL 8.0+ with Prisma ORM
- **Development**: Docker, ESLint, Prettier, Jest, Cypress
- **Deployment**: Docker Compose, CI/CD pipelines

> 📖 **For detailed technology information, see [Technology Stack Guide](./docs/technology-stack.md)**

## 📝 Prerequisites

Before you begin, ensure you have:

- **Node.js**: 18.0.0 or higher
- **MySQL**: 8.0+ (or Docker)
- **Git**: Latest version
- **Docker**: Latest version (for containerized deployment)

> 📖 **For complete setup requirements, see [Setup Guide](./docs/setup-guide.md)**

## 🚀 Quick Start

Get up and running in minutes:

### Option 1: Using Docker (Recommended)
```bash
# 1. Clone the repository
git clone <repository-url>
cd cloudfi

# 2. Start all services with Docker
docker-compose up -d

# 3. Access your application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# GraphQL Playground: http://localhost:8000/graphql
```

### Option 2: Manual Setup
```bash
# 1. Clone and install
git clone <repository-url>
cd cloudfi
npm install

# 2. Setup database (Docker recommended)
docker-compose -f database/docker-compose.yml up -d

# 3. Configure environment
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.local.example apps/frontend/.env.local

# 4. Initialize database
npm run db:generate
npm run db:migrate
npm run db:seed

# 5. Start development servers
npm run dev
```

**Access your application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- GraphQL Playground: http://localhost:8000/graphql

> 📖 **For detailed setup instructions, see [Setup Guide](./docs/setup-guide.md)**

## 📜 Available Scripts

**Essential Commands:**
```bash
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start frontend only
npm run dev:backend      # Start backend only
npm run db:studio        # Open database admin interface
npm test                 # Run all tests
npm run build            # Build for production
npm run lint             # Check code quality
```

**Docker Commands:**
```bash
docker-compose up -d              # Start all services
docker-compose -f docker-compose.dev.yml up -d  # Start dev services
docker-compose down               # Stop all services
docker-compose build              # Build all images
docker-compose logs -f            # View live logs
```

> 📖 **For complete script reference, see [Setup Guide](./docs/setup-guide.md#available-scripts)**

## 🌐 API Documentation

**Key Endpoints:**
- `GET /health` - Health check
- `GET /api/users` - User management
- `POST /graphql` - GraphQL API

> 📖 **For complete API documentation, see [API Documentation](./docs/api-documentation.md)**
## 🔧 Troubleshooting

**Common Issues:**

1. **Port conflicts**: Change ports in `.env` files
2. **Module not found**: Run `npm install` in root directory
3. **Database connection**: Check MySQL service and credentials
4. **Build failures**: Run `npm run clean && npm install`

```bash
# Reset everything
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run dev
```

> 📖 **For detailed troubleshooting, see [Setup Guide](./docs/setup-guide.md#troubleshooting)**

## 🔍 Development Guidelines

**Key Principles:**
- Follow TypeScript and ESLint configurations
- Use conventional commit messages
- Write tests for new features
- Update documentation as needed

> 📖 **For complete guidelines, see [Development Guidelines](./docs/development-guidelines.md)**

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'feat: add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

> 📖 **For detailed contribution guidelines, see [Development Guidelines](./docs/development-guidelines.md#contributing-guidelines)**

## 🐳 Docker Support

CloudFi Labs provides full Docker support for easy deployment and development.

### Docker Compose Services
- **Frontend**: Next.js application on port 3000
- **Backend**: Express API on port 8000
- **Database**: MySQL 8.0 on port 3306

### Development with Docker
```bash
# Start all services in development mode
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Production Deployment with Docker
```bash
# Build and start all services
docker-compose up -d --build

# Scale services (optional)
docker-compose up -d --scale frontend=3

# View running containers
docker-compose ps
```

### Docker Commands
```bash
# Build images
docker-compose build

# Rebuild specific service
docker-compose build frontend

# Execute commands in running container
docker-compose exec backend sh

# View container logs
docker-compose logs frontend
```

## 🚀 Deployment

CloudFi Labs uses automated deployment with multiple environments:

- **Development**: Local development environment
- **Staging**: `https://staging.cloudfi-labs.com`
- **Production**: `https://cloudfi-labs.com`

> 📖 **For complete deployment information, see [Deployment Guide](./docs/deployment-guide.md)**

## 📚 Additional Resources

### Learning Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [GraphQL Documentation](https://graphql.org/learn/)

### Tools & Extensions
- [VS Code](https://code.visualstudio.com/) with recommended extensions
- [Postman](https://www.postman.com/) for API testing
- [MySQL Workbench](https://www.mysql.com/products/workbench/) for database management

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Node.js](https://nodejs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

**CloudFi Labs** - Empowering financial operations with modern cloud technology. 🚀

*For questions, issues, or contributions, please check our [documentation](./docs/) or open an issue on GitHub.*

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in package.json or .env files
2. **Module not found**: Run `npm install` in the root directory
3. **TypeScript errors**: Run `npm run type-check` to identify issues
4. **Build failures**: Check for TypeScript or linting errors

### Useful Commands

```bash
# Clear all node_modules and reinstall
npm run clean && npm install

# Reset Next.js cache
rm -rf apps/frontend/.next

# Reset TypeScript build
rm -rf apps/backend/dist
```

## 📚 Project Structure Details

### Frontend Structure
```
apps/frontend/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── styles/          # CSS and styling
├── public/              # Static assets
├── next.config.js       # Next.js configuration
└── tailwind.config.ts   # Tailwind CSS config
```

### Backend Structure
```
apps/backend/
├── src/
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Express middleware
│   ├── routes/         # API routes
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   └── index.ts        # Application entry point
└── .env.example        # Environment variables template
```

## 🤝 Contributing

### For Developers
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### For Project Managers
1. **Planning**: Use GitHub Projects for sprint planning and backlog management
2. **Tracking**: Monitor progress through GitHub Issues and project boards
3. **Reporting**: Generate weekly reports using GitHub Insights and project metrics
4. **Communication**: Use GitHub Discussions for team communication and decision tracking

## 📈 Project Metrics & KPIs

### Development Metrics
- **Velocity**: Average story points per sprint
- **Burn-down Rate**: Sprint progress tracking
- **Code Quality**: Test coverage, code review metrics
- **Bug Rate**: Issues found per release

### Business Metrics
- **Feature Adoption**: Usage statistics for new features
- **User Satisfaction**: Net Promoter Score (NPS)
- **Performance**: System uptime and response times
- **ROI**: Return on investment tracking

## 🔍 Quality Assurance

### Testing Strategy
- **Unit Tests**: 80%+ code coverage requirement
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Critical user journey validation
- **Performance Tests**: Load testing for scalability

### Quality Gates
- All tests must pass before merge
- Code review approval required
- Security scan completion
- Performance benchmarks met

## 🚀 Deployment & Release Management

### Environments
- **Development**: Local development environment
- **Staging**: Pre-production testing environment
- **Production**: Live production environment

### Release Process
1. **Feature Freeze**: 2 days before release
2. **QA Testing**: Comprehensive testing in staging
3. **Release Approval**: Stakeholder sign-off
4. **Deployment**: Automated deployment with rollback capability
5. **Post-Release**: Monitoring and validation

### Release Schedule
- **Major Releases**: Monthly (new features)
- **Minor Releases**: Bi-weekly (enhancements)
- **Hotfixes**: As needed (critical bugs)

## 📞 Project Contacts

### Key Personnel
- **Project Manager**: [Contact Information]
- **Tech Lead**: [Contact Information]
- **Product Owner**: [Contact Information]
- **DevOps Lead**: [Contact Information]

### Communication Channels
- **Slack**: #cloudfi-dev (development team)
- **Slack**: #cloudfi-pm (project management)
- **Email**: cloudfi-team@company.com
- **Video Calls**: Weekly all-hands meetings

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Node.js](https://nodejs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

**CloudFi Labs** - Empowering financial operations with modern cloud technology. 🚀