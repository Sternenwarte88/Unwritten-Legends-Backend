import express, { Router } from 'express';
import { createRealm } from '../controller/realmController';

const router = express.Router();

router.post('/create', createRealm);

export default router;
