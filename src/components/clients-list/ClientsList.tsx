// External dependencies
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Internal dependencies
import { Component, List } from './ClientsList.styles';
import { ClientsListProps } from './ClientsList.types';

// Types
interface Props extends ClientsListProps {
	className?: string;
}

export const ClientsList = ({ className = '', brands = [] }: Props): JSX.Element => {
	const { t } = useTranslation('brands-list');

	return (
		<Component className={`${className}`}>
			<Container>
				<h2 className="d-block mb-7">{t('title')}</h2>
				<Row>
					<Col xs={12} lg={6}>
						<p className="lead pe-md-8 mb-6">{t('text')}</p>
						{/* <p className="">{t('subtitle')}</p> */}
					</Col>
					<Col xs={12} lg={6}>
						<List className="list-unstyled">
							{brands.map((brand) => (
								<li key={brand}>{brand}</li>
							))}
						</List>
					</Col>
				</Row>
			</Container>
		</Component>
	);
};
