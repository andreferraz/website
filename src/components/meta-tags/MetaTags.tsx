// External dependencies
import React from 'react';

// Internal dependencies
import { MetaTagsProps } from './MetaTags.types';

export const MetaTags = ({ seo }: MetaTagsProps): JSX.Element => {
	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			{seo.alternates.map((alternate) => (
				<link
					key={alternate.hreflang}
					rel="alternate"
					href={alternate.href}
					hrefLang={alternate.hreflang}
				/>
			))}
		</>
	);
};
