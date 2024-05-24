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

   const newAd = new Ad(req.body);

   try {
      const savedAd = await newAd.save();
      res.status(201).json(savedAd);
   } catch (error) {
      next(error);
   }
};

export const getAds = async (req, res, next) => {
   try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? -1 : 1;
      const allAds = await Ad.find()
         .sort({ startDate: sortDirection })
         .skip(startIndex)
         .limit(limit);

      const now = new Date();

      const filterAds = (ad) => {
         const endDate = new Date(ad.endDate);
         return endDate > now;
      }

      const ads = allAds.filter(filterAds)

      const totalAds = await Ad.countDocuments();

      const lastMonth = new Date(
         now.getFullYear(),
         now.getMonth() - 1,
         now.getDate()
      );
      const lastMonthAds = await Ad.countDocuments({
         createdAt: { $gte: lastMonth }
      });

      res.status(200).json({
         ads,
         totalAds,
         lastMonthAds
      })
   } catch (error) {
      next(error);
   }

}