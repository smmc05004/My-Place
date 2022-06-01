import { ChangeEvent, FormEvent, useState } from 'react';
import PostCode from '../../components/daumPostCode/PostCode';
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
	const [showPostPopup, isShowPostPopup] = useState(false);
	const [values, setValues] = useState(initValues);
	const { mutate } = mutationFood();

	const closePopup = () => {
		isShowPostPopup(false);
	};

	const openPopup = () => {
		isShowPostPopup(true);
	};

	const handleAddress = (mainAddress: string) => {
		setValues({
			...values,
			mainAddress,
		});
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutate({ data: values });
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

				{showPostPopup && (
					<PostCode setAddress={handleAddress} closePopup={closePopup} />
				)}

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
