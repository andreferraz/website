import { useLocale, useTranslations } from 'next-intl'
import type { Locale } from '@/i18n/routing'
import { Link } from '@/i18n/routing'
import { getTagDisplayName } from '@/utils/config/tags'
import type { ArticleMetaWithReadingTime } from '@/utils/typings/ArticleMeta'

interface ArticlesLayoutProps {
  articles: ArticleMetaWithReadingTime[]
}

export const ArticlesLayout = ({ articles }: ArticlesLayoutProps) => {
  const t = useTranslations('articles')
  const locale = useLocale() as Locale

  return (
    <div className="container py-16 lg:py-24">
      <h1 className="mb-16">{t('title')}</h1>
      {articles.length === 0 ? (
        <p className="text-muted">{t('empty')}</p>
      ) : (
        <ul className="xl:max-w-[80%] space-y-12">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={{
                  pathname: '/articles/[slug]',
                  params: { slug: article.slug },
                }}
                className="group block no-underline"
              >
                <span className="font-bold text-3xl lg:text-5xl leading-tight mb-3 animated-link-hover-fill">
                  {article.title}
                </span>
              </Link>
              <p className="text-muted mb-2">{article.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{t('readingTime', { minutes: article.readingTimeMinutes })}</span>
                {article.tags.length > 0 && (
                  <>
                    <span aria-hidden="true">·</span>
                    <ul className="flex flex-wrap gap-2 list-none" aria-label={t('tagsLabel')}>
                      {article.tags.map((tag) => (
                        <li
                          key={tag}
                          className="px-2 py-0.5 rounded bg-(--surface) text-(--foreground) text-xs"
                        >
                          {getTagDisplayName(tag, locale)}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
