import styled from 'styled-components';

export const Component = styled.div`
	padding: 0.75rem 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg.up}) {
		padding: 1.25rem 0;
	}
	&.text-white {
		a {
			color: ${({ theme }) => theme.colors.white};
		}
		.active {
			font-weight: bold;
		}
	}
`;

export const List = styled.ol`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	padding-left: 10px;
	margin: 0;
	font-size: 0.875rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md.up}) {
		padding-left: 0px;
	}
`;

export const ListItem = styled.li`
	margin-right: 20px;
	position: relative;
	display: none;
	&:not(:last-child) {
		&:before {
			content: '>';
			display: inline-block;
			position: absolute;
		}
	}
	&:nth-last-child(2) {
		margin-right: 20px;
		display: inline-block;
		&:before {
			left: -13px;
			transform: rotate(180deg);
		}
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.md.up}) {
		display: inline-block;

		&:nth-last-child(2):before,
		&:before {
			right: -13px;
			left: initial;
			transform: rotate(0deg);
		}
	}
`;
