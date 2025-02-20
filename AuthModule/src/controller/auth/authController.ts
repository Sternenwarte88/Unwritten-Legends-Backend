import { Request, Response, NextFunction, RequestHandler } from 'express';
import bcrypt from 'bcrypt';
import axios from 'axios';
import {
  accessTokenExpiry,
  createTokens,
  deleteRefreshToken,
  getRefreshToken,
  storeRefreshToken,
} from '../../utilities/jwtUtil';
import jwt from 'jsonwebtoken';
import IUserResponse from '../../interfaces/database/IAxios';
import { AxiosResponse } from 'axios';

// ✅ Login

export const loginUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;
    const response: AxiosResponse<IUserResponse> = await axios.post(
      `${process.env.PLAYER_BACKEND_URL}login`,
      {
        email: email,
        password: password,
        headers: { 'Content-Type': 'application/json' },
      },
    );

    if (response.status !== 200 || !response.data) {
      res.status(404).json({
        isSuccess: false,
        message: 'Benutzer/Email nicht gefunden oder fehlerhaft',
      });
    }
    const user = response.data;

    if (!user) {
      res
        .status(404)
        .json({ isSuccess: false, message: 'Benutzer/Email nicht gefunden oder fehlerhaft' });
    }

    const isMatched = bcrypt.compare(password, user.player.password);

    if (!isMatched) {
      res
        .status(404)
        .json({ isSuccess: false, message: 'Benutzer/Email nicht gefunden oder fehlerhaft' });
    }

    const { accessToken, refreshToken } = createTokens(user);

    // Refresh Token in Redis speichern
    await storeRefreshToken(user.player._id, refreshToken);

    res.status(200).json({
      isSuccess: true,
      accessToken: accessToken,
      refreshToken: refreshToken,
      message: 'Login erfolgreich',
      data: { userName: user.player.username },
    });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Nutzer', error: error });
  }
};

// ✅ Logout
export const logoutUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.userId; // aus Middleware (decoded Token)

    if (!userId) {
      res.status(401).json({ message: 'Benutzer-ID fehlt' });
    }

    await deleteRefreshToken(userId);
    res.status(200).json({ message: 'Erfolgreich abgemeldet' });
  } catch (error) {
    res.status(500).json({
      message: 'Fehler beim Logout',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const registerUser: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, email, password } = req.body;

    let response = await axios.post(`${process.env.PLAYER_BACKEND_URL}register`, {
      email: email,
      password: password,
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status !== 200 || !response.data) {
      res.json({ message: 'User already exists!' });
      console.log('User exists');
      return;
    }

    const decryptedPassword: string = await bcrypt.hash(password, 10);
    response = await axios.post(`${process.env.PLAYER_BACKEND_URL}register`, {
      username: username,
      email: email,
      password: decryptedPassword,
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response.data);

    if (response.data.email) {
      res.json({
        message: 'User Created!',
        data: response.data.email,
      });
      console.log('User created');
    }
  } catch (error) {
    res.json({ error: error, message: 'Error ' + error });
  }
};

// ✅ Token Refresh
export const refreshAccessToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    res.status(401).json({ message: 'Kein Refresh-Token vorhanden' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as {
      userId: string;
      email: string;
    };

    // Refresh Token aus Redis prüfen
    const storedToken = await getRefreshToken(decoded.userId);
    if (!storedToken || storedToken !== refreshToken) {
      res.status(403).json({ message: 'Ungültiger Refresh-Token' });
    }

    // Neuen Access Token erstellen
    const accessToken = jwt.sign(
      { userId: decoded.userId, email: decoded.email },
      process.env.JWT_SECRET!,
      { expiresIn: accessTokenExpiry },
    );

    res.status(200).json({
      accessToken,
      message: 'Access-Token erneuert',
    });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(403).json({ message: 'Refresh-Token abgelaufen' });
    } else if (error instanceof jwt.JsonWebTokenError) {
      res.status(403).json({ message: 'Ungültiger Refresh-Token' });
    }
    res.status(500).json({
      message: 'Fehler bei der Token-Erneuerung',
      error: error instanceof Error ? error.message : error,
    });
  }
};

export const healthCheck = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: 'ok' });
};
