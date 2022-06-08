import styled from 'styled-components';

const StyldEarth = styled.div`
	position: absolute;
	width: 150px;
	height: 150px;
	background: url('/images/layout/header/earth.jpeg');
	border-radius: 50%;
	background-size: cover;
	box-shadow: inset 0 0 10px var(--color-border), 0 0 20px var(--color-border),
		0 0 30px var(--color-border), 0 0 40px var(--color-border),
		0 0 50px var(--color-border), 0 0 60px var(--color-border);
	animation: animatieEarth 20s linear infinite;

	@keyframes animatieEarth {
		0% {
			background-position: 0;
		}
		100% {
			background-position: 162.5%;
		}
	}
`;

const Earth = () => {
	return <StyldEarth className="earth" />;
};

export default Earth;
