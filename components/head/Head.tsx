import React from 'react';
import NextHead from 'next/head';
import ReactHtmlParser from 'react-html-parser';
import ReactDOMServer from 'react-dom/server';

// Internal dependencies
import { Site } from '@/config/site';
import { SeoProps } from '@/typings/SeoProps';
import { getAssetPath } from '@/helpers/assets';
import Favicons from '@/components/favicons';
import MetaTags from '@/components/meta-tags';

interface Props {
	seo: SeoProps;
}

export const Head: React.FC<Props> = ({ seo }) => {
	const metaTags = <MetaTags seo={seo} />;

	return (
		<NextHead>
			<meta name="viewport" content="width=device-width, initial-scale=1" />

			{/* META DATA */}
			{ReactHtmlParser(ReactDOMServer.renderToStaticMarkup(metaTags))}

			{/* FAVICONS */}
			<Favicons path={getAssetPath(`/images/favicons`)} siteName={Site.title} />

		</NextHead>
	);
};
