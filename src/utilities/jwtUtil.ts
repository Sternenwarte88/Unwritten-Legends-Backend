import jwt from 'jsonwebtoken';
import redisClient from '../config/redis';
import { IUserDocument } from '../interfaces/database/IUser';

// Token-Lebensdauern
const ACCESS_TOKEN_EXPIRY = '15m';
const REFRESH_TOKEN_EXPIRY = '7d';

// JWT-Token erstellen
export const createTokens = (user: IUserDocument) => {
  const payload = { userId: user._id, email: user.email, realmId: user.realmId };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });

  return { accessToken, refreshToken };
};

// Refresh Token in Redis speichern
export const storeRefreshToken = async (userId: string, refreshToken: string) => {
  await redisClient.sendCommand([
    'JSON.SET',
    `refreshToken:${userId}`,
    '$',
    JSON.stringify({
      token: refreshToken,
      createdAt: new Date().toISOString(),
    }),
  ]);
};

// Refresh Token aus Redis abrufen
export const getRefreshToken = async (userId: string): Promise<string | null> => {
  const result = await redisClient.sendCommand(['JSON.GET', `refreshToken:${userId}`, '$']);
  if (result) {
    const token = typeof result === 'string' ? result : String(result);
    const parsed = JSON.parse(token);
    return parsed.token || null;
  }
  return null;
};

// Refresh Token aus Redis löschen (bei Logout)
export const deleteRefreshToken = async (userId: string) => {
  await redisClient.sendCommand(['DEL', `refreshToken:${userId}`]);
};
