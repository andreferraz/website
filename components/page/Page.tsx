import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuProps } from '@/typings/MenuProps';
import { RouteProps } from '@/typings/RouteProps';

type Props = {
	route: RouteProps;
	options: OptionsProps;
	menus: MenuProps[];
	className?: string;
	children?: React.ReactNode;
};

export const Page = ({ route, options, menus, className, children }: Props): JSX.Element => {
	return (
		<>
			<Head seo={route.seo} />

			<div id="page" className={className}>
				<Header menu={null} />

				<div id="content">{children}</div>

				<Footer socialMenu={[]} options={options} />
			</div>
		</>
	);
};
