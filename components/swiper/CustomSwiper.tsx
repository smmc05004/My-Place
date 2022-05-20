import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { FC } from 'react';

interface Props {
	handleClick: () => void;
}

const Wrapper = styled.section`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;

	.mask {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: 9;
	}

	.swiper-container {
		width: 100%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
		z-index: 99;
		width: 100%;

		.swiper-slide {
			background-position: center;
			background-size: cover;
			width: 320px;
			box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
			background: #d1ebff;
			border-radius: 10px;
			filter: blur(4px);
		}

		.swiper-slide-active {
			filter: blur(0);
			background: #fff;
		}

		.testimonialBox {
			position: relative;
			width: 100%;
			color: #999;
			text-align: center;

			img {
				max-width: 200px;
				max-height: 200px;
			}
		}

		.swiper-3d .swiper-slide-shadow-left,
		.swiper-3d .swiper-slide-shadow-right {
			background-image: none;
		}
	}
`;

const CustomSwiper: FC<Props> = ({ handleClick }) => {
	return (
		<Wrapper>
			<div className="mask" onClick={handleClick} />

			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				slidesPerView="auto"
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="swiper-container"
				loop={true}
			>
				<SwiperSlide className="swiper-slide">
					<div className="testimonialBox">
						<h3>slide 1</h3>
						<img src="/images/agumon.jpeg" alt="카드 이미지" />
						<p>이미지 설명1</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<div className="testimonialBox">
						<h3>slide 2</h3>
						<img src="/images/agumon.jpeg" alt="카드 이미지" />
						<p>이미지 설명2</p>
					</div>
				</SwiperSlide>
				<SwiperSlide className="swiper-slide">
					<div className="testimonialBox">
						<h3>slide 3</h3>
						<img src="/images/agumon.jpeg" alt="카드 이미지" />
						<p>이미지 설명3</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</Wrapper>
	);
};

export default CustomSwiper;
