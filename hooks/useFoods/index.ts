import axios from 'axios';
import { useQuery } from 'react-query';
import { requestClient } from '../../client/clientApi';
import { convertObjToQueryString } from '../../utils/qs';

interface Props {
	category: number;
	page: number;
}

const getFoods = async ({ category, page }: Props) => {
	const qs = convertObjToQueryString({ category, page });
	// const result = await axios({
	// 	method: 'get',
	// 	url: `/api/food${qs}`,
	// 	withCredentials: true,
	// });
	try {
		const result = await requestClient.get({
			url: `/api/food${qs}`,
		});

		return result;
	} catch (error) {
		console.log('request error: ', error);
	}
};

export default function useFoods({ category, page }: Props) {
	return useQuery(
		['foods', category, page],
		() => getFoods({ category, page }),
		{
			onSuccess: () => {
				console.log('success');
			},
			onError: (error) => {
				console.log('query error: ', error);
			},
		},
	);
}
