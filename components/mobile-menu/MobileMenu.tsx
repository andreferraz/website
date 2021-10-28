// External dependencies
import React from 'react';
import Link from 'next/link';
import { Row, Col, Accordion, Card, Container } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';

// Internal dependencies
import {
	Component,
	MobileMenuOverflow,
	MobileMenuContent,
	MobileMenuItem,
	MobileMenuItemHeader,
	ItemMenuCollapse,
	CloseButtonRegion,
	//SocialMedia,
} from './MobileMenu.styles';
import { useMobileMenu } from 'utils/hooks/MobileMenuProvider';
import { MobileMenuProps } from './MobileMenu.types';

// Props for component functionality and logic
interface Props extends MobileMenuProps {
	className?: string;
}

export const MobileMenu: React.FC<Props> = ({ menus }) => {
	const controlMobileMenu = useMobileMenu();

	/* const socialMenu = menus.find(({ location }) => location === 'social'); */
	const handleClassControl = (toActive) => {
		const allItems = document.querySelectorAll('.MobileMenuItemMenu');
		const targetItem = document.querySelector(toActive);

		Array.from(allItems).map((element) => {
			element != targetItem
				? element.classList.remove('active')
				: targetItem.classList.toggle('active');
		});
	};

	return (
		<Component
			id="MobileMenuComponent"
			aria-expanded={controlMobileMenu.isOpen}
			$isActive={controlMobileMenu.isOpen}
		>
			<MobileMenuOverflow
				onClick={() => controlMobileMenu.closeMobileMenu()}
				$isActive={controlMobileMenu.isOpen}
			/>

			<MobileMenuContent $isActive={controlMobileMenu.isOpen}>
				<CloseButtonRegion>
					<Container>
						{/* TODO: Convert label to i18n text */}
						<button
							className="mb-4"
							onClick={() => controlMobileMenu.closeMobileMenu()}
							aria-label="Close the site navigation menu"
						>
							{/* <AiOutlineClose /> */}
							<span className="icon-close" />
						</button>
					</Container>
				</CloseButtonRegion>

				{menus && (
					<Accordion as="ul" className="text-left">
						{menus.items.map((itemMenu, index) => (
							<MobileMenuItem
								as="li"
								key={index}
								className={`MobileMenuItemMenu MobileMenuItemMenu-${index}`}
							>
								<MobileMenuItemHeader>
									<Row>
										<Col>
											<Link href={itemMenu.href}>
												<a
													dangerouslySetInnerHTML={{ __html: itemMenu.text }}
													onClick={() => controlMobileMenu.closeMobileMenu()}
												/>
											</Link>
										</Col>

										{itemMenu.subitems.length > 0 && (
											<Col xs={2} className="text-right">
												<Accordion.Toggle
													onClick={() =>
														handleClassControl(`.MobileMenuItemMenu-${index}`)
													}
													eventKey={String(index)}
												>
													<BsChevronDown />
												</Accordion.Toggle>
											</Col>
										)}
									</Row>
								</MobileMenuItemHeader>

								<ItemMenuCollapse eventKey={String(index)}>
									<Card.Body className="p-0">
										{itemMenu.subitems.length > 0 && (
											<>
												<ul className={`submenu-${index}`}>
													{itemMenu.subitems.map((submenuItem, index) => (
														<Link key={index} href={submenuItem.href}>
															<a onClick={() => controlMobileMenu.closeMobileMenu()}>
																<li
																	dangerouslySetInnerHTML={{
																		__html: submenuItem.text,
																	}}
																/>
															</a>
														</Link>
													))}
												</ul>
											</>
										)}
									</Card.Body>
								</ItemMenuCollapse>
							</MobileMenuItem>
						))}
					</Accordion>
				)}
			</MobileMenuContent>
		</Component>
	);
};
