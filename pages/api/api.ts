import axios from 'axios';
// import axiosInstance from './axiosInstance';

interface GetProps {
	url: string;
	contentType?: string;
}
interface PostProps {
	url: string;
	contentType?: string;
	data: any;
}

enum method {
	get = 'get',
	post = 'post',
	put = 'put',
	delete = 'delete',
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log('baseUrl: ', baseUrl);
const axiosInstance = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
});

const axiosRequest = {
	handleError: (error: any) => {
		if (error.response) {
			// 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답.
			console.log(error.response.data);
			console.log(error.response.status);
			console.log(error.response.headers);
		} else if (error.request) {
			// 요청이 이루어 졌으나 응답을 받지 못함.
			console.log(error.request);
		} else {
			// 오류를 발생시킨 요청을 설정하는 중에 문제가 발생.
			console.log('Error', error.message);
		}
		console.log(error.config);
	},

	get: async function ({ url, contentType = 'application/json' }: GetProps) {
		const result = await axiosInstance({
			method: method.get,
			url: url,
			headers: {
				'Content-Type': contentType,
			},
		}).catch((error) => {
			this.handleError(error);
		});

		return result;
	},

	post: async function ({
		url,
		contentType = 'application/json',
		data,
	}: PostProps) {
		return await axiosInstance({
			method: method.post,
			url: url,
			data: data,
			headers: { 'Content-Type': contentType },
		});
	},

	// put: async (url: string) => {
	// 	return await axios({
	// 		method: method.put,
	// 		url: url,
	// 	});
	// },

	// delete: async (url: string) => {
	// 	return await axios({
	// 		method: method.delete,
	// 		url: url,
	// 	});
	// },
};
export default axiosRequest;
