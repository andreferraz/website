import { notFound } from 'next/navigation'
import Page from '@/components/page'
import type { Locale } from '@/i18n/routing'
import { getPathname } from '@/i18n/routing'
import ArticleLayout from '@/layouts/article'
import { getAllArticleSlugs, getArticleBySlug } from '@/utils/helpers/articles'
import { buildMetadataAlternates, isValidLocale } from '@/utils/helpers/i18n'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs()
  return slugs.map(({ locale, slug }) => ({ locale, slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) notFound()

  const article = await getArticleBySlug(slug, locale)
  if (!article) notFound()

  const pathsByLocale: Partial<Record<Locale, string>> = {}

  for (const { locale: altLocale, slug: altSlug } of article.alternates) {
    const altPath = getPathname({
      locale: altLocale,
      href: { pathname: '/articles/[slug]', params: { slug: altSlug } },
    })
    pathsByLocale[altLocale] = altPath
  }

  const currentPath = getPathname({
    locale,
    href: { pathname: '/articles/[slug]', params: { slug } },
  })
  pathsByLocale[locale] = currentPath

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
    alternates: buildMetadataAlternates({ currentLocale: locale, pathsByLocale }),
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isValidLocale(locale)) notFound()

  const article = await getArticleBySlug(slug, locale)
  if (!article) notFound()

  const mod = await import(`@/content/articles/${article.dir}/${article.contentFileName}`)
  const Content: React.ComponentType = mod.default

  const alternates: Partial<Record<Locale, string>> = {}
  for (const { locale: altLocale, slug: altSlug } of article.alternates) {
    const altPath = getPathname({
      locale: altLocale,
      href: { pathname: '/articles/[slug]', params: { slug: altSlug } },
    })
    alternates[altLocale] = altPath
  }

  return (
    <Page
      alternates={{
        [locale]: getPathname({
          locale,
          href: { pathname: '/articles/[slug]', params: { slug } },
        }),
        ...alternates,
      }}
    >
      <ArticleLayout meta={article}>
        <Content />
      </ArticleLayout>
    </Page>
  )
}
