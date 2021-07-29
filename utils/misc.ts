import { RefObject } from 'react';

export function scrollTo(target: RefObject<HTMLDivElement>) {
	target.current!.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
	});
}
