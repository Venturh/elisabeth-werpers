import { useState, useRef } from 'react';
import Image from 'next/image';

import ExhibitImageModal from './ExhibitImageModal';
import { ExhibitItem } from 'generated';

type Props = {
	exhibit: ExhibitItem;
	index?: number;
	fromExhibition?: boolean;
};

export default function Exhibit({
	exhibit,
	index = 12,
	fromExhibition,
}: Props) {
	const [open, setOpen] = useState(false);
	return (
		<>
			{/* Exhibit */}
			<button
				className="relative duration-100 ease-out transform rounded-md shadow bg-secondary hover:rounded-lg hover:translate-x-2 hover:-translate-y-2 hover:shadow-twitch-accent"
				onClick={() => setOpen(true)}
			>
				<div className="flex items-center justify-center p-4 rounded-md ">
					<div className="w-3/4">
						<Image
							width={1}
							height={1}
							layout="responsive"
							src={exhibit.content!.image!.filename}
							alt={exhibit.content!.image!.alt!}
							priority={index <= 6}
						/>
					</div>
				</div>
				<div className="flex flex-col p-4 font-light rounded-md bg-secondary">
					<div className="text-center">
						<p className="font-medium lg:text-lg">
							{exhibit.content!.title}, {exhibit.content!.year}
						</p>
						<p>{exhibit.content!.dimension}</p>
					</div>
				</div>
			</button>

			{/* ExhibitModal */}
			<ExhibitImageModal
				open={open}
				setOpen={(value) => setOpen(value)}
				item={exhibit}
				isExhibition={fromExhibition}
			/>
		</>
	);
}
