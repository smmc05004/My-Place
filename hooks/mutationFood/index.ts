import axios from 'axios';
import { useMutation } from 'react-query';

const addFood = async (data: any) => {
	const result = await axios.post('/api/food', data);
	return result;
};

export default function mutationFood() {
	return useMutation(addFood);
}
