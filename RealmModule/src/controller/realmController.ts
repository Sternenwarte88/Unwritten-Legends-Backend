import { NextFunction, Request, Response } from 'express';
import Realms from '../models/Realms';
import { IRealmDocument } from '../interfaces/IRealm';

export const createRealm = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { name, maxPlayers } = req.body;

  if (!name) {
    res.status(400).json({ isSuccessfull: false, message: 'Name is required' });
    return;
  }

  const realm: IRealmDocument = new Realms({
    name: name,
    maxPlayers: maxPlayers,
  });

  try {
    await realm.save();
    res.json({
      isSuccessfull: true,
      data: realm,
    });
  } catch (error) {
    console.error(error);
    res.json({ isSuccessfull: false, message: 'Creating Realm failed', error: error });
  }
};
