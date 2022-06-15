import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from '../api';
import { serialize } from 'cookie';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { userId, password } = req.body;
	try {
		const result = await apiRequest.post({
			url: `/auth/login`,
			data: { userId, password },
		});

		const user = result.data?.data;
		const cookie = result.headers['set-cookie'];

		if (cookie) {
			const jwt = cookie[0].split(';')[0].split('=')[1];

			const serialized = serialize('jwt', jwt, {
				httpOnly: true,
				path: '/',
				maxAge: 5 * 60 * 1000,
			});

			res.setHeader('Set-Cookie', serialized);
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({
			message: 'Unexpected Error Occured',
		});
	}
}
