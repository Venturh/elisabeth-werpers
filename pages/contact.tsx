import { ChangeEvent, FormEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import clsx from 'clsx';
import axios from 'axios';
import { Switch } from '@headlessui/react';
import {
	MailIcon,
	PhoneIcon,
	LocationMarkerIcon,
} from '@heroicons/react/solid';

import Layout from 'components/Layout';
import Button from 'components/Button';
import Link from 'components/Link';
import { SuccessMessage } from 'components/SuccessMessage';
import { ErrorMessage } from 'components/ErrorMessage';

type FormData = {
	name: string;
	email: string;
	message: string;
	agreed: boolean;
	honeypot: any;
};

const initialFormData: FormData = Object.freeze({
	name: '',
	email: '',
	message: '',
	agreed: false,
	honeypot: '',
});

export default function Contact() {
	const { t } = useTranslation('common');
	const [form, setFormData] = useState(initialFormData);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	function onChange(e: ChangeEvent) {
		const target = e.target as HTMLInputElement;
		setFormData({
			...form,
			[target.name]: target.value,
		});
	}

	async function handleOnSubmit(e: FormEvent) {
		e.preventDefault();

		if (!form.honeypot) {
			try {
				await axios.post('/api/form', { ...form });

				setSubmitted(true);
			} catch (error) {
				console.log(
					'🚀 ~ file: contact.tsx ~ line 58 ~ handleOnSubmit ~ error',
					error,
				);
				setSubmitted(false);
				setError(true);
			}
		}
		setFormData(initialFormData);
	}

	return (
		<Layout title={t('contact')} description="" sidebar={<Sidebar />}>
			<div className="space-y-6 lg:p-12 lg:mt-0">
				<h3 className="text-lg font-medium">
					{t('contact_description_short')}
				</h3>
				<form
					className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
					onSubmit={(e: FormEvent) => handleOnSubmit(e)}
				>
					<input
						type="text"
						name="honeypot"
						style={{ display: 'none' }}
						value={form.honeypot}
						onChange={onChange}
					/>
					<div className="sm:col-span-2">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-secondary"
						>
							{t('name')}
						</label>
						<div className="mt-1">
							<input
								type="text"
								name="name"
								id="name"
								autoComplete="new-password"
								className="block w-full px-4 py-3 rounded-md shadow-sm border-accent focus:ring-black focus:border-black"
								onChange={onChange}
								value={form.name}
								required
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-secondary"
						>
							Email
						</label>
						<div className="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="new-password"
								className="block w-full px-4 py-3 rounded-md shadow-sm border-accent focus:ring-black focus:border-black"
								onChange={onChange}
								value={form.email}
								required
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block text-sm font-medium text-secondary"
						>
							{t('message')}
						</label>
						<div className="mt-1">
							<textarea
								id="message"
								name="message"
								rows={4}
								className="block w-full px-4 py-3 border rounded-md shadow-sm border-accent focus:ring-black focus:border-black"
								onChange={onChange}
								value={form.message}
								autoComplete="new-password"
								required
							/>
						</div>
					</div>

					<div className="sm:col-span-2">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<Switch
									checked={form.agreed}
									onChange={(v) => setFormData({ ...form, agreed: v })}
									className={clsx(
										form.agreed ? 'bg-black' : 'bg-gray-200',
										'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black',
									)}
								>
									<span className="sr-only">Accept policy</span>
									<span
										aria-hidden="true"
										className={clsx(
											form.agreed ? 'translate-x-5' : 'translate-x-0',
											'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
										)}
									/>
								</Switch>
							</div>
							<p className="ml-3 text-sm">
								{t('form_policy')}{' '}
								<Link to="/privacy" className="font-medium underline">
									{t('privacy')}.
								</Link>
							</p>
						</div>
					</div>
					<div className="sm:col-span-2">
						<Button
							type="submit"
							disabled={!form.agreed}
							className="w-full"
							variant="primary"
						>
							{t('submit')}
						</Button>
					</div>
				</form>
				{submitted && (
					<SuccessMessage
						title={t('message_send')}
						description={t('message_send_description')}
					/>
				)}
				{error && <ErrorMessage title={t('error_server')} />}
			</div>
		</Layout>
	);
}

function Sidebar() {
	const { t } = useTranslation('common');
	return (
		<div>
			<h1 className="text-3xl font-semibold">{t('contact')}</h1>
			<p className="mt-2 prose">{t('newsletter_description')}</p>
			<dl className="mt-8 text-base text-secondary">
				<div>
					<dt className="sr-only">Postal address</dt>
					<dd className="flex">
						<LocationMarkerIcon
							className="flex-shrink-0 w-6 h-6"
							aria-hidden="true"
						/>
						<p className="ml-3">Musterstaße 21, 12345 Musterstadt</p>
					</dd>
				</div>
				<div className="mt-6">
					<dt className="sr-only">Phone number</dt>
					<dd className="flex">
						<PhoneIcon className="flex-shrink-0 w-6 h-6" aria-hidden="true" />
						<span className="ml-3">+49 123 456</span>
					</dd>
				</div>
				<div className="mt-3">
					<dt className="sr-only">Email</dt>
					<dd className="flex">
						<MailIcon className="flex-shrink-0 w-6 h-6" aria-hidden="true" />
						<span className="ml-3">support@example.com</span>
					</dd>
				</div>
			</dl>
		</div>
	);
}
