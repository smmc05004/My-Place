import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html lang="ko">
				<Head></Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
