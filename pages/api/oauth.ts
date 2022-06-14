import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from './api';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const REDIRECT_URI = process.env.KAKAO_REDIRECT_URL;
	const REST_API_KEY = process.env.KAKAO_API_KEY;

	const { code } = req.body;

	if (!code) {
		res.status(500).json({ message: 'need code' });
		return;
	}

	// get access_token
	const result = await apiRequest.post({
		url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
		contentType: 'application/x-www-form-urlencoded;charset=utf-8',
	});

	const accessToken = result?.data?.access_token;
	console.log();
	if (!accessToken) {
		res.status(500).json({ message: 'access token request error' });
		return;
	}

	// get 회원정보
	const apiresult = await axios({
		method: 'GET',
		url: 'https://kapi.kakao.com/v2/user/me',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			'Authorization': `Bearer ${accessToken}`,
		},
	});

	if (apiresult?.status !== 200 || apiresult?.statusText !== 'OK') {
		res.status(500).json({ message: 'user info request error' });
		return;
	}

	const { data } = apiresult;
	console.log('data: ', data.id);
	const {
		kakao_account: { profile },
	} = data;

	const userData = {
		id: data.id,
		name: profile.nickname,
	};

	// const result = await axios({
	// 	method: 'GET',
	// 	url: 'https://kapi.kakao.com/v2/user/me',
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
	// 		'Authorization': `Bearer ${accessToken}`,
	// 	},
	// )

	if (data.id) {
		res.status(200).json(data);
		return;
	}
	res.status(404).json({ message: 'use info not found' });
}
