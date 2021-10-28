export interface SitemapRouteProps {
	title: string;
	path: string;
	id?: number;
	parent?: number;
	subitems?: SitemapRouteProps[];
}
