// External dependencies
import React from 'react';
import { Container } from 'react-bootstrap';

// Internal modules
import { Component, Credits } from './Footer.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuItemProps } from '@/typings/MenuItemProps';
import SocialButtons from '@/components/social-buttons';

// Properties definition
interface Props {
	socialMenu: MenuItemProps[];
	options: OptionsProps;
	className?: string;
}

export const Footer = ({ className = '', socialMenu }: Props): JSX.Element => {
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
		<Component className={`${className} w-100`}>
			<Container>
				<div className="d-flex justify-content-between align-items-center mt-auto py-5">
					{socialMenu !== undefined && <SocialButtons links={socialMenu} className="ms-n2" />}

					<Credits className="mb-0 link-uppercase">
						Developed with{' '}
						<a
							href="https://nextjs.org/"
							target="_blank"
							rel="noreferrer nofollow"
							title="Next.js – Link opens in a new tab"
							className="link-underlined"
						>
							Next.js
						</a>{' '}
						by André Ferraz
					</Credits>
				</div>
			</Container>
		</Component>
	);
};
