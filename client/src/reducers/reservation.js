import { FETCH, RESERVATION } from '../Constants/actionTypes';

const reservationReducer = (reservationData = [], action) => {
	switch (action.type) {
		case RESERVATION:
			console.log('type here book');
			return [...reservationData, action.payload];

		case FETCH:
			return action.payload;

		default:
			return reservationData;
	}
};

export default reservationReducer;
