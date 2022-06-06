import axios from 'axios';
import { useMutation } from 'react-query';

interface addFoodProps {
	data: any;
	attachList: any;
}

const addFile = async (attachFile: File) => {
	const formData = new FormData();
	formData.append('file', attachFile);

	const result = await axios.post(
		'http://localhost:4000/file/upload',
		formData,
		{
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		},
	);

	return result.data;
};

const addFood = async ({ data, attachList }: addFoodProps) => {
	if (attachList) {
		const uploadResult = attachList.map((attachFile: File) => {
			const result = addFile(attachFile);
			return result;
		});

		const attachResult = await Promise.all(uploadResult);
		console.log('promiseResult: ', attachResult);
	}

	const result = await axios.post('/api/food', data);
	return result;
};

export default function mutationFood() {
	return useMutation(addFood);
}
