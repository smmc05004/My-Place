import axios from 'axios';
import { useQuery } from 'react-query';

const getFoods = async () => {
	const result = await axios({
		method: 'get',
		url: '/api/food',
	});

	return result;
};

export default function useFoods() {
	return useQuery(['foods'], () => getFoods());
}
