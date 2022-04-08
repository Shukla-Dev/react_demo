import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true },
	person: { type: Number, required: true },
	startDate: { type: String, required: true },
	endDate: { type: String },
	customer: { type: String, required: true },
	reservedAt: { type: Date, default: Date.now() },
});

var Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
