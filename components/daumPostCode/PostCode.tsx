import { FC } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

interface Props {
	setAddress: (args: string) => void;
	closePopup: () => void;
}

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;

	.popup-wrapper {
		width: 500px;
		height: 700px;
		position: relative;
		margin: 0 auto;
		padding: 30px 0 0 0;

		.close-popup-btn {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 99;
			cursor: pointer;
		}
	}
`;

const PostCode: FC<Props> = ({ setAddress, closePopup }) => {
	const handleComplete = (data: any) => {
		setAddress(data.address);
		closePopup();
	};

	return (
		<Wrapper>
			<div className="popup-wrapper">
				<button type="button" className="close-popup-btn" onClick={closePopup}>
					닫기
				</button>
				<DaumPostcode onComplete={handleComplete} />;
			</div>
		</Wrapper>
	);
};

export default PostCode;
