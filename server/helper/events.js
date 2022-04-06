import { google } from 'googleapis';
import Reservation from '../models/reservation.js';

const googleEvent = async (obj) => {
	const { OAuth2 } = google.auth;

	const { email, startDate, endDate } = obj;

	const startTime = new Date(startDate);

	const endTime = new Date(endDate);

	const oAuth2Client = new OAuth2(
		'709923839309-79b0e3tubn77019ued9s76852csfdl89.apps.googleusercontent.com',
		'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'
	);

	oAuth2Client.setCredentials({
		refresh_token:
			'1//04C8oLUJNl7q6CgYIARAAGAQSNwF-L9Ir2b01FyCWq_Or8o_QGY7gQr6ghufUS_Zs6L1vylHIDl3JkZFZeEGOvLDa2UBPJ6VWpIU',
	});

	const calendar = google.calendar({ version: 'v3', oAuth2Client });

	const event = {
		summary: 'Test event',
		description: 'Google add event testing.',
		start: {
			dateTime: startTime,
			timeZone: 'Asia/Calcutta',
		},
		end: {
			dateTime: endTime,
			timeZone: 'Asia/Calcutta',
		},
		attendees: [{ email: email }],
		reminders: {
			useDefault: false,
			overrides: [
				{ method: 'email', minutes: 24 * 60 },
				{ method: 'popup', minutes: 30 },
			],
		},
	};

	calendar.events
		.insert({
			auth: oAuth2Client,
			calendarId: 'primary',
			resource: event,
		})
		.then((event) => console.log('Event created: %s', event.htmlLink))
		.catch((error) => console.log('Some error occured', error));
};

export default googleEvent;
