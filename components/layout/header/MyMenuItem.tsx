import Link from 'next/link';
import { FC } from 'react';

interface Props {
	menu: {
		id: string;
		text: string;
		href: string;
	};
}

const MyMenuItem: FC<Props> = ({ menu }) => {
	return (
		<Link href={menu.href}>
			<a>
				<li>{menu.text}</li>
			</a>
		</Link>
	);
};

export default MyMenuItem;
