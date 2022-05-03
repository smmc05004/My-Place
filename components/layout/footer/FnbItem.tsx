import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
	menu: {
		id: string;
		text: string;
		href: string;
	};
}

const FnbItem: FC<Props> = ({ menu }) => {
	return (
		<Link href={menu.href}>
			<a>
				<li>{menu.text}</li>
			</a>
		</Link>
	);
};

export default FnbItem;
