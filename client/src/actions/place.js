import { SAVE, FETCH_ALL } from '../Constants/actionTypes';
import * as API from '../API/index';

export const saveplace = (placeData) => async (dispatch) => {
	try {
		const { data } = await API.saveplace(placeData);

		dispatch({ type: SAVE, data });
	} catch (error) {
		console.log(error);
	}
};

export const getplaces = () => async (dispatch) => {
	try {
		const { data } = await API.getplaces();
		console.log('BE data', data);

		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};
