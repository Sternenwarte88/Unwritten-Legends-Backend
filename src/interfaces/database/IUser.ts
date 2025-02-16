import { Document } from 'mongoose';

// Interface für den User
export interface IUser {
  username: string;
  email: string;
  realmId: string;
  password: string;
  createdAt: Date;
}

export interface IUserDocument extends Document<string>, IUser {
  _id: string; // Mongoose hat standardmäßig ein String-basiertes _id
}
