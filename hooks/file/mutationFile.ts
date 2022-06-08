import axios from 'axios';

interface addFoodProps {
	attachList: File[];
	type: string;
}

const requestUploadFile = async (file: File, type: string) => {
	const formData = new FormData();
	formData.append('file', file);

	const result = await axios.post('/api/file', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return {
		name: result.data.filename,
		type,
	};
};

export const upload = async ({ attachList, type }: addFoodProps) => {
	const promiseArr = attachList.map(async (file) => {
		return await requestUploadFile(file, type);
	});

	const promiseResult = await Promise.all(promiseArr);

	return promiseResult;
};
