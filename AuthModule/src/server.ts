import express, { Application, Request, Response } from 'express';
import router from './routes/authRoute';
import connectDB from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express(); // 💡 Hier ist der Typ für die Express-App
app.use(express.json());

connectDB();

app.use('/api/auth', router);

app.get('/', (req: Request, res: Response): void => {
  res.send('Unwritten Legends Backend läuft mit TypeScript!');
});

const PORT: number = Number(process.env.PORT) || 3000; // 💡 Explizite Typisierung als Zahl

app.listen(PORT, () => console.log(`🚀 Server läuft auf Port ${PORT}`));
