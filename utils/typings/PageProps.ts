import { LocaleType } from './LocaleTypes';

export interface PageProps {
	path: string;
	title: string;
	meta: {
		title: string;
		description: string;
	};
	alternates: {
		locale: LocaleType;
		path: string;
	}[];
}
