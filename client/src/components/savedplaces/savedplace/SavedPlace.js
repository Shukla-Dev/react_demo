import React from 'react';
import { useSelector } from 'react-redux';
import UseStyles from './styles';
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardActions,
	Chip,
	CardContent,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LocationOn, Favorite } from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { deleteplace } from '../../../actions/place';

const SavedPlace = (data) => {
	const handleClick = () => {
		console.log('data', data.data);
	};

	const dispatch = useDispatch();

	const classes = UseStyles();

	return (
		<Grid item>
			<Card elevation={6} className={classes.card}>
				<CardMedia
					style={{ height: 250 }}
					image="https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
					// data.data.photo
					// 	? data?.photo?.images?.large?.url
					// 	:

					title={data.data.name}
				/>
				<CardContent>
					<Box display="flex" justifyContent="space-between">
						<Typography gutterBottom variant="h5">
							{data.data.name}
						</Typography>
						<CardActions>
							<Button>
								<Favorite color="secondary" />
							</Button>
						</CardActions>
					</Box>
					<Box display="flex" justifyContent="space-between">
						<Typography variant="subtitle1">
							<Rating size="small" value={Number(data.data.rating)} readOnly />
						</Typography>
						<Typography gutterBottom variant="subtitle1">
							out of {data.data.num_reviews} reviews
						</Typography>
					</Box>
					<Box display="flex" justifyContent="space-between">
						<Typography variant="subtitle1">Price</Typography>
						<Typography gutterBottom variant="subtitle1">
							{data?.data?.prize_level}
						</Typography>
					</Box>
					<Box display="flex" justifyContent="space-between">
						<Typography variant="subtitle1">Rankings</Typography>
						<Typography gutterBottom variant="subtitle1">
							{data.data.ranking}
						</Typography>
					</Box>
					{data.data?.awards?.map((award) => (
						<Box
							my={1}
							display="flex"
							justifyContent="between"
							alignItems="center"
						>
							<img src={award.images.small} alt="award.display_ name" />
							<Typography variant="subtitle2" color="textSecondary">
								{award.display_name}
							</Typography>
						</Box>
					))}
					{data.data?.cuisine?.map(({ name }) => (
						<Chip
							key={name}
							size="small"
							label={name}
							className={classes.chip}
						/>
					))}
					{data.data?.address && (
						<Typography
							gutterBottom
							variant="subtitle2"
							color="textSecondary"
							className={classes.subtitle}
						>
							<LocationOn />
							{data.data.address}
						</Typography>
					)}
					{data.data?.phone && (
						<Typography
							gutterBottom
							variant="subtitle2"
							color="textSecondary"
							className={classes.spacing}
						>
							<Phone />
							{data.data.phone}
						</Typography>
					)}
					<CardActions>
						<Button
							size="medium"
							color="secondary"
							component={Link}
							to="/reservation"
							variant="contained"
							onClick={handleClick}
						>
							{' '}
							Book Table
						</Button>
						<Button
							size="small"
							color="primary"
							onClick={() => window.open(data.data.website, '_blank')}
						>
							{' '}
							WebSite
						</Button>
						<Button
							size="small"
							contained
							color="primary"
							onClick={() => dispatch(deleteplace(data.data._id))}
						>
							Delete
						</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default SavedPlace;
