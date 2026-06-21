import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Page from '@/components/page'
import ArticlesLayout from '@/layouts/articles'
import { getArticlesForLocale } from '@/utils/helpers/articles'
import {
  buildAlternatePathsByLocale,
  buildMetadataAlternates,
  isValidLocale,
} from '@/utils/helpers/i18n'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!isValidLocale(locale)) notFound()

  const t = await getTranslations({ locale, namespace: 'articles' })
  const alternates = buildAlternatePathsByLocale('/articles')

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildMetadataAlternates({ currentLocale: locale, pathsByLocale: alternates }),
  }
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const articles = await getArticlesForLocale(locale)
  const alternates = buildAlternatePathsByLocale('/articles')

  return (
    <Page alternates={alternates}>
      <ArticlesLayout articles={articles} />
    </Page>
  )
}
