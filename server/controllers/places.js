import Place from '../models/places.js';

export const savePlace = async (req, res) => {
	const place = req.body;

	const savePlace = new Place(place);
	try {
		await savePlace.save();

		res.status(201).json(savePlace);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const getPlaces = async (req, res) => {
	try {
		const places = await Place.find().sort({ _id: -1 });

		res.status(200).json(places);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
