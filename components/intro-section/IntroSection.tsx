// External dependencies
import React from 'react';
import { Col, Row } from 'react-bootstrap';

// Internal dependencies
import { Component, Name, Title } from './IntroSection.styles';
import { IntroSectionProps } from './IntroSection.types';
import { FiArrowDown } from 'react-icons/fi';
import { CgMouse } from 'react-icons/cg';
// import LinkButton from '@/components/link-button';

// Types
interface Props extends IntroSectionProps {
	className?: string;
}

export const IntroSection = ({ className = '' }: Props): JSX.Element => {
	return (
		<Component className={`${className}`}>
			<Row className="align-items-lg-end">
				<Col xs={12} lg={8} xl={7} xxl={6}>
					<Title className="mb-5 mb-lg-0">
						<span>Hello,</span>
						<span>I am</span>
						<Name>André Ferraz</Name>
					</Title>
				</Col>
				<Col xs={12} lg={4} xl={5}>
					<p className="lead mb-5 mb-lg-6">
						I am a software developer, with +7 years of experience building websites for
						multinational brands, and passionate about game development.
					</p>
					<span className="d-flex align-items-center link-uppercase mb-3">
						<CgMouse className="d-inline-block h4 me-3 mb-0" />
						Scroll for more
					</span>
					{/* <LinkButton
						text={`Scroll for more`}
						href={`#websites`}
						isHighlighted
						className="mb-3"
					/> */}
				</Col>
			</Row>
		</Component>
	);
};
