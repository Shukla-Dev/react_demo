import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router';
import Auth from './components/Auth/Auth';
import Header from './components/header/Header';
import Reservation from './components/Reservation/Reservation';
import { getplaces } from './actions/place';
import { useDispatch } from 'react-redux';
import SavedPlaces from './components/savedplaces/SavedPlaces';
import Footer from './components/footer/Footer';
import { getreservation } from './actions/auth';
import Bookings from './components/Bookings/Bookings';

const App = () => {
	const [coords, setCoords] = useState({});
	const dispatch = useDispatch();

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
				<Route path="/bookings" element={<Bookings />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
