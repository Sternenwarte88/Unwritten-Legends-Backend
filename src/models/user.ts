import mongoose, { Schema } from 'mongoose';
import { IUserDocument } from '../interfaces/database/IUser';

// Mongoose Schema mit TypeScript
const UserSchema: Schema<IUserDocument> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  realmId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUserDocument>('User', UserSchema);
