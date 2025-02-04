export class Site {
	static title: string = process.env.NEXT_PUBLIC_SITE_NAME;
	static baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL;
	static defaultLang: string = process.env.NEXT_PUBLIC_SITE_LANG;
	static isAnalyticsEnabled: boolean = process.env.NEXT_PUBLIC_IS_ANALYTICS_ENABLED === 'true';
}
