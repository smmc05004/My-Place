import { useMemo } from 'react';
import styled from 'styled-components';
import menuList from '../constant/menuLIst';
import MenuItem from './MenuItem';

const StyledList = styled.ul`
	width: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const MenuList = () => {
	const menus = useMemo(
		() =>
			menuList.map((menu) => {
				return <MenuItem key={menu.id} menu={menu} />;
			}),
		[],
	);

	return <StyledList>{menus}</StyledList>;
};

export default MenuList;
