import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from '../api';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// console.log('req: ', req);

	if (req.method === 'GET') {
		const id = req.query.id;
		const result = await apiRequest.get({ url: `/food/${id}` });
		res.status(200).json(result?.data);
	}
}
