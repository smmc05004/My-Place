// import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';

const KakaoButton = () => {
	const loginUrl = process.env.KAKAO_LOGIN_URL;

	return (
		<Wrapper>
			<a href={loginUrl} rel="noopener noreferrer">
				카카오 로그인
			</a>
		</Wrapper>
	);
};

export default KakaoButton;

const Wrapper = styled.div`
	a {
		display: inline-block;
		width: 100%;
		height: 150px;
		color: #fff;
	}
`;
