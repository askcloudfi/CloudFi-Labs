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
  "status": "ok",
  "timestamp": "2024-03-15T10:30:00.000Z",
  "uptime": 3600.123
}
```

#### GET /api/health
**Description**: API health status with detailed information

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-03-15T10:30:00.000Z",
  "version": "1.0.0",
  "environment": "development"
}
```

#### GET /api/health/detailed
**Description**: Comprehensive system health information

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-03-15T10:30:00.000Z",
  "system": {
    "nodeVersion": "18.19.0",
    "platform": "darwin",
    "memory": {
      "used": "45.2 MB",
      "total": "512 MB"
    }
  },
  "database": {
    "status": "connected",
    "responseTime": "12ms"
  }
}
```

#### GET /api/health/database
**Description**: Database connection status

**Response:**
```json
{
  "status": "ok",
  "database": "connected",
  "responseTime": "8ms",
  "timestamp": "2024-03-15T10:30:00.000Z"
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
      "total": 50,
      "page": 1,
      "pages": 5,
      "limit": 10,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### GET /api/users/:id
**Description**: Retrieve a specific user by ID

**Parameters:**
- `id`: User ID (required)

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
      "profile": {
        "bio": "Financial analyst",
        "avatar": "https://example.com/avatar.jpg"
      },
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
  "email": "newuser@example.com",
  "password": "securePassword123",
  "name": "Jane Smith",
  "role": "user"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "clp789def012",
      "email": "newuser@example.com",
      "name": "Jane Smith",
      "role": "user",
      "createdAt": "2024-03-15T10:30:00.000Z",
      "updatedAt": "2024-03-15T10:30:00.000Z"
    }
  },
  "message": "User created successfully"
}
```

#### PUT /api/users/:id
**Description**: Update an existing user

**Parameters:**
- `id`: User ID (required)

**Request Body:**
```json
{
  "name": "John Updated Doe",
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
      "email": "user@example.com",
      "name": "John Updated Doe",
      "role": "admin",
      "updatedAt": "2024-03-15T10:35:00.000Z"
    }
  },
  "message": "User updated successfully"
}
```

#### DELETE /api/users/:id
**Description**: Delete a user (soft delete)

**Parameters:**
- `id`: User ID (required)

**Response:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## 🔮 GraphQL API

### GraphQL Schema Overview

#### Core Types
```graphql
type User {
  id: ID!
  email: String!
  name: String
  role: UserRole!
  profile: UserProfile
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserProfile {
  bio: String
  avatar: String
  phoneNumber: String
  organization: String
}

enum UserRole {
  USER
  ADMIN
  MANAGER
}

type AuthPayload {
  user: User!
  token: String!
}

input CreateUserInput {
  email: String!
  password: String!
  name: String
  role: UserRole = USER
}

input UpdateUserInput {
  name: String
  role: UserRole
  profile: UserProfileInput
}

input UserProfileInput {
  bio: String
  avatar: String
  phoneNumber: String
  organization: String
}
```

### GraphQL Queries

#### Query: users
**Description**: Retrieve users with pagination and filtering

```graphql
query GetUsers(
  $first: Int = 10
  $after: String
  $search: String
  $role: UserRole
) {
  users(
    first: $first
    after: $after
    search: $search
    role: $role
  ) {
    edges {
      node {
        id
        email
        name
        role
        createdAt
        updatedAt
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
```

**Variables:**
```json
{
  "first": 10,
  "search": "john",
  "role": "USER"
}
```

**Response:**
```json
{
  "data": {
    "users": {
      "edges": [
        {
          "node": {
            "id": "clp123abc456",
            "email": "john@example.com",
            "name": "John Doe",
            "role": "USER",
            "createdAt": "2024-03-15T10:00:00.000Z",
            "updatedAt": "2024-03-15T10:00:00.000Z"
          },
          "cursor": "Y3Vyc29yMQ=="
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": false,
        "startCursor": "Y3Vyc29yMQ==",
        "endCursor": "Y3Vyc29yMTA="
      },
      "totalCount": 25
    }
  }
}
```

#### Query: user
**Description**: Retrieve a specific user by ID

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    email
    name
    role
    profile {
      bio
      avatar
      phoneNumber
      organization
    }
    createdAt
    updatedAt
  }
}
```

**Variables:**
```json
{
  "id": "clp123abc456"
}
```

### GraphQL Mutations

#### Mutation: createUser
**Description**: Create a new user account

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    success
    message
    user {
      id
      email
      name
      role
      createdAt
    }
    errors {
      field
      message
    }
  }
}
```

**Variables:**
```json
{
  "input": {
    "email": "newuser@example.com",
    "password": "securePassword123",
    "name": "Jane Smith",
    "role": "USER"
  }
}
```

**Response:**
```json
{
  "data": {
    "createUser": {
      "success": true,
      "message": "User created successfully",
      "user": {
        "id": "clp789def012",
        "email": "newuser@example.com",
        "name": "Jane Smith",
        "role": "USER",
        "createdAt": "2024-03-15T10:30:00.000Z"
      },
      "errors": null
    }
  }
}
```

#### Mutation: updateUser
**Description**: Update an existing user

```graphql
mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    success
    message
    user {
      id
      email
      name
      role
      updatedAt
    }
    errors {
      field
      message
    }
  }
}
```

**Variables:**
```json
{
  "id": "clp123abc456",
  "input": {
    "name": "John Updated Doe",
    "profile": {
      "bio": "Senior Financial Analyst",
      "organization": "CloudFi Labs"
    }
  }
}
```

#### Mutation: deleteUser
**Description**: Delete a user account

```graphql
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    success
    message
  }
}
```

### GraphQL Subscriptions

#### Subscription: userUpdated
**Description**: Real-time updates when user data changes

```graphql
subscription UserUpdated {
  userUpdated {
    id
    email
    name
    role
    updatedAt
  }
}
```

**WebSocket Connection:** Use GraphQL subscriptions over WebSocket for real-time updates.

## 📋 API Response Format

### Standard Response Structure

All REST API endpoints follow a consistent response format:

```json
{
  "success": boolean,
  "data": object | array | null,
  "message": string | null,
  "errors": array | null,
  "meta": {
    "timestamp": "ISO 8601 datetime",
    "requestId": "unique-request-id"
  }
}
```

### Success Response Example
```json
{
  "success": true,
  "data": {
    "user": { ... }
  },
  "message": "Operation completed successfully",
  "errors": null,
  "meta": {
    "timestamp": "2024-03-15T10:30:00.000Z",
    "requestId": "req-123abc456def"
  }
}
```

### Error Response Example
```json
{
  "success": false,
  "data": null,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    },
    {
      "field": "password",
      "message": "Password must be at least 8 characters"
    }
  ],
  "meta": {
    "timestamp": "2024-03-15T10:30:00.000Z",
    "requestId": "req-456def789ghi"
  }
}
```

## ⚠️ Error Handling

### HTTP Status Codes

| Status Code | Description | Usage |
|------------|-------------|--------|
| 200 | OK | Successful GET, PUT requests |
| 201 | Created | Successful POST requests |
| 204 | No Content | Successful DELETE requests |
| 400 | Bad Request | Invalid request data |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 422 | Unprocessable Entity | Validation errors |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server-side errors |

### Error Response Examples

#### Validation Error (422)
```json
{
  "success": false,
  "data": null,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Must be a valid email address"
    }
  ]
}
```

#### Authentication Error (401)
```json
{
  "success": false,
  "data": null,
  "message": "Authentication required",
  "errors": [
    {
      "code": "AUTH_REQUIRED",
      "message": "Valid JWT token required"
    }
  ]
}
```

#### Rate Limit Error (429)
```json
{
  "success": false,
  "data": null,
  "message": "Rate limit exceeded",
  "errors": [
    {
      "code": "RATE_LIMIT_EXCEEDED",
      "message": "Too many requests. Try again in 60 seconds."
    }
  ]
}
```

## 🔧 API Testing

### Using cURL

#### Authentication
```bash
# Login to get JWT token
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'

