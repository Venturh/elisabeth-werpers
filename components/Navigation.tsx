import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { default as NextLink } from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

import Link from './Link';
import { LanguageDropdown } from './LanguageDropdown';
import clsx from 'clsx';

export default function Navigation() {
	const items = [
		{ name: 'home', to: '/' },
		{ name: 'exhibitions', to: '/exhibitions' },
		{ name: 'exhibits', to: '/exhibits' },
		{ name: 'news', to: '/news' },
		{ name: 'contact', to: '/contact' },
	];

	const { pathname } = useRouter();
	const { t } = useTranslation('common');

	function getActive(to: string) {
		if (to === '/' && pathname !== '/') return false;
		else return pathname.startsWith(to) ? true : false;
	}
	return (
		<Disclosure as="nav" className="sticky top-0 z-50 w-full bg-white shadow ">
			{({ open }) => (
				<>
					<div className="w-full mx-auto max-w-xsm sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
						<div className="flex justify-between h-12">
							<div className="flex justify-between w-full h-full">
								<Link className="flex items-center text-xl" to="/">
									Dr. Elisabeth Werpers
								</Link>

								<div className="hidden xl:ml-6 xl:flex xl:space-x-8">
									{items.map(({ name, to }) => (
										<Link
											className={clsx({
												'text-primary font-medium': getActive(to),
												'text-secondary hover:text-primary':
													getActive(to) === false,
											})}
											key={name}
											to={to}
											active={getActive(to)}
										>
											{t(name)}
										</Link>
									))}
									<div className="flex items-center">
										<LanguageDropdown />
									</div>
								</div>
							</div>
							{/* Mobile menu */}
							<div className="flex items-center space-x-2 xl:hidden">
								<LanguageDropdown display={false} />
								<Disclosure.Button className="inline-flex items-center rounded-full md:p-1 hover:ring-4 hover:ring-accent hover:bg-accent focus:outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block w-6 h-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block w-6 h-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="flex flex-col px-4 space-y-2 xl:hidden">
						{items.map(({ name, to }) => (
							<Link
								className={clsx({
									'border-text-primary text-primary border-l-4 bg-accent pl-3 pr-4 py-2':
										getActive(to),
									'text-secondary  hover:text-primary pl-3 pr-4 py-2':
										getActive(to) === false,
								})}
								key={name}
								to={to}
								active={getActive(to)}
							>
								{t(name)}
							</Link>
						))}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
