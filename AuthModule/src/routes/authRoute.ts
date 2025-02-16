import express, { Router, Request, Response, NextFunction } from 'express';
import {
  healthCheck,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from '../controller/auth/authController';

const router: Router = express.Router();

router.post('/auth/login/', loginUser);
router.post('/auth/register/', registerUser);
router.post('/auth/refresh/', refreshAccessToken);
router.post('/auth/logout/', logoutUser);
router.get('/auth/health', healthCheck);

export default router;
