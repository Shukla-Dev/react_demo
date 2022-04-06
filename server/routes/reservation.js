import express from 'express';
import { reservation } from '../controllers/reservation.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/reservation', reservation);

export default router;
