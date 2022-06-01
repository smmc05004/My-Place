import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import mutationFood from '../../hooks/mutationFood';

const Wrapper = styled.div`
	width: 100%;

	form {
		width: 100%;
	}
`;
const initValues = {
	name: '',
	category: 0,
	mainAddress: '',
	subAddress: '',
	description: '',
	writerId: 1,
};

const Register = () => {
	const [values, setValues] = useState(initValues);
	const { mutate } = mutationFood();

	const openPopup = () => {
		new window.daum.Postcode({
			oncomplete: function (result: any) {
				setValues({
					...values,
					mainAddress: result.address,
				});
			},
		}).open();
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: name === 'category' ? Number(value) : value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate(
			{ data: values },
			{
				onSuccess: (result) => {
					if (result.status === 200) {
						alert('등록 되었습니다.');
					}
				},
				onError: (error) => {
					console.log('error: ', error);
					alert('등록 중 에러가 발생했습니다.');
				},
			},
		);
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="names">장소명</label>
					<input
						id="names"
						name="name"
						type="text"
						onChange={handleChange}
						value={values.name}
					/>
				</div>

				<div>
					<label htmlFor="categories">카테고리</label>
					<select
						id="categories"
						name="category"
						onChange={handleChange}
						value={values.category}
					>
						<option value={0}>방문지</option>
						<option value={1}>방문 예정지</option>
					</select>
				</div>

				<div>
					<label htmlFor="mainAddresses">주소</label>
					<input
						id="mainAddresses"
						name="mainAddress"
						value={values.mainAddress}
						onChange={handleChange}
						disabled
					/>
					<button type="button" onClick={openPopup}>
						주소검색
					</button>
				</div>

				<div>
					<label htmlFor="subAddresses">상세 주소</label>
					<input
						id="subAddresses"
						name="subAddress"
						onChange={handleChange}
						value={values.subAddress}
					/>
				</div>

				<div>
					<label htmlFor="descriptions">설명</label>
					<textarea
						id="descriptions"
						name="description"
						onChange={handleChange}
						value={values.description}
					></textarea>
				</div>

				<div>
					<button type="submit">저장</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default Register;
