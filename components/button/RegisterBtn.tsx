import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

interface Props {
	url: string;
}

const Anchor = styled.a`
	cursor: pointer;
	position: relative;
	background: var(--color-main-font);
	color: var(--color-main-font);
	text-decoration: none;
	padding: 10px 30px;
	transition: 0.5s;

	&:hover {
		background: var(--color-main-font);
		color: var(--color-main-font);

		i::before {
			width: 20px;
			left: 20%;
		}
		i::after {
			width: 20px;
			left: 80%;
		}
	}

	&::before {
		content: '';
		position: absolute;
		inset: 2px;
		background: var(--color-base);
	}

	span {
		position: relative;
		z-index: 1;
		color: inherit;
	}

	i {
		position: absolute;
		inset: 0;
		display: block;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 80%;
			width: 10px;
			height: 2px;
			background: var(--color-base);
			transform: translateX(-50%) skewX(325deg);
			transition: 0.5s;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 20%;
			width: 10px;
			height: 2px;
			background: var(--color-base);
			transform: translateX(-50%) skewX(325deg);
			transition: 0.5s;
		}
	}
`;

const RegisterBtn: FC<Props> = ({ url }) => {
	return (
		<Link href={url}>
			<Anchor>
				<span>등록하기</span>
				<i></i>
			</Anchor>
		</Link>
	);
};

export default RegisterBtn;
