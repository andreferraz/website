import { easeOut, rem, rgba } from 'polished';
import styled from 'styled-components';

export const Component = styled.div`
	a {
		background: transparent;
		font-weight: bold;

		/* .tooltip {
			position: absolute;
			color: black;
			top: 3.5em;
			left: 50%;
			transform: translateX(-50%) translateY(-4px);
			font-weight: 500;
			line-height: 1.2;
			pointer-events: none;
			transition: transform 0.2s ${easeOut('back')}, opacity 0.2s linear;
			opacity: 0;
		} */

		&.active {
			background: ${rgba('black', 1)};
			color: white;
		}

		&:hover,
		&:focus {
			&:not(.active) {
				background: ${rgba('black', 0.1)};
			}

			/* .tooltip {
				transform: translateX(-50%) translateY(0);
				opacity: 1;
			} */
		}
	}
`;
