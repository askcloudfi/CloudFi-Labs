# CloudFi Labs - API Documentation

> Comprehensive API reference for REST and GraphQL endpoints

## 🌐 API Overview

CloudFi Labs provides both RESTful and GraphQL APIs for flexible client integration. The APIs are designed to support the financial management features with proper authentication, validation, and error handling.

**Base URLs:**
- **REST API**: `http://localhost:8000/api`
- **GraphQL API**: `http://localhost:8000/graphql`
- **GraphQL Playground**: `http://localhost:8000/graphql` (development only)

## 🔒 Authentication

### Authentication Methods

#### JWT Token Authentication
All protected endpoints require a valid JWT token in the Authorization header:

```http
Authorization: Bearer <your-jwt-token>
```

#### Token Structure
```json
{
  "userId": "user-id",
  "email": "user@example.com",
  "role": "user",
  "iat": 1640995200,
  "exp": 1641600000
}
```

### Authentication Endpoints

#### POST /api/auth/login
**Description**: Authenticate user and receive JWT token

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clp123abc456",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Login successful"
}
```

#### POST /api/auth/register
**Description**: Register new user account

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clp123abc456",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "Registration successful"
}
```

## 🔍 REST API Endpoints

### Health Check Endpoints

#### GET /health
**Description**: Basic application health check

**Response:**
```json
{
  "status": "OK",
  "message": "CloudFi Labs API is running smoothly",
  "timestamp": "2024-03-15T10:30:00.000Z"
}
```

#### GET /api/health/detailed
**Description**: Comprehensive system health information

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-03-15T10:30:00.000Z",
  "uptime": {
    "seconds": 3600,
    "human": "1h 0m 0s"
  },
  "memory": {
    "rss": "45MB",
    "heapTotal": "30MB",
    "heapUsed": "25MB",
    "external": "5MB"
  },
  "environment": "development",
  "version": "1.0.0",
  "platform": "darwin",
  "nodeVersion": "v18.19.0"
}
```

### User Management Endpoints

#### GET /api/users
**Description**: Retrieve all users with pagination

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 100)
- `sort` (optional): Sort field (name, email, createdAt)
- `order` (optional): Sort order (asc, desc)
- `search` (optional): Search term for name or email

**Request:**
```http
GET /api/users?page=1&limit=10&sort=name&order=asc&search=john
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "clp123abc456",
        "email": "user@example.com",
        "name": "John Doe",
        "role": "user",
        "createdAt": "2024-03-15T10:00:00.000Z",
        "updatedAt": "2024-03-15T10:00:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalUsers": 50,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### GET /api/users/:id
**Description**: Retrieve a specific user by ID

**Request:**
```http
GET /api/users/clp123abc456
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clp123abc456",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user",
      "createdAt": "2024-03-15T10:00:00.000Z",
      "updatedAt": "2024-03-15T10:00:00.000Z"
    }
  }
}
```

#### POST /api/users
**Description**: Create a new user

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "role": "user"
}
```

**Request:**
```http
POST /api/users
Content-Type: application/json
Authorization: Bearer <jwt-token>

{
  "name": "John Doe",
  "email": "user@example.com",
  "role": "user"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clp123abc456",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user",
      "createdAt": "2024-03-15T10:00:00.000Z",
      "updatedAt": "2024-03-15T10:00:00.000Z"
    }
  },
  "message": "User created successfully"
}
```

#### PUT /api/users/:id
**Description**: Update an existing user

**Request Body:**
```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "role": "admin"
}
```

**Request:**
```http
PUT /api/users/clp123abc456
Content-Type: application/json
Authorization: Bearer <jwt-token>

{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "role": "admin"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clp123abc456",
      "email": "john.smith@example.com",
      "name": "John Smith",
      "role": "admin",
      "createdAt": "2024-03-15T10:00:00.000Z",
      "updatedAt": "2024-03-15T11:00:00.000Z"
    }
  },
  "message": "User updated successfully"
}
```

#### DELETE /api/users/:id
**Description**: Delete a user

**Request:**
```http
DELETE /api/users/clp123abc456
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## 📊 Database Schema

### Users Table

| Column Name | Type | Constraints | Description |
|-------------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier for the user |
| name | VARCHAR(255) | NOT NULL | User's full name |
| email | VARCHAR(255) | UNIQUE, NOT NULL | User's email address |
| role | ENUM('admin', 'user', 'moderator') | NOT NULL, DEFAULT 'user' | User's role in the system |
| created_at | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Timestamp when the user was created |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Timestamp when the user was last updated |

### Indexes

1. **Primary Key**: `id` column
2. **Unique Index**: `email` column
3. **Index**: `role` column for faster role-based queries

### Relationships

Currently, the Users table is the primary table in the system. Future tables for financial data, transactions, and reports will reference the Users table through the `user_id` foreign key.

## 🔄 API Request/Response Examples

### Successful Response Format
```json
{
  "success": true,
  "data": {
    // Data specific to the endpoint
  },
  "message": "Descriptive message about the operation"
}
```

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descriptive error message"
  }
}
```

### Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Successful GET, PUT, PATCH requests |
| 201 | Created - Successful POST requests |
| 400 | Bad Request - Invalid request data |
| 401 | Unauthorized - Missing or invalid authentication |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error - Unexpected server error |

## 🛠️ API Integration

### JavaScript/TypeScript Example
```typescript
// Get all users
async function getUsers() {
  try {
    const response = await fetch('http://localhost:8000/api/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Create a new user
async function createUser(userData) {
  try {
    const response = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
```

### cURL Examples
```bash
# Get all users
curl -X GET "http://localhost:8000/api/users" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create a new user
curl -X POST "http://localhost:8000/api/users" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "user"
  }'
```

## 📈 Rate Limiting

The API implements rate limiting to prevent abuse:

- **Anonymous requests**: 100 requests per hour
- **Authenticated requests**: 1000 requests per hour

Exceeding these limits will result in a 429 (Too Many Requests) response.

## 🔧 Error Handling

All API errors follow a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Name and email are required",
    "details": {
      "field": "name",
      "value": null,
      "rule": "required"
    }
  }
}
```

## 📚 Additional Resources

- [Setup Guide](./setup-guide.md) - How to run the API locally
- [Development Guidelines](./development-guidelines.md) - Coding standards and best practices
- [Deployment Guide](./deployment-guide.md) - How to deploy the API to production

---