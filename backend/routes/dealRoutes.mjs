import express from 'express';
import { getAllDeals, getDealsByDealershipId, getDealsByCarId, addDeal } from '../controllers/dealController.mjs';
import { verifyToken } from '../middleware/authentication.mjs';

const router = express.Router();

router.get('/', verifyToken, getAllDeals);
router.get('/dealership/:dealershipId', verifyToken, getDealsByDealershipId);
router.get('/car/:carId', verifyToken, getDealsByCarId);
router.post('/', verifyToken, addDeal);

export default router;
