import { FC } from 'react';
import styled from 'styled-components';
import Gnb from './Gnb';

const Wrapper = styled.div`
	width: 100%;
	padding: 30px 0;
`;

const Header: FC = () => {
	return (
		<Wrapper>
			<Gnb />
		</Wrapper>
	);
};

export default Header;
