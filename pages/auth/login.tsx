import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import KakaoButton from '../../components/KakaoLoginBtn';
import mutationLogin from '../../hooks/common/auth/useLogin';
import { initializeStore, useStore } from '../../lib/store';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	.login-box {
		min-width: 500px;
		min-height: 500px;
		background: #fff;
	}
`;

const formInit = {
	id: '',
	pwd: '',
};

const Login = () => {
	const { setUser } = useStore((state) => ({
		setUser: state.setUser,
	}));

	const [formValue, setFormValue] = useState(formInit);
	const { mutate } = mutationLogin();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValue({
			...formValue,
			[name]: value,
		});
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		mutate(
			{
				userId: formValue.id,
				password: formValue.pwd,
			},
			{
				onSuccess: (result) => {
					if (result?.status === 401) {
						console.log('auth error');
					}

					if (result?.status === 200) {
						setUser(result?.data);
					}
				},
				onError: (error) => {
					console.log('error: ', error);
				},
			},
		);
	};

	return (
		<Wrapper>
			<p>로그인</p>

			<div className="login-box">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="ids">ID: </label>
						<input type="text" id="ids" name="id" onChange={handleChange} />
					</div>

					<div>
						<label htmlFor="pwds">PASSWORD: </label>
						<input
							type="password"
							id="pwds"
							name="pwd"
							onChange={handleChange}
						/>
					</div>

					<div style={{ margin: '40px' }}>
						<button type="submit">로그인</button>

						<Link href="/auth/register">
							<a>회원가입</a>
						</Link>
					</div>

					<KakaoButton />
				</form>
			</div>
		</Wrapper>
	);
};

export default Login;

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
// export function getServerSideProps() {
// 	const zustandStore = initializeStore();
// 	return {
// 		props: {
// 			// the "stringify and then parse again" piece is required as next.js
// 			// isn't able to serialize it to JSON properly
// 			initialZustandState: JSON.parse(JSON.stringify(zustandStore.getState())),
// 		},
// 	};
// }
