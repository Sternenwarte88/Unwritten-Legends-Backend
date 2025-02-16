import express, { Router, Request, Response, NextFunction } from 'express';
import { loginUser, registerUser } from '../controller/auth/authController';

const router: Router = express.Router();

router.post('/users', loginUser);

router.post('/users', registerUser);

export default router;
