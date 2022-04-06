import { AUTH, RESERVATION } from '../Constants/actionTypes';
import * as API from '../API/index';

export const signin = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await API.signIn(formData);

		dispatch({ type: AUTH, data });

		navigate('/');
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await API.signUp(formData);

		dispatch({ type: AUTH, data });

		navigate('/');
	} catch (error) {
		console.log(error);
	}
};

export const reservation = (reservationData) => async (dispatch) => {
	console.log(reservationData);
	try {
		const { data } = await API.reservation(reservationData);

		dispatch({ type: RESERVATION, data });
	} catch (error) {
		console.log(error);
	}
};
