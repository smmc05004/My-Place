import { FC, useMemo } from 'react';
import FoodItem from './FoodItem';
import styled from 'styled-components';
interface FoodProps {
	id: number;
	name: string;
	address: string;
	category: number;
	visitDate: string;
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
	const foods = useMemo(
		() => foodList?.map((item) => <FoodItem key={item.id} item={item} />),
		[foodList],
	);

	return <List>{foods}</List>;
};

export default FoodList;
