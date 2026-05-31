import { useTranslations } from 'next-intl'
import type { ArticleProps } from '@/utils/typings/ArticleProps'

interface PublicationsListProps {
  className?: string
}

const articles: ArticleProps[] = [
  {
    id: '1b4ab851ecde',
    title: 'Why more programmers should know Regular Expressions?',
    url: 'https://andreferrazdev.medium.com/why-every-programmer-should-know-regular-expressions-1b4ab851ecde',
    date: '2021-05-1',
    source: 'medium.com',
  },
  {
    id: '77f4fb8797c',
    title: 'A naming convention for UI components',
    url: 'https://andreferrazdev.medium.com/a-naming-convention-for-ui-components-77f4fb8797c',
    date: '2021-04-30',
    source: 'medium.com',
  },
]

export const PublicationsList = ({ className = '' }: PublicationsListProps) => {
  const t = useTranslations()

  return (
    <div className={`${className}`}>
      <div className="container">
        <h2 className="block">{t('publicationsList.title')}</h2>
        <ul className="xl:max-w-[80%]">
          {articles.map(({ id, title, url, source }) => (
            <li key={id} className="mb-6">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline rounded group"
                title={`${source} - ${t('common.openExternalLink')}`}
              >
                <span className="font-bold text-3xl lg:text-5xl animated-link-hover-fill">
                  {title}
                </span>
              </a>
              <span className="block font-lg text-muted mt-2">
                {t('publicationsList.source', { source })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
