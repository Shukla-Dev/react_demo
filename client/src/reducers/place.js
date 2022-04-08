import { SAVE, FETCH_ALL, DELETE } from '../Constants/actionTypes';

const savePlaceReducer = (state = { placeData: [] }, action) => {
	switch (action.type) {
		case SAVE:
			return [...state, action.payload];

		case FETCH_ALL:
			return action.payload;

		case DELETE:
			// console.log('state', );
			return state.filter((place) => place._id !== action.payload);

		default:
			return state;
	}
};

export default savePlaceReducer;
