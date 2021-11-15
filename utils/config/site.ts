const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME;
const siteLang = process.env.NEXT_PUBLIC_SITE_LANG;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const isAnalyticsEnabled = process.env.NEXT_PUBLIC_IS_ANALYTICS_ENABLED === 'true';

export class Site {
	// SITE INFO
	static title: string = siteTitle;
	// static slug: string = siteSlug; // FOR MULTISITE
	static baseUrl: string = siteUrl;
	static defaultLang: string = siteLang;

	// ANALYTICS
	static gtmId: string = gtmId;
	static gaId: string = gaId;
	static isAnalyticsEnabled: boolean = isAnalyticsEnabled;
}
