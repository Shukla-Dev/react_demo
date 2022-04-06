import { SAVE } from '../Constants/actionTypes';

const savePlaceReducer = (state = { placeData: [] }, action) => {
	switch (action.type) {
		case SAVE:
			return [...state, action.payload];

		case FETCH_ALL:
			return action.payload;

		default:
			return state;
	}
};

export default savePlaceReducer;
