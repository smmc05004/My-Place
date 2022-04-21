import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import Layout from '../components/layout/Layout';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				// type="text/javascript"
				src="//dapi.kakao.com/v2/maps/sdk.js?appkey=89830a26d1cb1514c090f323165b6804"
				strategy="beforeInteractive"
			></Script>
			<GlobalStyle />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
