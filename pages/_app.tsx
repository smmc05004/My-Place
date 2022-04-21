import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
