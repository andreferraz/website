'use client';

import { locales, Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch = ({ className = '' }: LanguageSwitchProps) => {
  const currentLocale = useLocale();
  const t = useTranslations('languageSwitcher');

  const isCurrent = (locale: string) => locale === currentLocale;

  return (
    <ul
      className={`${className} inline-flex flex-nowrap space-x-1 list-none`}
      aria-label={t('label')}
    >
      {locales.map(({ locale, label, acronym }) => (
        <li key={locale}>
          <Link
            href="/"
            key={locale}
            locale={locale}
            lang={locale}
            className={`btn text-sm px-2.5 data-active:bg-black! data-active:text-white`}
            {...(isCurrent(locale) ? { 'data-active': '' } : {})}
            title={label + (isCurrent(locale) ? ` ${t('current')}` : '')}
          >
            <span aria-hidden="true">{acronym}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
