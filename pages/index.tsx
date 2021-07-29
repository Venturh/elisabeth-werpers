import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import Layout from 'components/Layout';
import Button from 'components/Button';

import { preloadQuery } from 'lib/apollo';
import { getBlurredSrc } from 'utils/image';
import { getStartsWith } from 'utils/locales';
import { scrollTo } from 'utils/misc';
import {
	ExhibitItem,
	LandingDataDocument,
	useLandingDataQuery,
} from 'generated';
import { useRef } from 'react';

type ExhibitFrameProps = {
	exhibit: ExhibitItem;
	width: number;
	height: number;
	position: string;
};

export default function Landing() {
	const { t, lang } = useTranslation('common');
	const currentExhibitionRef = useRef<HTMLDivElement>(null);

	const { data } = useLandingDataQuery({
		variables: { language: getStartsWith(lang) },
	});

	const gallery = data!.ExhibitionItems!.items![0]!;
	const exhibits = data!.ExhibitItems!.items!;

	const exhibitsFrame: ExhibitFrameProps[] = [
		{
			width: 300,
			height: 400,
			position: 'self-end justify-self-end w-10/12',
			exhibit: exhibits[0]!,
		},
		{
			width: 300,
			height: 400,
			position: 'ml-2 self-end w-12/12',
			exhibit: exhibits[1]!,
		},
		{
			width: 150,
			height: 200,
			position: 'w-5/12 lg:w-6/12 justify-self-end',
			exhibit: exhibits[2]!,
		},
		{
			width: 250,
			height: 350,
			position: 'ml-2 w-9/12 justify-self-start',
			exhibit: exhibits[3]!,
		},
	];
	return (
		<Layout title={t('home')} description="" max>
			<div className="space-y-12">
				<div className="flex flex-col justify-center min-h-screen bg-secondary">
					<div className="justify-between py-12 mx-auto space-y-6 lg:items-center lg:flex lg:flex-1 max-w-xsm sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
						<div className="space-y-4 lg:w-5/12">
							<h1 className="text-5xl font-bold lg:text-7xl">
								{t('hero_title')}
							</h1>
							<p className="prose">
								Deserunt eu voluptate sunt sit officia elit in qui. Excepteur id
								proident non voluptate ad voluptate cillum reprehenderit ea
								deserunt. Velit et labore sunt adipisicing nostrud. Exercitation
								est laboris fugiat magna aliqua ea. Est do Lorem irure et
								laboris commodo. Ea duis culpa ipsum id dolore. Fugiat Lorem ea
								pariatur consectetur exercitation nisi do anim reprehenderit
								ullamco sint duis.
							</p>
							<div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
								<Button
									className="w-full md:w-max"
									variant="primary"
									onClick={() => scrollTo(currentExhibitionRef)}
								>
									{t('to_current_exhibition')}
								</Button>
								<Button
									className="w-full md:w-max"
									variant="outline"
									to="/contact"
								>
									{t('contact')}
								</Button>
							</div>
						</div>
						<div className="relative flex flex-col lg:w-1/2">
							<div className="hidden sm:block">
								<svg
									className="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0"
									width={404}
									height={530}
									fill="none"
									viewBox="0 0 404 530"
								>
									<defs>
										<pattern
											id="837c3e70-6c3a-44e6-8854-cc48c737b659"
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
										height={530}
										fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
									/>
								</svg>
							</div>
							<div className="grid grid-cols-2">
								{exhibitsFrame.slice(0, 2).map((image, i) => (
									<ExhibitFrame key={i} {...image} />
								))}
							</div>
							<div className="grid grid-cols-2">
								{exhibitsFrame.slice(2, 4).map((image, i) => (
									<ExhibitFrame key={i} {...image} />
								))}
							</div>
						</div>
					</div>
				</div>
				<div
					ref={currentExhibitionRef}
					className="items-center py-12 mx-auto lg:py-24 xl:py-32 lg:flex lg:flex-1 max-w-xsm sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
				>
					<div className="grid items-center gap-12 lg:gap-0 lg:grid-cols-2">
						<Link href={`/exhibitions/${gallery.slug}`}>
							<a className="relative flex-shrink w-full h-full duration-500 ease-in-out transform rounded-lg lg:w-3/5 hover:scale-105">
								<div className="z-40 hidden w-full h-full rounded-lg lg:block">
									<Image
										className="rounded-lg"
										width={1}
										height={1.3}
										src={
											gallery.content!.images![0]!.filename ??
											gallery.content!.image!.filename
										}
										placeholder="blur"
										blurDataURL={getBlurredSrc(
											gallery.content!.images![0]!.filename ??
												gallery.content!.image!.filename,
										)}
										layout="responsive"
										alt="cover-img"
									/>
								</div>
								<div className="z-30 w-full h-full rounded-lg lg:absolute lg:-right-12 top-12 ">
									<Image
										className="rounded-lg"
										width={1}
										height={1.3}
										src={gallery.content!.image!.filename}
										placeholder="blur"
										blurDataURL={getBlurredSrc(
											gallery.content!.image!.filename,
										)}
										layout="responsive"
										alt="cover-img"
									/>
								</div>
								<div className="z-20 hidden w-full h-full text-white border-r border-opacity-50 rounded-lg lg:block lg:absolute lg:left-4 lg:-bottom-6">
									<Image
										className="rounded-lg"
										width={1}
										height={1.3}
										src={
											gallery.content!.images![1]?.filename ??
											gallery.content!.image!.filename
										}
										placeholder="blur"
										blurDataURL={getBlurredSrc(
											gallery.content!.images![1]?.filename ??
												gallery.content!.image!.filename,
										)}
										layout="responsive"
										alt="cover-img"
									/>
								</div>
							</a>
						</Link>

						<div className="order-first lg:order-last">
							<div className="flex justify-between font-medium">
								<span>{gallery.content!.time}</span>
								<span>{gallery.content!.year}</span>
							</div>
							<div className="mt-2 space-y-4">
								<h2 className="text-4xl font-bold lg:text-6xl">
									{gallery.content?.title}
								</h2>

								<p className="mt-4 prose line-clamp-6">
									{gallery.content!.description}
								</p>
							</div>

							<div className="w-full mt-4 border-t-2 border-accent" />

							<div className="flex flex-col mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4">
								<Button variant="primary" to={`/exhibitions/${gallery.slug}`}>
									{t('to_exhibition')}
								</Button>
								<Button variant="outline" to="/exhibitions">
									{t('all_exhibitions')}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

function ExhibitFrame({ exhibit, width, height, position }: ExhibitFrameProps) {
	return (
		<div
			className={clsx(
				position,
				'hover:scale-105 w-full rounded-lg transform duration-500 ease-in-out',
			)}
		>
			<Image
				className="rounded-lg"
				width={width}
				height={height}
				src={exhibit.content!.image!.filename}
				// placeholder="blur"
				// blurDataURL={getBlurredSrc(exhibit.content!.image!.filename)}
				priority
				alt="cover-img"
			/>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) =>
	preloadQuery({
		query: LandingDataDocument,
		variables: { language: getStartsWith(locale) },
	});
