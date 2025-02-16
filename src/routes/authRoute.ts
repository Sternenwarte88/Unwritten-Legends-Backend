import express, { Router, Request, Response, NextFunction } from 'express';
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from '../controller/auth/authController';

const router: Router = express.Router();

router.post('/users/login/', loginUser);

router.post('/users/register/', registerUser);
router.post('/users/refresh/', refreshAccessToken);
router.post('/users/logout/', logoutUser);

export default router;
