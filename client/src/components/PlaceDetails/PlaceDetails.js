import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardActions,
	Chip,
	CardContent,
} from '@material-ui/core';
import { getplaceData, saveplace } from '../../actions/place';
import {
	LocationOn,
	FavoriteBorder,
	Favorite,
	FavoriteBorderOutlined,
} from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';
import Reservation from '../Reservation/Reservation';

const PlaceDetails = ({ place, selected, refProp, type }) => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const user = JSON.parse(localStorage.getItem('profile'));

	const [placeData, setPlaceData] = useState({
		name: place?.name,
		awards: place.awards,
		category: place?.category,
		cuisine: place?.cuisine,
		photo: place?.photo,
		prize_level: place?.price_level,
		ranking: place?.ranking,
		rating: place.rating,
		isliked: false,
		creator: user?.result?.email,
	});

	// console.log(user?.result?.email);

	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		console.log(placeData);
		localStorage.setItem('placeData', JSON.stringify({ ...placeData }));
	};

	const handleSubmit = () => {
		console.log('t', placeData);
		dispatch(saveplace(placeData));
		setIsClicked(() => !isClicked);
	};

	if (selected) {
		refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<Card elevation={6} style={{ borderRadius: 20 }}>
			<CardMedia
				style={{ height: 300 }}
				image={
					place.photo
						? place?.photo?.images?.large?.url
						: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
				}
				title={place.name}
			/>
			<CardContent>
				<Box display="flex" justifyContent="space-between">
					<Typography gutterBottom variant="h5">
						{place.name}
					</Typography>
					<CardActions>
						<Button onClick={handleSubmit}>
							{isClicked ? (
								<Favorite color="secondary" />
							) : (
								<FavoriteBorderOutlined />
							)}
						</Button>
					</CardActions>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">
						<Rating size="small" value={Number(place.rating)} readOnly />
					</Typography>
					<Typography gutterBottom variant="subtitle1">
						out of {place.num_reviews} reviews
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Price</Typography>
					<Typography gutterBottom variant="subtitle1">
						{place?.price_level}
					</Typography>
				</Box>
				<Box display="flex" justifyContent="space-between">
					<Typography variant="subtitle1">Rankings</Typography>
					<Typography gutterBottom variant="subtitle1">
						{place.ranking}
					</Typography>
				</Box>
				{place?.awards?.map((award) => (
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
				{place?.cuisine?.map(({ name }) => (
					<Chip key={name} size="small" label={name} className={classes.chip} />
				))}
				{place?.address && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className={classes.subtitle}
					>
						<LocationOn />
						{place.address}
					</Typography>
				)}
				{place?.phone && (
					<Typography
						gutterBottom
						variant="subtitle2"
						color="textSecondary"
						className={classes.spacing}
					>
						<Phone />
						{place.phone}
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
						Book {type === 'restaurants' ? 'Table' : 'Room'}
					</Button>
					<Button
						size="small"
						color="primary"
						onClick={() => window.open(place.website, '_blank')}
					>
						{' '}
						WebSite
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default PlaceDetails;
