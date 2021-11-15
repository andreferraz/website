import { easeOut, rem } from 'polished';
import styled from 'styled-components';

export const Component = styled.div`
	svg {
		position: relative;
		z-index: 1;
		transition: fill 0.1s ease-out, transform 0.25s ${easeOut('back')};
		transform-origin: left middle;
	}

	/* &:hover {
		svg {
			fill: white;
			transform: scale(0.9);
		}
		.logoBg {
			opacity: 1;
			transform: scale(1);
		}
	} */
`;

export const LogoWrapper = styled.div`
	position: relative;
`;

export const Circle = styled.div`
	position: absolute;
	top: -7.5%;
	left: 0;
	background: black;
	width: 115%;
	padding-top: 115%;
	border-radius: 50%;
	opacity: 0;
	transform: scale(0.2);
	transition: opacity 0.15s ease-out, transform 0.3s ${easeOut('back')};
`;

export const Caption = styled.div`
	line-height: 1.3;
	font-size: ${rem(16)};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm.down}) {
		font-size: ${rem(14)};
	}
`;

export const Tooltip = styled.div``;
