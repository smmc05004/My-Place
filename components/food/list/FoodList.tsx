import { FC } from 'react';
import FoodItem from './FoodItem';
import styled from 'styled-components';
interface FoodProps {
	name: string;
	address: string;
	category: number;
	visitData: string;
}

interface Props {
	foodList: FoodProps[];
}

const List = styled.ul`
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-flow: wrap;
	gap: 30px;
`;

const FoodList: FC<Props> = ({ foodList }) => {
	const foods = foodList.map((item, index) => (
		<FoodItem key={index} item={item} />
	));

	return <List>{foods}</List>;
};

export default FoodList;
