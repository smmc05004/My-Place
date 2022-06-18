import type { NextApiRequest, NextApiResponse } from 'next';
import { convertObjToQueryString } from '../../../utils/qs';
import apiRequest from '../api';

type TokenError = 'badToken' | 'expiredToken';

const tokenMsg = {
	badToken: '토큰이 유효하지 않습니다.',
	expiredToken: '토큰이 만료되었습니다.',
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const accessToken = req.cookies['jwt_access_token'];
	const refreshToken = req.cookies['jwt_refresh_token'];

	if (req.method === 'GET') {
		const qs = convertObjToQueryString(req.query);
		const result = await apiRequest.get({
			url: `/food${qs}`,
			options: {
				'Content-Type': 'application/json',
				...(accessToken && { jwt_access_token: accessToken }),
				...(refreshToken && { jwt_refresh_token: refreshToken }),
			},
		});
		console.log('api result: ', result);
		const errorStatusCode = result.statusCode;

		if (errorStatusCode && errorStatusCode === 401) {
			res
				.status(401)
				.json({ message: errorStatusCode.message || 'Auth Error' });
		} else {
			res.status(200).json(result?.data);
		}
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
