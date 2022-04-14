import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Booking from './Booking/Booking';

const Bookings = () => {
	const [data, setData] = useState([]);
	const bookings = useSelector((state) => state.reservation);
	console.log(bookings);

	const user = JSON.parse(localStorage.getItem('profile'));

	return bookings.length > 0 ? (
		<div>
			<Typography variant="h4" style={{ marginTop: '70px' }}>
				Bookings
			</Typography>
			<Grid
				container
				spacing={2}
				maxWidth="80%"
				style={{ marginTop: '10px', paddingLeft: 50 }}
			>
				{bookings.map((item, index) => {
					if (item.email === user?.result?.email)
						return <Booking data={item} key={index} />;
				})}
			</Grid>
		</div>
	) : (
		<Typography variant="h4" style={{ marginTop: '80px' }}>
			you have no bookings
		</Typography>
	);
};

export default Bookings;
