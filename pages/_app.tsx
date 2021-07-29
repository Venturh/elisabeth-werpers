import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'lib/apollo';
import 'public/styles.css';

function App({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialClientState);
	const { locale, defaultLocale } = useRouter();

	useEffect(persistLocaleCookie, [locale, defaultLocale]);
	function persistLocaleCookie() {
		document.cookie = `NEXT_LOCALE=${locale};path=/`;
	}
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
			</Head>
			<ApolloProvider client={client}>
				<ThemeProvider defaultTheme="light" attribute="class">
					<DefaultSeo defaultTitle="" titleTemplate="%s | Elisabeth Werpers" />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
}

export default App;
