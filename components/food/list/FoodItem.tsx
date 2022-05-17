import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
interface FoodProps {
	name: string;
	address: string;
	category: number;
	visitData: string;
}

interface Props {
	item: FoodProps;
}

const Item = styled.li`
	width: 350px;
	height: 350px;
	position: relative;
	top: 0px;
	text-align: center;
	background-color: #fff;
	border-radius: 5px;
	overflow: hidden;
	transition: all 0.1s linear;

	&:hover {
		top: -7px;
	}

	.item-inner {
		padding: 20px;

		img {
			max-width: 300px;
			max-height: 300px;
			border-radius: 5px;
			overflow: hidden;
			cursor: pointer;
		}

		p {
			margin: 10px 0;
		}
	}
`;

const FoodItem: FC<Props> = ({ item }) => {
	return (
		<Item>
			<div className="item-inner">
				<Link href="#">
					<a>
						<img src="/images/food.jpeg" alt="음식점 대표 사진" />
					</a>
				</Link>

				<p>{item.name}</p>
				<div>방문일자 {item.visitData}</div>
			</div>
		</Item>
	);
};

export default FoodItem;
