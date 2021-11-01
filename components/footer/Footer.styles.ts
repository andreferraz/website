import { easeOut, rem } from 'polished';
import styled from 'styled-components';

export const Component = styled.footer``;

export const Logo = styled.img`
	height: auto;
	transition: filter 0.1s linear;

	&:hover {
		filter: brightness(0.875);
	}
`;

export const Credits = styled.p`
	font-size: ${rem(14)};
	font-weight: 500;

	a {
		color: inherit;
		display: inline-block;
		position: relative;
		text-decoration: none;

		&:before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			bottom: 0;
			background: black;
			z-index: -1;
			transform: scaleY(0.05);
			transform-origin: bottom;
			transition: transform 0.15s ${easeOut('cubic')};
		}

		&:hover,
		&:focus {
			color: white;

			&:before {
				transform: scaleY(1);
				transition: transform 0.3s ${easeOut('back')};
			}
		}
	}
`;

export const Menu = styled.ul`
	column-count: 2;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl.up}) {
		column-count: 3;
	}
`;
