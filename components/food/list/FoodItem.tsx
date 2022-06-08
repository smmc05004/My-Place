import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

interface FoodProps {
	id: number;
	name: string;
	address: string;
	category: number;
	visitDate: string;
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
		box-shadow: inset 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
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
				<Link href={`/food/${item.id}`}>
					<a>
						<img src="/images/food.jpeg" alt="음식점 대표 사진" />
					</a>
				</Link>

				<p>{item.name}</p>
				<div>방문일자: {item?.visitDate?.substring(0, 10)}</div>
			</div>
		</Item>
	);
};

export default FoodItem;
