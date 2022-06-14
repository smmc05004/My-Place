import axios from 'axios';
import { useMutation } from 'react-query';

interface Props {
	userId: string;
	password: string;
}

const login = async ({ userId, password }: Props) => {
	try {
		const result = await axios({
			method: 'post',
			url: `/api/auth/login`,
			data: {
				userId,
				password,
			},
			withCredentials: true,
		});

		return result;
	} catch (error) {
		console.error('error: ', error);
	}
};

export default function mutationLogin() {
	return useMutation(login);
}
