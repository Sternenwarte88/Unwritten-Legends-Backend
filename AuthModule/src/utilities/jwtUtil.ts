import jwt from 'jsonwebtoken';
import redisClient from '../config/redis';
import { IUserResponse } from '../interfaces/database/IAxios';
import { response } from 'express';

// Token-Lebensdauern
export const accessTokenExpiry = '15m';
export const refreshTokenExpiry = '7d';
interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

// JWT-Token erstellen
export const createTokens = (user: IUserResponse): TokenResponse => {
  const payload = {
    userId: user.player._id,
    email: user.player.email,
    // realmId: user.player.realmId,
  };

  console.log('Create Access Token');
  const accessToken = jwt.sign(payload, 'SuperDuperRefreshSecret', {
    expiresIn: '15m',
  });

  const refreshToken = jwt.sign(payload, 'SuperDuperSecret', {
    expiresIn: '7d',
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
