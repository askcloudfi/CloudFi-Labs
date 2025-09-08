# CloudFi Labs - Database Schema

> Comprehensive database schema documentation for CloudFi Labs

## 🗄️ Database Overview

CloudFi Labs uses MySQL 8.0+ as its primary database with Prisma ORM for type-safe database operations. The database is designed to store user information, financial data, transactions, and reporting metrics.

**Current Database**: `cloudfi_dev` (development) / `cloudfi` (production)
**Database Engine**: MySQL 8.0+
**ORM**: Prisma ORM
**Connection URL**: `mysql://cloudfi_user:password@localhost:3306/cloudfi_dev`

## 📋 Table Structure

### Users Table

The Users table is the core table that stores all user information and serves as the foundation for all other relationships.

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  role      UserRole @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  profiles   UserProfile[]
  accounts   Account[]
  categories Category[]
  reports    Report[]
}

enum UserRole {
  ADMIN
  USER
  MODERATOR
}
```

#### Columns

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier (CUID) |
| name | VARCHAR(255) | NOT NULL | User's full name |
| email | VARCHAR(255) | UNIQUE, NOT NULL | User's email address |
| role | ENUM | NOT NULL, DEFAULT 'USER' | User's role (ADMIN, USER, MODERATOR) |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

#### Indexes

1. **Primary Key**: `id`
2. **Unique Index**: `email`
3. **Index**: `role`

### User Profiles Table

Stores additional user profile information.

```prisma
model UserProfile {
  id        String   @id @default(cuid())
  userId    String
  bio       String?
  avatar    String?
  timezone  String?
  currency  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  user      User      @relation(fields: [userId], references: [id])
}
```

#### Columns

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier (CUID) |
| userId | VARCHAR(36) | NOT NULL, FOREIGN KEY | Reference to User table |
| bio | TEXT | NULL | User biography |
| avatar | VARCHAR(500) | NULL | URL to user avatar |
| timezone | VARCHAR(50) | NULL | User's timezone |
| currency | VARCHAR(3) | NULL | Preferred currency (ISO 4217) |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

### Accounts Table

Stores cloud service accounts and their configurations.

```prisma
model Account {
  id          String   @id @default(cuid())
  userId      String
  name        String
  provider    String
  credentials String
  isActive    Boolean  @default(true)
  lastSync    DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  user        User     @relation(fields: [userId], references: [id])
  transactions Transaction[]
}
```

#### Columns

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier (CUID) |
| userId | VARCHAR(36) | NOT NULL, FOREIGN KEY | Reference to User table |
| name | VARCHAR(255) | NOT NULL | Account name/description |
| provider | VARCHAR(100) | NOT NULL | Cloud provider (AWS, GCP, Azure) |
| credentials | TEXT | NOT NULL | Encrypted credentials |
| isActive | BOOLEAN | NOT NULL, DEFAULT TRUE | Account status |
| lastSync | TIMESTAMP | NULL | Last synchronization timestamp |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

### Categories Table

Stores expense/income categories for financial tracking.

```prisma
model Category {
  id          String   @id @default(cuid())
  userId      String
  name        String
  description String?
  color       String?
  icon        String?
  isDefault   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  user        User     @relation(fields: [userId], references: [id])
  transactions Transaction[]
}
```

#### Columns

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier (CUID) |
| userId | VARCHAR(36) | NOT NULL, FOREIGN KEY | Reference to User table |
| name | VARCHAR(100) | NOT NULL | Category name |
| description | TEXT | NULL | Category description |
| color | VARCHAR(7) | NULL | Hex color code |
| icon | VARCHAR(100) | NULL | Icon identifier |
| isDefault | BOOLEAN | NOT NULL, DEFAULT FALSE | System default category |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

### Transactions Table

Stores financial transactions from cloud services.

```prisma
model Transaction {
  id          String   @id @default(cuid())
  accountId   String
  categoryId  String?
  userId      String
  amount      Float
  currency    String
  description String
  date        DateTime
  type        TransactionType
  status      TransactionStatus
  metadata    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  account     Account  @relation(fields: [accountId], references: [id])
  category    Category? @relation(fields: [categoryId], references: [id])
  user        User     @relation(fields: [userId], references: [id])
}

enum TransactionType {
  EXPENSE
  INCOME
  TRANSFER
}

enum TransactionStatus {
  PENDING
  COMPLETED
  FAILED
  CANCELLED
}
```

#### Columns

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier (CUID) |
| accountId | VARCHAR(36) | NOT NULL, FOREIGN KEY | Reference to Account table |
| categoryId | VARCHAR(36) | NULL, FOREIGN KEY | Reference to Category table |
| userId | VARCHAR(36) | NOT NULL, FOREIGN KEY | Reference to User table |
| amount | DECIMAL(15,2) | NOT NULL | Transaction amount |
| currency | VARCHAR(3) | NOT NULL | Currency code (ISO 4217) |
| description | TEXT | NOT NULL | Transaction description |
| date | TIMESTAMP | NOT NULL | Transaction date |
| type | ENUM | NOT NULL | Transaction type (EXPENSE, INCOME, TRANSFER) |
| status | ENUM | NOT NULL, DEFAULT 'PENDING' | Transaction status |
| metadata | TEXT | NULL | Additional transaction data (JSON) |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

### Reports Table

Stores generated financial reports.

```prisma
model Report {
  id          String   @id @default(cuid())
  userId      String
  title       String
  type        ReportType
  periodStart DateTime
  periodEnd   DateTime
  data        String
  format      ReportFormat
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  user        User     @relation(fields: [userId], references: [id])
}

