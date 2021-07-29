import { FormEvent, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

import Link from 'components/Link';
import Button from 'components/Button';
import { SuccessMessage } from './SuccessMessage';
import { ErrorMessage } from './ErrorMessage';

type Props = {
	small?: boolean;
};

const initialFormData = Object.freeze({
	email: '',
	success: false,
	error: '',
	loading: false,
	honeypot: '',
});

export default function Newsletter({ small = false }: Props) {
	const { t } = useTranslation('common');
	const [form, setForm] = useState(initialFormData);

	async function submit(e: FormEvent) {
		e.preventDefault();

		if (!form.honeypot) {
			setForm({ ...form, loading: true });
			try {
				await axios.put('/api/mailingList', {
					email: form.email,
				});
				setForm({ ...form, success: true, email: '', loading: false });
			} catch (error) {
				const status = error.response.status;

				if (status === 400)
					setForm({
						...form,
						loading: false,
						error: 'error_already_subscribed',
					});
				else if (status === 500) {
					setForm({
						...form,
						loading: false,
						error: 'error_server',
					});
				}
			}
		} else {
			setForm(initialFormData);
		}
	}

	return (
		<div>
			<form
				className={clsx('flex flex-col mt-6 ', {
					'sm:flex-row lg:mt-0 lg:justify-end': !small,
				})}
				onSubmit={submit}
			>
				<div>
					<input
						type="text"
						name="honeypot"
						style={{ display: 'none' }}
						value={form.honeypot}
						onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
					/>
					<label htmlFor="email-address" className="sr-only">
						Email
					</label>
					<input
						id="email-address"
						name="email-address"
						type="email"
						autoComplete="email"
						required
						className="w-full px-4 py-2 border rounded-md appearance-none placeholder-text-secondary bg-primary border-accent focus:outline-none focus:ring-black focus:border-black lg:max-w-xs"
						placeholder="Email"
						value={form.email}
						onChange={(e) => setForm({ ...form, email: e.target.value })}
					/>
				</div>
				<div
					className={clsx(
						'flex flex-shrink-0 w-full mt-2 rounded-md shadow-sm ',
						{ 'sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex': !small },
					)}
				>
					<Button
						type="submit"
						variant="primary"
						className={clsx(
							small ? 'w-full' : 'w-full sm:w-auto sm:inline-flex',
						)}
						loading={form.loading}
					>
						{t('subscribe')}
					</Button>
				</div>
			</form>
			{form.success && (
				<div className="mt-2">
					<SuccessMessage title={t('newsletter_success')} />
				</div>
			)}
			{form.error && (
				<div className="mt-2">
					<ErrorMessage title={t(form.error)} />
				</div>
			)}
		</div>
	);
}

export function NewsletterSection({ small }: Props) {
	const { t } = useTranslation('common');

	return (
		<div className="bg-white">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
				<div className="px-6 py-6 rounded-lg bg-brand-700 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
					<div className="xl:w-0 xl:flex-1">
						<h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
							{t('newsletter_title')}
						</h2>
						<p className="max-w-3xl mt-3 text-lg leading-6 text-brand-200">
							{t('newsletter_description')}
						</p>
					</div>
					<div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
						<Newsletter small={small} />
						<p className="mt-3 text-sm text-brand-200">
							{t('newsletter_policy')}{' '}
							<Link to="/privacy" className="font-medium text-white underline">
								{t('privacy')}.
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
