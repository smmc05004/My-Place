import Link from 'next/link';
import styled from 'styled-components';

const StyledAnchor = styled.a`
	width: calc((1200px - 800px) / 2);
`;

const Home = () => {
	return (
		<Link href="/">
			<StyledAnchor>
				<img src="/icons/trip.png" alt="홈 이미지" />
			</StyledAnchor>
		</Link>
	);
};

export default Home;
