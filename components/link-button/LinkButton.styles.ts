import { easeOut, rem, saturate, shade } from 'polished';
import styled from 'styled-components';

type LinkButtonProps = {
	$isHighlighted: boolean;
};

const diameterSize = 3;
export const Component = styled.div<LinkButtonProps>`
	a {
		color: black;
		position: relative;
		height: ${diameterSize}em;
		padding: 0 1.75em 0 1.25em;
		text-decoration: none;
		text-transform: uppercase;
		font-size: ${rem(16)};
		letter-spacing: 0.1em;
		border-radius: ${diameterSize / 2}em;
		transition: padding 0.3s ${easeOut('quart')};

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: ${diameterSize}em;
			height: 100%;
			background: ${({ theme, $isHighlighted }) =>
				$isHighlighted ? theme.colors.lightYellow : theme.colors.lightBlue};
			border-radius: ${diameterSize / 2}em;
			transition: width 0.3s ${easeOut('quart')}, background-color 0.25s linear;
		}

		span {
			font-weight: 500;
			z-index: 1;
		}

		&:hover,
		&:focus {
			padding: 0 1.5em;

			&:before {
				width: 100%;
				background: ${({ theme, $isHighlighted }) =>
					$isHighlighted ? theme.colors.lightYellow : theme.colors.lightBlue};
			}
		}

		&:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);
		}
	}
`;
