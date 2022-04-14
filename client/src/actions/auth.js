import { AUTH, RESERVATION, FETCH, DELETERES } from '../Constants/actionTypes';
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
		console.log({ reservationData });
		const { data } = await API.reservation(reservationData);

		dispatch({ type: RESERVATION, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const getreservation = () => async (dispatch) => {
	try {
		const { data } = await API.getreservation();
		console.log('BE data', data);

		dispatch({ type: FETCH, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletereservation = (id) => async (dispatch) => {
	try {
		await API.deletereservation(id);

		dispatch({ type: DELETERES, payload: id });
	} catch (error) {
		console.log(error);
	}
};
