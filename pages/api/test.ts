import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const result = await axios({
		method: 'get',
		url: 'http://localhost:4000/test',
	});

	// console.log('server result: ', result.data);
	res.status(200).json(result.data);
}
