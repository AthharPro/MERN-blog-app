import mongoose from 'mongoose';

const adSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         unique: true,
      },
      content: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         default: 'https://t4.ftcdn.net/jpg/07/06/84/33/360_F_706843327_MyBrGrVTWIzsp4yR7Tsui6RZSbGS7qLr.jpg'
      },
      targetURL: {
         type: String,
         required: true,
      },
      viewCount: {
         type: Number,
         default: 0,
      },
      startDate: {
         type: Date,
         required: true
      },
      endDate: {
         type: Date,
         required: true
      },
      isActive: {
         type: Boolean,
         default: true,
      },
   },
   { timestamps: true }
);

const Ad = mongoose.model('Ad', adSchema);

export default Ad;