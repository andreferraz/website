// External dependencies
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Internal dependencies
import { Component } from './LanguageSwitch.styles';
import { LanguageSwitchProps } from './LanguageSwitch.types';

// Types
interface Props extends LanguageSwitchProps {
	className?: string;
}

export const LanguageSwitch = ({ className = '' }: Props): JSX.Element => {
	const router = useRouter();
	return (
		<Component className={`${className}`}>
			<Link href="/" locale="en">
				<a
					className={`btn rounded position-relative px-2 ${
						router.locale === 'en' ? 'active' : ''
					}`}
					title="English"
				>
					<span aria-hidden="true">En</span>
				</a>
			</Link>
			<Link href="/" locale="pt-BR">
				<a
					className={`btn rounded position-relative px-2 ms-1 ${
						router.locale === 'pt-BR' ? 'active' : ''
					}`}
					title="Português Brasileiro"
				>
					<span aria-hidden="true">Pt</span>
				</a>
			</Link>
		</Component>
	);
};
