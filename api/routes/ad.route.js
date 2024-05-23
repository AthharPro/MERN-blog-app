import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createAd } from '../controllers/ad.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createAd);

export default router;