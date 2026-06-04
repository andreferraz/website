import { notFound } from 'next/navigation'
import Page from '@/components/page'
import { isValidLocale } from '@/i18n/routing'
import HomeLayout from '@/layouts/home'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <Page>
      <HomeLayout />
    </Page>
  )
}
