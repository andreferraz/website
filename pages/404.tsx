// External dependencies
import React from 'react';
import { GetStaticProps } from 'next';

// Internal modules
import PageNotFoundLayout from '@/layouts/page-not-found';
import { RouteProps } from '@/typings/RouteProps';
import { Site } from '@/config/site';
import { PageNotFoundLayoutContentProps } from '@/layouts/page-not-found/PageNotFoundLayout.types';
import { LayoutProps } from '@/typings/LayoutProps';

export const getStaticProps: GetStaticProps = async () => {
	const menus = [];
	const options = null;
	const route: RouteProps = {
		path: '/404/',
		title: 'Page not found',
		layout: '404',
		content: {
			title: 'Page not found',
			text: `The page you're looking for wasn't found.`,
			cta: {
				text: 'Go to homepage',
				href: '/',
			},
		} as PageNotFoundLayoutContentProps,
		seo: {
			// TODO: Get from Yoast SEO configuration, from CMS
			title: `Page not found | ${Site.title}`,
		},
	};

	return {
		props: {
			route,
			menus,
			options,
		},
	};
};

function PageNotFoundPage(props: LayoutProps): JSX.Element {
	return <PageNotFoundLayout {...props} />;
}

export default PageNotFoundPage;
