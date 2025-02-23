import { Onest } from 'next/font/google';
import '../globals.css';
import { routing, Locale, locales } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Site } from '@/utils/config/site';

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
});

type LanguageURLs = Partial<Record<Locale | 'x-default', string>>;

export async function generateMetadata(params: { params: { locale: Locale } }) {
  const { locale } = await params.params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const isDefaultLocale = (locale: Locale) => locale === routing.defaultLocale;

  const getLocaleURL = (locale: Locale) =>
    isDefaultLocale(locale) ? Site.baseUrl : `${Site.baseUrl}/${locale}/`;

  const languages: LanguageURLs = locales.reduce((acc: LanguageURLs, { locale }) => {
    acc[locale] = getLocaleURL(locale);
    return acc;
  }, {});
  languages['x-default'] = Site.baseUrl;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: getLocaleURL(locale),
      languages: languages,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const translations = await getMessages();

  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        <NextIntlClientProvider messages={translations}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
