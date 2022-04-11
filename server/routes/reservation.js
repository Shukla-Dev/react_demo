import express from 'express';
import {
	deleteReservation,
	reservation,
	reservations,
} from '../controllers/reservation.js';

const router = express.Router();

router.post('/reservation', reservation);
router.get('/reservations', reservations);
router.delete('/:id', deleteReservation);

export default router;
