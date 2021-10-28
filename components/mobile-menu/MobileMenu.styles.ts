import styled, { css } from 'styled-components';
import { Card, Accordion } from 'react-bootstrap';

interface MobileMenuProps {
	$isActive?: boolean;
}

export const Component = styled.div<MobileMenuProps>`
	position: fixed;

	top: 0;
	right: 0;
	margin: 0;
	padding: 0;

	display: none;
	width: 100%;
	height: 100%;

	z-index: 10;

	ul {
		list-style: none;
		padding-left: 0;
	}

	${(props) =>
		props.$isActive &&
		css`
			display: block;
		`}
`;

export const MobileMenuOverflow = styled.div<MobileMenuProps>`
	width: 100%;
	height: 100%;
	z-index: 11;

	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.5);

	transition: all 0.3s ease;
	opacity: 0;

	${(props) =>
		props.$isActive &&
		css`
			opacity: 1;
		`}
`;

export const MobileMenuContent = styled.nav<MobileMenuProps>`
	width: 350px;
	max-width: 90%;
	height: 100%;

	position: absolute;
	left: -400px;
	z-index: 12;
	overflow-y: auto;

	top: 0;

	background-color: white;

	text-align: left;

	transition: all 0.3s ease;
	-webkit-animation: openFromLeft 0.3s forwards;
	animation: openFromLeft 0.3s forwards;

	> button {
		background: none;
		border: none;
		font-size: 1.5rem;
		padding: 15px;
	}

	${(props) =>
		props.$isActive &&
		css`
			opacity: 1;
		`}

	@-webkit-keyframes openFromLeft {
		from {
			opacity: 0;
			left: -400px;
		}

		to {
			opacity: 1;
			left: 0;
		}
	}

	@keyframes openFromLeft {
		from {
			opacity: 0;
			left: -400px;
		}

		to {
			opacity: 1;
			left: 0;
		}
	}
`;

export const MobileMenuItem = styled(Card)`
	background-color: white;
	border: none;

	.card-header {
		border: none;
	}

	button {
		background: none;
		padding: 0 10px;
		border: none;
		border-left: 1px solid ${({ theme }) => theme.colors.medium};
	}

	ul {
		list-style-type: none;
		padding: 0;

		li {
			padding: 15px 40px;
		}

		a {
			color: #212529;
			font-size: 14px;
			text-decoration: none;
		}
	}

	&.active {
		button svg {
			transform: rotate(-180deg);
		}

		${({ theme, ...props }) =>
			props.$category
				? css`
						.col a,
						svg,
						i {
							color: ${theme.colors[props.$category.color]}!important;
						}

						a:hover li,
						a:focus-within li {
							color: ${theme.colors[props.$category.color]};
							background: ${theme.colors[props.$category.lightColor]};
						}
				  `
				: css`
						.col a,
						svg,
						i {
							color: ${theme.colors.black}!important;
						}

						a:hover li,
						a:focus-within li {
							color: ${theme.colors.white};
							background: ${theme.colors.primary};
						}
				  `}
	}
`;

export const CloseButtonRegion = styled.div`
	height: 120px;
	display: flex;

	button {
		color: ${({ theme }) => theme.colors.dark};
		font-size: 2rem;
		padding: 0;
		height: auto;
		background: none;
		border: none;
		margin-top: 18px;
		margin-right: 6px;
	}
`;

export const MobileMenuItemHeader = styled(Card.Header)`
	background-color: white;
	padding-right: 1.875rem;

	a {
		color: #212529 !important;
		font-size: 14px;
		text-decoration: none;

		transition: all 0.3s ease;
		display: block;
	}

	svg,
	i,
	li {
		transition: all 0.3s ease;
	}
`;

export const ItemMenuCollapse = styled(Accordion.Collapse)`
	background: ${({ theme }) => theme.colors.light};
`;

export const SocialMedia = styled.div`
	padding: 25px 20px;
	text-align: left;

	h3 {
		font-weight: 300;
	}
`;
