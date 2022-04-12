import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Header from './components/header/Header';
import Reservation from './components/Reservation/Reservation';
import { useSelector } from 'react-redux';
import { getplaces } from './actions/place';
import { getreservation } from './actions/auth';
import { useDispatch } from 'react-redux';
import SavedPlaces from './components/savedplaces/SavedPlaces';

const App = () => {
	const [coords, setCoords] = useState({});
	const dispatch = useDispatch();

	const reservations = useSelector((state) => state);

	console.log(reservations);

	useEffect(() => {
		dispatch(getplaces());
		dispatch(getreservation());
	}, []);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	return (
		<>
			<Header setCoords={setCoords} />
			<Routes>
				<Route
					path="/"
					element={<Home setCoords={setCoords} coords={coords} />}
				/>
				<Route path="/auth" element={<Auth />} />
				<Route path="/reservation" element={<Reservation />} />
				<Route path="/savedplaces" element={<SavedPlaces />} />
			</Routes>
		</>
	);
};

export default App;
