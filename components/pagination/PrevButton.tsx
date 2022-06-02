import styled from 'styled-components';

const Item = styled.li`
	width: 30px;
	height: 30px;
	margin: 5px;
	background: #fff;
	position: relative;
	cursor: pointer;
	box-sizing: border-box;

	&:hover {
		span:first-child,
		span:last-child {
			animation: nextSlide 0.8s infinite linear;
		}
	}

	span {
		width: 10px;
		height: 2px;
		display: inline-block;
		background: var(--color-main-font);
		position: absolute;

		&:first-child {
			top: 16px;
			left: 13px;
			transform: rotateZ(45deg);
		}

		&:last-child {
			top: 10px;
			left: 13px;
			transform: rotateZ(-45deg);
		}
	}

	@keyframes nextSlide {
		0% {
			left: 15px;
		}
		100% {
			left: 5px;
		}
	}
`;

const PrevButton = () => {
	return (
		<Item>
			<span></span>
			<span></span>
		</Item>
	);
};

export default PrevButton;
