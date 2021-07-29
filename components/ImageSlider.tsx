import AwesomeSlider from 'react-awesome-slider';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline';

import 'react-awesome-slider/dist/styles.css';
import { ImageFragment, Maybe } from 'generated';
import { useState } from 'react';

type Props = {
	images?: Maybe<ImageFragment>[];
	selected?: number;
	setSelected?: (value: number) => void;
	bullets?: boolean;
	withDisplay?: boolean;
};

export default function ImageSlider({
	images,
	selected = 0,
	setSelected,
	bullets,
	withDisplay,
}: Props) {
	const [selectedIndex, setSelectedIndex] = useState(selected);

	if (images)
		return (
			<div className="relative flex items-center justify-center w-full h-full">
				<AwesomeSlider
					selected={selected}
					media={images.map((img) => ({
						source: img!.filename,
					}))}
					organicArrows={false}
					buttonContentRight={
						<ChevronRightIcon className="w-12 text-white bg-black rounded-full" />
					}
					buttonContentLeft={
						<ChevronLeftIcon className="w-12 text-white bg-black rounded-full" />
					}
					fillParent={false}
					onTransitionEnd={(e) => {
						setSelectedIndex(e.currentIndex);
						setSelected && setSelected(e.currentIndex);
					}}
					bullets={bullets}
					infinite={false}
				/>
				{withDisplay && (
					<div className="absolute bottom-0 left-0 z-10 flex items-center justify-center w-12 text-sm text-white bg-black rounded">
						{selectedIndex + 1}/{images.length}
					</div>
				)}
			</div>
		);
	else return <div>No images</div>;
}
