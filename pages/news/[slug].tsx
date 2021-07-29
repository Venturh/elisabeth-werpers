import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
// @ts-ignore
import { render } from 'storyblok-rich-text-react-renderer';

import Layout from 'components/Layout';

import { preloadQuery } from 'lib/apollo';
import { NewsItemsBySlugDocument, useNewsItemsBySlugQuery } from 'generated';
import { getStartsWith } from 'utils/locales';

export default function News() {
	const { t, lang } = useTranslation('common');
	const {
		query: { slug },
	} = useRouter();

	const title = t('news');
	const description = '';

	const { data } = useNewsItemsBySlugQuery({
		variables: { lang: getStartsWith(lang), slug: `news/${slug}` },
	});

	if (!data)
		return (
			<Layout title={title} description={description}>
				Not found
			</Layout>
		);
	const news = data!.NewsItems!.items![0]!;

	return (
		<Layout title={news.content!.title!} description={news.content!.text!}>
			<div className="relative py-12 mx-auto space-y-6 max-w-prose">
				<h1 className="text-3xl font-semibold">{news.content!.title!}</h1>
				<p className="prose ">{render(news.content!.text!)}</p>
				{news.content!.image && (
					<div>
						<Image
							src={news.content!.image!.filename}
							height={1}
							width={1}
							layout="responsive"
							alt="img"
						/>
					</div>
				)}
				<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
					<div
						className="relative h-full mx-auto text-lg max-w-prose"
						aria-hidden="true"
					>
						<svg
							className="absolute transform translate-x-32 top-12 left-full"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
							/>
						</svg>
						<svg
							className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="f210dbf6-a58d-4871-961e-36d5016a0f49"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
							/>
						</svg>
						<svg
							className="absolute transform translate-x-32 bottom-12 left-full"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
						>
							<defs>
								<pattern
									id="d3eb07ae-5182-43e6-857d-35c643af9034"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
							/>
						</svg>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async ({
	locale,
	query,
}) => {
	const { slug } = query;

	return preloadQuery({
		query: NewsItemsBySlugDocument,
		variables: { slug: `news/${slug}`, lang: getStartsWith(locale) },
	});
};
