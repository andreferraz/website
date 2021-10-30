// External dependencies
import React from 'react';
import { FaLinkedinIn, FaGithub, FaGitlab } from 'react-icons/fa';
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
};

const Icon = (text, size) => {
	const SpecificIcon = IconList[text.toLowerCase()];
	return <SpecificIcon size={size === 'small' ? 20 : 30} />;
};

export const SocialButtons = ({ className = '', links, size = 30 }: Props): JSX.Element => {
	return (
		<Component className={`p-0 list-unstyled d-flex mx-n3 ${className}`}>
			{links.map(({ text, href, target, rel, icon }, index) => (
				<li key={index} className="me-1">
					<a
						href={href}
						target={target}
						rel={rel}
						title={text}
						className={`d-flex justify-content-center align-content-center p-3 rounded-pill ${icon}`}
					>
						{Icon(icon, size)}
					</a>
				</li>
			))}
		</Component>
	);
};
