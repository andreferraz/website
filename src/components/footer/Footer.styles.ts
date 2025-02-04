import { rem } from 'polished';
import styled from 'styled-components';

export const Component = styled.footer``;

export const Credits = styled.p`
	font-size: ${rem(13)};
	font-weight: 500;
	line-height: 1.75;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm.down}) {
		font-size: ${rem(12)};
	}

	br {
		@media (min-width: 400px) {
			display: none;
		}
	}
`;
