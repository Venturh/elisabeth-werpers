import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Layout from 'components/Layout';
import Exhibit from 'components/Exhibit';

import { getStartsWith } from 'utils/locales';
import { preloadQuery } from 'lib/apollo';
import { AllExhibitsItemsDocument, useAllExhibitsItemsQuery } from 'generated';

export default function Exhibits() {
	const { t, lang } = useTranslation('common');

	const { data } = useAllExhibitsItemsQuery({
		variables: { language: getStartsWith(lang) },
	});
	const exhibits = data!.ExhibitItems!.items!;
	return (
		<Layout title={t('exhibits')} description={''}>
			<div className="grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
				{exhibits!.map((exhibit, i) => {
					return <Exhibit key={exhibit!.id} index={i} exhibit={exhibit!} />;
				})}
			</div>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) =>
	preloadQuery({
		query: AllExhibitsItemsDocument,
		variables: { language: getStartsWith(locale) },
	});
