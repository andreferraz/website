import { easeOut } from 'polished';
import styled from 'styled-components';

type LinkButtonProps = {
	$isHighlighted: boolean;
};

const circleDiameter = 3;
export const Component = styled.div<LinkButtonProps>`
	a {
		color: black;
		position: relative;
		height: ${circleDiameter}em;
		padding: 0 1.75em 0 1.25em;
		border-radius: ${circleDiameter / 2}em;
		transition: padding 0.3s ${easeOut('quart')};

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: ${circleDiameter}em;
			height: 100%;
			background: ${({ theme, $isHighlighted }) =>
				$isHighlighted ? theme.colors.lightYellow : theme.colors.lightBlue};
			border-radius: ${circleDiameter / 2}em;
			transition: width 0.3s ${easeOut('quart')}, background-color 0.25s linear;
		}

		span {
			font-weight: 500;
			z-index: 1;
		}

		@media (min-width: ${({ theme }) => theme.breakpoints.lg.up}) {
			&:hover,
			&:focus {
				padding: 0 1.5em;

				&:before {
					width: 100%;
				}
			}
		}

		@media (max-width: ${({ theme }) => theme.breakpoints.lg.down}) {
			padding: 0 1.5em;

			&:before {
				width: 100%;
			}
		}

		&:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);
		}
	}
`;
