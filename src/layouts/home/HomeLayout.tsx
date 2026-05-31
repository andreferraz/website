import ArticlesList from '@/components/articles-list'
import ClientsList from '@/components/clients-list'
import IntroSection from '@/components/intro-section'
import PublicationsList from '@/components/publications-list'
import type { Locale } from '@/i18n/routing'
import { getArticlesForLocale } from '@/utils/helpers/articles'

interface HomeLayoutProps {
  locale: Locale
}

export const HomeLayout = async ({ locale }: HomeLayoutProps) => {
  const articles = await getArticlesForLocale(locale)
  const previewArticles = articles.slice(0, 3)

  return (
    <div>
      <IntroSection className="pt-25 mb-25 lg:pt-35 lg:mb-35" />

      <ClientsList className="mb-25" />

      <ArticlesList className="mb-25" articles={previewArticles} />

      <PublicationsList className="mb-25" />
    </div>
  )
}
