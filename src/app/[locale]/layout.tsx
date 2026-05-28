import { Onest } from 'next/font/google'
import '../globals.css'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { ThemeProvider } from '@/components/theme-provider'
import { type Locale, locales, routing } from '@/i18n/routing'
import { Site } from '@/utils/config/site'

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
})

type LanguageURLs = Partial<Record<Locale | 'x-default', string>>
const isValidLocale = (value: string): value is Locale => routing.locales.includes(value as Locale)

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) {
    notFound()
  }

  const currentLocale: Locale = locale
  const t = await getTranslations({ locale: currentLocale, namespace: 'meta' })

  const isDefaultLocale = (locale: Locale) => locale === routing.defaultLocale

  const getLocaleURL = (locale: Locale) =>
    isDefaultLocale(locale) ? Site.baseUrl : `${Site.baseUrl}/${locale}/`

  const languages: LanguageURLs = locales.reduce((acc: LanguageURLs, { locale }) => {
    acc[locale] = getLocaleURL(locale)
    return acc
  }, {})
  languages['x-default'] = Site.baseUrl

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: getLocaleURL(currentLocale),
      languages: languages,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const translations = await getMessages()

  return (
    /* biome-ignore lint: lang is handled by next-intl */
    <html suppressHydrationWarning>
      <body className={`${onest.className} antialiased`}>
        <NextIntlClientProvider messages={translations}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
