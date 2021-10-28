// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './HomeLayout.styles';
import { LayoutProps } from '@/typings/LayoutProps';
import { HomeLayoutContentProps } from './HomeLayout.types';

export const HomeLayout: React.FC<LayoutProps> = (props) => {
	const content = props.route.content as HomeLayoutContentProps;

	return (
		<Layout {...props}>
			<Container>
				<h1>
					Hello,
					<br /> my name is <br />
					{props.route.title}
				</h1>
				<pre>{JSON.stringify(content, null, '\t')}</pre>
			</Container>
		</Layout>
	);
};
