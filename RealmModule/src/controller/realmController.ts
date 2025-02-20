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

export const getAllRealms = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const realms: IRealmDocument[] = await Realms.find();

    res.json({ isSuccessfull: true, data: realms });
  } catch (error) {
    console.log(error);
    res.json({ isSuccessfull: false });
  }
};

export const getRealm = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id = req.body.id;

  try {
    const realm: IRealmDocument | null = await Realms.findOne({ realmId: id });

    res.json({ isSuccessfull: true, data: realm });
  } catch (error) {
    console.log(error);
    res.json({ isSuccessfull: false, message: 'Realm not found', error: error });
  }
};

export const assignRealm = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  let realm: IRealmDocument | null;

  try {
    realm = await Realms.findOne({ status: 'active' }).sort({ playerCount: 1 });
  } catch (error) {
    console.error(error);
    return;
  }

  if (!realm) {
    console.log('Alle Realms voll – Erstelle neuen Realm!');

    // 📌 Höchste aktuelle Nummer suchen
    const lastRealm = await Realms.findOne().sort({ name: -1 }); // Sortiert absteigend nach Namen
    let newRealmNumber = 1; // Default-Wert, falls es noch keinen Realm gibt

    if (lastRealm) {
      const match = lastRealm.name.match(/(\d+)$/); // Letzte Zahl aus dem Namen extrahieren
      if (match) {
        newRealmNumber = parseInt(match[1], 10) + 1; // Erhöhe die Nummer um 1
      }

      realm = new Realms({
        name: `Realm ${newRealmNumber}`, // 🔥 Dynamische Nummerierung
        playerCount: 1,
        status: 'active',
      });

      try {
        await realm.save();
        res.json({
          isSuccessfull: true,
          data: { id: realm.id, name: realm.name },
        });
        return;
      } catch (error) {
        console.error(error);
        res.json({ isSuccessfull: false, error: error });
        return;
      }
    }
  }

  try {
    if (realm == null) {
      throw new Error('smallest Realm is undefined');
    }
    realm.playerCount += 1;
    if ((realm.playerCount = 128)) {
      realm.status = 'full';
    }
    await realm.save();
    res.json({ IsSuccessfull: true, data: { id: realm.id, name: realm.name } });
  } catch (error) {
    console.error(error);
    res.json({ IsSuccessfull: false, errorMessage: error });
  }
};

export const healthCheck = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ msg: 'ok' });
};
