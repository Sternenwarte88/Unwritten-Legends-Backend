import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './routes/playerRoutes';

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use('/api/player', router);
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server läuft auf Port ${process.env.PORT}`);
});
