import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Navigation from './Navigation';
import Footer from './Footer';

type Props = {
	children: React.ReactNode;
	title: string;
	description: string;
	max?: boolean;
	center?: boolean;
	sidebar?: React.ReactNode;
};

export default function Layout({
	title,
	description,
	children,
	max,
	center,
	sidebar,
}: Props) {
	const { asPath } = useRouter();
	const url = `${
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:1337'
			: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
	}${asPath}`;
	return (
		<>
			<NextSeo
				title={title}
				titleTemplate="%s | Elisabeth Werpers"
				description={description}
				canonical={url}
				twitter={{
					cardType: 'summary_large_image',
					handle: 'venturh94',
					site: 'venturh94',
				}}
				openGraph={{
					title,
					description,
					url,
					type: 'website',
				}}
			/>

			<Navigation />
			<div
				className={clsx('relative flex flex-col  min-h-screen', {
					'mx-auto max-w-xsm sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl':
						!max,
					'justify-center': center,
				})}
			>
				<div className={clsx('w-full h-full ', { 'lg:flex': sidebar })}>
					{sidebar && (
						<div className="sticky hidden w-4/12 h-screen overflow-hidden lg:flex top-12">
							<nav
								aria-label="Sections"
								className="flex flex-col flex-shrink-0 w-full p-6 border border-accent"
							>
								{sidebar}
							</nav>
						</div>
					)}
					<div className="flex-shrink-0 pb-6 my-6 border-b border-accent lg:hidden">
						{sidebar}
					</div>
					<div className="md:flex-1">{children}</div>
				</div>
			</div>
			<div className={clsx({ 'mt-24': !max })}>
				<Footer />
			</div>
		</>
	);
}
