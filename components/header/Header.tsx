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
	AccessibilityButton,
} from './Header.styles';

// Typing
import { MenuProps } from '@/typings/MenuProps';
interface Props {
	menu: MenuProps;
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
			<AccessibilityButton onClick={() => document.getElementById('content').focus()}>
				Go to page content {/* TODO: Convert to i18n text */}
			</AccessibilityButton>

			<Component className={`${className} w-100`}>
				<Container>
					<HeaderContent className="d-flex align-items-center justify-content-between">
						{/* LOGO */}
						<div className="d-flex order-2 order-lg-1 align-items-center">
							{isHome ? (
								<h1 className="m-0">
									<Link href="/">
										<a>
											<HeaderLogo
												src={getAssetPath(`/images/andreferraz-logo.svg`)}
												alt={Site.title}
												width="44"
												height="40"
											/>
										</a>
									</Link>
								</h1>
							) : (
								<div>
									<Link href="/">
										<a>
											<HeaderLogo
												src={getAssetPath(`/images/andreferraz-logo.svg`)}
												alt={Site.title}
												width="44"
												height="40"
											/>
										</a>
									</Link>
								</div>
							)}

							<LogoCaption className="ml-3">
								<strong>André Ferraz</strong> <br />
								Software Developer
							</LogoCaption>
						</div>

						{/* NAV MENU */}
						<div className="align-items-center justify-content-end order-1 order-lg-2 row">
							{menu && (
								<MenuList className="menu-list-header mb-0 justify-content-between d-none d-lg-flex mr-3">
									{menu.items.map((menuItem, index) => (
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
