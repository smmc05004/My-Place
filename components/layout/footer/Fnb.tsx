import { useMemo } from 'react';
import menuList from '../constant/menuLIst';
import FnbItem from './FnbItem';
import styled from 'styled-components';

const StyledList = styled.ul`
	width: 100%;
`;

const Fnb = () => {
	const menus = useMemo(
		() =>
			menuList.map((menu) => {
				return <FnbItem key={menu.id} menu={menu} />;
			}),
		[],
	);

	return <StyledList>{menus}</StyledList>;
};

export default Fnb;
