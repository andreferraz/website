import { RouteProps } from '@/typings/RouteProps';
import { OptionsProps } from '@/typings/OptionsProps';
import { MenuItemProps } from './MenuItemProps';

export interface LayoutProps {
	route: RouteProps;
	options: OptionsProps;
	menus: MenuItemProps[];
}
