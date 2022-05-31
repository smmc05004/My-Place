import axios from 'axios';
import { useMutation } from 'react-query';

const addFood = async (data: any) => {
	console.log('data: ', data);
	const result = await axios.post('/api/food', data);
	console.log('result: ', result);
	return result;
};

export default function mutationFood() {
	return useMutation(
		addFood,
		//   , {
		// 	onSuccess: () => {
		// 		console.log('success');
		// 	},
		// 	onError: () => {
		// 		console.log('error');
		// 	},
		// }
	);
}
