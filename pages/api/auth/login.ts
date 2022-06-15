import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from '../api';
// import {} from 'jsonwebtoken';
// import { serialize } from 'cookie';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { userId, password } = req.body;
	const result = await apiRequest.post({
		url: `/auth/login`,
		data: { userId, password },
	});
	const user = result.data?.data;

	// const serialized = serialize('jwt', result.data, {
	// 	httpOnly: true,
	// 	maxAge: 3600 * 1000,
	// 	path: '/',
	// });
	// res.setHeader('Set-Cookie', serialized);

	res.status(200).json(user);
}
