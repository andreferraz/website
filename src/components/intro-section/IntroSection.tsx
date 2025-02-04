// External dependencies
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Internal dependencies
import { Component, Description, Name, Title } from './IntroSection.styles';
import { IntroSectionProps } from './IntroSection.types';
// import { FiArrowDown } from 'react-icons/fi';
// import { CgMouse } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';
// import LinkButton from '@/components/link-button';

// Types
interface Props extends IntroSectionProps {
	className?: string;
}

export const IntroSection = ({ className = '' }: Props): JSX.Element => {
	const { t } = useTranslation('intro-section');

	return (
		<Component className={`${className}`}>
			<Container>
				<Row className="align-items-lg-end">
					<Col xs={12} lg={8} xl={7} xxl={6}>
						<Title className="mb-5 mb-lg-0">
							<span>{t('title.greeting')}</span>
							<span>{t('title.introduction')}</span>
							<Name>André Ferraz</Name>
						</Title>
					</Col>
					<Col xs={12} lg={4} xl={5}>
						<Description
							className="lead mb-5 mb-lg-1 pe-xl-4"
							dangerouslySetInnerHTML={{ __html: t('brief') }}
						/>
						{/* <span className="d-flex align-items-center link-uppercase mb-2 mt-5">
							<FiArrowDown className="d-inline-block h4 me-3 ms-n1 mb-0" />
							<small>Scroll for more</small>
						</span> */}
						{/* <LinkButton
						text={`Scroll for more`}
						href={`#websites`}
						isHighlighted
						className="mb-3"
					/> */}
					</Col>
				</Row>
			</Container>
		</Component>
	);
};
