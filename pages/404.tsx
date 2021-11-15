// External dependencies
import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

// Internal modules
import PageNotFoundLayout from '@/layouts/page-not-found';
import { LayoutProps } from '@/typings/LayoutProps';
import { getRouteData } from '@/data/page';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const route = getRouteData('/404/', locale);
	const menus = [];

	return {
		props: {
			route,
			menus,
			...(await serverSideTranslations(locale, ['common', '404'], nextI18NextConfig)),
		},
	};
};

function PageNotFoundPage(props: LayoutProps): JSX.Element {
	return <PageNotFoundLayout {...props} />;
}

export default PageNotFoundPage;
