import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import RegisterBtn from '../../components/button/RegisterBtn';
import FoodList from '../../components/food/list/FoodList';
import Loading from '../../components/loading/Loading';
import Pagination from '../../components/pagination/Pagination';
import useFoods from '../../hooks/useFoods';
import { convertObjToQueryString } from '../../utils/qs';

const Wrapper = styled.div`
	.row-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

const setInitValue = (routerQuery: any) => {
	const { category, page } = routerQuery;

	return {
		category: Number(category) || 0,
		page: Number(page) || 1,
	};
};

const Food: NextPage = () => {
	const router = useRouter();
	const initValue = setInitValue(router.query);

	const { isLoading, isError, data } = useFoods({
		category: initValue.category,
		page: initValue.page,
	});

	// 카테고리 change 이벤트
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const qs = convertObjToQueryString({
			...router.query,
			category: e.target.value,
			page: 1,
		});

		router.push(`/food${qs}`);
	};

	// 페이지 번호 click 이벤트
	const handleClickNum = (page: number) => {
		const qs = convertObjToQueryString({
			...router.query,
			page,
		});

		router.push(`/food${qs}`);
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

			<Pagination
				totalCnt={data?.data.total}
				curPageNum={initValue.page}
				rowSize={10}
				blockSize={10}
				handleClickNum={handleClickNum}
			/>
		</Wrapper>
	);
};

export default Food;
