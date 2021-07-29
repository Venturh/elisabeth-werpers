import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

async function Form(req: NextApiRequest, res: NextApiResponse) {
	const body = req.body;

	const msg = {
		template_id: 'd-61c8093126a94a79856372143c81bcfd',
		from: { email: 'venturh94@gmail.com' },
		personalizations: [
			{
				to: [{ email: 'venturh94@gmail.com', name: 'John Doe' }],
				dynamic_template_data: {
					name: body.name,
					email: body.email,
					message: body.message,
				},
			},
		],
	};

	try {
		await axios.post('https://api.sendgrid.com/v3/mail/send', msg, {
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${process.env.SENDGRID_TOKEN}`,
			},
		});
		return res.status(200).end();
	} catch (error) {
		return res.status(500).end();
	}
}

export default Form;
