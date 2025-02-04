import { rgba } from 'polished';
import styled from 'styled-components';

export const Component = styled.div`
	a {
		background: transparent;
		font-weight: bold;

		&.active {
			background: ${rgba('black', 1)};
			color: white;
		}

		&:hover,
		&:focus {
			&:not(.active) {
				background: ${rgba('black', 0.1)};
			}
		}
	}
`;
