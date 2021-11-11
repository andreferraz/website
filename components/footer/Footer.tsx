// External dependencies
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Container } from 'react-bootstrap';

// Internal modules
import { Component, Credits } from './Footer.styles';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuItemProps } from '@/typings/MenuItemProps';
import SocialButtons from '@/components/social-buttons';
import { useTranslation } from 'react-i18next';

// Properties definition
interface Props {
	socialMenu: MenuItemProps[];
	options: OptionsProps;
	className?: string;
}

export const Footer = ({ className = '', socialMenu }: Props): JSX.Element => {
	const { t } = useTranslation('common');

	socialMenu = [
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/andre-ferraz-developer/',
			target: '_blank',
			rel: 'noopener nofollow',
			icon: 'linkedin',
		},
		{
			text: 'GitHub',
			href: 'https://github.com/andreferraz',
			target: '_blank',
			rel: 'noopener nofollow',
			icon: 'github',
		},
		{
			text: 'Gitlab',
			href: 'https://github.com/andreferraz',
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

	const stack = (
		<>
			<a
				href="https://nextjs.org/"
				target="_blank"
				rel="noreferrer nofollow"
				title={`Next.js - ${t('link-on-new-tab')}`}
				className="link-underlined"
			>
				Next.js
			</a>
			<br />
		</>
	);

	return (
		<Component className={`${className} w-100`}>
			<Container>
				<div className="d-flex flex-column align-items-start flex-md-row justify-content-md-between align-items-md-center mt-auto py-5">
					{socialMenu !== undefined && (
						<SocialButtons links={socialMenu} className="ms-n2 mb-4 mb-md-0" />
					)}

					<Credits
						className="mb-0 link-uppercase"
						dangerouslySetInnerHTML={{
							__html: t('credits', {
								stack: ReactDOMServer.renderToStaticMarkup(stack),
							}),
						}}
					/>
				</div>
			</Container>
		</Component>
	);
};
