import { FC } from 'react';
import styled from 'styled-components';

interface Props {
	num: number;
	isActive: boolean;
	handleClick: (pageNumber: number) => void;
}

const Item = styled.li<{ isActive: boolean }>`
	background: ${({ isActive }) =>
		isActive ? 'var(--color-main-font)' : '#fff'};
	color: #333;
	width: 30px;
	height: 30px;
	margin: 5px;
	position: relative;
	cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
	line-height: 30px;
	text-align: center;
	font-size: 14px;
`;

const PageItem: FC<Props> = ({ num, isActive, handleClick }) => {
	console.log('isActive: ', isActive);

	return (
		<Item
			isActive={isActive}
			onClick={!isActive ? () => handleClick(num) : undefined}
		>
			{num}
		</Item>
	);
};

export default PageItem;
