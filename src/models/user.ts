import mongoose, { Document, Schema } from 'mongoose';

// Interface für den User
export interface IUser extends Document {
  username: string;
  email: string;
  realmId: string;
  password: string;
  createdAt: Date;
}

// Mongoose Schema mit TypeScript
const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  realmId: {type: String},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUser>('User', UserSchema);
