import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from '../api';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const result = await apiRequest.post({
		url: `/auth/logout`,
	});
	console.log('result: ', result);

	res.status(200).json({
		message: 'success',
	});
}
