import axios from 'axios';
import { useQuery } from 'react-query';

interface Props {
	category: number;
}

const getFoods = async ({ category }: Props) => {
	const result = await axios({
		method: 'get',
		url: `/api/food?category=${category}`,
	});

	return result;
};

export default function useFoods({ category }: Props) {
	return useQuery(['foods', category], () => getFoods({ category }));
}
