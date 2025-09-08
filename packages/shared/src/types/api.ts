// Common API Response Types
export interface ApiResponse<T = any> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination?: PaginationMeta;
}

// User Types (shared between frontend and backend)
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export type UserRole = 'admin' | 'user' | 'moderator';

export interface CreateUserRequest {
  name: string;
  email: string;
  role?: UserRole;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  role?: UserRole;
}

// Health Check Types
export interface HealthStatus {
  status: 'OK' | 'ERROR';
  timestamp: string;
  uptime?: number | string;
  environment?: string;
  version?: string;
}

// Error Types
export interface ErrorResponse extends ApiResponse {
  statusCode: number;
  stack?: string;
}