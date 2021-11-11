// External dependencies
import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';

// Internal modules
import HomeLayout from '@/layouts/home';
import { LayoutProps } from '@/typings/LayoutProps';
import { RouteProps } from '@/typings/RouteProps';

// Get data during buid to pass as props to the page
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const route: RouteProps = {
		title: 'André Ferraz',
		path: '/',
		layout: 'home',
		content: null,
		seo: {
			title: 'André Ferraz | Software Developer 👨🏻‍💻',
		},
	};
	const menus = [];
	const options = null;

	return {
		props: {
			route,
			menus,
			options,
			...(await serverSideTranslations(
				locale,
				['common', 'intro-section', 'articles-list'],
				nextI18NextConfig,
			)),
		},
	};
};

function HomePage(props: LayoutProps): JSX.Element {
	return <HomeLayout {...props} />;
}

export default HomePage;
