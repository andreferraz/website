export const Site: {
  title: string
  baseUrl: string
  defaultLang: string
  isAnalyticsEnabled: boolean
} = {
  title: process.env.NEXT_PUBLIC_SITE_NAME || '',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
  defaultLang: process.env.NEXT_PUBLIC_SITE_LANG || '',
  isAnalyticsEnabled: process.env.NEXT_PUBLIC_IS_ANALYTICS_ENABLED === 'true',
}
