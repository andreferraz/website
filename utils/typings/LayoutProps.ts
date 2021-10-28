import { RouteProps } from '@/typings/RouteProps';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuProps } from '@/typings/MenuProps';

export interface LayoutProps {
	route: RouteProps;
	options: OptionsProps;
	menus: MenuProps[];
}
