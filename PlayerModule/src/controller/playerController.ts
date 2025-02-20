import { Request, Response, NextFunction, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import { IUserDocument } from '../interfraces/IUser';
import User from '../models/user';
import axios from 'axios';

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = (await User.findOne({ email }).lean().exec()) as IUserDocument;

    if (!user) {
      res
        .status(404)
        .json({ isSuccess: false, message: 'Benutzer/Email nicht gefunden oder fehlerhaft' });
      return;
    }

    res.status(200).json({
      isSuccess: true,
      player: user,
    });
    return;
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Nutzer' });
    return;
  }
};

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user: IUserDocument = new User();
    const { username, email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.json({ isSuccess: false, message: 'User already exists!' });
      console.log('User exists');
      return;
    }

    const realmResponse = await axios.post(`${process.env.REALM_SERVICE_URL}assignRealm`, {});

    console.log(realmResponse.data.data.id);

    user.username = username;
    user.email = email;
    user.password = password;
    user.realmId = realmResponse.data.data.id;

    await user.save();

    res.json({
      isSuccess: true,
      message: 'User Created!',
      email: user.email,
    });

    console.log('User created');
  } catch (error) {
    res.json({ error: error, message: 'Error ' + error });
  }
};

export const healthCheck = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: 'ok' });
};
