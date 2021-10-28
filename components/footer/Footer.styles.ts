import styled from 'styled-components';

export const Component = styled.footer``;

export const Logo = styled.img`
	height: auto;
	transition: filter 0.1s linear;

	&:hover {
		filter: brightness(0.875);
	}
`;

export const Copyright = styled.div``;

export const Menu = styled.ul`
	column-count: 2;

	@media (min-width: ${({ theme }) => theme.breakpoints.xl.up}) {
		column-count: 3;
	}
`;
