import { useTranslations } from 'next-intl'
import { RiArrowRightLine } from 'react-icons/ri'
import LinkButton from '@/components/link-button'
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
                <span className="font-bold text-3xl/9 lg:text-5xl/15 animated-link-hover-fill">
                  {title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <LinkButton href="/articles" variant="highlight" className="mt-4">
          {t('viewAll')} <RiArrowRightLine size="1.5em" />
        </LinkButton>
      </div>
    </div>
  )
}
