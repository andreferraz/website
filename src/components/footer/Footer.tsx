import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { MenuItemProps } from '@/utils/typings/MenuItemProps'
import SocialButtons from '../social-buttons'

interface FooterProps {
  className?: string
}

export const Footer = ({ className = '' }: FooterProps) => {
  const t = useTranslations('common')

  const socialLinks: MenuItemProps[] = [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/andreferraz-dev/',
      target: '_blank',
      rel: 'noopener nofollow',
      icon: 'linkedin',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/andreferraz',
      target: '_blank',
      rel: 'noopener nofollow',
      icon: 'github',
    },
    {
      text: 'Medium',
      href: 'https://medium.com/@andreferrazdev',
      target: '_blank',
      rel: 'noopener nofollow',
      icon: 'medium',
    },
    {
      text: 'E-mail',
      href: 'mailto:hello@andreferraz.dev',
      titleAttr: 'Copy e-mail',
      icon: 'email',
    },
  ]

  return (
    <footer className={`${className}`}>
      <div className="container">
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center mt-auto py-5">
          {socialLinks !== undefined && (
            <SocialButtons links={socialLinks} className="ms-n2 mb-4 mb-md-0" />
          )}

          <p className="mb-0">
            {t.rich('credits', {
              stack: (stack) => (
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noreferrer nofollow"
                  title={`Next.js - ${t('openExternalLink')}`}
                  className="underline"
                >
                  {stack}
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  )
}
