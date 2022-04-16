import styled from 'styled-components';

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
	return (
		<Wrapper>
			<p>test 페이지</p>
		</Wrapper>
	);
};

export default Test;
