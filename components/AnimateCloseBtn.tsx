import { useState } from 'react';
import styled from 'styled-components';

const ToggleBtn = styled.div<{ clicked: boolean }>`
	position: relative;
	width: 50px;
	height: 50px;
	background: #fff;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	overflow: hidden;

	span {
		position: absolute;
		width: 40px;
		height: 5px;
		background: #1863ff;
		border-radius: 2px;
		transition: 0.5s;

		&:nth-child(1) {
			transform: ${({ clicked }) =>
				clicked ? 'translateY(0) rotate(45deg)' : 'translateY(-15px)'};
			width: 40px;
			left: 6px;
			transition-delay: 0.125s;
		}

		&:nth-child(2) {
			transform: ${({ clicked }) =>
				clicked ? 'translateY(0) rotate(135deg)' : 'translateY(15px)'};
			width: 40px;
			left: 6px;
			transition-delay: 0.125s;
		}

		&:nth-child(3) {
			transform: ${({ clicked }) => (clicked ? 'translateX(60px)' : 'none')};
		}
	}
`;

const AnimateCloseBtn = () => {
	const [clicked, isClicked] = useState(false);
	const handlClick = () => {
		isClicked(!clicked);
	};

	return (
		<ToggleBtn onClick={handlClick} clicked={clicked}>
			<span></span>
			<span></span>
			<span></span>
		</ToggleBtn>
	);
};

export default AnimateCloseBtn;
