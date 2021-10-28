// External dependencies
import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

// Internal dependencies
import { Component, List, ListItem } from './Breadcrumbs.styles';
import { BreadcrumbsProps } from './Breadcrumbs.types';

// Props for component functionality and logic
interface Props extends BreadcrumbsProps {
	className?: string;
}

export const Breadcrumbs: React.FC<Props> = ({ className = '', items, current }) => {
	return (
		<Component className={`${className}`}>
			<Container>
				<nav aria-label="Breadcrumbs">
					<List>
						<ListItem>
							<Link href="/">
								<a>Home</a>
							</Link>
						</ListItem>
						{items.length > 0 &&
							items.map((item, index) => (
								<ListItem key={index}>
									<Link href={item.href}>
										<a dangerouslySetInnerHTML={{ __html: item.text }} />
									</Link>
								</ListItem>
							))}
						<ListItem aria-current="page">
							<span
								className={'active text-bold'}
								dangerouslySetInnerHTML={{ __html: current }}
							/>
						</ListItem>
					</List>
				</nav>
			</Container>
		</Component>
	);
};
