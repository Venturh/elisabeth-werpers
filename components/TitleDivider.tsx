import useTranslation from 'next-translate/useTranslation';

type Props = {
	title: string;
};
export default function TitleDivider({ title }: Props) {
	const { t } = useTranslation('common');
	return (
		<div className="relative mt-8">
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t-2 border-accent" />
			</div>
			<div className="relative flex justify-center">
				<h3 className="px-3 text-2xl font-medium bg-white lg:text-4xl">
					{t(title)}
				</h3>
			</div>
		</div>
	);
}
