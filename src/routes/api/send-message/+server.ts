// @ts-ignore
import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } from '$env/static/private';

export async function POST({ request }) {
	const { to, subject, text } = await request.json();

	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: SMTP_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: SMTP_USER,
			pass: SMTP_PASS
		}
	});

	try {
		// Send the email
		await transporter.sendMail({
			from: '"Rallypoint" <notifications@rallypoint.au>', // Sender address
			to, // Recipient
			subject, // Subject line
			text // Plain text body
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
	}
}
