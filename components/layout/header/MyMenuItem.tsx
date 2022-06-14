import axios from 'axios';
import Link from 'next/link';
import { FC } from 'react';
import mutationLogOut from '../../../hooks/common/auth/useLogout';

interface Props {
	menu: {
		id: string;
		text: string;
		href?: string;
	};
}

const MyMenuItem: FC<Props> = ({ menu }) => {
	const { mutate } = mutationLogOut();

	const handleLogout = () => {
		console.log('로그아웃');
		mutate(
			{
				userId: 'oister',
			},
			{
				onSuccess: (result) => {
					console.log('result: ', result);
				},
				onError: (error) => {
					console.log('error: ', error);
				},
			},
		);
	};

	return (
		<>
			{menu.id === 'signOut' ? (
				<li onClick={handleLogout}>{menu.text}</li>
			) : (
				<Link href={menu.href || ''}>
					<a>
						<li>{menu.text}</li>
					</a>
				</Link>
			)}
		</>
	);
};

export default MyMenuItem;
