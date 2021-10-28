// External dependencies
import React from 'react';

// Internal dependencies
import { Component, Title } from './SectionTitle.styles';

// Types
import { SectionTitleProps } from './SectionTitle.types';

interface Props extends SectionTitleProps {
	className?: string;
}

export const SectionTitle = ({ title, className = '' }: Props): JSX.Element => {
	return (
		<Component className={`${className}`}>
			<Title>{title}</Title>
		</Component>
	);
};
