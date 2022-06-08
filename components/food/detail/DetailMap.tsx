import { FC } from 'react';
import styled from 'styled-components';
import Map from '../../map/Map';
import Mask from '../../mask/Mask';

interface Props {
	name: string;
	address: string;
	handleClick: () => void;
}

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 99;

	.btn-wrapper {
		position: relative;
		width: 100%;

		.close-btn {
			width: 20px;
			height: 20px;
			position: absolute;
			top: -10px;
			right: -10px;
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
`;

const DetailMap: FC<Props> = ({ name, address, handleClick }) => {
	return (
		<Mask handleClick={handleClick}>
			<Wrapper>
				<div className="btn-wrapper">
					<button className="close-btn" onClick={handleClick}></button>
				</div>
				<Map name={name} address={address} />
			</Wrapper>
		</Mask>
	);
};

export default DetailMap;
