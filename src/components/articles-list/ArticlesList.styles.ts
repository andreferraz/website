import styled from 'styled-components';

export const Component = styled.section``;

export const ArticleItem = styled.li`
	a {
		color: ${({ theme }) => theme.colors.black};
		line-height: 1.185;
		//text-decoration: none;
	}
`;
