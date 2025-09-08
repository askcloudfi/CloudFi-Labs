# CloudFi Labs - Setup Guide

> Complete guide to set up the CloudFi Labs development environment

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

### System Requirements

#### Required Software
- **Node.js**: 18.0.0 or higher (LTS version recommended)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version && npm --version`
- **MySQL**: 8.0+ (or Docker for containerized setup)
  - Download from [mysql.com](https://dev.mysql.com/downloads/)
  - Alternative: Use Docker setup (recommended for development)
- **Git**: Latest version for version control
  - Download from [git-scm.com](https://git-scm.com/)
  - Configure with your name and email

#### Optional but Recommended
- **Docker**: For containerized database and consistent development environment
  - Download Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
  - Verify installation: `docker --version && docker-compose --version`
- **VS Code**: Recommended IDE with excellent TypeScript support
  - Download from [code.visualstudio.com](https://code.visualstudio.com/)
  - Install recommended extensions (see [Development Tools](#development-tools))

### Environment Verification

Run these commands to verify your setup:

```bash
# Check Node.js and npm versions
node --version  # Should be 18.0.0 or higher
npm --version   # Should be 9.0.0 or higher

# Check Git installation
git --version

# Check Docker (if using containerized database)
docker --version
docker-compose --version

# Check MySQL (if using local installation)
mysql --version
```

## 🗄️ Database Setup

Choose one of the following database setup options:

### Option 1: Docker Setup (Recommended)

Docker provides a consistent development environment and is easier to set up:

```bash
# Navigate to the database directory
cd database/

# Start MySQL container using Docker Compose
docker-compose up -d

# Verify container is running
docker ps | grep mysql

# Check container logs if needed
docker-compose logs mysql

# Stop the container when not needed
docker-compose down
```

**Docker Compose Configuration** (`database/docker-compose.yml`):
```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    container_name: cloudfi-mysql
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: cloudfi_dev
      MYSQL_USER: cloudfi_user
      MYSQL_PASSWORD: cloudfi_password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
      - ./init:/docker-entrypoint-initdb.d
    command: --default-authentication-plugin=mysql_native_password
    
volumes:
  mysql_data:
```

### Option 2: Local MySQL Installation

If you prefer a local MySQL installation:

```bash
# Install MySQL 8.0+ on your system
# For macOS with Homebrew:
brew install mysql
brew services start mysql

# For Ubuntu/Debian:
sudo apt update
sudo apt install mysql-server-8.0
sudo systemctl start mysql
sudo systemctl enable mysql

# For Windows:
# Download and install from https://dev.mysql.com/downloads/mysql/
```

**Create Development Database:**
```sql
-- Connect to MySQL as root
mysql -u root -p

-- Create database and user
CREATE DATABASE cloudfi_dev;
CREATE USER 'cloudfi_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON cloudfi_dev.* TO 'cloudfi_user'@'localhost';
FLUSH PRIVILEGES;

-- Verify database creation
SHOW DATABASES;
EXIT;
```

### Database Schema

For detailed information about the database schema, including table structures, relationships, and indexes, see the [Database Schema Documentation](./database-schema.md).

### Database Connection Testing

Test your database connection:

```bash
# Test MySQL connection
mysql -u cloudfi_user -p cloudfi_dev

# Or test Docker container connection
docker exec -it cloudfi-mysql mysql -u cloudfi_user -p cloudfi_dev
```

## 🐳 Docker Setup

CloudFi Labs provides full Docker support for both development and production environments.

### Docker Compose Files

The project includes two Docker Compose configurations:

1. **docker-compose.yml** - Production configuration
2. **docker-compose.dev.yml** - Development configuration with hot-reloading

### Development with Docker

To start the development environment with Docker:

```bash
# Start all services in development mode
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop all services
docker-compose -f docker-compose.dev.yml down
```

### Production Deployment with Docker

To deploy the application in production mode:

```bash
# Build and start all services
docker-compose up -d --build

# Scale services (optional)
docker-compose up -d --scale frontend=3

# View running containers
docker-compose ps
```

### Docker Commands

Common Docker commands for managing the application:

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

### Docker Environment Variables

The Docker setup uses environment variables defined in the Docker Compose files. You can customize these by creating a `.env` file in the root directory:

```env
# Database Configuration
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_DATABASE=cloudfi
MYSQL_USER=cloudfi_user
MYSQL_PASSWORD=cloudfi_password

