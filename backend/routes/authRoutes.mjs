// routes/authRoutes.js

import express from 'express';
import authController from '../controllers/authController.mjs';

 // Assuming authController exports its functions using ES6 syntax

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/change-password', authController.changePassword);

export default router;

