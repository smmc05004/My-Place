import { FC } from 'react';
import styled from 'styled-components';
import Category from '../../../constants/category';

interface Props {
	name: string;
}

const Wrapper = styled.div`
	text-align: center;

	h1 {
		color: var(--color-font);
		font-size: 25px;
	}
`;

const Title: FC<Props> = ({ name }) => {
	return (
		<Wrapper>
			<h1>{name}</h1>
		</Wrapper>
	);
};

export default Title;
