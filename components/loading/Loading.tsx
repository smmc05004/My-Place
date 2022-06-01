import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;

	ul {
		width: 100%;
		height: 100%;
		display: block;
		margin: 0 auto;

		li {
			position: absolute;
			top: 50%;
			left: 50%;
			background: transparent;
			border: 10px solid rgba(23, 246, 251, 1);
			border-left-color: transparent;
			border-right-color: transparent;
			border-radius: 500px;
			transition: all 0.5s ease;

			&:first-child {
				margin-left: -130px;
				margin-top: -130px;
				z-index: 2;
				width: 240px;
				height: 240px;
				border-width: 10px;
				animation: spinBG 5s infinite linear;
			}

			&:nth-child(2) {
				margin-left: -137px;
				margin-top: -137px;
				z-index: 1;
				width: 270px;
				height: 270px;
				border-width: 2px;
				border-style: dotted;
				box-shadow: 0 0 20px rgba(23, 246, 251, 0.5);
				animation: spinBG2 2s infinite linear;
			}

			&:nth-child(3) {
				margin-left: -150px;
				margin-top: -150px;
				z-index: 1;
				width: 296px;
				height: 296px;
				border-width: 2px;
				box-shadow: inset 0 0 25px rgba(23, 246, 251, 0.25);
				animation: spinBG 12s infinite linear;
			}

			&:nth-child(4) {
				margin-left: -170px;
				margin-top: -170px;
				z-index: 1;
				width: 330px;
				height: 330px;
				border-width: 5px;
				box-shadow: inset 0 0 25px rgba(23, 246, 251, 1);
				animation: spinBG3 8s infinite linear;
			}

			&:last-child {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 20;
				width: 200px;
				height: 100px;
				margin-left: -110px;
				margin-top: -110px;
				padding: 70px 0px 30px;
				background-color: rgba(8, 8, 8, 1);
				border: 10px solid rgba(8, 8, 8, 1);
				border-radius: 200px;
				text-shadow: 2px 2px 0 rgba(0, 0, 0, 1);
				box-shadow: 0 0 30px rgba(23, 246, 251, 0.5);
				animation: pilseShadow 5s infinite linear;

				&::after {
					content: '';
					border: 3px dotted rgba(22, 42, 43, 1);
					border-radius: 200px;
					width: 200px;
					height: 200px;
					display: block;
					position: absolute;
					top: -3px;
					left: -3px;
					background: transparent;
					box-shadow: inset 0, 0, 30px rgba(0, 0, 0, 1);
				}
			}
		}
	}

	@keyframes pilseShadow {
		0% {
			box-shadow: 0 0 30px rgba(23, 246, 251, 0.25);
		}
		50% {
			box-shadow: 0 0 30px rgba(23, 246, 251, 0.75);
		}
		100% {
			box-shadow: 0 0 30px rgba(23, 246, 251, 0.25);
		}
	}

	@keyframes spinBG {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes spinBG2 {
		0% {
			transform: rotate(360deg);
			box-shadow: 0 0 1px rgba(23, 246, 251, 0.5);
		}
		50% {
			transform: rotate(180deg);
			box-shadow: 0 0 20px rgba(23, 246, 251, 0.5);
		}
		100% {
			transform: rotate(360deg);
			box-shadow: rgba(23, 246, 251, 0.5);
		}
	}

	@keyframes spinBG3 {
		0% {
			transform: rotate(180deg);
			box-shadow: 0 0 1px rgba(23, 246, 251, 0.5);
		}
		50% {
			transform: rotate(0deg);
			box-shadow: 0 0 20px rgba(23, 246, 251, 0.5);
		}
		100% {
			transform: rotate(-180deg);
		}
	}
`;

const Loading = () => {
	return (
		<Wrapper>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</Wrapper>
	);
};

export default Loading;
