import styled from 'styled-components';
import Home from './Home';
import MenuList from './MenuList';
import MyMenuList from './MyMenuList';

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Gnb = () => {
	return (
		<StyledNav>
			<Home />

			<MenuList />

			<MyMenuList />
		</StyledNav>
	);
};

export default Gnb;
