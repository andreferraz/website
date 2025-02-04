// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal dependencies
import { Border, Component } from './GuideContainer.style';

export const GuideContainer = (): JSX.Element => {
	return (
		<Component className="w-100 fixed-top">
			<Container>
				<Border />
			</Container>
		</Component>
	);
};
