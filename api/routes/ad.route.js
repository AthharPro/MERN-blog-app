import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createAd, deleteAd, getAds } from '../controllers/ad.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createAd);
router.get('/getads', verifyToken, getAds);
router.delete('/delete/:adId/:userId', verifyToken, deleteAd);

export default router;