import { rem } from 'polished';
import styled from 'styled-components';

export const Component = styled.section``;

export const Title = styled.h1`
	span {
		display: block;

		@media (max-width: ${({ theme }) => theme.breakpoints.sm.down}) {
			font-size: 14vw;
		}

		&:first-child {
			font-size: ${rem(72)};
			@media (min-width: ${({ theme }) => theme.breakpoints.lg.up}) {
				font-size: ${rem(150)};
			}
		}
	}
`;

export const Name = styled.span`
	background: ${({ theme }) => theme.colors.gradientBlue};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
	/* @media (min-width: ${({ theme }) => theme.breakpoints.xl.up}) {
		font-size: ${rem(28)};
	} */
`;
