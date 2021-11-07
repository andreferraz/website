// External dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';

// Internal dependencies
import { getAssetPath } from '@/helpers/assets';
import { Site } from '@/config/site';
import MobileMenu from '@/components/mobile-menu';

// Hooks
import { useMobileMenu } from 'utils/hooks/MobileMenuProvider';

// Styles
import {
	ItemMenu,
	MenuList,
	Component,
	HeaderLogo,
	HeaderContent,
	LogoCaption,
	SkipButton,
} from './Header.styles';

// Typing
import { MenuItemProps } from '@/typings/MenuItemProps';
interface Props {
	menu: MenuItemProps[];
	className?: string;
}

export const Header: React.FC<Props> = ({ menu, className }) => {
	const router = useRouter();
	const [isHome] = useState(() => router.pathname === '/');

	const handleOpenSubmenuHeader = (target) => {
		const menu = document.querySelector('.menu-' + target);
		menu.classList.toggle('active');
		menu.addEventListener('mouseout', () => {
			menu.classList.remove('active');
		});
	};

	return (
		<>
			<SkipButton href="#content" className="btn btn-blue text-white visually-hidden-focusable">
				Skip to main content
			</SkipButton>

			<Component className={`${className} w-100 fixed-top`}>
				<Container>
					<HeaderContent className="d-flex align-items-center justify-content-between">
						{/* LOGO */}
						<div className="pt-3">
							<Link href="/">
								<a className="d-inline-flex align-items-center text-reset text-decoration-none">
									<HeaderLogo
										src={getAssetPath(`/images/andreferraz-logo.svg`)}
										alt={Site.title}
										width="44"
										height="40"
									/>
									<LogoCaption className="ms-3">
										<strong>André Ferraz</strong> <br />
										Software Developer
									</LogoCaption>
								</a>
							</Link>
						</div>

						{/* NAV MENU */}
						<div className="align-items-center justify-content-end row">
							{menu && (
								<MenuList className="menu-list-header mb-0 justify-content-between d-none d-lg-flex mr-3">
									{menu.map((menuItem, index) => (
										<ItemMenu
											key={index}
											className={`menu-${index} d-flex align-items-center position-relative mx-4`}
										>
											<Link href={menuItem.href}>
												<a
													className="p-2"
													dangerouslySetInnerHTML={{ __html: menuItem.text }}
												/>
											</Link>
											{menuItem.subitems.length > 0 && (
												<>
													<button onClick={() => handleOpenSubmenuHeader(index)}>
														<BsChevronDown />
													</button>

													<ul className={`submenu-${index} unstyled-list p-0`}>
														{menuItem.subitems.map((submenuItem, index) => (
															<li key={index} className="d-block w-100">
																<Link href={submenuItem.href}>
																	<a
																		className="d-block py-3 px-4"
																		dangerouslySetInnerHTML={{
																			__html: submenuItem.text,
																		}}
																	/>
																</Link>
															</li>
														))}
													</ul>
												</>
											)}
										</ItemMenu>
									))}
								</MenuList>
							)}
						</div>
					</HeaderContent>

					<MobileMenu menus={menu} />
				</Container>
			</Component>
		</>
	);
};
