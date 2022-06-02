import { FC } from 'react';
import styled from 'styled-components';

interface Props {
	num: number;
	isActive: boolean;
}

const Item = styled.li<{ isActive: boolean }>`
	background: ${({ isActive }) =>
		isActive ? 'var(--color-main-font)' : '#fff'};
	color: #333;
	width: 30px;
	height: 30px;
	margin: 5px;
	position: relative;
	cursor: pointer;
	line-height: 30px;
	text-align: center;
	font-size: 14px;
`;

const PageItem: FC<Props> = ({ num, isActive }) => {
	console.log('isActive: ', isActive);
	return <Item isActive={isActive}>{num}</Item>;
};

export default PageItem;
