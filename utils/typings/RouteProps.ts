import { SeoProps } from '@/typings/SeoProps';
import { LinkProps } from '@/typings/LinkProps';
import { DefaultLayoutContentProps } from '@/layouts/default/DefaultLayout.types';
import { HomeLayoutContentProps } from '@/layouts/home/HomeLayout.types';
import { PostLayoutContentProps } from '@/layouts/post/PostLayout.types';
import { CategoryLayoutContentProps } from '@/layouts/category/CategoryLayout.types';
import { SubcategoryLayoutContentProps } from '@/layouts/subcategory/SubcategoryLayout.types';
import { PageNotFoundLayoutContentProps } from '@/layouts/page-not-found/PageNotFoundLayout.types';

export interface RouteProps {
	title: string;
	path: string;
	layout: string;
	seo: SeoProps;
	breadcrumbs?: LinkProps[];
	content:
		| HomeLayoutContentProps
		| PostLayoutContentProps
		| CategoryLayoutContentProps
		| SubcategoryLayoutContentProps
		| PageNotFoundLayoutContentProps
		| DefaultLayoutContentProps; // Keep the DefaultLayoutContentProps as the last one, for `plop layout`
}
