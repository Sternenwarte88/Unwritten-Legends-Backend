import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import { console } from 'inspector';

dotenv.config();

const MongoURI = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@mongo-ul:27017/unwritten_legends?authSource=${process.env.AUTHDB}`;

export const connectDB = async () => {
  try {
    mongoose.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};