# Use token in subsequent requests
curl -X GET http://localhost:8000/api/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

#### GraphQL Query
```bash
curl -X POST http://localhost:8000/graphql \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "query": "query { users { edges { node { id name email } } } }"
  }'
```

### Using Postman

1. **Import Collection**: Create a Postman collection with base URL and authentication
2. **Environment Variables**: Set up environment variables for API URL and tokens
3. **Pre-request Scripts**: Automatically refresh JWT tokens
4. **Tests**: Add response validation tests

### GraphQL Playground

Access the GraphQL Playground at `http://localhost:8000/graphql` (development only) for:
- Interactive query exploration
- Schema documentation
- Query validation and auto-completion
- Subscription testing

## 📊 API Rate Limiting

### Rate Limit Configuration
- **Default Limit**: 100 requests per 15 minutes per IP
- **Authenticated Users**: 1000 requests per 15 minutes
- **Admin Users**: 5000 requests per 15 minutes

### Rate Limit Headers
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995500
```

## 🔍 API Monitoring

### Request Logging
All API requests are logged with:
- Request method and URL
- User ID (if authenticated)
- Response status code
- Response time
- IP address

### Metrics Available
- Request count by endpoint
- Average response time
- Error rate by status code
- Authentication success/failure rates

---

For more information, see:
- [Setup Guide](./setup-guide.md) - Development environment setup
- [Architecture Guide](./architecture.md) - Technical architecture overview
- [Development Guidelines](./development-guidelines.md) - API development best practices

*CloudFi Labs API Documentation - Powerful, flexible, and well-documented APIs.* 🌐