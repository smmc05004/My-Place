import { FC } from 'react';

interface FoodProps {
	name: string;
	address: string;
	category: number;
	visitData: string;
}

interface Props {
	item: FoodProps;
}

const FoodItem: FC<Props> = ({ item }) => {
	return (
		<div>
			<h3>{item.name}</h3>
			<img src="#" />
			<div>방문일자 {item.visitData}</div>
		</div>
	);
};

export default FoodItem;
