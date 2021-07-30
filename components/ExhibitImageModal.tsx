import { Fragment, MutableRefObject, useState } from 'react';
import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import { Dialog, Transition, Disclosure } from '@headlessui/react';
import { XIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

import { IconButton } from './IconButton';
import Link from './Link';
import ImageSlider from './ImageSlider';
import { ExhibitionItem, ExhibitItem } from 'generated';

type Props = {
	open: boolean;
	setOpen: (value: boolean) => void;
	item: ExhibitItem | ExhibitionItem;
	isExhibition?: boolean;
};

export default function ExhibitImageModal({
	open,
	setOpen,
	item,
	isExhibition = false,
}: Props) {
	const { t } = useTranslation('common');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const images = [item.content!.image!, ...item.content!.images!];
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				static
				className="fixed inset-0 z-50 overflow-hidden"
				open={open}
				onClose={setOpen}
			>
				<div className="">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-75" />
					</Transition.Child>

					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enterTo="opacity-100 translate-y-0 sm:scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 translate-y-0 sm:scale-100"
						leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					>
						<div className="relative inline-block w-screen h-screen overflow-y-scroll text-left align-bottom transition-all transform bg-white ">
							<div className="absolute z-50 flex items-center justify-between w-full p-4 lg:w-min lg:right-0 ">
								<span className="font-medium lg:hidden">
									{item.content!.title}
								</span>
								<span className="mr-6">
									{selectedIndex + 1}/{images.length}
								</span>
								<IconButton onClick={() => setOpen(false)}>
									<XIcon className="w-6 h-6" aria-hidden="true" />
								</IconButton>
							</div>

							<div className="flex flex-col justify-between w-full min-h-screen lg:flex-row">
								<div className="lg:hidden" />
								<div className="bg-black lg:p-4 lg:w-5/6">
									<div className="flex items-center w-full h-full">
										<ImageSlider
											selected={selectedIndex}
											setSelected={(index) => setSelectedIndex(index)}
											images={images}
											bullets={false}
										/>
									</div>
								</div>

								<Disclosure as="div" className="lg:hidden bg-secondary">
									{({ open }) => (
										<>
											<Disclosure.Button
												className={clsx(
													'flex items-center justify-between w-full p-4 lg:hidden',
													{ 'mt-12 lg:mt-0': open },
												)}
											>
												<span>{open ? t('read_less') : t('read_more')}</span>

												{open ? (
													<ChevronUpIcon
														className="flex-shrink-0 h-5 "
														aria-hidden="true"
													/>
												) : (
													<ChevronDownIcon
														className="flex-shrink-0 h-5 "
														aria-hidden="true"
													/>
												)}
											</Disclosure.Button>
											<Transition
												enter="transition ease-in-out duration-300 transform"
												enterFrom="-translate-y-5  opacity-0"
												enterTo="translate-y-0 opacity-100"
												leave="transition ease-in-out duration-300 transform"
												leaveFrom="translate-y-0  opacity-100"
												leaveTo="-translate-y-5  opacity-0"
											>
												<Disclosure.Panel>
													<ItemDetails
														open={open}
														setOpen={setOpen}
														item={item}
													/>
												</Disclosure.Panel>
											</Transition>
										</>
									)}
								</Disclosure>
								<div className="hidden w-1/3 lg:block">
									<ItemDetails
										open={open}
										setOpen={setOpen}
										item={item}
										isExhibition={isExhibition}
									/>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}

function ItemDetails({ item, isExhibition = false }: Props) {
	const { t } = useTranslation('common');
	const exhibitions = !isExhibition
		? (item as ExhibitItem).content!.exhibition
		: undefined;
	return (
		<div className="h-full p-4 space-y-6 font-light divide-y lg:p-6 bg-secondary divide-accent">
			<div>
				<p className="font-medium lg:text-lg">
					{item.content!.title}, {item.content!.year}
				</p>
				{!isExhibition && <p>{(item as ExhibitItem).content!.dimension}</p>}
				<p>{item.content!.description}</p>
			</div>
			{exhibitions && exhibitions.length > 0 && (
				<ul className="pt-3 mt-1 ">
					<span className="text-lg font-medium">{t('exhibitions')}</span>
					<li className="flex flex-col items-start space-y-2">
						{(
							(item as ExhibitItem).content!.exhibition as ExhibitionItem[]
						).map((exhibition) => (
							<Link
								key={exhibition.slug}
								to={`/exhibitions/${exhibition.slug}`}
							>
								<span>{exhibition.content!.title}</span>
								<span className="ml-2 text-sm">
									({exhibition.content!.time})
								</span>
							</Link>
						))}
					</li>
				</ul>
			)}
		</div>
	);
}
