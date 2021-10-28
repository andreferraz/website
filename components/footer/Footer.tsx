// External dependencies
import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';

// Internal modules
import { Component, Copyright, Logo, Menu } from './Footer.styles';
import { Site } from '@/config/site';
import { MenuProps } from '@/typings/MenuProps';
import { OptionsProps } from '@/typings/OptionsProps';
import SocialButtons from '@/components/social-buttons';
import { getAssetPath } from '@/helpers/assets';

// Properties definition
interface Props {
	menus: MenuProps[];
	options: OptionsProps;
}

export const Footer = ({ menus, options }: Props): JSX.Element => {
	const footerMenu = menus.find(({ location }) => location === 'footer');
	const socialMenu = menus.find(({ location }) => location === 'social');

	return (
		<Component className={`d-flex justify-content-between mt-auto`}>
			<Container>
				<Row>
					{/* LOGO */}
					<Col xs={12} md={4} lg={3} className="mb-4">
						<Link href="/">
							<a title={`Return to the homepage`}>
								<Logo
									src={getAssetPath('/images/next-boilerplate-logo.svg')}
									alt={Site.title}
									title={Site.title}
									width="100"
								/>
							</a>
						</Link>
					</Col>

					{/* FOOTER LINKS */}
					<Col xs={12} md={4} lg={6} className="mb-3">
						{footerMenu !== undefined && (
							<nav>
								<Menu className="list-unstyled">
									{footerMenu.items.map((item, index) => (
										<li key={index} className="mb-3">
											<Link href={item.href}>
												<a
													target={item.target}
													rel={item.rel}
													title={item.titleAttr}
													className="d-inline-block"
													dangerouslySetInnerHTML={{ __html: item.text }}
												/>
											</Link>
										</li>
									))}
								</Menu>
							</nav>
						)}
					</Col>

					{/* SOCIAL MEDIA */}
					<Col xs={12} md={4} lg={3} className="mb-4">
						{socialMenu !== undefined && <SocialButtons links={socialMenu.items} />}
					</Col>
				</Row>

				{/* COPYRIGHT */}
				<Copyright className="text-center w-100">
					<span dangerouslySetInnerHTML={{ __html: options.footer.copyright }} />
				</Copyright>
			</Container>
		</Component>
	);
};
