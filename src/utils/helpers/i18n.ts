import { getPathname, type Locale, locales, routing } from '@/i18n/routing'
import { Site } from '@/utils/config/site'

type AlternateLocale = Locale | 'x-default'
type PathByLocale = Partial<Record<Locale, string>>

type PathnameHref = Parameters<typeof getPathname>[0]['href']

const localeCodes: Set<string> = new Set(locales.map(({ locale }) => locale))

export const isValidLocale = (value: string): value is Locale =>
  routing.locales.includes(value as Locale)

export const removeLeadingLocaleFromAlternatePath = (path: string) => {
  const pathWithLeadingSlash = path.startsWith('/') ? path : `/${path}`
  const segments = pathWithLeadingSlash.split('/').filter(Boolean)

  if (segments.length > 0 && localeCodes.has(segments[0])) {
    segments.shift()
  }

  return segments.length > 0 ? `/${segments.join('/')}` : '/'
}

export const buildAlternatePathsByLocale = (href: PathnameHref): PathByLocale =>
  locales.reduce((acc: PathByLocale, { locale }) => {
    acc[locale] = getPathname({ locale, href })
    return acc
  }, {})

const toAbsoluteLocaleUrl = (locale: Locale, path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const prefixedPath =
    locale === routing.defaultLocale ? normalizedPath : `/${locale}${normalizedPath}`

  return `${Site.baseUrl}${prefixedPath}`
}

export const buildMetadataAlternates = ({
  currentLocale,
  pathsByLocale,
  includeXDefault = true,
}: {
  currentLocale: Locale
  pathsByLocale: PathByLocale
  includeXDefault?: boolean
}) => {
  const languages: Partial<Record<AlternateLocale, string>> = {}

  for (const { locale } of locales) {
    const path = pathsByLocale[locale]
    if (!path) continue
    languages[locale] = toAbsoluteLocaleUrl(locale, path)
  }

  if (includeXDefault) {
    const defaultPath = pathsByLocale[routing.defaultLocale] ?? '/'
    languages['x-default'] = toAbsoluteLocaleUrl(routing.defaultLocale, defaultPath)
  }

  const currentPath = pathsByLocale[currentLocale] ?? '/'

  return {
    canonical: toAbsoluteLocaleUrl(currentLocale, currentPath),
    languages: Object.keys(languages).length > 0 ? languages : undefined,
  }
}
