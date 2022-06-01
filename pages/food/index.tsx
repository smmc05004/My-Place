import { NextPage } from 'next';
import styled from 'styled-components';
import RegisterBtn from '../../components/button/RegisterBtn';
import FoodList from '../../components/food/list/FoodList';
import Loading from '../../components/loading/Loading';
import useFoods from '../../hooks/useFoods';

const Wrapper = styled.div`
	.row-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const Food: NextPage = () => {
	const { isLoading, isError, data } = useFoods();

	if (isLoading) return <Loading />;

	if (isError) return <div>...error</div>;

	return (
		<Wrapper>
			<h1>맛집 리스트</h1>

			<div className="row-wrapper">
				<span>total: {data?.data.total}개</span>
				<RegisterBtn url="/food/register" />
			</div>

			<FoodList foodList={data?.data.data} />
		</Wrapper>
	);
};

export default Food;
