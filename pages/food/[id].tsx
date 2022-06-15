import { useRouter } from 'next/router';
import useFood from '../../hooks/useFood';
import styled from 'styled-components';
import Title from '../../components/food/detail/Title';
import { useState } from 'react';
import DetailMap from '../../components/food/detail/DetailMap';
import CustomSwiper from '../../components/swiper/CustomSwiper';

const Wrapper = styled.div`
	margin-top: 50px;

	.inner {
		padding: 0 20px;

		.content-wrapper {
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;

			.represent-img {
				width: 60%;
				text-align: center;

				img {
					max-width: 100%;
					max-height: 400px;
					border-radius: 5px;
				}
			}

			.detail-contents {
				width: calc(40% - 20px);

				.btn-bundle {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.map-btn {
						padding: 5px;
						border: none;
						border-radius: 10px;
						background-color: var(--color-border);
						color: var(--color-sub-base);
						cursor: pointer;
					}

					.picture-btn {
						padding: 5px;
						border: none;
						border-radius: 10px;
						background-color: var(--color-sub-base);
						color: var(--color-border);
						cursor: pointer;
					}
				}

				.description {
					width: 456px;
					height: 345px;
					margin-top: 20px;
					border: none;
					background: transparent;
					overflow-y: auto;
					color: black;
				}
			}
		}
	}
`;

const Page_FoodDetail = () => {
	const [show, isShow] = useState(false);
	const [showPicture, isShowPicture] = useState(false);

	const router = useRouter();
	const id = router.query.id as string;
	const { isLoading, isError, data } = useFood({ id: Number(id) });

	const toggleShowMap = () => {
		isShow(!show);
	};

	const toggleShowPictures = () => {
		isShowPicture(!isShowPicture);
	};
	const toggleShowPicture = () => {
		console.log('사진첩 열기');
		isShowPicture(true);
	};

	if (isLoading) return <div>...loading</div>;
	if (isError) return <div>...error</div>;

	const detail = data?.data.data;
	console.log('detail: ', detail);
	return (
		<Wrapper>
			<div className="inner">
				<Title name={detail?.name} />

				<div className="content-wrapper">
					<div className="represent-img">
						<img src="/images/hongs.jpeg" alt="대표이미지" />
					</div>

					<div className="detail-contents">
						<div className="btn-bundle">
							<button className="map-btn" onClick={toggleShowMap}>
								지도 보기
							</button>

							<button className="picture-btn" onClick={toggleShowPicture}>
								사진첩 보기
							</button>
						</div>

						<textarea
							className="description"
							value={detail?.description}
							disabled
						/>
					</div>
				</div>

				{show && (
					<DetailMap
						name={detail?.name}
						address={detail?.mainAddress}
						handleClick={toggleShowMap}
					/>
				)}

				{showPicture && <CustomSwiper handleClick={toggleShowPictures} />}
			</div>
		</Wrapper>
	);
};

export default Page_FoodDetail;
