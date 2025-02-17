import { Router } from 'express';
import express from 'express';
import { healthCheck, loginUser, registerUser } from '../controller/playerController';
const router: Router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/health', healthCheck);

export default router;
