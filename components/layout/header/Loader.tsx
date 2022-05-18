import styled from 'styled-components';

const StyledLoader = styled.div`
	position: relative;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	animation: animate 4s linear infinite;

	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 200px;
		background: linear-gradient(to top, transparent, rgba(160, 188, 194, 0.4));
		background-size: 100px;
		background-repeat: no-repeat;
		border-top-left-radius: 100px;
		border-bottom-left-radius: 100px;
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 5px;
		height: 5px;
		background: var(--color-border);
		border-radius: 50%;
		z-index: 10;
		box-shadow: 0 0 10px var(--color-border), 0 0 20px var(--color-border),
			0 0 30px var(--color-border), 0 0 40px var(--color-border),
			0 0 50px var(--color-border);
	}

	span {
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		background: #f9ebc8;
		border-radius: 50%;
	}
`;

const Loader = () => {
	return (
		<StyledLoader>
			<span></span>
		</StyledLoader>
	);
};

export default Loader;
