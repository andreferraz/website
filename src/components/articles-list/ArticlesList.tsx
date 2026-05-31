import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import type { ArticleMetaWithReadingTime } from '@/utils/typings/ArticleMeta'

interface ArticlesListProps {
  className?: string
  articles: ArticleMetaWithReadingTime[]
}

export const ArticlesList = ({ className = '', articles }: ArticlesListProps) => {
  const t = useTranslations('articlesList')

  return (
    <div className={`${className}`}>
      <div className="container">
        <h2 className="block">{t('title')}</h2>
        <ul className="xl:max-w-[80%]">
          {articles.map(({ slug, title }) => (
            <li key={slug} className="mb-6">
              <Link
                href={{ pathname: '/articles/[slug]', params: { slug } }}
                className="inline-block no-underline rounded group"
              >
                <span className="font-bold text-3xl lg:text-5xl animated-link-hover-fill">
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/articles" className="btn inline-flex items-center gap-2 mt-4">
          {t('viewAll')}
        </Link>
      </div>
    </div>
  )
}
