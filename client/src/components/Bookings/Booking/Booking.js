import React from 'react';
import { Typography, Paper, Chip, Button, Modal, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { deletereservation } from '../../../actions/auth';

const Booking = (data) => {
	console.log('data is', data.data);
	const dispatch = useDispatch();

	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Paper
			style={{
				padding: '20px',
				borderRadius: '15px',
				margin: '5px',
				width: '100vw',
			}}
			elevation={6}
		>
			<div className={classes.card}>
				<div className={classes.section}>
					<Typography variant="h4">Restaurant Details</Typography>
					<br />
					<div style={{ marginLeft: '10px' }}>
						<Typography variant="h5">
							Name: {data.data.placeData.name}
						</Typography>
						{data.data.placeData.cuisine.map(({ name }) => (
							<Chip
								key={name}
								size="small"
								label={name}
								className={classes.chip}
							/>
						))}
						<Typography gutterBottom variant="body1" component="p">
							Ranking &nbsp; {data.data.placeData.ranking}
						</Typography>
						<Typography gutterBottom variant="body1" component="p">
							Ratings &nbsp;
							<Rating
								size="small"
								value={Number(data.data.placeData.rating)}
								readOnly
							/>
						</Typography>
					</div>
					<br />
					<Typography variant="h4">Booking Details</Typography>
					<br />
					<div style={{ marginLeft: '10px' }}>
						<Typography variant="h5">
							Booked by: {data.data.fullName}
						</Typography>
						<Typography variant="h6">Email: {data.data.email}</Typography>
						<Typography variant="h6">
							Booked On: {new Date(data.data.reservedAt).toString()}
						</Typography>
						<Typography variant="h6">
							Table for : {data.data.person} Person
						</Typography>
						<Typography variant="h5">Booking For</Typography>
						<div>
							<Typography variant="h6">Date: {data.data.startDate}</Typography>
							<Typography variant="h6">
								Timing: {data.data.timing} O' Clock
							</Typography>
						</div>
					</div>
				</div>
				<div className={classes.imageSection}>
					<img
						className={classes.media}
						src={
							// data.data.placeData.photo.images.large.url ||
							'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
						}
						alt={data.data.placeData.title}
					/>
					<div style={{ marginTop: '20px' }}>
						<Button variant="contained" color="secondary" onClick={handleOpen}>
							Cancel Booking
						</Button>
					</div>
				</div>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Paper className={classes.modal} elevation={6}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						style={{ textAlign: 'center' }}
					>
						Are you Sure you want to cancel this Booking ??
					</Typography>
					<Typography
						id="modal-modal-description"
						sx={{ mt: 2 }}
						style={{ textAlign: 'center', padding: '10px' }}
					>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => dispatch(deletereservation(data.data._id))}
						>
							Cancel Booking
						</Button>
					</Typography>
				</Paper>
			</Modal>
		</Paper>
	);
};
export default Booking;
