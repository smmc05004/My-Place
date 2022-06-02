import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
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

const setInitValue = (routerQuery: any) => {
	const { category } = routerQuery;

	return {
		category: Number(category) | 0,
	};
};

const Food: NextPage = () => {
	const router = useRouter();
	const initValue = setInitValue(router.query);

	const { isLoading, isError, data } = useFoods({
		category: initValue.category,
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		router.push(`/food?category=${e.target.value}`);
	};

	if (isLoading) return <Loading />;

	if (isError) return <div>...error</div>;

	return (
		<Wrapper>
			<h1>맛집 리스트</h1>

			<div className="row-wrapper">
				<span>total: {data?.data.total}개</span>
				<RegisterBtn url="/food/register" />
			</div>

			<select onChange={handleChange} value={initValue.category}>
				<option value={0}>방문지</option>
				<option value={1}>방문 예정지</option>
			</select>

			<FoodList foodList={data?.data.data} />
		</Wrapper>
	);
};

export default Food;
