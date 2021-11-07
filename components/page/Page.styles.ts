import styled from 'styled-components';
import theme from '@/styles/theme';

export const Component = styled.div``;

export const Content = styled.div`
	padding-top: ${theme.header.height.mobile + 'px'};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg.up}) {
		padding-top: ${({ theme }) => theme.header.height.desktop + 'px'};
	}
`;
