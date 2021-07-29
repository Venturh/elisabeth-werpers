import Image from 'next/image';
import Link from 'next/link';
import { ExhebitionFragment } from 'generated';
import { getBlurredSrc } from 'utils/image';

type Props = {
	exhebition: ExhebitionFragment;
	slug: string;
	priority?: boolean;
};

export function GalleryCard({ exhebition, slug, priority }: Props) {
	const { title, image, time, year, artist } = exhebition.content!;
	return (
		<Link href={`/exhibitions/${slug}`}>
			<a className="space-y-2">
				<div className="relative duration-100 ease-out transform rounded hover:rounded-lg hover:translate-x-2 hover:-translate-y-2 hover:shadow-twitch-accent">
					{priority && (
						<Image
							className="rounded-md"
							width={2}
							height={1}
							layout="responsive"
							src={image!.filename}
							priority
							alt="cover-img"
						/>
					)}
					{!priority && (
						<>
							<div className="hidden md:block">
								<Image
									width={2}
									height={1}
									layout="responsive"
									// placeholder="blur"
									// blurDataURL={getBlurredSrc(image!.filename)}
									objectFit="cover"
									src={image!.filename}
									alt="cover-img"
								/>
							</div>
							<div className="md:hidden">
								<Image
									width={1}
									height={1}
									layout="responsive"
									// placeholder="blur"
									// blurDataURL={getBlurredSrc(image!.filename)}
									src={image!.filename}
									alt="cover-img"
								/>
							</div>
						</>
					)}
					<div className="absolute bottom-0 w-full h-20 p-4 bg-secondary">
						<div className="flex justify-between font-medium">
							<div className="text-primary">
								<p className="text-lg sm:text-xl">{title}</p>
								<p className="">{time}</p>
							</div>
							<div className="hidden text-right md:block text-secondary">
								<p className="text-lg sm:text-xl ">{year}</p>
								<p className="">{artist}</p>
							</div>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
}
