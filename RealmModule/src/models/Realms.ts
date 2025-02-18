import mongoose, { Schema } from 'mongoose';
import { IRealm, IRealmDocument } from '../interfaces/IRealm';
import { v4 as uuid } from 'uuid';

const RealmSchema = new Schema<IRealmDocument>({
  realmId: { type: String, required: true, unique: true, default: uuid },
  name: { type: String, required: true, unique: true },
  playerCount: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'full', 'closed'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  maxPlayers: { type: Number, default: 128 },
});

export default mongoose.model<IRealmDocument>('Realm', RealmSchema, 'realms');
