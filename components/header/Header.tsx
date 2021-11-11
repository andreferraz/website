// External dependencies
import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';

// Internal dependencies
import { getAssetPath } from '@/helpers/assets';
import { Site } from '@/config/site';
import LanguageSwitch from '@/components/language-switch';

// Styles
import { Component, HeaderLogo, HeaderContent, LogoCaption, SkipButton } from './Header.styles';

// Typing
import { MenuItemProps } from '@/typings/MenuItemProps';
import { useTranslation } from 'react-i18next';
interface Props {
	menu: MenuItemProps[];
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	const { t } = useTranslation('common');

	function handleSkipLinkClick(event) {
		event.preventDefault();

		// Add all elements we want to include in our selection
		const focussable = Array.prototype.filter.call(
			document.querySelectorAll(
				'#content a:not([disabled]), #content button:not([disabled]), #content input:not([disabled]), footer a:not([disabled])',
			),
			function (element) {
				// Check for visibility while always include the current activeElement
				return (
					element.offsetWidth > 0 ||
					element.offsetHeight > 0 ||
					element === document.activeElement
				);
			},
		);
		focussable[0].focus();
	}

	return (
		<>
			<Component className={`${className} w-100 fixed-top`}>
				<Container>
					<HeaderContent className="d-flex align-items-center justify-content-between position-relative">
						{/* ACESSIBILITY BUTTON */}
						<SkipButton
							onClick={handleSkipLinkClick}
							className="btn btn-dark text-white py-2 rounded-bottom position-absolute top-0 start-50 translate-middle-x visually-hidden-focusable"
						>
							{t('skip-to-content')}
						</SkipButton>

						<div className="pt-3 d-flex justify-content-between w-100">
							{/* LOGO */}
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
										{t('professional-title')}
									</LogoCaption>
								</a>
							</Link>

							{/* LANGUAGE SWITCHERS */}
							<LanguageSwitch />
						</div>
					</HeaderContent>
				</Container>
			</Component>
		</>
	);
};
