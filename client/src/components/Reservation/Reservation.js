import {
	Container,
	Paper,
	Typography,
	Grid,
	Button,
	InputLabel,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { reservation } from '../../actions/auth';

import UseStyles from './styles';

const initialState = {
	fullName: '',
	email: '',
	person: '',
	startDate: '',
	endDate: '',
};

const Reservation = () => {
	const classes = UseStyles();
	const dispatch = useDispatch();

	const [reservationData, setReservationData] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(reservation(reservationData));
	};

	const handleChange = (e) => {
		setReservationData({ ...reservationData, [e.target.name]: e.target.value });

		console.log(reservationData);
	};
	return (
		<Container component="main" maxWidth="sm">
			<Paper className={classes.paper} elevation={8}>
				<Typography variant="h5">Reservation</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Input
							name="fullName"
							label="Full Name"
							handleChange={handleChange}
							autoFocus
							fullWidth
						/>

						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="person"
							label="Number of Person"
							handleChange={handleChange}
						/>
						<InputLabel className={classes.startlabel}>Start Date</InputLabel>
						<TextField
							type="date"
							name="startDate"
							minDate={new Date()}
							onChange={handleChange}
						/>

						<InputLabel className={classes.endlabel}>End Date</InputLabel>
						<TextField
							type="date"
							name="endDate"
							className={classes.endDate}
							minDate={new Date()}
							onChange={handleChange}
						/>
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
					>
						Book Now
					</Button>
				</form>
			</Paper>
		</Container>
	);
};

export default Reservation;
