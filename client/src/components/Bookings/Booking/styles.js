import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	media: {
		borderRadius: '20px',
		objectFit: 'cover',
		width: '100%',
		maxHeight: '300px',
	},
	card: {
		display: 'flex',
		width: '100%',

		[theme.breakpoints.down('xs')]: {
			flexWrap: 'wrap',
			flexDirection: 'column',
		},
	},
	section: {
		borderRadius: '20px',
		margin: '10px',
		flex: 1,
		width: '30%',
	},
	imageSection: {
		marginLeft: '20px',
		flexDirection: 'column',
		marginTop: '-10px',
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0,
		},
		width: '40%',
		display: 'flex',
	},
	recommendedPosts: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	loadingPaper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px',
		borderRadius: '15px',
		height: '39vh',
	},
	chip: {
		margin: '5px 5px 10px 0',
	},
	modal: {
		position: 'absolute',
		borderRadius: '10px',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',

		boxShadow: 24,
		p: 4,
	},
}));
