// External dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Internal dependencies
import { ArticleItem, Component } from './ArticlesList.styles';
import { ArticlesListProps } from './ArticlesList.types';

// Types
interface Props extends ArticlesListProps {
	className?: string;
}

export const ArticlesList = ({ className = '', articles }: Props): JSX.Element => {
	return (
		<Component className={`${className}`}>
			<Container>
				<h2 className="h3 d-block mb-7">Articles</h2>
				<Row>
					<Col xs={12} xl={10}>
						<ul className="list-unstyled">
							{articles.map(({ id, title, url, source }) => (
								<ArticleItem key={id} className="mb-6">
									<a
										href={url}
										target="_blank"
										rel="noreferrer"
										className="fancy-link-wrapper h2 d-inline-block"
										title="Medium.com - Link opens in a new tab"
									>
										<span
											className="fancy-link-content"
											dangerouslySetInnerHTML={{ __html: title }}
										/>
									</a>
									<small className="d-block text-muted mt-1">on {source}</small>
								</ArticleItem>
							))}
						</ul>
					</Col>
				</Row>
			</Container>
		</Component>
	);
};
