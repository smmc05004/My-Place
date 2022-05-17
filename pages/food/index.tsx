import { NextPage } from 'next';
import FoodList from '../../components/food/list/FoodList';
import useFoods from '../../hooks/useFoods';

const Food: NextPage = () => {
	const { isLoading, isError, data } = useFoods();

	if (isLoading) return <div>...loading</div>;
	if (isError) return <div>...error</div>;

	return (
		<div>
			<h1>맛집 리스트</h1>
			<div>total: {data?.data.total}개</div>
			<FoodList foodList={data?.data.data}></FoodList>
		</div>
	);
};

export default Food;
