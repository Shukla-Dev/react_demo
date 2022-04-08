import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import SavedPlace from './savedplace.js/SavedPlace';

const SavedPlaces = () => {
	const [data, setData] = useState([]);
	const savedplaces = useSelector((state) => state.savePlace);

	const user = JSON.parse(localStorage.getItem('profile'));

	console.log({ user });

	useEffect(() => {
		console.log(savedplaces);
		if (savedplaces.length > 0) {
			const datas = savedplaces.filter((item) => {
				if (user?.result?.email === item?.creator) return item;
			});

			console.log(datas);
			setData(datas);
		}
	}, []);

	return (
		<div>
			<Typography variant="h4" style={{ marginTop: '80px' }}>
				Saved Places
			</Typography>
			<Grid
				container
				spacing={4}
				style={{ marginTop: '10px', marginLeft: '50px' }}
			>
				{data.map((item, index) => {
					return <SavedPlace data={item} key={index} />;
				})}
			</Grid>
		</div>
	);
};

export default SavedPlaces;
