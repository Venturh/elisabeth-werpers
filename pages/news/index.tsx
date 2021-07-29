import useTranslation from 'next-translate/useTranslation';
import { GetServerSideProps } from 'next';
// @ts-ignore
import { render } from 'storyblok-rich-text-react-renderer';

import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import Link from 'components/Link';

import { preloadQuery } from 'lib/apollo';
import { AllNewsItemsDocument, useAllNewsItemsQuery } from 'generated';
import { getDate, getStartsWith } from 'utils/locales';

export default function News() {
	const { t, lang } = useTranslation('common');
	const title = t('news');
	const description = '';

	const { data } = useAllNewsItemsQuery({
		variables: { lang: getStartsWith(lang) },
	});

	const news = data?.NewsItems?.items;

	if (!news)
		return (
			<Layout title={title} description={description}>
				Not found
			</Layout>
		);

	return (
		<Layout title={title} description={description} sidebar={<Hero />}>
			<div className="mt-12 space-y-6 lg:px-12">
				{news.map((n) => (
					<div key={n!.slug}>
						<p className="text-sm text-gray-500">
							<time dateTime={n!.content!.date}>
								{getDate(lang, n!.content!.date!)}
							</time>
						</p>
						<Link to={`/${n!.full_slug!}`} className="block mt-2">
							<div>
								<p className="text-xl font-semibold text-gray-900">
									{n!.content!.title}
								</p>
								<p className="mt-3 prose line-clamp-4">
									{render(n!.content!.text)}
								</p>
							</div>
						</Link>
						<div className="mt-3">
							<Link to={`/${n!.full_slug!}`} underline>
								{t('read_more')}
							</Link>
						</div>
					</div>
				))}
			</div>
		</Layout>
	);
}

export function Hero() {
	const { t } = useTranslation('common');

	return (
		<div>
			<h1 className="text-3xl font-semibold">{t('news')}</h1>
			<p className="mt-2 prose">{t('newsletter_description')}</p>
			<Newsletter small />
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) =>
	preloadQuery({
		query: AllNewsItemsDocument,
		variables: { lang: getStartsWith(locale) },
	});
