'use client';

import { locales, Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

interface LanguageSwitchProps {
  className?: string;
}

export const LanguageSwitch = ({ className = '' }: LanguageSwitchProps) => {
  const currentLocale = useLocale();

  return (
    <div className={`${className} d-inline-flex flex-nowrap space-x-1`}>
      {locales.map(({ locale, label, acronym }) => (
        <Link
          href="/"
          key={locale}
          locale={locale}
          className={`btn text-sm px-2.5 data-active:bg-black data-active:text-white`}
          {...(locale === currentLocale ? { 'data-active': '' } : {})}
          title={label}
        >
          <span aria-hidden="true">{acronym}</span>
        </Link>
      ))}
    </div>
  );
};
