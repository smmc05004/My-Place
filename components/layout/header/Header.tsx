import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
`;

const Header = () => {
	return (
		<Wrapper>
			<nav>
				<a>
					<img src="" alt="홈 이미지" />
				</a>
				<ul>
					<li>메뉴1</li>
					<li>메뉴2</li>
					<li>메뉴3</li>
				</ul>

				<ul>
					<li>로그인</li>
					<li>회원가입</li>
				</ul>
			</nav>
		</Wrapper>
	);
};

export default Header;
