import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
	children: ReactElement;
}

const Wrapper = styled.div`
	background-color: var(--color-base);

	.contents {
		max-width: 1200px;
		height: 100%;
		margin: 0 auto;
		padding: 0;

		.inner {
			width: 100%;
			height: 100%;
		}
	}
`;

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<div className="contents">
				<div className="inner">
					<Header />
					{children}
					<Footer />
				</div>
			</div>
		</Wrapper>
	);
};

export default Layout;