enum ReportType {
  MONTHLY
  QUARTERLY
  ANNUAL
  CUSTOM
}

enum ReportFormat {
  PDF
  CSV
  JSON
  EXCEL
}
```

#### Columns

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | VARCHAR(36) | PRIMARY KEY, NOT NULL | Unique identifier (CUID) |
| userId | VARCHAR(36) | NOT NULL, FOREIGN KEY | Reference to User table |
| title | VARCHAR(255) | NOT NULL | Report title |
| type | ENUM | NOT NULL | Report type (MONTHLY, QUARTERLY, ANNUAL, CUSTOM) |
| periodStart | TIMESTAMP | NOT NULL | Report period start |
| periodEnd | TIMESTAMP | NOT NULL | Report period end |
| data | LONGTEXT | NOT NULL | Report data (JSON) |
| format | ENUM | NOT NULL | Report format (PDF, CSV, JSON, EXCEL) |
| createdAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | NOT NULL, DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | Last update timestamp |

## 🔗 Relationships

### Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ USER_PROFILE : has
    USER ||--o{ ACCOUNT : owns
    USER ||--o{ CATEGORY : creates
    USER ||--o{ TRANSACTION : performs
    USER ||--o{ REPORT : generates
    ACCOUNT ||--o{ TRANSACTION : contains
    CATEGORY ||--o{ TRANSACTION : categorizes
```

### Relationship Details

1. **User → User Profile**: One-to-many (One user can have one profile)
2. **User → Account**: One-to-many (One user can have multiple accounts)
3. **User → Category**: One-to-many (One user can create multiple categories)
4. **User → Transaction**: One-to-many (One user can have multiple transactions)
5. **User → Report**: One-to-many (One user can generate multiple reports)
6. **Account → Transaction**: One-to-many (One account can have multiple transactions)
7. **Category → Transaction**: One-to-many (One category can have multiple transactions)

## 📈 Indexes

### Primary Indexes

1. **Users**: `id` (Primary Key)
2. **Accounts**: `id` (Primary Key)
3. **Categories**: `id` (Primary Key)
4. **Transactions**: `id` (Primary Key)
5. **Reports**: `id` (Primary Key)

### Secondary Indexes

1. **Users**: `email` (Unique), `role`
2. **Accounts**: `userId`, `provider`, `isActive`
3. **Categories**: `userId`, `isDefault`
4. **Transactions**: `userId`, `accountId`, `categoryId`, `date`, `type`, `status`
5. **Reports**: `userId`, `type`, `periodStart`, `periodEnd`

## 🔐 Security Considerations

### Data Encryption

1. **Passwords**: bcrypt hashed with salt
2. **Credentials**: AES-256 encrypted at rest
3. **PII**: Encrypted in accordance with GDPR/CCPA requirements

### Access Control

1. **Row-level Security**: Users can only access their own data
2. **Role-based Access**: Different permissions based on user roles
3. **Audit Logging**: All database operations are logged

## 🔄 Database Operations

### Connection Management

```typescript
// Prisma client initialization
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log: ['query', 'info', 'warn', 'error'],
});
```

### Common Queries

#### Get User with Accounts
```typescript
const userWithAccounts = await prisma.user.findUnique({
  where: { id: userId },
  include: {
    accounts: true,
  },
});
```

#### Get Transactions for a Period
```typescript
const transactions = await prisma.transaction.findMany({
  where: {
    userId: userId,
    date: {
      gte: startDate,
      lte: endDate,
    },
  },
  orderBy: {
    date: 'desc',
  },
});
```

#### Create Transaction
```typescript
const transaction = await prisma.transaction.create({
  data: {
    accountId: accountId,
    userId: userId,
    amount: amount,
    currency: currency,
    description: description,
    date: transactionDate,
    type: 'EXPENSE',
    status: 'COMPLETED',
  },
});
```

## 🛠️ Migration Strategy

### Initial Setup

```sql
-- Create database
CREATE DATABASE IF NOT EXISTS cloudfi;

-- Create user
CREATE USER IF NOT EXISTS 'cloudfi_user'@'localhost' IDENTIFIED BY 'secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON cloudfi.* TO 'cloudfi_user'@'localhost';

-- Flush privileges
FLUSH PRIVILEGES;
```

### Prisma Migration

```bash
# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name init

# Apply migrations to production
npx prisma migrate deploy
```

## 📊 Performance Optimization

### Query Optimization

1. **Pagination**: Use cursor-based pagination for large datasets
2. **Indexing**: Proper indexes on frequently queried columns
3. **Connection Pooling**: Configure connection pool settings
4. **Caching**: Implement Redis caching for frequently accessed data

### Monitoring

1. **Slow Query Log**: Enable MySQL slow query log
2. **Performance Schema**: Monitor query performance
3. **Prisma Logging**: Enable Prisma query logging in development

## 📚 Additional Resources

- [Setup Guide](./setup-guide.md) - Database setup instructions
- [Technology Stack](./technology-stack.md) - Database technology details
- [Deployment Guide](./deployment-guide.md) - Database deployment strategies

---