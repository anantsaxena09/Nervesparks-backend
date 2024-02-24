import express from 'express';
import { getAllDealerships, getDealershipById, addDealership } from '../controllers/dealershipController.mjs';
import { verifyToken } from '../middleware/authentication.mjs';
const router = express.Router();

router.get('/', verifyToken, getAllDealerships);
router.get('/:id', verifyToken, getDealershipById);
router.post('/', verifyToken, addDealership);

export default router;
