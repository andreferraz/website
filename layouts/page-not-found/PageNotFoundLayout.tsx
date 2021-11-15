// External dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';

// Internal modules
import { Layout, Number } from './PageNotFoundLayout.styles';
import { LayoutProps } from '@/typings/LayoutProps';
import { PageNotFoundLayoutContentProps } from './PageNotFoundLayout.types';
import LinkButton from '@/components/link-button';

export const PageNotFoundLayout: React.FC<LayoutProps> = (props) => {
	const content = props.route.content as PageNotFoundLayoutContentProps;
	const { t } = useTranslation('404');

	return (
		<Layout {...props}>
			<div className="container py-7 py-lg-9">
				<Number>404</Number>
				<h1 className="mb-5">{t('title')}</h1>
				<p className="lead mb-5">{t('description')}</p>
				<p>
					<LinkButton text={t('cta')} href="/" isHighlighted />
				</p>
			</div>
		</Layout>
	);
};
