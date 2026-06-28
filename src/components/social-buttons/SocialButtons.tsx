import { useTranslations } from 'next-intl'
import type { IconType } from 'react-icons'
import { FaGithub, FaGitlab, FaLinkedinIn, FaMedium } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import type { MenuItemProps, SocialKey } from '@/utils/typings/MenuItemProps'

interface SocialButtonsProps {
  className?: string
  size?: number
  links: MenuItemProps[]
}

export const IconList: Record<SocialKey, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  gitlab: FaGitlab,
  email: HiOutlineMail,
  medium: FaMedium,
}

const Icon = (key: SocialKey) => {
  const SpecificIcon = IconList[key]
  return <SpecificIcon size={30} className="z-10" />
}

export const SocialButtons = ({ className = '', links }: SocialButtonsProps) => {
  const t = useTranslations('common')

  return (
    <ul className={`p-0 flex mb-0 -mx-2 ${className}`}>
      {links.map(({ text, href, target, rel, icon }) => (
        <li key={href} className="me-1">
          <a
            href={href}
            target={target}
            rel={rel}
            title={text}
            aria-label={`${text} - ${t('openExternalLink')}`}
            className={`${icon} flex justify-center items-center relative p-3 rounded-full! transition-colors motion-reduce:transition-none hover:text-white dark:hover:text-black group`}
          >
            <span className="block bg-(--foreground) opacity-0 scale-50 absolute top-0 left-0 w-full h-full rounded-full transition-[scale,opacity] motion-reduce:transition-none duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 group-hover:opacity-100" />
            {icon && Icon(icon)}
          </a>
        </li>
      ))}
    </ul>
  )
}
