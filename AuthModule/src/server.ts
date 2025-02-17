import express, { Application, Request, Response } from 'express';
import router from './routes/authRoute';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express(); // 💡 Hier ist der Typ für die Express-App
app.use(express.json());
app.use(cors({ origin: '*', methods: 'GET,POST,PUT,DELETE' }));

app.use('/api/auth', router);

app.get('/', (req: Request, res: Response): void => {
  res.send('Unwritten Legends Backend läuft mit TypeScript!');
});

app.listen(process.env.PORT, () => console.log(`🚀 Server läuft auf Port ${process.env.PORT}`));
