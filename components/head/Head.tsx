import React from 'react';
import NextHead from 'next/head';
import ReactHtmlParser from 'react-html-parser';

// Internal dependencies
import { Site } from '@/config/site';
import { SeoProps } from '@/typings/SeoProps';
import { getAssetPath } from '@/helpers/assets';
import Favicons from '@/components/favicons';

interface Props {
	seo: SeoProps;
}

export const Head: React.FC<Props> = ({ seo }) => {
	return (
		<NextHead>
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* TITLE */}
			{ReactHtmlParser(`<title>${seo.title}</title>`)}

			<link rel="preconnect" href="//cms.next-boilerplate.com" crossOrigin="" />
			<link rel="dns-prefetch" href="//www.googletagmanager.com" crossOrigin="" />
			<link rel="dns-prefetch" href="//www.google-analytics.com" crossOrigin="" />

			{/* FAVICONS */}
			<Favicons path={getAssetPath(`/images/favicons`)} siteName={Site.title} />

			{/* YOAST METAS & SCHEMA */}
			{seo.headHtml !== undefined && ReactHtmlParser(seo.headHtml)}
		</NextHead>
	);
};
