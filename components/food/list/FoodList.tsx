import { FC } from 'react';
import FoodItem from './FoodItem';

interface FoodProps {
	name: string;
	address: string;
	category: number;
	visitData: string;
}

interface Props {
	foodList: FoodProps[];
}

const FoodList: FC<Props> = ({ foodList }) => {
	const foods = foodList.map((item, index) => (
		<FoodItem key={index} item={item} />
	));

	return <div>{foods}</div>;
};

export default FoodList;
