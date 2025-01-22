// External dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// Internal dependencies
import { ArticleItem, Component } from './ArticlesList.styles';
import { ArticlesListProps } from './ArticlesList.types';

// Types
interface Props extends ArticlesListProps {
	className?: string;
}

export const ArticlesList = ({ className = '', articles }: Props): JSX.Element => {
	const { t } = useTranslation('articles-list');

	return (
		<Component className={`${className}`}>
			<Container>
				<h2 className="d-block mb-7">{t('title')}</h2>
				<Row>
					<Col xs={12} xl={8}>
						<ul className="list-unstyled">
							{articles.map(({ id, title, url, source }) => (
								<ArticleItem key={id} className="mb-6">
									<a
										href={url}
										target="_blank"
										rel="noreferrer"
										className="fancy-link-wrapper h3 d-inline-block"
										title="Medium.com - Link opens in a new tab"
									>
										<span
											className="fancy-link-content"
											dangerouslySetInnerHTML={{ __html: title }}
										/>
									</a>
									<small className="d-block text-muted mt-1">
										{t('source', { source })}
									</small>
								</ArticleItem>
							))}
						</ul>
					</Col>
				</Row>
			</Container>
		</Component>
	);
};
