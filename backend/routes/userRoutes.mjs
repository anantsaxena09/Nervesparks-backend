import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.mjs';
import { verifyToken } from '../middleware/authentication.mjs';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get all users (requires authentication)
router.get('/', verifyToken, getUsers);

// Get a user by ID (requires authentication)
router.get('/:userId', verifyToken, getUserById);

// Update a user by ID (requires authentication)
router.put('/:userId', verifyToken, updateUser);

// Delete a user by ID (requires authentication)
router.delete('/:userId', verifyToken, deleteUser);

export default router;
