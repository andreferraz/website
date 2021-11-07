// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Layout } from './HomeLayout.styles';
import { LayoutProps } from '@/typings/LayoutProps';
import { HomeLayoutContentProps } from './HomeLayout.types';
import { ArticleProps } from '@/typings/ArticleProps';
import IntroSection from '@/components/intro-section';
import ArticlesList from '@/components/articles-list';

export const HomeLayout: React.FC<LayoutProps> = (props) => {
	const content = props.route.content as HomeLayoutContentProps;
	const articles: ArticleProps[] = [
		{
			id: '1b4ab851ecde',
			title: 'Why more programmers should know Regular Expressions?',
			url:
				'https://andreferrazdev.medium.com/why-every-programmer-should-know-regular-expressions-1b4ab851ecde',
			date: '2021-05-1',
			source: 'medium.com',
		},
		{
			id: '77f4fb8797c',
			title: 'A naming convention for UI components',
			url: 'https://andreferrazdev.medium.com/a-naming-convention-for-ui-components-77f4fb8797c',
			date: '2021-04-30',
			source: 'medium.com',
		},
	];

	return (
		<Layout {...props}>
			<IntroSection className="py-9 mb-lg-9" />

			<ArticlesList articles={articles} className="pb-9" />
			{/* <pre>{JSON.stringify(content, null, '\t')}</pre> */}
		</Layout>
	);
};
