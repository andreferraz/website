import React from 'react';
import { useRouter } from 'next/router';

// Internal dependencies
import { Component, Content } from './Page.styles';
import { LayoutProps } from '@/typings/LayoutProps';
import Head from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AnalyticsScripts from '@/components/analytics-scripts';
import GuideContainer from '@/components/guide-container';
import { Site } from '@/config/site';

// Typing
interface Props extends LayoutProps {
	className?: string;
	children?: React.ReactNode;
}

export const Page = ({ route, options, className, children }: Props): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<Head seo={route.seo} />

			{Site.isAnalyticsEnabled && <AnalyticsScripts />}

			<Component id="page" className={className}>
				<Header menu={null} className="" />

				<Content id="content">{children}</Content>

				<Footer socialMenu={[]} options={options} className="" />

				{/* CONTAINER GUIDE (For development purposes) */}
				{process.env.NODE_ENV === 'development' && router.query.guide && <GuideContainer />}
			</Component>
		</>
	);
};
