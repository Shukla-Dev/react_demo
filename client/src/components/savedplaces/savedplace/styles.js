import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	card: {
		borderRadius: 15,
		height: 'auto',
		width: 400,
	},

	chip: {
		margin: '5px 5px 10px 0',
	},
	subtitle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '10px',
	},
	spacing: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));
