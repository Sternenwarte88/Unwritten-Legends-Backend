import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MongoURI = `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@mongo-ul:27017/unwritten_legends?authSource=${process.env.AUTHDB}`;

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
    process.exit(1);
  }
};

export default connectDB;
