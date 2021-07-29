import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

async function mailingList(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'PUT') {
		const email = req.body.email;
		const listId = process.env.SENDGRID_CONTACTS_LIST;
		try {
			const response = await axios.post(
				'https://api.sendgrid.com/v3/marketing/contacts/search',
				{
					query: `email LIKE '${email}' AND CONTAINS(list_ids, '6c6b1f2b-9797-41cf-9bf0-bb2a81d2da63')`,
				},
				{
					headers: {
						'content-type': 'application/json',
						Authorization: `Bearer ${process.env.SENDGRID_TOKEN}`,
					},
				},
			);
			if (response.data.contact_count === 0) {
				await axios.put(
					'https://api.sendgrid.com/v3/marketing/contacts',
					{
						contacts: [{ email }],
						list_ids: [listId],
					},
					{
						headers: {
							'content-type': 'application/json',
							Authorization: `Bearer ${process.env.SENDGRID_TOKEN}`,
						},
					},
				);
				res.status(201).end();
			} else {
				res.status(400).end();
			}
		} catch (error) {
			res.status(500).end();
		}
	}
}

export default mailingList;
