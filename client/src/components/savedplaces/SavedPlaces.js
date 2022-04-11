import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import SavedPlace from './savedplace/SavedPlace';
const SavedPlaces = () => {
	const [data, setData] = useState([]);
	const savedplaces = useSelector((state) => state.savePlace);
	const selectItem = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	// console.log({ user });

	useEffect(() => {
		// debugger;
		// console.log('savedplaces ', savedplaces);
		if (savedplaces.length > 0) {
			const datas = savedplaces.filter((item) => {
				if (user?.result?.email === item?.creator) return item;
			});

			// console.log(datas);
			setData(datas);
		}
	}, []);

	return data.length > 0 ? (
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
	) : (
		<Typography variant="h4" style={{ marginTop: '80px' }}>
			you do not have a savedPlaces ...
		</Typography>
	);
};

export default SavedPlaces;
