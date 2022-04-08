import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signup', FormData);

export const reservation = (ReservationData) =>
	API.post('/user/reservation', ReservationData);

export const getreservation = () => API.get('/user/reservations');

export const saveplace = (PlaceData) => API.post('/place/save', PlaceData);
export const getplaces = () => API.get('/place/savedplaces');
export const deleteplace = (id) => API.delete(`/place/${id}`);

export const getPlacesData = async (type, sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(
			`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
			{
				params: {
					bl_latitude: sw.lat,
					bl_longitude: sw.lng,
					tr_longitude: ne.lng,
					tr_latitude: ne.lat,
				},
				headers: {
					'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
					'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
				},
			}
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};
