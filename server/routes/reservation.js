import express from 'express';
import { reservation, reservations } from '../controllers/reservation.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/reservation', reservation);
router.get('/reservations', reservations);

export default router;
