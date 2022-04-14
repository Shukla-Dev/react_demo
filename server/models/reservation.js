import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true },
	person: { type: Number, required: true },
	startDate: { type: String, required: true },
	endDate: { type: String },
	reservedAt: { type: Date, default: Date.now() },
	timing: { type: String, required: true },
	placeData: { type: Object },
});

var Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
