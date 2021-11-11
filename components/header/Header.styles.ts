import styled from 'styled-components';
import { rem } from 'polished';

export const Component = styled.div`
	background: #fff;
	box-shadow: 0px 60px 60px rgba(255, 255, 255, 1), 0px 30px 30px rgba(255, 255, 255, 1);
`;

export const HeaderContent = styled.div`
	height: ${({ theme }) => theme.header.height.mobile}px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg.up}) {
		height: ${({ theme }) => theme.header.height.desktop}px;
	}
`;

export const HeaderLogo = styled.img`
	height: 32px;
	width: auto;
`;

export const LogoCaption = styled.div`
	line-height: 1.3;
	font-size: ${rem(16)};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm.down}) {
		font-size: ${rem(14)};
	}
`;

export const SkipButton = styled.button`
	//position: absolute;
	//left: -0.125rem;
	//top: 2.25rem;
	border-radius: 0;
	z-index: -1;

	&:focus {
		z-index: 1100;
	}
`;
