import { Request, Response, NextFunction } from 'express';
import { createAppError } from '../middleware/errorHandler';
import { User } from '../types/user';

// Mock data store (in real app, this would be a database)
let users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@cloudfi.com',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@cloudfi.com',
    role: 'user',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
];

export const userController = {
  getUsers: (req: Request, res: Response): void => {
    const { page = 1, limit = 10 } = req.query;
    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    
    const paginatedUsers = users.slice(startIndex, endIndex);
    
    res.status(200).json({
      status: 'success',
      data: {
        users: paginatedUsers,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(users.length / Number(limit)),
          totalUsers: users.length,
          hasNext: endIndex < users.length,
          hasPrev: startIndex > 0,
        },
      },
    });
  },

  getUserById: (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    
    if (!user) {
      return next(createAppError(`User with ID ${id} not found`, 404));
    }
    
    res.status(200).json({
      status: 'success',
      data: { user },
    });
  },

  createUser: (req: Request, res: Response, next: NextFunction): void => {
    const { name, email, role = 'user' } = req.body;
    
    if (!name || !email) {
      return next(createAppError('Name and email are required', 400));
    }
    
    // Check if email already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return next(createAppError('User with this email already exists', 409));
    }
    
    const newUser: User = {
      id: String(users.length + 1),
      name,
      email,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    users.push(newUser);
    
    res.status(201).json({
      status: 'success',
      data: { user: newUser },
      message: 'User created successfully',
    });
  },

  updateUser: (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return next(createAppError(`User with ID ${id} not found`, 404));
    }
    
    // Check if email already exists (excluding current user)
    if (email) {
      const existingUser = users.find(u => u.email === email && u.id !== id);
      if (existingUser) {
        return next(createAppError('User with this email already exists', 409));
      }
    }
    
    const updatedUser: User = {
      ...users[userIndex],
      ...(name && { name }),
      ...(email && { email }),
      ...(role && { role }),
      updatedAt: new Date(),
    };
    
    users[userIndex] = updatedUser;
    
    res.status(200).json({
      status: 'success',
      data: { user: updatedUser },
      message: 'User updated successfully',
    });
  },

  deleteUser: (req: Request, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      return next(createAppError(`User with ID ${id} not found`, 404));
    }
    
    users.splice(userIndex, 1);
    
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  },
};