import express, { Router, Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import User, { IUser } from '../models/user';

const router: Router = express.Router();

router.get('/users', async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Nutzer' });
  }
});

router.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: IUser = new User();
    const { username, email, password } = req.body;

    const foundUser = await User.find({ email });
    if (foundUser.length > 0) {
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
});

export default router;
