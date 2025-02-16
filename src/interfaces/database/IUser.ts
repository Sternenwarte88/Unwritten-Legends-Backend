import { Document } from 'mongoose';

// Interface für den User
export interface IUser {
  username: string;
  email: string;
  realmId: string;
  password: string;
  createdAt: Date;
}

export type IUserDocument = IUser & Document;
