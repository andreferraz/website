import { MenuItemProps, SocialKey } from '@/utils/typings/MenuItemProps';
import { useTranslations } from 'next-intl';
import { IconType } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaGitlab, FaMedium } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

interface SocialButtonsProps {
  className?: string;
  size?: number;
  links: MenuItemProps[];
}

export const IconList: Record<SocialKey, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  gitlab: FaGitlab,
  email: HiOutlineMail,
  medium: FaMedium,
};

const Icon = (key: SocialKey) => {
  const SpecificIcon = IconList[key];
  return <SpecificIcon size={30} className="z-10" />;
};

const colors: Record<SocialKey, string> = {
  linkedin: 'bg-linear-45 from-[#05417d] to-[#00a4ff]',
  github: 'bg-linear-45 from-[#162e5d] to-[#4163ff]',
  gitlab: 'bg-linear-45 from-[#ce4000] to-[#ff976a]',
  email: 'bg-linear-45 from-[#9c632e] to-[#f7d9ad]',
  medium: 'bg-linear-45 from-[#000] to-[#888]',
};

export const SocialButtons = ({ className = '', links }: SocialButtonsProps) => {
  const t = useTranslations('common');

  return (
    <ul className={`p-0 flex mb-0 -mx-2 ${className}`}>
      {links.map(({ text, href, target, rel, icon }, index) => (
        <li key={index} className="me-1">
          <a
            href={href}
            target={target}
            rel={rel}
            title={text}
            aria-label={text + ` - ${t('openExternalLink')}`}
            className={`${icon} flex justify-center items-center relative p-3 rounded-full! transition-colors hover:text-white group`}
          >
            <span
              className={`block ${
                colors[icon!]
              } opacity-0 scale-50 absolute top-0 left-0 w-full h-full rounded-full transition-[scale,opacity] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 group-hover:opacity-100`}
            />
            {icon && Icon(icon)}
          </a>
        </li>
      ))}
    </ul>
  );
};
