import { useMemo } from 'react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import {
	ApolloClient,
	HttpLink,
	InMemoryCache,
	QueryOptions,
} from '@apollo/client';

let apolloClient: ApolloClient<any>;

interface ClientOptions {
	headers?: Record<string, string>;
	initialState?: Record<string, any>;
}

export function createApolloClient() {
	const httpLink = new HttpLink({
		uri: 'https://gapi.storyblok.com/v1/api',
		headers: {
			token: process.env.STORYBLOK_TOKEN,
			version: 'public',
		},
		useGETForQueries: true,
		fetch,
	});

	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: httpLink,
		cache: new InMemoryCache(),
	});
}

export function initializeApollo({ initialState }: ClientOptions) {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		const existingCache = _apolloClient.extract();

		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	if (typeof window === 'undefined') return _apolloClient;

	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export async function preloadQuery(
	context: GetServerSidePropsContext,
	...queries: QueryOptions[]
): Promise<GetServerSidePropsResult<{}>> {
	const client = initializeApollo({
		headers: context.req.headers as Record<string, string>,
	});

	await Promise.all(queries.map((queryOptions) => client.query(queryOptions)));
	const initialClientState = client.cache.extract();
	return {
		props: {
			initialClientState,
		},
	};
}

export function useApollo(initialState?: Record<string, any>) {
	const client = useMemo(
		() => initializeApollo({ initialState }),
		[initialState],
	);

	return client;
}
