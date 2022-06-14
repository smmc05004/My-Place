import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import KakaoButton from '../../components/KakaoLoginBtn';
import mutationLogin from '../../hooks/common/auth/useLogin';

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
	const [formValue, setFormValue] = useState(formInit);
	const { mutate } = mutationLogin();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormValue({
			...formValue,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(formValue);

		mutate(
			{
				userId: formValue.id,
				password: formValue.pwd,
			},
			{
				onSuccess: (result) => {
					console.log('result: ', result);
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

					<div>
						<button>로그인</button>

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
