import { LinkProps } from '@/typings/LinkProps';

export interface MenuItemProps extends LinkProps {
	additionalClass?: string;
	titleAttr?: string;
	icon?: 'linkedin' | 'facebook' | 'pinterest' | 'github' | 'gitlab' | 'email' | 'medium';
}
