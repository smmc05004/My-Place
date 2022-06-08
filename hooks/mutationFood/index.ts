import axios from 'axios';
import { useMutation } from 'react-query';

interface addFoodProps {
	data: any;
}

const addFood = async ({ data }: addFoodProps) => {
	console.log('data: ', data);
	// 	if (attachList) {
	// 		const uploadResult = attachList.map((attachFile: File) => {
	// 			const result = addFile(attachFile);
	// 			return result;
	// 		});

	// 		const attachResult = await Promise.all(uploadResult);
	// 		console.log('promiseResult: ', attachResult);
	// 	}

	const result = await axios.post('/api/food', data);
	return result;
};

export default function mutationFood() {
	return useMutation(addFood);
}
