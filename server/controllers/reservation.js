import Mongoose from 'mongoose';
import googleEvent from '../helper/events.js';
import Reservation from '../models/reservation.js';

export const reservation = async (req, res) => {
	const reservation = req.body;

	const newReservation = new Reservation({
		...reservation,
		customer: req.userId,
		reservedAt: new Date().toISOString(),
	});
	try {
		await newReservation.save();

		res.status(201).json(newReservation);
		googleEvent(req.body);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
