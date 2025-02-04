import { Site } from '@/utils/config/site';
import { RouteProps } from '@/utils/typings/RouteProps';
import { readFileSync } from 'fs';

export function getRouteData(path: string, locale?: string): RouteProps {
	const data = JSON.parse(readFileSync(`utils/data/pages.json`, 'utf8'));

	// Find the data from a specific page, and its alternates
	const route = data.find((route) =>
		route.alternates.find((alternate) => alternate.path === path && locale === alternate.locale),
	);
	const page = route.alternates.find(
		(alternate) => alternate.path === path && locale === alternate.locale,
	);
	const alternates = route.alternates.filter(
		(alternate) => alternate.path !== path || locale !== alternate.locale,
	);
	const xDefault = route.alternates.find((alternate) => alternate.locale === Site.defaultLang);

	const routeData: RouteProps = {
		title: page.title,
		path: page.path,
		layout: route.layout,
		content: null,
		seo: {
			title: page.meta.title,
			description: page.meta.description,
			alternates: [
				{
					href: getPageUrl(page.path, locale),
					hreflang: locale.toLowerCase(),
				},
				...alternates.map((alternate) => {
					const url = getPageUrl(alternate.path, alternate.locale);
					return {
						href: url,
						hreflang: alternate.locale,
					};
				}),
				{
					href: getPageUrl(xDefault.path, xDefault.locale),
					hreflang: 'x-default',
				},
			],
		},
	};

	return routeData;
}

export function getPageUrl(path: string, locale: string): string {
	return Site.baseUrl + (locale !== Site.defaultLang ? `/${locale}` : '') + path;
}
