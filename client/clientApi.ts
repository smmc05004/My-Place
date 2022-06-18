import axios from 'axios';

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

const clientAxiosInstance = axios.create({
	// baseURL: 'http://localhost:3000',
	timeout: 5000,
	withCredentials: true,
});

// clientAxiosInstance.interceptors.request.use()

export const requestClient = {
	handleError: (error: any) => {
		console.log('client request error: ', error);
		const { request, response } = error;
		if (request) {
			console.log('request error');

			const { data } = request;
			const status = request.status;
			// if (status === 401) {
			// 	alert('로그인이 필요합니다.');
			// 	location.href = '/auth/login';
			// 	return;
			// }

			console.log('data: ', data);
		} else if (response) {
			console.log('response error');

			const { data } = response;
			const status = response.status;
			console.log('status: ', status);
			if (status === 401) {
				return alert('로그인이 필요합니다.');
			}

			console.log('data: ', data);
		} else {
			console.log('unexpected error');
			console.log('error: ', error);
		}
	},

	get: async function ({ url, options }: GetProps) {
		const result = await clientAxiosInstance({
			method: method.get,
			url: url,
			headers: options,
		}).catch((error) => {
			const err = this.handleError(error);
			console.log('err: ', err);
			return err;
		});

		return result;
	},

	post: async function ({
		url,
		data,
		contentType = 'application/json',
	}: PostProps) {
		return await clientAxiosInstance({
			method: method.post,
			url: url,
			data: data,
			headers: { 'Content-Type': contentType },
		});
	},

	interceptor: clientAxiosInstance.interceptors.request.use(
		function (config) {
			// 요청을 보내기 전에 수행할 일
			// ...
			console.log('config: ', config);
			return config;
		},
		function (error) {
			// 오류 요청을 보내기전 수행할 일
			// ...
			console.log('before request error: ', error);
			return;
		},
	),
};
