import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import apiRequest from '../api';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const result = await apiRequest.post({
		url: `/auth/logout`,
	});

	// const serialized = serialize('jwt', '', {
	// 	httpOnly: true,
	// 	path: '/',
	// 	maxAge: -1,
	// });

	// res.setHeader('Set-Cookie', serialized);
	res.setHeader('Set-Cookie', '');
	console.log('result: ', result);

	res.status(200).json({
		message: 'success',
	});
}
