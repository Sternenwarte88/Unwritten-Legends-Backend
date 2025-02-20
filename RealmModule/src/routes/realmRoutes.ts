import express from 'express';
import {
  assignRealm,
  createRealm,
  getAllRealms,
  getRealm,
  healthCheck,
} from '../controller/realmController';

const router = express.Router();

router.get('/getRealm', getRealm);
router.post('/create', createRealm);
router.post('/getAllRealms', getAllRealms);
router.post('/assignRealm', assignRealm);
router.get('/health', healthCheck);

export default router;
