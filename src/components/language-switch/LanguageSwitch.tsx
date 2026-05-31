'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, type Locale, locales } from '@/i18n/routing'
import { removeLeadingLocaleFromAlternatePath } from '@/utils/helpers/i18n'

interface LanguageSwitchProps {
  className?: string
  alternates?: Partial<Record<Locale, string>>
}

export const LanguageSwitch = ({ className = '', alternates }: LanguageSwitchProps) => {
  const currentLocale = useLocale()
  const t = useTranslations('languageSwitcher')

  const isCurrent = (locale: string) => locale === currentLocale

  return (
    <nav aria-label={t('label')}>
      <ul className={`${className} inline-flex flex-nowrap space-x-1 list-none`}>
        {locales.map(({ locale, label, acronym }) => (
          <li key={locale}>
            <Link
              href={removeLeadingLocaleFromAlternatePath(alternates?.[locale] ?? '/') as never}
              key={locale}
              locale={locale}
              lang={locale}
              className={`btn text-sm px-2.5 data-active:bg-(--foreground)! data-active:text-(--background)!`}
              {...(isCurrent(locale) ? { 'data-active': '' } : {})}
              title={label + (isCurrent(locale) ? ` ${t('current')}` : '')}
            >
              <span aria-hidden="true">{acronym}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
