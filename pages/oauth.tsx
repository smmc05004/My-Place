import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

interface OauthProps {
	message: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { code } = ctx.query;
	const kakaoLoginRequestUrl =
		process.env.KAKAO_API_REQUEST_URL || 'http://localhost:3000/api/oauth';

	const result = await axios.post(kakaoLoginRequestUrl, {
		code,
	});

	if (result.status !== 200 || result.statusText !== 'OK') {
		return {
			props: {
				message: 'api error',
			},
		};
	}

	const { data } = result;

	if (!data?.id) {
		return {
			props: {
				message: 'user not found',
			},
		};
	}

	return {
		redirect: {
			permanent: false,
			destination: `/auth/login`,
			//?nickname=${data?.properties.nickname}
		},
	};
};

// 카카오 oauth 체크 위해 필요한 페이지
const Oauth: React.FC<OauthProps> = ({ message }) => {
	return <div>{message}</div>;
};

export default Oauth;
