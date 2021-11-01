// External dependencies
import React from 'react';
import Link from 'next/link';

// Internal dependencies
import { Component } from './LinkButton.styles';
import { LinkButtonProps } from './LinkButton.types';

// Types
interface Props extends LinkButtonProps {
	className?: string;
	isHighlighted?: boolean;
}

export const LinkButton = ({
	className = '',
	text,
	href,
	isHighlighted = false,
}: Props): JSX.Element => {
	return (
		<Component $isHighlighted={isHighlighted}>
			<Link href={href}>
				<a className={`${className} d-inline-flex align-items-center link-uppercase`}>
					<span dangerouslySetInnerHTML={{ __html: text }} />
				</a>
			</Link>
		</Component>
	);
};
