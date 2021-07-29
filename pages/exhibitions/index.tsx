import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';

import { Disclosure, Transition } from '@headlessui/react';
import { RewindIcon, ClockIcon } from '@heroicons/react/outline';

import { GalleryCard } from 'components/GalleryCard';
import Link from 'components/Link';
import Button from 'components/Button';
import Layout from 'components/Layout';

import { getStartsWith } from 'utils/locales';
import { preloadQuery } from 'lib/apollo';

import {
	useAllExhibitionItemsQuery,
	AllExhibitionItemsDocument,
} from 'generated';

export default function Exhebitions() {
	const { t, lang } = useTranslation('common');

	const { data } = useAllExhibitionItemsQuery({
		variables: { language: getStartsWith(lang) },
	});
	const { items } = data!.ExhibitionItems!;

	const [exhibitions, setExhibitions] = useState(items);
	const [showMobileDisclosures, setShowMobileDisclosures] = useState(false);

	function handleDisclosure(year?: string) {
		if (year)
			setExhibitions(items!.filter((item) => item!.content!.year === year));
		else setExhibitions(items);
	}

	return (
		<Layout
			title={t('exhibitions')}
			description={''}
			sidebar={
				<Disclosures callback={(year: string) => handleDisclosure(year)} />
			}
		>
			<div className="mt-6 mb-4 space-y-4 lg:hidden">
				<div className="flex items-center justify-between">
					<span className="text-2xl font-semibold ">{t('exhibitions')}</span>
					<Button
						variant="primary"
						onClick={() => setShowMobileDisclosures(!showMobileDisclosures)}
					>
						{t('filters')}
					</Button>
				</div>
				{showMobileDisclosures && (
					<Disclosures callback={(year: string) => handleDisclosure(year)} />
				)}
			</div>

			<div className="flex-grow-0">
				{exhibitions!.map((data) => {
					return (
						<GalleryCard
							key={data!.content!.title}
							slug={data!.slug!}
							exhebition={data!}
						/>
					);
				})}
			</div>
		</Layout>
	);
}

function Disclosures({ callback }: { callback: Function }) {
	const { t } = useTranslation('common');
	const { year } = useRouter().query;

	const [current, setCurrent] = useState<
		'current_exhibitions' | 'past_exhibitions'
	>('current_exhibitions');

	useEffect(() => {
		if (year) setCurrent('past_exhibitions');
		else setCurrent('current_exhibitions');
		callback(year);
	}, [year, callback]);

	return (
		<>
			<div className="items-center flex-shrink-0 hidden p-6 text-3xl font-semibold border-b lg:flex border-accent">
				{t('exhibitions')}
			</div>
			<div className="flex-1 min-h-0 overflow-y-auto rounded-md bg-secondary lg:bg-primary">
				<Link
					to="/exhibitions"
					className={clsx(
						current === 'current_exhibitions'
							? 'bg-brand-50 bg-opacity-50'
							: 'hover:bg-brand-50 hover:bg-opacity-50',
						'flex items-center space-x-2 w-full p-6 border-b border-accent',
					)}
					onClick={() => setCurrent('current_exhibitions')}
				>
					<ClockIcon className="flex-shrink-0 h-5" aria-hidden="true" />
					<p className="">{t('current_exhibitions')}</p>
				</Link>
				<Disclosure as="div">
					<div
						onClick={() => setCurrent('past_exhibitions')}
						className={
							current === 'past_exhibitions'
								? 'bg-brand-50 bg-opacity-50'
								: 'hover:bg-brand-50 hover:bg-opacity-50'
						}
					>
						<Disclosure.Button
							className={clsx(
								'flex items-center space-x-2 w-full p-6 border-b border-accent',
							)}
						>
							<RewindIcon className="flex-shrink-0 h-5 " aria-hidden="true" />
							<span>{t('past_exhibitions')}</span>
						</Disclosure.Button>
					</div>
					<Transition
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-y-5  opacity-0"
						enterTo="translate-y-0 opacity-100"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-y-0  opacity-100"
						leaveTo="-translate-y-5  opacity-0"
					>
						<Disclosure.Panel className="px-8 py-6 text-xs border-b border-accent">
							<div className="grid grid-cols-5 gap-2">
								{['2021', '2020', '2019', '2018', '2017', '2016'].map((y) => (
									<Link key={y} to={`?year=${y}`} underline={y === year}>
										{y}
									</Link>
								))}
							</div>
						</Disclosure.Panel>
					</Transition>
				</Disclosure>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) =>
	preloadQuery({
		query: AllExhibitionItemsDocument,
		variables: { language: getStartsWith(locale) },
	});
