import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import mutationFood from '../../hooks/mutationFood';
import { format } from 'date-fns';
import { upload } from '../../hooks/file/mutationFile';
interface InitValuesProps {
	name: string;
	category: 0 | 1;
	mainAddress: string;
	subAddress: string;
	description: string;
	visitDate: string;
	writerId: 1;
}

const Wrapper = styled.div`
	width: 100%;

	form {
		width: 100%;
	}
`;

const initValues: InitValuesProps = {
	name: '',
	category: 0,
	mainAddress: '',
	subAddress: '',
	description: '',
	visitDate: format(new Date(), 'yyyy-MM-dd'),
	writerId: 1,
};

const Register = () => {
	const [values, setValues] = useState<InitValuesProps>(initValues);
	const [attachList, setAttachList] = useState<File[]>([]);

	const fileRef = useRef<HTMLInputElement>(null);

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

	const handleTriggerClick = () => {
		if (fileRef?.current) {
			fileRef.current.click();
		}
	};

	const handleChangeAttach = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (!files) {
			alert('파일을 추가해 주세요');
			return;
		}

		const fLength = files?.length;
		if (fLength < 0) {
			alert('파일을 추가해 주세요');
			return;
		}

		setAttachList(Array.from(attachList).concat(Array.from(files)));
	};

	// console.log('attachList: ', attachList);

	const handleDeleteAttach = (num: number) => {
		attachList.splice(num, 1);
		const newArr = attachList;
		// console.log('attachList: ', attachList);

		setAttachList(newArr);
	};

	const attList = useMemo(
		() =>
			attachList.map((attach, index) => {
				return (
					<li key={attach.name}>
						{attach.name}
						<button type="button" onClick={() => handleDeleteAttach(index)}>
							삭제
						</button>
					</li>
				);
			}),
		[attachList],
	);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let attachNameList: any[] = [];

		if (attachList.length > 0) {
			attachNameList = await upload({ attachList, type: 'food' });
		}

		const data = {
			...values,
			visitDate:
				values.category === 1 ? null : new Date(values.visitDate).toISOString(),
			...(attachNameList.length > 0 && {
				attach: {
					create: attachNameList,
				},
			}),
		};

		mutate(
			{ data },
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
					<button type="button" onClick={handleTriggerClick}>
						파일 첨부
					</button>

					<input
						type="file"
						multiple
						ref={fileRef}
						style={{ display: 'none' }}
						onChange={handleChangeAttach}
					/>
				</div>

				{attachList.length > 0 && <ul>{attList}</ul>}

				{values.category === 0 && (
					<div>
						<label htmlFor="visitDates">방문일자</label>
						<input
							id="visitDates"
							name="visitDate"
							type="date"
							onChange={handleChange}
							value={values.visitDate}
						/>
					</div>
				)}

				<div>
					<button type="submit">저장</button>
				</div>
			</form>
		</Wrapper>
	);
};

export default Register;
