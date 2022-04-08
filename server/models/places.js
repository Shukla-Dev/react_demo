import mongoose from 'mongoose';

const placeSchema = mongoose.Schema({
	name: { type: String, required: true },
	awards: { type: Array },
	category: { type: Object },
	cuisine: { type: Array },
	photo: { type: Object },
	prize_level: { type: String, required: true },
	ranking: { type: String },
	rating: { type: String },
	isliked: { type: Boolean },
	creator: { type: String, required: true },
});

var Place = mongoose.model('Place', placeSchema);

export default Place;
