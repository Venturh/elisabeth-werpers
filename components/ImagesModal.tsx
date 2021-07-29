import { Fragment, MutableRefObject, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

import ImageSlider from './ImageSlider';
import { Asset } from 'generated';

type Props = {
	open: boolean;
	setOpen: (value: boolean) => void;
	items: Asset[];
	selected?: number;
};

export default function ImagesModal({
	open,
	setOpen,
	items,
	selected = 1,
}: Props) {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	function findById() {
		const id = items.findIndex((image) => image!.id === selected);
		return id === -1 ? 0 : id;
	}

	const [selectedIndex, setSelectedIndex] = useState(findById());

	useEffect(() => {
		setSelectedIndex(findById());
	}, [selected, findById]);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				static
				className="fixed inset-0 z-50 bg-black"
				open={open}
				onClose={setOpen}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Dialog.Overlay className="fixed inset-0 transition-opacity bg-black" />
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
					<div className="relative inline-block w-screen h-screen text-left align-bottom transition-all transform ">
						<div className="absolute z-50 flex items-center justify-between w-full p-1 text-white bg-black lg:right-0 ">
							<span />
							<span>
								{selectedIndex + 1}/{items.length}
							</span>
							<button
								className="inline-flex items-center rounded-full md:p-1 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
								onClick={() => setOpen(false)}
							>
								<XIcon className="w-6 h-6" aria-hidden="true" />
							</button>
						</div>

						<div className="flex flex-col justify-center w-full min-h-screen lg:justify-center lg:flex-row">
							<div className="lg:w-5/6">
								<div className="flex items-center w-full h-full">
									<ImageSlider
										selected={selectedIndex}
										setSelected={(i) => setSelectedIndex(i)}
										images={items}
										bullets={false}
									/>
								</div>
							</div>
						</div>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition.Root>
	);
}
