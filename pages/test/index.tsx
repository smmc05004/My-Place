import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosRequest from '../api/api';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;

	p {
		font-size: 16px;
		color: #fff;
	}
`;

const Test = () => {
	const [data, setData] = useState({});
	console.log('data: ', data);

	const getData = async () => {
		const result = await axiosRequest.get({ url: '/api/hello' });
		setData(result?.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Wrapper>
			<p>test 페이지</p>
		</Wrapper>
	);
};

export default Test;
