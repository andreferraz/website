import styled from 'styled-components';
import Page from '@/components/page';
import { rem } from 'polished';

export const Layout = styled(Page)``;

export const Number = styled.span`
	font-size: ${rem(96)};
	font-weight: bold;
	color: black;
	-webkit-text-fill-color: white; /* Will override color (regardless of order) */
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: black;
	position: relative;
	line-height: 1;
	opacity: 0.3;

	@media (min-width: ${({ theme }) => theme.breakpoints.md.up}) {
		font-size: ${rem(150)};
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: block;
		background: linear-gradient(to bottom, transparent 10%, rgba(255, 255, 255, 1) 80%);
		//z-index: 1;
	}
`;
