import { ChangeEvent, useRef, useState } from 'react';

const Register = () => {
	const attachRef = useRef<HTMLInputElement>(null);

	const [pictures, setPictures] = useState<FileList | null>(null);

	const handleClick = () => {
		if (attachRef.current) {
			attachRef.current.click();
		}
	};
	console.log('pictures: ', pictures);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		console.log('files: ', files);

		if (files && files?.length > 0) {
			for (let i = 0; i < files?.length; i++) {}
			setPictures(files);
		}
	};

	// const fileList = pictures.
	return (
		<div>
			<form>
				<div>
					<label htmlFor="category">카테고리</label>
					<select>
						<option value={0}>방문지</option>
						<option value={1}>방문 예정지</option>
					</select>
				</div>

				<div>
					<label htmlFor="place-name">장소명</label>
					<input id="place-name" type="text" />
				</div>

				<div>
					<label htmlFor="description">설명</label>
					<input id="description" type="text" />
				</div>

				<div>
					<label htmlFor="attachFile">첨부파일</label>
					<button type="button" onClick={handleClick}>
						첨부파일 버튼
					</button>

					<input
						id="attachFile"
						ref={attachRef}
						type="file"
						accept="image/*"
						multiple
						onChange={handleChange}
						style={{ display: 'none' }}
					/>

					<p>미리보기</p>

					{/* {
            pictures && (
              pictures.map(() => {
                return 
              })
            )
          } */}
				</div>
			</form>
		</div>
	);
};

export default Register;
