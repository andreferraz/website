import { notFound } from 'next/navigation'
import Page from '@/components/page'
import HomeLayout from '@/layouts/home'
import { isValidLocale } from '@/utils/helpers/i18n'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <Page>
      <HomeLayout locale={locale} />
    </Page>
  )
}
