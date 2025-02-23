import { LinkProps } from '@/utils/typings/LinkProps';

export type SocialKey = 'linkedin' | 'github' | 'gitlab' | 'email' | 'medium';

export interface MenuItemProps extends LinkProps {
  additionalClass?: string;
  titleAttr?: string;
  icon?: SocialKey;
}
