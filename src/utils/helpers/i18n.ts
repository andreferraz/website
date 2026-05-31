import { type Locale, locales, routing } from '@/i18n/routing'

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
