import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(15),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
		borderRadius: 10,
	},
	startlabel: {
		margin: theme.spacing(1),
	},
	endlabel: {
		margin: theme.spacing(1),
	},
	startDate: {
		marginLeft: theme.spacing(1),
		// width: 200,
		// height: 50,
	},
	endDate: {
		marginLeft: theme.spacing(1),
		// width: 200,
	},
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(0),
		},
	},
	// avatar: {
	// 	margin: theme.spacing(1),
	// 	backgroundColor: theme.palette.secondary.main,
	// },
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
