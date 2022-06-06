import type { NextApiRequest, NextApiResponse } from 'next';
import { convertObjToQueryString } from '../../../utils/qs';
import apiRequest from '../api';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'POST') {
		console.log('req.body: ', req.body);
		const data = req.body.data;

		if (!data) {
			res.status(501).json({ status: 501, message: 'No data' });
		}

		try {
			const result = await apiRequest.post({
				url: '/file/upload',
				data,
				contentType: 'multipart/form-data',
			});
			console.log('result: ', result);
			res.status(200).json(result?.data);
		} catch (error) {
			console.log('error: ', error);
		}
	}
}
