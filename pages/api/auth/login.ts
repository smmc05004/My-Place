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
			const accessToken = cookie[0].split(';')[0].split('=')[1];
			const refreshToken = cookie[1].split(';')[0].split('=')[1];

			const jwtAccessToken = serialize('jwt_access_token', accessToken, {
				httpOnly: true,
				path: '/',
				maxAge: 60,
			});

			const jwtRefreshToken = serialize('jwt_refresh_token', refreshToken, {
				httpOnly: true,
				path: '/',
				maxAge: 120,
			});

			res.setHeader('Set-Cookie', [jwtAccessToken, jwtRefreshToken]);
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({
			message: 'Unexpected Error Occured',
		});
	}
}
