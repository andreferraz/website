import styled from 'styled-components';

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

export const SkipButton = styled.button`
	background: black;
	border-radius: 0;
	z-index: -1;

	&:focus {
		z-index: 1100;
	}
`;
