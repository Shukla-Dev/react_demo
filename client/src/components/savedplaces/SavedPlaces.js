import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import SavedPlace from './savedplace/SavedPlace';

const SavedPlaces = () => {
	const [data, setData] = useState([]);
	const savedplaces = useSelector((state) => state.savePlace);
	const user = JSON.parse(localStorage.getItem('profile'));

	return savedplaces.length > 0 ? (
		<div>
			<Typography variant="h4" style={{ marginTop: '70px' }}>
				Saved Places
			</Typography>
			<Grid
				container
				spacing={4}
				style={{ marginTop: '10px', marginLeft: '50px' }}
			>
				{savedplaces.map((item, index) => {
					if (item.creator === user?.result?.email)
						return <SavedPlace data={item} key={index} />;
				})}
			</Grid>
		</div>
	) : (
		<Typography variant="h4" style={{ marginTop: '80px' }}>
			you do not have a savedPlaces ...
		</Typography>
	);
};

export default SavedPlaces;
