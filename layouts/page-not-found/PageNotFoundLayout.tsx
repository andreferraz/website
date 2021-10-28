// External dependencies
import React from 'react';

// Internal modules
import { Layout } from './PageNotFoundLayout.styles';
import { LayoutProps } from '@/typings/LayoutProps';
import { PageNotFoundLayoutContentProps } from './PageNotFoundLayout.types';

export const PageNotFoundLayout: React.FC<LayoutProps> = (props) => {
	const content = props.route.content as PageNotFoundLayoutContentProps;

	return (
		<Layout {...props}>
			<div className="container">
				<h1>404</h1>
				<strong>Page Not Found Layout</strong> – Page: {props.route.title}
			</div>
		</Layout>
	);
};
