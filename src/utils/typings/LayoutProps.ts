import { RouteProps } from '@/utils/typings/RouteProps';
import { OptionsProps } from '@/utils/typings/OptionsProps';
import { MenuItemProps } from './MenuItemProps';

export interface LayoutProps {
  route: RouteProps;
  options: OptionsProps;
  menus: MenuItemProps[];
}
