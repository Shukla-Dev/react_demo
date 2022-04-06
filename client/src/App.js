import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router';
import Auth from './components/Auth/Auth';
import Header from './components/header/Header';
import Reservation from './components/Reservation/Reservation';
import { useSelector } from 'react-redux';
import { getplaces } from './actions/place';
import { useDispatch } from 'react-redux';

const App = () => {
	const [coords, setCoords] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getplaces());
	}, [dispatch]);

	const savedplaces = useSelector((state) => state.placeData);

	console.log('test', savedplaces);

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
			</Routes>
		</>
	);
};

export default App;
