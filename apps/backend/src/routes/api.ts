import express from 'express';
import { healthController } from '../controllers/healthController';
import { userController } from '../controllers/userController';

const router = express.Router();

// Health routes
router.get('/health', healthController.getHealth);
router.get('/health/detailed', healthController.getDetailedHealth);

// User routes
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// API info
router.get('/', (req, res) => {
  res.json({
    message: 'CloudFi Labs API v1.0.0',
    endpoints: {
      health: '/api/health',
      users: '/api/users',
    },
    documentation: 'https://docs.cloudfi-labs.com',
  });
});

export default router;