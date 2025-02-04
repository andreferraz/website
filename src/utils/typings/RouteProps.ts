import { SeoProps } from '@/typings/SeoProps';
import { LinkProps } from '@/typings/LinkProps';
import { HomeLayoutContentProps } from '@/layouts/home/HomeLayout.types';
import { PageNotFoundLayoutContentProps } from '@/layouts/PageNotFound/PageNotFoundLayout.types';

export interface RouteProps {
	title: string;
	path: string;
	layout: string;
	seo: SeoProps;
	breadcrumbs?: LinkProps[];
	content: HomeLayoutContentProps | PageNotFoundLayoutContentProps; // Keep the DefaultLayoutContentProps as the last one, for `plop layout`
}
