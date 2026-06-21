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
  const hasHeadings = meta.headings.length > 0

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
      <div className={styles.articleBody}>
        <div className={`${styles.content} ${!hasHeadings ? 'xl:max-w-[80%]' : ''}`}>
          {children}
        </div>

        {hasHeadings && (
          <aside className={styles.tocSidebar}>
            <div className={`${styles.tocSticky} p-2 pt-0`}>
              <p id="article-toc-title" className={styles.tocTitle}>
                {t('onThisPage')}
              </p>
              <nav aria-labelledby="article-toc-title">
                <ol className={styles.tocList}>
                  {meta.headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={heading.level === 3 ? styles.tocItemSub : undefined}
                    >
                      <a href={`#${heading.id}`} className={styles.tocLink}>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>
        )}
      </div>
    </article>
  )
}
