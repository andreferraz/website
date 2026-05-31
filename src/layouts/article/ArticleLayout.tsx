import { useLocale, useTranslations } from 'next-intl'
import type { Locale } from '@/i18n/routing'
import { getTagDisplayName } from '@/utils/config/tags'
import type { ArticleMetaWithReadingTime } from '@/utils/typings/ArticleMeta'
import styles from './ArticleLayout.module.css'

interface ArticleLayoutProps {
  meta: ArticleMetaWithReadingTime
  children: React.ReactNode
}

export const ArticleLayout = ({ meta, children }: ArticleLayoutProps) => {
  const t = useTranslations('article')
  const locale = useLocale() as Locale

  return (
    <article className="container py-16 lg:py-24">
      <header className="xl:max-w-[80%] mb-12">
        <h1 className="mb-6">{meta.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-6">
          <time dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{t('readingTime', { minutes: meta.readingTimeMinutes })}</span>
        </div>
        {meta.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 list-none" aria-label={t('tagsLabel')}>
            {meta.tags.map((tag) => (
              <li
                key={tag}
                className="px-2.5 py-1 rounded bg-(--surface) text-(--foreground) text-xs font-medium"
              >
                {getTagDisplayName(tag, locale)}
              </li>
            ))}
          </ul>
        )}
      </header>
      <div className={`xl:max-w-[80%] ${styles.content}`}>{children}</div>
    </article>
  )
}
