import axios from 'axios';
import { useQuery } from 'react-query';

interface Props {
	id: number;
}

const getFood = async ({ id }: Props) => {
	const result = await axios({
		method: 'get',
		url: `/api/food/${id}`,
		withCredentials: true,
	});

	return result;
};

export default function useFood({ id }: Props) {
	return useQuery(['foods', id], () => getFood({ id }));
}
