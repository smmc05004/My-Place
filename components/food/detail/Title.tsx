import { FC } from 'react';
import styled from 'styled-components';
import Category from '../../../constants/category';

interface Props {
	name: string;
	category: 'complete' | 'will';
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title: FC<Props> = ({ name, category }) => {
	return (
		<Wrapper>
			<h1>{name}</h1>
			<div>{Category[category]}</div>
		</Wrapper>
	);
};

export default Title;
