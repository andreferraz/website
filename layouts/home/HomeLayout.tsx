// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './HomeLayout.styles';
import { LayoutProps } from '@/typings/LayoutProps';
import { HomeLayoutContentProps } from './HomeLayout.types';
import IntroSection from '@/components/intro-section';

export const HomeLayout: React.FC<LayoutProps> = (props) => {
	const content = props.route.content as HomeLayoutContentProps;

	return (
		<Layout {...props}>
			<Container>
				<IntroSection className="d-flex align-items-center full-height" />
				{/* <pre>{JSON.stringify(content, null, '\t')}</pre> */}
			</Container>
		</Layout>
	);
};
