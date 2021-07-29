import { useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';

import Layout from 'components/Layout';
import Exhibit from 'components/Exhibit';
import ImageSlider from 'components/ImageSlider';
import ImagesModal from 'components/ImagesModal';

import Button from 'components/Button';

import {
	Asset,
	ExhebitionItemsBySlugDocument,
	ExhibitionItem,
	useExhebitionItemsBySlugQuery,
} from 'generated';
import { preloadQuery } from 'lib/apollo';
import { getStartsWith } from 'utils/locales';
import { getBlurredSrc } from 'utils/image';
import { scrollTo } from 'utils/misc';
import TitleDivider from 'components/TitleDivider';

export default function Exhibition() {
	const {
		query: { slug },
	} = useRouter();

	const { t, lang } = useTranslation('common');
	const [selected, setSelected] = useState<number | undefined>(undefined);
	const imagesRef = useRef<HTMLDivElement>(null);

	const { data } = useExhebitionItemsBySlugQuery({
		variables: {
			slug: `exhibition/${slug}`,
			language: getStartsWith(lang),
		},
	});

	const { items } = data?.ExhibitionItems!;
	const gallery = items ? items[0] : undefined;

	if (!gallery)
		return (
			<Layout title="Nicht gefunden" description="Nicht gefunden">
				Nicht gefunden
			</Layout>
		);
	const exhibits = gallery.content?.exhibits ?? undefined;

	return (
		<Layout title={gallery.content!.title!} description="">
			<div className="flex flex-col justify-between w-full mt-6">
				<h1 className="text-4xl font-semibold text-center lg:text-left lg:text-6xl ">
					{gallery.content!.title}
				</h1>
				<div className="flex flex-col my-2 text-lg font-medium text-center divide-y lg:text-left lg:flex-row lg:divide-y-0 lg:justify-between divide-accent">
					<div className="w-full py-4 lg:py-0">
						<p className="lg:hidden">{t('date')}</p>
						<p>
							{gallery.content!.time}, {gallery.content!.year}
						</p>
					</div>
					<div className="w-full py-4 lg:py-0 lg:text-right">
						<p className="lg:hidden">{t('artists')}</p>
						<p>{gallery.content!.artist}</p>
					</div>
					<div />
				</div>

				<ExhibitionImage
					selected={selected}
					setSelected={setSelected}
					exhibitionItem={gallery}
					scrollToImages={() => scrollTo(imagesRef)}
				/>
				<TitleDivider title="about" />
				<p className="mx-auto mt-4 prose lg:w-3/4">
					{gallery.content!.description}
				</p>
			</div>

			<div ref={imagesRef} className="grid gap-4 mx-auto mt-8 lg:w-3/4">
				{gallery.content!.images!.map((image) => (
					<button
						key={image!.id}
						onClick={() => setSelected(image!.id!)}
						className={clsx(
							'relative rounded-md bg-secondary flex items-center justify-center p-4',
						)}
					>
						<div className="w-3/4">
							<Image
								width={1}
								height={1}
								key={image?.id}
								className="rounded-md"
								layout="responsive"
								src={image!.filename}
								alt={image!.alt!}
								placeholder="blur"
								objectFit="contain"
								blurDataURL={getBlurredSrc(image!.filename)}
							/>
						</div>
					</button>
				))}
			</div>

			<TitleDivider title="exhibits" />

			<div className="grid gap-4 mt-4 lg:grid-cols-2">
				{exhibits &&
					exhibits.map((exhibit, i) => (
						<Exhibit exhibit={exhibit!} key={i} fromExhibition />
					))}
			</div>
		</Layout>
	);
}

function ExhibitionImage({
	exhibitionItem,
	selected,
	setSelected,
	scrollToImages,
}: {
	exhibitionItem: ExhibitionItem;
	selected: number | undefined;
	setSelected: (v: number | undefined) => void;
	scrollToImages: () => void;
}) {
	const { t } = useTranslation('common');
	const [mobileSelected, setMobileSelected] = useState<number | undefined>(
		undefined,
	);
	const images = [
		exhibitionItem.content!.image!,
		...exhibitionItem.content!.images!,
	];

	const placerholderImages = Array.from(Array(5 - images.length).keys());

	return (
		<>
			<div className="relative">
				<Button
					onClick={scrollToImages}
					variant="primary"
					className="absolute bottom-0 right-0 z-10 lg:right-3 lg:bottom-3"
				>
					{t('show_all')}
				</Button>
				<div className="mb-12 lg:hidden">
					<div
						className="cursor-pointer"
						onClick={() => setSelected(mobileSelected)}
					>
						<ImageSlider
							setSelected={(i) => setMobileSelected(images[i]!.id)}
							images={images}
							bullets={false}
							withDisplay={true}
						/>
					</div>
				</div>
				<div className="hidden grid-cols-4 gap-2 lg:grid h-[50vh] min-h-[350px]">
					<>
						{images.map((image, i) => (
							<button
								key={image!.id}
								onClick={() => setSelected(image!.id!)}
								className={clsx(
									'relative rounded-md bg-accent',
									i === 0
										? 'col-span-2 row-span-2'
										: 'col-span-1 row-span-2 gridBp:col-span-1 gridBp:row-span-1',
									{ 'hidden gridBp:block': i > 2 },
								)}
							>
								<Image
									className="rounded-md"
									layout="fill"
									src={image!.filename}
									alt={image!.alt!}
									placeholder="blur"
									objectFit="cover"
									blurDataURL={getBlurredSrc(image!.filename)}
									priority
								/>
							</button>
						))}
						{images.length < 5 &&
							placerholderImages.map((i) => (
								<div
									key={i}
									className={clsx(
										'relative col-span-1 row-span-1 rounded-md bg-accent',
										{
											'hidden gridBp:block':
												images.length - placerholderImages.length > 2,
										},
									)}
								/>
							))}
					</>
				</div>
			</div>
			<ImagesModal
				open={selected ? true : false}
				setOpen={() => setSelected(undefined)}
				items={images as Asset[]}
				selected={selected}
			/>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const { slug } = ctx.query;

	return preloadQuery({
		query: ExhebitionItemsBySlugDocument,
		variables: { slug: `exhibition/${slug}`, language: getStartsWith(locale) },
	});
};