# Application Ports
FRONTEND_PORT=3000
BACKEND_PORT=8000
MYSQL_PORT=3306
```

## 🚀 Project Setup

### 1. Clone Repository

```bash
# Clone the repository
git clone <repository-url>
cd cloudfi

# Verify project structure
ls -la
```

### 2. Install Dependencies

```bash
# Install all dependencies for the monorepo
# This installs dependencies for frontend, backend, and shared packages
npm install

# Verify installation
npm run type-check  # Should complete without errors
```

### 3. Environment Configuration

#### Backend Environment Setup
```bash
# Copy environment template
cp apps/backend/.env.example apps/backend/.env

# Edit the environment file
nano apps/backend/.env  # Or use your preferred editor
```

**Backend Environment Variables** (`apps/backend/.env`):
```env
# Database Configuration
DATABASE_URL="mysql://cloudfi_user:cloudfi_password@localhost:3306/cloudfi_dev"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Server Configuration
PORT=8000
NODE_ENV="development"

# CORS Configuration
FRONTEND_URL="http://localhost:3000"

# GraphQL Configuration
GRAPHQL_INTROSPECTION=true
GRAPHQL_PLAYGROUND=true
```

#### Frontend Environment Setup
```bash
# Copy environment template
cp apps/frontend/.env.local.example apps/frontend/.env.local

# Edit the environment file
nano apps/frontend/.env.local
```

**Frontend Environment Variables** (`apps/frontend/.env.local`):
```env
# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:8000"
NEXT_PUBLIC_GRAPHQL_URL="http://localhost:8000/graphql"

# Environment
NODE_ENV="development"

# Optional: Analytics and monitoring
# NEXT_PUBLIC_ANALYTICS_ID=""
```

### 4. Database Initialization

```bash
# Generate Prisma client (creates type-safe database client)
npm run db:generate

# Run database migrations (creates tables and schema)
npm run db:migrate

# Seed the database with initial development data
npm run db:seed

# Optional: Open Prisma Studio for database visualization
npm run db:studio  # Access at http://localhost:5555
```

**Verify Database Setup:**
```bash
# Check database tables
npm run db:studio

# Or connect directly to verify
mysql -u cloudfi_user -p cloudfi_dev
SHOW TABLES;
DESCRIBE users;  # Check user table structure
```

## 🎯 Development Environment

### Start Development Servers

#### Option 1: Start Everything (Recommended)
```bash
# Start both frontend and backend with one command
npm run dev

# This will start:
# - Frontend at http://localhost:3000
# - Backend at http://localhost:8000
# - GraphQL Playground at http://localhost:8000/graphql
```

#### Option 2: Start Services Individually
```bash
# Terminal 1: Start backend only
npm run dev:backend    # Starts at http://localhost:8000

# Terminal 2: Start frontend only
npm run dev:frontend   # Starts at http://localhost:3000

# Terminal 3: Optional - Database administration
npm run db:studio      # Starts at http://localhost:5555
```

### Verify Setup

#### 1. Test Backend API
```bash
# Test health endpoint
curl http://localhost:8000/health
# Expected: {"status":"ok","timestamp":"..."}

# Test database connection
curl http://localhost:8000/api/health/database
# Expected: {"status":"ok","database":"connected"}

# Test GraphQL endpoint
curl -X POST http://localhost:8000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ __typename }"}'
```

#### 2. Test Frontend Application
```bash
# Open in browser
open http://localhost:3000  # macOS
start http://localhost:3000 # Windows
xdg-open http://localhost:3000 # Linux

# Or test with curl
curl http://localhost:3000
```

#### 3. Access Development Tools
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **GraphQL Playground**: http://localhost:8000/graphql
- **Prisma Studio**: http://localhost:5555 (after running `npm run db:studio`)

## 🧪 Testing Setup

### Run Tests
```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests
npm run test:e2e         # End-to-end tests with Cypress

# Run tests with coverage
npm run test:coverage
```

### Test Database Setup
```bash
# Create test database (if needed)
mysql -u root -p -e "CREATE DATABASE cloudfi_test;"
mysql -u root -p -e "GRANT ALL PRIVILEGES ON cloudfi_test.* TO 'cloudfi_user'@'localhost';"

