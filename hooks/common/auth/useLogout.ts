import axios from 'axios';
import { useMutation } from 'react-query';

interface Props {
	userId: string;
}

const logout = async ({ userId }: Props) => {
	try {
		const result = await axios({
			method: 'post',
			url: `/api/auth/logout`,
			data: {
				userId,
			},
			withCredentials: true,
		});

		return result;
	} catch (error) {
		console.error('error: ', error);
	}
};

export default function mutationLogOut() {
	return useMutation(logout);
}
