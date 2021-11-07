import styled, { css } from 'styled-components';
import theme from '@/styles/theme';
import { darken, lighten, rem } from 'polished';

export const Component = styled.div`
	background: #fff;
	box-shadow: 0px 60px 60px rgba(255, 255, 255, 1), 0px 30px 30px rgba(255, 255, 255, 1);
`;

export const HeaderContent = styled.div`
	height: ${({ theme }) => theme.header.height.mobile}px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg.up}) {
		height: ${({ theme }) => theme.header.height.desktop}px;
	}
`;

export const HeaderLogo = styled.img`
	height: 32px;
	width: auto;
`;

export const LogoCaption = styled.div`
	line-height: 1.3;
	font-size: ${rem(16)};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm.down}) {
		font-size: ${rem(14)};
	}
`;

export const MenuList = styled.ul``;

export const ItemMenu = styled.li`
	font-size: ${rem(16)};

	> a {
		color: #212529;
		transition: color 0.15s linear;
		text-decoration: none;
	}

	button {
		background: none;
		border: none;
		padding: 0 2px;
	}

	i,
	svg {
		transition: color 0.15s linear, transform 0.25s ease;
	}

	> ul {
		z-index: 1;
		position: absolute;
		display: none;
		overflow: hidden;
		background: white;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
		border-radius: 10px;
		top: 40px;
		width: 200px;

		animation: fadeInRight 0.2s ease-out 0s;

		a {
			color: #212529;
			text-decoration: none;
			font-size: ${rem(15)};
			transition: color 0.1s linear, background-color 0.1s linear;
		}
	}

	&.active,
	&:hover {
		ul {
			display: block !important;
		}

		svg {
			transform: rotate(180deg);
		}

		${({ theme }) =>
			css`
				> a,
				svg,
				i {
					color: ${theme.colors.black};
				}

				li {
					a:hover,
					a:focus-within {
						color: ${darken(0.1, theme.colors.white)};
						background: ${lighten(0.05, theme.colors.primary)};
					}
				}
			`}
	}

	@keyframes fadeInRight {
		from {
			opacity: 0;
			transform: translate(16px, 0);
		}

		to {
			opacity: 1;
			transform: translate(0px, 0);
		}
	}
`;

export const SidebarButton = styled.button`
	background: none;
	border: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media (min-width: ${theme.breakpoints.lg}) {
		display: none;
	}
`;

export const SkipButton = styled.a`
	position: absolute;
	left: -1rem;
	top: 1.875rem;
	padding-left: 1.75rem;
	z-index: -1;
	background: white;

	&:focus {
		z-index: 1100;
	}
`;
