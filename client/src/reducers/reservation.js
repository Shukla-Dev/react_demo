import { RESERVATION } from '../Constants/actionTypes';

const reservationReducer = (state = { reservationData: null }, action) => {
	switch (action.type) {
		case RESERVATION:
			return [...state, action.payload];

		default:
			return state;
	}
};

export default reservationReducer;
