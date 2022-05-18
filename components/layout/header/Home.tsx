import Link from 'next/link';
import styled from 'styled-components';
import Earth from './Earth';
import Loader from './Loader';

const Wrapper = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Home = () => {
	return (
		<Link href="/">
			<a>
				<Wrapper>
					<Loader />

					<Earth />
				</Wrapper>
			</a>
		</Link>
	);
};

export default Home;
