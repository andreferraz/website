// External dependencies
import React from 'react';

// Internal dependencies
import { FaviconsProps } from './Favicons.types';

export const Favicons: React.FC<FaviconsProps> = ({ path, siteName }: FaviconsProps) => {
	return (
		<>
			<link rel="shortcut icon" href={`${path}/favicon.ico`} />
			<link rel="icon" type="image/png" sizes="16x16" href={`${path}/favicon-16x16.png`} />
			<link rel="icon" type="image/png" sizes="32x32" href={`${path}/favicon-32x32.png`} />
			<link rel="icon" type="image/png" sizes="48x48" href={`${path}/favicon-48x48.png`} />
			<link rel="apple-touch-icon" sizes="57x57" href={`${path}/apple-touch-icon-57x57.png`} />
			<link rel="apple-touch-icon" sizes="60x60" href={`${path}/apple-touch-icon-60x60.png`} />
			<link rel="apple-touch-icon" sizes="72x72" href={`${path}/apple-touch-icon-72x72.png`} />
			<link rel="apple-touch-icon" sizes="76x76" href={`${path}/apple-touch-icon-76x76.png`} />
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href={`${path}/apple-touch-icon-114x114.png`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href={`${path}/apple-touch-icon-120x120.png`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href={`${path}/apple-touch-icon-144x144.png`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href={`${path}/apple-touch-icon-152x152.png`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="167x167"
				href={`${path}/apple-touch-icon-167x167.png`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`${path}/apple-touch-icon-180x180.png`}
			/>
			<link
				rel="apple-touch-icon"
				sizes="1024x1024"
				href={`${path}/apple-touch-icon-1024x1024.png`}
			/>
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			<meta name="apple-mobile-web-app-title" content={siteName} />
		</>
	);
};
