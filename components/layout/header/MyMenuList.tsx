import { FC, useMemo } from 'react';
import styled from 'styled-components';
import mutationLogOut from '../../../hooks/common/auth/useLogout';
import { useStore } from '../../../lib/store';
// import { useStore } from '../../../store';
import myMenuList from '../constant/myMenuList';
import MyMenuItem from './MyMenuItem';

const StyledList = styled.ul`
	width: calc((1200px - 800px) / 2);
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;

const MyMenuList: FC = () => {
	const { user, setUser } = useStore((state) => ({
		user: state.user,
		setUser: state.setUser,
	}));

	// console.log({ user });
	const { mutate } = mutationLogOut();

	const menus = useMemo(
		() =>
			myMenuList.map((menu) => {
				return <MyMenuItem key={menu.id} menu={menu} />;
			}),
		[],
	);

	const handleLogout = () => {
		mutate(
			{
				userId: 'oister',
			},
			{
				onSuccess: (result) => {
					console.log('result: ', result);
					// setUser(null);
				},
				onError: (error) => {
					console.log('error: ', error);
				},
			},
		);
	};

	return (
		<StyledList>
			{/* <li onClick={handleLogout}>로그아웃</li> */}
			{user ? <li onClick={handleLogout}>로그아웃</li> : menus}
		</StyledList>
	);
};

export default MyMenuList;
