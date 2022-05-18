import { FC } from 'react';
import styled from 'styled-components';
import Map from '../../map/Map';

interface Props {
	name: string;
	address: string;
}

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const DetailMap: FC<Props> = ({ name, address }) => {
	return (
		<Wrapper>
			<Map name={name} address={address} />
		</Wrapper>
	);
};

export default DetailMap;