# Set test environment
export NODE_ENV=test
npm run db:migrate
```

## 🔧 Development Tools

### Recommended VS Code Extensions

Create `.vscode/extensions.json`:
```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "graphql.vscode-graphql",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### VS Code Settings

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## 🛠️ Available Scripts

### Root Level Scripts
```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start frontend only (localhost:3000)
npm run dev:backend      # Start backend only (localhost:8000)

# Database Operations
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run database migrations
npm run db:migrate:dev   # Run development migrations
npm run db:seed          # Seed database with sample data
npm run db:reset         # Reset database (drop + migrate + seed)
npm run db:studio        # Open Prisma Studio (localhost:5555)

# Building
npm run build            # Build both applications
npm run build:frontend   # Build frontend only
npm run build:backend    # Build backend only

# Testing
npm test                 # Run all tests
npm run test:unit        # Run unit tests
npm run test:e2e         # Run end-to-end tests
npm run test:coverage    # Generate test coverage report

# Code Quality
npm run lint             # Lint all workspaces
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking
```

### Project-Specific Scripts

#### Frontend (apps/frontend)
```bash
cd apps/frontend

npm run dev              # Development server (localhost:3000)
npm run build            # Production build
npm start                # Production server
npm run lint             # ESLint check
npm run type-check       # TypeScript validation
npm test                 # Run frontend tests
npm run test:e2e         # Cypress E2E tests
```

#### Backend (apps/backend)
```bash
cd apps/backend

npm run dev              # Development server (localhost:8000)
npm run build            # TypeScript compilation
npm start                # Production server
npm run lint             # ESLint check
npm run type-check       # TypeScript validation
npm test                 # Run backend tests
npm run test:watch       # Tests in watch mode
```

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Port Already in Use
```bash
# Find process using port
lsof -i :3000  # Frontend port
lsof -i :8000  # Backend port
lsof -i :3306  # MySQL port

# Kill process if needed
kill -9 <PID>

# Or change ports in configuration files
```

#### 2. Module Not Found Errors
```bash
# Clear node_modules and reinstall
npm run clean
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf apps/frontend/.next

# Clear TypeScript build cache
rm -rf apps/backend/dist
```

#### 3. Database Connection Issues
```bash
# Check MySQL service status
# For local installation:
sudo systemctl status mysql  # Linux
brew services list | grep mysql  # macOS

# For Docker:
docker ps | grep mysql
docker-compose logs mysql

# Test connection
mysql -u cloudfi_user -p cloudfi_dev
```

#### 4. TypeScript Compilation Errors
```bash
# Check TypeScript configuration
npm run type-check

# Check for version conflicts
npm ls typescript

# Reinstall TypeScript dependencies
npm install typescript@latest --save-dev
```

#### 5. Prisma Issues
```bash
# Regenerate Prisma client
npm run db:generate

# Reset database if needed
npm run db:reset

# Check Prisma studio
npm run db:studio
```

### Environment-Specific Issues

#### Windows-Specific
```bash
# Use PowerShell or Git Bash for commands
# Set execution policy if needed
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Use cross-env for environment variables
npm install -g cross-env
```

#### macOS-Specific
```bash
# Install Xcode Command Line Tools
xcode-select --install

# Use Homebrew for package management
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Performance Optimization

#### Development Performance
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"

# Use faster package manager (optional)
npm install -g pnpm
pnpm install  # Instead of npm install
```

## 📞 Getting Help

### Documentation Resources
- [Project Overview](./project-overview.md) - High-level project information
- [Architecture Guide](./architecture.md) - Technical architecture details
- [API Documentation](./api-documentation.md) - API reference and examples
- [Development Guidelines](./development-guidelines.md) - Coding standards and best practices

### Support Channels
- **GitHub Issues**: Report bugs and request features
- **Team Chat**: Slack #cloudfi-dev channel
- **Documentation**: Check existing documentation first
- **Email**: cloudfi-support@company.com for urgent issues

### Quick Commands Reference
```bash
# Essential commands for daily development
npm run dev                    # Start development environment
npm run db:studio             # Database administration
npm run test                  # Run all tests
npm run lint                  # Check code quality
npm run type-check           # Verify TypeScript
```

---

**Next Steps**: Once your environment is set up, check out:
- [Development Guidelines](./development-guidelines.md) for coding best practices
- [API Documentation](./api-documentation.md) for API reference
- [Architecture Guide](./architecture.md) for technical architecture details

*CloudFi Labs Setup Guide - Get up and running in minutes!* 🚀