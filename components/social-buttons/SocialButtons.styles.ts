import { easeOut } from 'polished';
import styled from 'styled-components';

export const Component = styled.ul`
	a {
		color: black;
		position: relative;
		transition: color 0.2s linear, transform 0.2s ${easeOut('quart')};

		svg {
			z-index: 1;
		}

		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0%;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background: black;
			opacity: 0;
			transform: scale(0.6);
			transition: transform 0.3s ${easeOut('back')}, opacity 0.2s linear;
		}

		&:hover,
		&:focus {
			color: white;
			transform: translateY(-3px);

			&:before {
				transform: scale(1);
				opacity: 1;
			}
		}

		&:focus {
			box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);
			outline: none;
		}

		&.linkedin {
			&:before {
				background: linear-gradient(45deg, #002d58, #00a4ff);
			}
		}
		&.github {
			&:before {
				background: linear-gradient(45deg, #2c1754, #9963ff);
			}
		}
		&.gitlab {
			&:before {
				background: linear-gradient(45deg, #ce4000, #ff976a);
			}
		}
		&.medium {
			&:before {
				background: linear-gradient(45deg, #000000, #787888);
			}
		}
		&.email {
			&:before {
				background: linear-gradient(45deg, #7e4716, #ffc470);
			}
		}
	}
`;
