import { ChangeEvent, FormEvent, useState } from 'react';
import PostCode from '../../components/daumPostCode/PostCode';
import styled from 'styled-components';
import axios from 'axios';
import mutationFood from '../../hooks/mutationFood';

const Wrapper = styled.div`
	width: 100%;

	form {
		width: 100%;
	}
`;
const initValues = {
	place: '',
	category: 0,
	address: '',
	subAddress: '',
	description: '',
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

	const handleAddress = (address: string) => {
		setValues({
			...values,
			address,
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
		console.log('values: ', values);
		mutate({ data: values });
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="places">장소명</label>
					<input
						id="places"
						name="place"
						type="text"
						onChange={handleChange}
						value={values.place}
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
					<label htmlFor="addresses">주소</label>
					<input
						id="addressese"
						name="address"
						value={values.address}
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
