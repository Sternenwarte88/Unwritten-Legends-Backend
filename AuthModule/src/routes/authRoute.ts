import express, { Router, Request, Response, NextFunction } from 'express';
import {
  healthCheck,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from '../controller/auth/authController';

const router: Router = express.Router();

router.post('/login/', loginUser);
router.post('/register/', registerUser);
router.post('/refresh/', refreshAccessToken);
router.post('/logout/', logoutUser);
router.get('/health', healthCheck);

export default router;
