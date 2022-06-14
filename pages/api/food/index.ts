import type { NextApiRequest, NextApiResponse } from 'next';
import { convertObjToQueryString } from '../../../utils/qs';
import apiRequest from '../api';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log('cookie: ', req.cookies);
	if (req.method === 'GET') {
		// console.log('token: ', req.headers.cookie);
		const qs = convertObjToQueryString(req.query);
		const result = await apiRequest.get({
			url: `/food${qs}`,
		});

		res.status(200).json(result?.data);
	}
	if (req.method === 'POST') {
		const data = req.body;

		if (!data) {
			res.status(501).json({ status: 501, message: 'No data' });
		}

		try {
			const result = await apiRequest.post({ url: '/food', data });
			res.status(200).json(result?.data);
		} catch (error) {
			console.log('error: ', error);
		}
	}
}
