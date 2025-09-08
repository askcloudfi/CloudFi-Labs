# CloudFi Labs - Development Guidelines

> Comprehensive development standards, best practices, and contribution guidelines

## 📋 Table of Contents

- [Code Style Guidelines](#-code-style-guidelines)
- [File Structure Standards](#-file-structure-standards)
- [Git Workflow](#-git-workflow)
- [Testing Standards](#-testing-standards)
- [Documentation Standards](#-documentation-standards)
- [Performance Guidelines](#-performance-guidelines)
- [Security Best Practices](#-security-best-practices)
- [Code Review Process](#-code-review-process)
- [Quality Assurance](#-quality-assurance)
- [Troubleshooting Guidelines](#-troubleshooting-guidelines)

## 🎨 Code Style Guidelines

### TypeScript/JavaScript Standards

#### General Principles
- **Consistency**: Follow established patterns throughout the codebase
- **Readability**: Write code that tells a story and is self-documenting
- **Simplicity**: Prefer simple, clear solutions over clever ones
- **Performance**: Consider performance implications of code choices
- **Type Safety**: Leverage TypeScript's type system for reliability

#### Naming Conventions

```typescript
// Variables and functions: camelCase
const userName = 'john_doe';
const getUserById = (id: string) => { ... };

// Classes: PascalCase
class UserService { ... }
class ApiController { ... }

// Interfaces and Types: PascalCase with descriptive names
interface User {
  id: string;
  email: string;
}

type ApiResponse<T> = {
  data: T;
  success: boolean;
};

// Constants: SCREAMING_SNAKE_CASE
const MAX_RETRY_ATTEMPTS = 3;
const DEFAULT_PAGE_SIZE = 10;

// Files and directories: kebab-case
user-controller.ts
api-endpoints/
user-management/

// Database entities: PascalCase (Prisma convention)
model User { ... }
model UserProfile { ... }
```

#### Code Formatting Rules

```typescript
// Use meaningful variable names
// ❌ Bad
const u = users.filter(x => x.a);

// ✅ Good
const activeUsers = users.filter(user => user.isActive);

// Function declarations with proper typing
// ✅ Good
async function createUser(userData: CreateUserInput): Promise<User> {
  // Implementation
}

// Object destructuring for cleaner code
// ✅ Good
const { name, email, role } = user;
const { data, error } = await apiCall();

// Use template literals for string composition
// ✅ Good
const message = `Welcome ${user.name}, your role is ${user.role}`;

// Proper error handling
// ✅ Good
try {
  const result = await riskyOperation();
  return { data: result, success: true };
} catch (error) {
  logger.error('Operation failed:', error);
  return { error: error.message, success: false };
}
```

### React/Next.js Standards

#### Component Structure
```typescript
// Component file structure
import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { Button } from '@/components/ui/button';

interface UserProfileProps {
  user: User;
  onUpdate: (user: User) => void;
}

export function UserProfile({ user, onUpdate }: UserProfileProps) {
  // State declarations
  const [isEditing, setIsEditing] = useState(false);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, [user]);
  
  // Event handlers
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  // Render
  return (
    <div className="user-profile">
      {/* Component JSX */}
    </div>
  );
}
```

#### Hooks Usage
```typescript
// Custom hooks should start with 'use'
function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(setUser).finally(() => setLoading(false));
  }, [userId]);
  
  return { user, loading };
}

// Use meaningful hook dependencies
useEffect(() => {
  // Effect logic
}, [userId, isActive]); // Clear dependencies
```

### CSS/Styling Standards

#### Tailwind CSS Guidelines
```typescript
// Use consistent spacing scale
<div className="p-4 m-2 space-y-4">

// Group related classes logically
<button 
  className={`
    px-4 py-2 
    bg-blue-500 hover:bg-blue-600 
    text-white font-medium 
    rounded-lg 
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `}
>

// Use component variants for reusability
const buttonVariants = {
  primary: 'bg-blue-500 hover:bg-blue-600',
  secondary: 'bg-gray-500 hover:bg-gray-600',
  danger: 'bg-red-500 hover:bg-red-600'
};
```

## 📁 File Structure Standards

### Project Organization

```
apps/
├── frontend/
│   ├── src/
│   │   ├── app/                 # Next.js 14 App Router
│   │   │   ├── (auth)/          # Route groups
│   │   │   ├── dashboard/       # Feature-based routing
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── page.tsx         # Homepage
│   │   ├── components/          # Reusable UI components
│   │   │   ├── ui/              # Base UI components
│   │   │   ├── forms/           # Form components
│   │   │   └── layout/          # Layout components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utilities and configurations
│   │   ├── styles/              # Global styles
│   │   └── types/               # TypeScript type definitions
│   └── public/                  # Static assets
└── backend/
    ├── src/
    │   ├── controllers/         # HTTP request handlers
    │   ├── services/            # Business logic
    │   ├── models/              # Database models
    │   ├── middleware/          # Express middleware
    │   ├── routes/              # API route definitions
    │   ├── utils/               # Helper functions
    │   └── types/               # TypeScript types
    └── prisma/                  # Database schema and migrations
```

### File Naming Conventions

```typescript
// Component files: PascalCase
UserProfile.tsx
UserProfileForm.tsx

// Hook files: camelCase starting with 'use'
useUserData.ts
useFormValidation.ts

// Utility files: camelCase
apiClient.ts
dateHelpers.ts

// Page files: kebab-case (Next.js convention)
user-profile.tsx
dashboard.tsx

// API route files: kebab-case
user-controller.ts
auth-middleware.ts
```

### Import/Export Standards

```typescript
// Use named exports for components and utilities
export function UserProfile() { ... }
export const apiClient = { ... };

// Use default exports for pages and single-purpose modules
export default function HomePage() { ... }

// Organize imports: external first, then internal
import { useState } from 'react';
import { NextPage } from 'next';

import { Button } from '@/components/ui/button';
import { useUserData } from '@/hooks/useUserData';
import { User } from '@/types/user';

// Use barrel exports for cleaner imports
// components/index.ts
export { Button } from './ui/button';
export { UserProfile } from './UserProfile';
```

## 🔄 Git Workflow

### Branch Strategy

```bash
# Main branches
main           # Production-ready code
develop        # Development integration branch

# Feature branches
feature/user-authentication
feature/dashboard-ui
feature/api-endpoints

# Bug fix branches
bugfix/login-validation
hotfix/security-patch

# Release branches
release/v1.0.0
```

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format: <type>[optional scope]: <description>
# Examples:
feat(auth): add JWT token authentication
fix(api): resolve user creation validation bug
docs(readme): update setup instructions
style(frontend): fix component spacing
refactor(backend): optimize database queries
test(api): add user controller unit tests
chore(deps): update dependencies to latest versions

# Breaking changes
feat(api)!: change user schema structure

# Longer description example
feat(dashboard): add real-time cost monitoring

Add WebSocket integration for real-time cost updates
- Implement WebSocket server for live data streaming
- Create dashboard components for real-time charts
- Add connection status indicator

Closes #123
```

### Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes with Good Commits**
   ```bash
   git add .
   git commit -m "feat(component): add user profile component"
   ```

3. **Update with Latest Changes**
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/new-feature
   git rebase main
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/new-feature
   # Create PR via GitHub interface
   ```

5. **PR Requirements**
   - Clear description of changes
   - Reference related issues
   - All tests passing
   - Code review approval
   - No merge conflicts

### Code Review Checklist

#### For Authors
- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] Proper error handling
- [ ] TypeScript types are correct

#### For Reviewers
- [ ] Code is readable and maintainable
- [ ] Logic is correct and efficient
- [ ] Security considerations addressed
- [ ] Test coverage is adequate
- [ ] Breaking changes are documented

## 🧪 Testing Standards

### Testing Philosophy
- **Test Pyramid**: More unit tests, fewer integration tests, minimal E2E tests
- **Test-Driven Development**: Write tests before implementation when possible
- **Meaningful Tests**: Tests should verify behavior, not implementation
- **Fast Feedback**: Tests should run quickly and provide clear error messages

### Unit Testing Standards

```typescript
// Test file naming: *.test.ts or *.spec.ts
// userService.test.ts

import { UserService } from '../userService';
import { prismaMock } from '../__mocks__/prisma';

describe('UserService', () => {
  let userService: UserService;
  
  beforeEach(() => {
    userService = new UserService(prismaMock);
  });
  
  describe('createUser', () => {
    it('should create a user with valid data', async () => {
      // Arrange
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
      };
      
      const expectedUser = {
        id: '1',
        ...userData,
        createdAt: new Date(),
      };
      
      prismaMock.user.create.mockResolvedValue(expectedUser);
      
      // Act
      const result = await userService.createUser(userData);
      
      // Assert
      expect(result).toEqual(expectedUser);
      expect(prismaMock.user.create).toHaveBeenCalledWith({
        data: userData
      });
    });
    
    it('should throw error for invalid email', async () => {
      // Arrange
      const invalidUserData = {
        email: 'invalid-email',
        name: 'Test User',
      };
      
      // Act & Assert
      await expect(userService.createUser(invalidUserData))
        .rejects
        .toThrow('Invalid email format');
    });
  });
});
```

### Integration Testing

```typescript
// Integration test example
import request from 'supertest';
import { app } from '../app';
import { testDb } from '../test-utils/database';

describe('User API', () => {
  beforeEach(async () => {
    await testDb.reset();
  });
  
  it('POST /api/users should create a new user', async () => {
    const userData = {
      email: 'test@example.com',
      name: 'Test User',
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);
      
    expect(response.body.success).toBe(true);
    expect(response.body.data.user.email).toBe(userData.email);
  });
});
```

### Frontend Testing

```typescript
// Component testing with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfile } from './UserProfile';

const mockUser = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
};

describe('UserProfile', () => {
  it('should display user information', () => {
    render(<UserProfile user={mockUser} />);
    
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });
  
  it('should handle edit button click', () => {
    const mockOnEdit = jest.fn();
    render(<UserProfile user={mockUser} onEdit={mockOnEdit} />);
    
    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    
    expect(mockOnEdit).toHaveBeenCalledWith(mockUser);
  });
});
```

### Test Coverage Requirements
- **Unit Tests**: Minimum 80% code coverage
- **Critical Paths**: 100% coverage for authentication, payment processing
- **API Endpoints**: All endpoints must have integration tests
- **Components**: All user-interactive components must have tests

## 📚 Documentation Standards

### Code Documentation

```typescript
/**
 * Creates a new user account with the provided data
 * 
 * @param userData - The user data for account creation
 * @param userData.email - User's email address (must be unique)
 * @param userData.name - User's full name
 * @param userData.password - User's password (min 8 characters)
 * @returns Promise that resolves to the created user object
 * @throws {ValidationError} When user data is invalid
 * @throws {ConflictError} When email already exists
 * 
 * @example
 * ```typescript
 * const user = await createUser({
 *   email: 'user@example.com',
 *   name: 'John Doe',
 *   password: 'securePassword123'
 * });
 * ```
 */
async function createUser(userData: CreateUserInput): Promise<User> {
  // Implementation
}
```

### API Documentation
- All endpoints must be documented with examples
- Include request/response schemas
- Document error scenarios
- Provide usage examples

### README Guidelines
- Keep main README concise and focused
- Link to detailed documentation
- Include quick start guide
- Maintain up-to-date setup instructions

## ⚡ Performance Guidelines

### Frontend Performance

```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }: Props) => {
  return <ComplexVisualization data={data} />;
});

// Lazy load components
const DashboardChart = lazy(() => import('./DashboardChart'));

// Optimize images
import Image from 'next/image';
<Image
  src="/hero-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
/>

// Use proper loading states
function UserList() {
  const { data: users, loading, error } = useUsers();
  
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return <UserTable users={users} />;
}
```

### Backend Performance

```typescript
// Database query optimization
// ❌ Bad: N+1 query problem
const users = await prisma.user.findMany();
for (const user of users) {
  user.posts = await prisma.post.findMany({ where: { userId: user.id } });
}

// ✅ Good: Use include for related data
const users = await prisma.user.findMany({
  include: {
    posts: true,
    profile: true,
  },
});

// Use pagination for large datasets
const users = await prisma.user.findMany({
  skip: (page - 1) * limit,
  take: limit,
});

// Cache expensive operations
const getCachedUserData = cache(async (userId: string) => {
  return await expensiveUserDataOperation(userId);
}, { ttl: 300 }); // 5 minute cache
```

## 🔒 Security Best Practices

### Input Validation

```typescript
// Use validation schemas
import { z } from 'zod';

const CreateUserSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required').max(100),
});

// Validate all inputs
export async function createUser(data: unknown) {
  const validatedData = CreateUserSchema.parse(data);
  // Safe to use validatedData
}
```

### Authentication & Authorization

```typescript
// Protect API routes
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

// Role-based access control
export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};
```

### Data Security

```typescript
// Hash passwords properly
import bcrypt from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 12); // Use high salt rounds
};

// Sanitize outputs
const sanitizeUser = (user: User) => {
  const { password, ...safeUser } = user;
  return safeUser;
};

// Use environment variables for secrets
const JWT_SECRET = process.env.JWT_SECRET || (() => {
  throw new Error('JWT_SECRET environment variable is required');
})();
```

## 👀 Code Review Process

### Review Guidelines

#### What to Look For
1. **Functionality**: Does the code do what it's supposed to do?
2. **Readability**: Is the code easy to understand?
3. **Maintainability**: Will future developers be able to work with this code?
4. **Performance**: Are there any obvious performance issues?
5. **Security**: Are there any security vulnerabilities?
6. **Testing**: Is the code adequately tested?

#### Review Etiquette
- **Be constructive**: Provide specific, actionable feedback
- **Explain reasoning**: Help the author understand the "why"
- **Praise good code**: Acknowledge well-written solutions
- **Ask questions**: Use questions to guide rather than demand
- **Be timely**: Review code within 24 hours when possible

### Review Checklist

```markdown
## Code Review Checklist

### Functionality ✅
- [ ] Code accomplishes the intended task
- [ ] Edge cases are handled appropriately
- [ ] Error handling is comprehensive

### Code Quality ✅
- [ ] Code follows project style guidelines
- [ ] Functions are small and focused
- [ ] Variable and function names are descriptive
- [ ] No code duplication

### Security ✅
- [ ] Input validation is present
- [ ] No sensitive data in logs
- [ ] Proper authentication/authorization

### Performance ✅
- [ ] No obvious performance bottlenecks
- [ ] Database queries are optimized
- [ ] Proper caching where appropriate

### Testing ✅
- [ ] Unit tests cover new functionality
- [ ] Integration tests pass
- [ ] Test coverage meets requirements
```

## 🔍 Quality Assurance

### Automated Quality Gates

```bash
# Pre-commit hooks (Husky configuration)
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint-staged

# lint-staged configuration
{
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
```

### Continuous Integration

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test:coverage
      - run: npm run build
```

### Quality Metrics
- **Code Coverage**: Minimum 80% for new code
- **Type Coverage**: 100% TypeScript coverage
- **Lint Errors**: Zero ESLint errors allowed
- **Build Success**: All builds must pass
- **Test Success**: All tests must pass

## 🐛 Troubleshooting Guidelines

### Common Issues Resolution

#### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npm run type-check

# Update types
npm install @types/node@latest --save-dev
```

#### Database Issues
```bash
# Reset database
npm run db:reset

# Check connection
npm run db:studio
```

#### Build Failures
```bash
# Clear all caches
npm run clean
rm -rf node_modules package-lock.json
npm install
```

### Debugging Best Practices

```typescript
// Use proper logging instead of console.log
import { logger } from '@/lib/logger';

logger.info('User created successfully', { userId, email });
logger.error('Database connection failed', { error: error.message });

// Use debugger statements for development
if (process.env.NODE_ENV === 'development') {
  debugger; // Will pause execution in dev mode
}

// Use type assertions carefully
const user = data as User; // ❌ Unsafe
const user = UserSchema.parse(data); // ✅ Safe with validation
```

## 🤝 Contributing Guidelines

### For New Contributors

1. **Read Documentation**: Familiarize yourself with the codebase
2. **Setup Environment**: Follow the setup guide completely
3. **Start Small**: Begin with good first issues
4. **Ask Questions**: Use team chat for clarification
5. **Follow Patterns**: Observe existing code patterns

### For Team Members

1. **Mentor New Contributors**: Help onboard new team members
2. **Document Decisions**: Record architectural decisions
3. **Share Knowledge**: Conduct code sharing sessions
4. **Maintain Standards**: Enforce quality in reviews
5. **Improve Process**: Suggest workflow improvements

---

For more information, see:
- [Setup Guide](./setup-guide.md) - Development environment setup
- [Architecture Guide](./architecture.md) - Technical architecture overview
- [API Documentation](./api-documentation.md) - API reference and examples

*CloudFi Labs Development Guidelines - Building quality software together.* 🛠️