import { Document } from 'mongoose';

export interface IRealm {
  realmId: string;
  name: string;
  playerCount: number;
  status: 'active' | 'full' | 'closed';
  createdAt: Date;
  maxPlayers: Number;
}

export interface IRealmDocument extends Document<string>, IRealm {
  _id: string; // Mongoose hat standardmäßig ein String-basiertes _id
}
