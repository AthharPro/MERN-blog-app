import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createAd, getAds } from '../controllers/ad.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createAd);
router.get('/getads', verifyToken, getAds);

export default router;