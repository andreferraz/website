import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export type Locale = 'en' | 'pt-BR';

type LocaleInfo = {
  locale: Locale;
  label: string;
  acronym?: string;
  default: boolean;
};

export const locales: LocaleInfo[] = [
  { locale: 'en', label: 'English', acronym: 'EN', default: true },
  { locale: 'pt-BR', label: 'Português Brasileiro', acronym: 'PT', default: false },
];

export const routing = defineRouting({
  locales: locales.map((i) => i.locale),
  defaultLocale: locales.find((i) => i.default)!.locale,
  localePrefix: 'as-needed',
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
