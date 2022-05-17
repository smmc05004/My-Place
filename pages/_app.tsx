import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import Layout from '../components/layout/Layout';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<>
			<GlobalStyle />

			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<ThemeProvider theme={theme}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ThemeProvider>
				</Hydrate>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
