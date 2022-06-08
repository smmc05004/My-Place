import type { NextApiRequest, NextApiResponse } from 'next';
import apiRequest from '../api';

import formidable from 'formidable';
import FormData from 'form-data';
import fs from 'fs';

// 아래 config가 없으면 form parse가 동작하지 않아 멈춤
// 이유:
// nextjs에서는 기본적으로 bodyParser 기능이 켜져있어서 formdata가 binary형태로 body에 들어가 있어
// 아래 소스를 통해 bodyparser 기능을 꺼줘야 formidable에서 file 정보 찾을 수 있어
export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const fileData: any = await new Promise((resolve, reject) => {
		const form = new formidable.IncomingForm({
			// maxFileSize: 5 * 1024 * 1024,
			keepExtensions: true,
		});

		form.parse(req, (err, fields, files) => {
			if (err) return reject(err);
			const result = resolve(files);

			return result;
		});
	});

	const formData = new FormData();
	const file = fileData.file;

	const readStream = fs.createReadStream(file.filepath);

	formData.append('file', readStream);

	const result = await apiRequest.post({
		url: '/file/upload',
		data: formData,
		contentType: 'multipart/form-data; boundary=' + formData.getBoundary(),
	});

	console.log('api Result: ', result);

	return res.status(200).json(result?.data);
}
