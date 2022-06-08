import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { FC } from 'react';
import Mask from '../mask/Mask';

interface Props {
	handleClick: () => void;
}

const Wrapper = styled.div`
	position: relative;
	top: 50%;
	transform: translate(0, -50%);
	z-index: 99;

	.close-btn-wrapper {
		position: relative;
		width: 100%;

		.close-btn {
			width: 20px;
			height: 20px;
			position: absolute;
			top: -10px;
			right: 0;
			z-index: 99;
			background-image: url('/icons/close.png');
			background-size: 20px;
			background-color: #fff;
			border: none;
			border-radius: 50%;
			cursor: pointer;

			&:hover {
				transform: scale(1.2);
			}
		}
	}

	.swiper-container {
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
		<Mask handleClick={handleClick}>
			<Wrapper>
				<div className="close-btn-wrapper">
					<button className="close-btn" onClick={handleClick} />
				</div>

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
		</Mask>
	);
};

export default CustomSwiper;
