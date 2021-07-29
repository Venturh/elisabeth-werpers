import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { SelectorIcon, TranslateIcon } from '@heroicons/react/outline';

import { Dropdown } from './Dropdown';

type Props = {
	display?: boolean;
};

export function LanguageDropdown({ display }: Props) {
	const languages = [
		{ text: 'Deutsch', value: 'de', action: () => setLanguage('de') },
		{ text: 'English', value: 'en', action: () => setLanguage('en') },
		{ text: 'Francais', value: 'fr', action: () => setLanguage('fr') },
	];

	const { lang } = useTranslation();

	return (
		<Dropdown menuItems={languages.filter(({ value }) => value !== lang)}>
			{display ? (
				<div className="inline-flex justify-between px-3 py-2 text-sm font-medium border rounded-md w-28 text-primary bg-primary border-accent hover:border-black">
					<span>{languages.find(({ value }) => value === lang)?.text}</span>
					<SelectorIcon className="w-5 h-5" aria-hidden="true" />
				</div>
			) : (
				<div className="flex items-center space-x-1 ">
					<TranslateIcon
						className="w-5 rounded-full hover:ring-4 hover:ring-accent hover:bg-accent focus:outline-none"
						aria-hidden="true"
					/>
				</div>
			)}
		</Dropdown>
	);
}
