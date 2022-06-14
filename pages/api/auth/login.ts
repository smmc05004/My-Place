import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from '../api';
import {} from 'jsonwebtoken';
import { serialize } from 'cookie';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// console.log('req: ', req);

	// if (req.method === 'GET') {
	console.log('body: ', req.body);
	const { userId, password } = req.body;
	// const id = req.query.id;
	const result = await apiRequest.post({
		url: `/auth/login`,
		data: { userId, password },
	});
	console.log('result: ', result);

	// const serialized = serialize('jwt', result.data, {
	// 	httpOnly: true,
	// 	maxAge: 3600 * 1000,
	// 	path: '/',
	// });
	// res.setHeader('Set-Cookie', serialized);

	// res.

	res.status(200).json({
		message: 'success',
	});
	// }
}
