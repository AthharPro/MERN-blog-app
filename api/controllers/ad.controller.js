import Ad from '../models/ad.model.js';
import { errorHandler } from '../utils/error.js';

export const createAd = async (req, res, next) => {
   //console.log(req.user);
   if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to create Advertisements.'));
   }
   if (!req.body.title || !req.body.targetURL || !req.body.startDate || !req.body.endDate) {
      return next(errorHandler(400, 'Please provide all required fields'));
   }
   
   const newAd = new Ad (req.body);

   try {
      const savedAd = await newAd.save();
      res.status(201).json(savedAd);
   } catch (error) {
      next(error);
   }
};