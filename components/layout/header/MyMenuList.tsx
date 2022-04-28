import Link from 'next/link';
import { useMemo } from 'react';
import styled from 'styled-components';
import myMenuList from '../constant/myMenuList';
import MyMenuItem from './MyMenuItem';

const StyledList = styled.ul`
	width: calc((1200px - 800px) / 2);
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;

const MyMenuList = () => {
	const menus = useMemo(
		() =>
			myMenuList.map((menu) => {
				return <MyMenuItem menu={menu} />;
			}),
		[],
	);

	return <StyledList>{menus}</StyledList>;
};

export default MyMenuList;
