import useTranslation from 'next-translate/useTranslation';
import { Disclosure } from '@headlessui/react';
import { PlusIcon, XIcon } from '@heroicons/react/solid';

import { LanguageDropdown } from 'components/LanguageDropdown';
import Newsletter from './Newsletter';
import Link from 'components/Link';

const footer = {
	pages: [
		{ name: 'home', link: '/', internal: true },
		{ name: 'exhibitions', link: '/exhibitions', internal: true },
		{ name: 'exhibits', link: '/exhibits', internal: true },
		{ name: 'news', link: '/news', internal: true },
		{ name: 'contact', link: '/contact', internal: true },
	],
	contact: [
		{
			name: 'Instagram',
			link: 'https://instagram.com',
			internal: false,
		},
		{
			name: 'Email',
			link: 'mailto:elisabeth.werpers@gmail.com',
			internal: false,
		},
	],
	legal: [
		{ name: 'disclosure', link: '/discloser', internal: true },
		{ name: 'privacy', link: '/privacy', internal: true },
	],
};

export default function Footer() {
	const { t } = useTranslation('common');

	return (
		<div className="flex flex-col w-full pt-6 space-y-6 text-base border-t bg-secondary border-accent">
			<div className="w-full mx-auto space-y-12 max-w-xsm sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
				<div className="hidden md:gap-4 md:grid md:grid-cols-4">
					{Object.entries(footer).map(([title, values]) => (
						<div className="space-y-2" key={title}>
							<span className="text-xs font-semibold tracking-wider uppercase text-secondary">
								{t(`${title}`)}
							</span>
							<div className="flex flex-col space-y-3 ">
								{values.map(({ link, name, internal }) => (
									<Link key={name} to={link} out={!internal}>
										{internal ? t(`${name}`) : name}
									</Link>
								))}
							</div>
						</div>
					))}

					<div className="space-y-2">
						<h3 className="text-xs font-semibold tracking-wider uppercase text-secondary">
							{t('language')}
						</h3>
						<LanguageDropdown display />
					</div>
				</div>
				<div className="space-y-2 divide-y md:hidden">
					{Object.entries(footer).map(([title, values]) => (
						<Disclosure key={title} as="div" className="mt-2">
							{({ open }) => (
								<>
									<Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm text-left focus:outline-none">
										<span>{t(`${title}`)}</span>
										{open ? (
											<XIcon className="w-4" />
										) : (
											<PlusIcon className="w-4" />
										)}
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
										<div className="flex flex-col space-y-3 ">
											{values.map(({ link, name, internal }) => (
												<Link
													className="ml-2"
													key={name}
													to={link}
													out={!internal}
												>
													{internal ? t(`${name}`) : name}
												</Link>
											))}
										</div>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					))}
					<div className="flex items-center justify-between px-4 py-2">
						<span className="text-sm">{t('language')}</span>
						<LanguageDropdown display />
					</div>
				</div>
				<div className="pt-8 border-t border-accent lg:flex lg:items-center lg:justify-between xl:mt-0">
					<div>
						<h3 className="text-sm font-semibold tracking-wider uppercase">
							{t('newsletter_title')}
						</h3>
						<p className="mt-2 md:w-3/4">{t('newsletter_description')}</p>
					</div>
					<Newsletter />
				</div>
				<div className="flex justify-between py-6 border-t">
					<span>© 2021</span>
					<span>Dr. Elisabeth Werpers</span>
				</div>
			</div>
		</div>
	);
}
