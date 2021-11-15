export interface SeoProps {
	title: string;
	description: string;
	alternates: {
		href: string;
		hreflang: string;
	}[];
	headHtml?: string;
}
