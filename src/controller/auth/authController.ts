import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { IUserDocument } from '../../interfaces/database/IUser';
import User from '../../models/user';

export const loginUser: any = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ isSuccess: false, message: 'Benutzer/Email nicht gefunden oder fehlerhaft' });
    }

    const isMatched = bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res
        .status(404)
        .json({ isSuccess: false, message: 'Benutzer/Email nicht gefunden oder fehlerhaft' });
    }

    res.status(200).json({
      isSuccess: true,
      message: 'Login erfolgreich',
      data: { userName: 'user.username' },
    });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Nutzer' });
  }
};

export const registerUser: any = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: IUserDocument = new User();
    const { username, email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      res.json({ message: 'User already exists!' });
      console.log('User exists');
      return;
    }

    const decryptedPassword: string = await bcrypt.hash(password, 10);

    user.username = username;
    user.email = email;
    user.password = decryptedPassword;

    await user.save();

    res.json({
      message: 'User Created!',
      data: user.email,
    });

    console.log('User created');
  } catch (error) {
    res.json({ error: error, message: 'Error ' + error });
  }
};
