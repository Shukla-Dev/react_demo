import mongoose from 'mongoose';
import googleEvent from '../helper/events.js';
import Reservation from '../models/reservation.js';

export const reservation = async (req, res) => {
	const reservations = req.body;

	const newReservation = new Reservation({
		...reservations,
		customer: req.userId,
		reservedAt: new Date().toISOString(),
	});
	try {
		await newReservation.save();

		res.status(201).json(newReservation);
		googleEvent(req.body);
	} catch (error) {
		res.status(409).json(error);
	}
};

export const reservations = async (req, res) => {
	try {
		const reservations = await Reservation.find().sort({
			_id: -1,
		});

		res.status(200).json(reservations);
	} catch (error) {
		res.status(404).json(error);
	}
};

export const deleteReservation = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send('no reservation with that id');

	await Reservation.findByIdAndRemove(id);

	res.json({ message: 'reservation deleted successfully' });
};
