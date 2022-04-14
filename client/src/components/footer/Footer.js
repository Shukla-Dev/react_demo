import { Box, Container, Typography, Grid } from '@material-ui/core';
import {
	Instagram,
	Twitter,
	Facebook,
	LinkedIn,
	Mail,
	Call,
	LocationOn,
} from '@material-ui/icons';

const Footer = () => {
	return (
		<Box sx={{ bgcolor: '#3f51b5' }} style={{ marginTop: 25, color: 'white' }}>
			<Container maxWidth="md" sx={{ py: 6 }}>
				<Box>
					<Grid container spacing={4}>
						<Grid item xs={6} md={4}>
							<Typography
								variant="h5"
								style={{ color: 'white', fontFamily: 'Cursive' }}
							>
								Company
							</Typography>
							<ul>
								<li>
									<Typography variant="subtitle1" href="#">
										About Us
									</Typography>
								</li>
								<li>
									<Typography variant="subtitle1" href="#">
										Contact Us
									</Typography>
								</li>
								<li>
									<Typography variant="subtitle1" href="#">
										Privacy
									</Typography>
								</li>
								<li>
									<Typography variant="subtitle1" href="#">
										Speed Test
									</Typography>
								</li>
							</ul>
						</Grid>

						<Grid item xs={6} md={4}>
							<Typography
								variant="h5"
								style={{ color: 'white', fontFamily: 'Cursive' }}
							>
								Reach Us
							</Typography>
							<div style={{ marginLeft: 15, marginTop: 10 }}>
								<div style={{ display: 'flex' }}>
									<LocationOn />
									&nbsp;&nbsp; Teaxs , U.S.A
								</div>
								<br />
								<div style={{ display: 'flex' }}>
									<Mail />
									&nbsp;&nbsp; travellerapp@gmail.com
								</div>
								<br />
								<div style={{ display: 'flex' }}>
									<Call />
									&nbsp;&nbsp; 1234567890
								</div>
								<br />
							</div>
						</Grid>
						<Grid item xs={6} md={4}>
							<Typography
								variant="h5"
								style={{ color: 'white', fontFamily: 'Cursive' }}
							>
								Follow Us
							</Typography>
							<div style={{ marginLeft: 15, marginTop: 10 }}>
								<a
									href="https://www.instagram.com/"
									style={{ color: 'whitesmoke' }}
								>
									<Instagram />
								</a>
								&nbsp;&nbsp;
								<a href="https://twitter.com/" style={{ color: 'whitesmoke' }}>
									<Twitter />
								</a>
								&nbsp;&nbsp;
								<a href="https://facebook.com/" style={{ color: 'whitesmoke' }}>
									<Facebook />
								</a>
								&nbsp;&nbsp;
								<a
									href="https://www.linkedin.com/"
									style={{ color: 'whitesmoke' }}
								>
									<LinkedIn />
								</a>
							</div>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
