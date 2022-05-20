import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactElement;
	handleClick: () => void;
}

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	.mask {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: 9;
	}
`;

const Mask: FC<Props> = ({ children, handleClick }) => {
	return (
		<Wrapper>
			<div className="mask" onClick={handleClick}></div>

			{children}
		</Wrapper>
	);
};

export default Mask;
