import styled from 'styled-components';
import Fnb from './Fnb';

const Wrapper = styled.footer`
	width: 200px;
	margin: 0 auto;
	text-align: center;
`;

const Footer = () => {
	return (
		<Wrapper>
			<Fnb />
		</Wrapper>
	);
};

export default Footer;
