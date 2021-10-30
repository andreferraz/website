// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Component } from './Footer.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuItemProps } from '@/typings/MenuItemProps';
import SocialButtons from '@/components/social-buttons';

// Properties definition
interface Props {
	socialMenu: MenuItemProps[];
	options: OptionsProps;
}

export const Footer = ({ socialMenu }: Props): JSX.Element => {
	socialMenu = [
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/andre-ferraz-developer/',
			titleAttr: 'LinkedIn – Link opens in a new tab',
			target: '_blank',
			rel: 'noopener nofollow',
			icon: 'linkedin',
		},
		{
			text: 'GitHub',
			href: 'https://github.com/andreferraz',
			titleAttr: 'GitHub – Link opens in a new tab',
			target: '_blank',
			rel: 'noopener nofollow',
			icon: 'github',
		},
		{
			text: 'Gitlab',
			href: 'https://github.com/andreferraz',
			titleAttr: 'Gitlab – Link opens in a new tab',
			target: '_blank',
			rel: 'noopener nofollow',
			icon: 'gitlab',
		},
		{
			text: 'E-mail',
			href: 'mailto:andre.d.f.182@hotmail.com',
			titleAttr: 'Copy e-mail',
			icon: 'email',
		},
	];

	return (
		<Component className={`position-absolute bottom-0 w-100`}>
			<Container>
				<div className="d-flex justify-content-between mt-auto py-4">
					{socialMenu !== undefined && <SocialButtons links={socialMenu} />}
				</div>
			</Container>
		</Component>
	);
};
