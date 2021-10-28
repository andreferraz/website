// External dependencies
import React from 'react';
import { GetStaticProps } from 'next';

// Internal modules
import HomeLayout from '@/layouts/home';
import { LayoutProps } from '@/typings/LayoutProps';
import { RouteProps } from '@/typings/RouteProps';

// Get data during buid to pass as props to the page
export const getStaticProps: GetStaticProps = async () => {
	const route: RouteProps = {
		title: 'André Ferraz',
		path: '/',
		layout: 'home',
		content: null,
		seo: {
			title: 'André Ferraz | Software Developer',
		},
	};
	const menus = [];
	const options = null;

	return {
		props: {
			route,
			menus,
			options,
		},
	};
};

function HomePage(props: LayoutProps): JSX.Element {
	return <HomeLayout {...props} />;
}

export default HomePage;
