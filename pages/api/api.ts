import axios from 'axios';
// import axiosInstance from './axiosInstance';

interface GetProps {
	url: string;
	contentType?: string;
	// cookie?: string;
	options?: any;
}
interface PostProps {
	url: string;
	contentType?: string;
	data?: any;
}

enum method {
	get = 'get',
	post = 'post',
	put = 'put',
	delete = 'delete',
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
	withCredentials: true,
	// validateStatus: function (status) {
	// 	return status >= 200 && status < 600;
	// },
});

const axiosRequest = {
	handleError: (error: any) => {
		const errorRes = error.response;
		if (errorRes) {
			console.log('handleError 실행');
			// console.log('errorRes: ', errorRes);
			// 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답.
			// console.log('error data: ', errorRes.data);
			const errorData = errorRes.data;
			console.log('errorData: ', errorData);
			// 토큰 유효성 에러
			return errorData;

			// console.log('error status: ', errorRes.status);
			// console.log('error headers: ', errorRes.headers);
		} else if (error.request) {
			// 요청이 이루어 졌으나 응답을 받지 못함.
			console.log(error.request);
		} else {
			// 오류를 발생시킨 요청을 설정하는 중에 문제가 발생.
			console.log('Error', error.message);
		}
		// console.log(error.config);
	},

	get: async function ({
		url,
		contentType = 'application/json',
		options,
	}: GetProps) {
		const result = await axiosInstance({
			method: method.get,
			url: url,
			headers: options,
			// {
			// 	'Content-Type': contentType,
			// 	// ...(cookie && { cookie: `jwt=${cookie}` }),
			// },
		}).catch((error) => {
			const err = this.handleError(error);
			console.log('err: ', err);
			return err;
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
