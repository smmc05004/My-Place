import axios from 'axios';
import { useQuery } from 'react-query';
import { convertObjToQueryString } from '../../utils/qs';

interface Props {
	category: number;
	page: number;
}

const getFoods = async ({ category, page }: Props) => {
	const qs = convertObjToQueryString({ category, page });
	const result = await axios({
		method: 'get',
		url: `/api/food${qs}`,
	});

	return result;
};

export default function useFoods({ category, page }: Props) {
	return useQuery(['foods', category, page], () =>
		getFoods({ category, page }),
	);
}
