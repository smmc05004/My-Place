import axios from 'axios';
import { useMutation } from 'react-query';

interface addFoodProps {
	data: any;
}

const addFood = async ({ data }: addFoodProps) => {
	const result = await axios.post('/api/food', data);
	return result;
};

export default function mutationFood() {
	return useMutation(addFood);
}
