import express from 'express';
import { addNewCar } from '../controllers/carController.mjs';
import { verifyToken } from '../middleware/authentication.mjs';

const router = express.Router();

router.post('/', verifyToken, addNewCar);

export default router;
