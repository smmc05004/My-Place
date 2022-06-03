import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NextButton from './NextButton';
import PageItem from './PageItem';
import PrevButton from './PrevButton';

interface Props {
	totalCnt: number;
	curPageNum: number;
	rowSize: number;
	blockSize: number;
	handleClickNum: (num: number) => void;
}

const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Pagination = ({
	totalCnt,
	curPageNum = 1,
	rowSize = 10,
	blockSize = 10,
	handleClickNum,
}: Props) => {
	const [value, setValue] = useState({
		totalPage: 0,
		startPageNum: 0,
		endPageNum: 0,
	});

	const [pageList, setPageList] = useState<number[]>([]);

	const list = pageList.map((item, index) => {
		return (
			<PageItem
				key={index}
				num={item}
				isActive={item === curPageNum}
				handleClick={handleClickNum}
			/>
		);
	});

	useEffect(() => {
		const pageArr = [];
		const totalPage = Math.ceil(totalCnt / rowSize);

		const endNum = (Math.floor(curPageNum / blockSize) + 1) * blockSize;
		const endPageNum = endNum > totalPage ? totalPage : endNum;
		const startPageNum = endNum - rowSize + 1;

		setValue({
			totalPage,
			startPageNum,
			endPageNum,
		});

		for (let i = startPageNum; i <= endPageNum; i++) {
			pageArr.push(i);
		}

		setPageList(pageArr);
	}, [totalCnt, curPageNum, rowSize, blockSize]);

	return (
		<List>
			{curPageNum > 1 && <PrevButton />}
			{list}
			{curPageNum < value.endPageNum && <NextButton />}
		</List>
	);
};

export default Pagination;
