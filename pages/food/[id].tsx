import { useRouter } from 'next/router';
import useFood from '../../hooks/useFood';
import styled from 'styled-components';
import Title from '../../components/food/detail/Title';
import { useState } from 'react';
import DetailMap from '../../components/food/detail/DetailMap';

const Wrapper = styled.div`
	margin-top: 50px;

	.inner {
		padding: 0 20px;

		.represent-img {
			border-radius: 5px;
		}

		p {
		}

		.mask {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;

const Page_FoodDetail = () => {
	const [show, isShow] = useState(false);
	const router = useRouter();
	const id = router.query.id as string;
	const { isLoading, isError, data } = useFood({ id: Number(id) });

	const toggleShow = () => {
		isShow(!show);
	};

	if (isLoading) return <div>...loading</div>;
	if (isError) return <div>...error</div>;

	const detail = data?.data.data;

	return (
		<Wrapper>
			<div className="inner">
				<Title name={detail?.name} category={detail?.category} />

				<div className="represent-img">
					<img src="/images/hongs.jpeg" alt="대표이미지" />
				</div>

				<p>상세 설명</p>

				<button onClick={toggleShow}>지도 보기</button>

				{show && <DetailMap name={detail?.name} address={detail?.address} />}
			</div>
		</Wrapper>
	);
};

export default Page_FoodDetail;
