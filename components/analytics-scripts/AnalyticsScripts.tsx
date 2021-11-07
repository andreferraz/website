// External dependencies
import React from 'react';
import Script from 'next/script';

// Internal dependencies
import { Site } from '@/config/site';

export const AnalyticsScripts: React.FC = () => {
	return (
		<>
			{/* GOOGLE ANALYTICS */}
			{!(Site.gaId === undefined || Site.gaId === '') && (
				<>
					<Script
						id="gtag-script"
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${Site.gaId}`}
					/>
					<Script
						id="ga-config-script"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${Site.gaId}');
		`,
						}}
					/>
				</>
			)}

			{/* GOOGLE TAG MANAGER */}
			{!(Site.gtmId === undefined || Site.gtmId === '') && (
				<Script
					id="gtm-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${Site.gtmId}');
`,
					}}
				/>
			)}
		</>
	);
};
