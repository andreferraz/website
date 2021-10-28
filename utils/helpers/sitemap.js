const fs = require('fs');
require('colors');

module.exports = function () {
	generateSitemapXml();
};

/**
 * Get URL from all routes from a specific type
 *
 * @param routeType Equal to the endpoint (i.e. posts, pages, categories, etc.)
 * @param apiBaseUrl The base URL for the API, without the API namespace and endpoint
 */
async function getUrlsFromRouteType(routeType, apiBaseUrl) {
	const quantity = 100;
	let endpoint = `${apiBaseUrl}/wp/v2/${routeType}?_fields=path,modified_gmt,count&per_page=${quantity}&hide_empty=true`;

	let results, totalPagination;
	try {
		const res = await fetch(endpoint);
		const data = await res.json();
		results = data;
		totalPagination = parseInt(res.headers.get('x-wp-totalpages'));
	} catch (err) {
		throw new Error(`Unable to fetch ${routeType} data from ${endpoint}\n` + err);
	}

	// Get more urls if necessary, due to the limit of 100 posts from WP API
	if (totalPagination > 1) {
		for (let i = 2; i <= totalPagination; i++) {
			endpoint = `${endpoint}&page=${i}`;
			const res = await fetch(endpoint);
			const data = await res.json();
			results = results.concat(data);
		}
	}

	return results
		.filter((route) => {
			if ('count' in route) {
				return route.count > 0;
			} else {
				return true;
			}
		})
		.map((route) => {
			return {
				path: route.path,
				modified: route.modified_gmt
					? route.modified_gmt.replace(/(\d{4}(-\d{2}){2}).*/, '$1')
					: null,
			};
		});
}

/**
 * Generates a sitemap.xml file with the collected data
 */
async function generateSitemapXml() {
	// console.log(`${'log  '.gray} - Building sitemap...`);

	// Get data from each URL
	const apiBaseUrl = `${process.env.NEXT_PUBLIC_WP_URL}/wp-json`;
	const pages = await getUrlsFromRouteType('pages', apiBaseUrl);
	const posts = await getUrlsFromRouteType('posts', apiBaseUrl);
	const categories = await getUrlsFromRouteType('categories', apiBaseUrl);
	const allRoutes = [...pages, ...posts, ...categories];

	// Build sitemap content
	const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/`;
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allRoutes
		.map(({ path, modified }) => {
			path = path === '/home' ? '/' : path;
			return `
	<url>
		<loc>${`${siteUrl}${path}`}</loc>${
				modified
					? `
		<lastmod>${modified}</lastmod>`
					: ''
			}
	</url>`;
		})
		.join('')}
</urlset>`;

	// Write file
	const fileLocation = './public/sitemap.xml';
	fs.writeFileSync(fileLocation, sitemap, 'utf8');

	console.log(`${'log  '.gray} - Sitemap generated`);
}
