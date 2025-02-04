import { rem } from 'polished';
import styled from 'styled-components';

export const Component = styled.div``;

export const List = styled.ul`
	columns: 2;

	li {
		font-size: ${rem(32)};
		line-height: 1.1;
		margin-bottom: 0.5em;
		display: block;
	}
`;
