// External dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedinIn, FaGithub, FaGitlab, FaMedium } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

// Internal dependencies
import { Component } from './SocialButtons.styles';
import { SocialButtonsProps } from './SocialButtons.types';

// Types
interface Props extends SocialButtonsProps {
	className?: string;
	size?: number;
	color?: string;
}

const IconList = {
	linkedin: FaLinkedinIn,
	github: FaGithub,
	gitlab: FaGitlab,
	email: HiOutlineMail,
	medium: FaMedium,
};

const Icon = (text, size) => {
	const SpecificIcon = IconList[text.toLowerCase()];
	return <SpecificIcon size={size === 'small' ? 20 : 30} />;
};

export const SocialButtons = ({ className = '', links, size = 30 }: Props): JSX.Element => {
	const { t } = useTranslation('common');

	return (
		<Component className={`p-0 list-unstyled d-flex mb-0 mx-n3 ${className}`}>
			{links.map(({ text, href, target, rel, icon }, index) => (
				<li key={index} className="me-1">
					<a
						href={href}
						target={target}
						rel={rel}
						title={text + ` - ${t('link-on-new-tab')}`}
						className={`d-flex justify-content-center align-content-center p-3 rounded-pill ${icon}`}
					>
						{Icon(icon, size)}
					</a>
				</li>
			))}
		</Component>
	);
};
