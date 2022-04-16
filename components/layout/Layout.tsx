import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
	children: ReactElement;
}

const Wrapper = styled.div``;

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			{children}
			<Footer />
		</Wrapper>
	);
};

export default Layout;
