import type { Locale } from '@/i18n/routing'
import type { Tag } from '@/utils/typings/Tag'

export interface ArticleAlternate {
  locale: Locale
  slug: string
}

export interface ArticleMeta {
  title: string
  date: string
  tags: Tag[]
  excerpt: string
}

export interface ArticleMetaResolved extends ArticleMeta {
  slug: string
  alternates: ArticleAlternate[]
}

export interface ArticleMetaWithReadingTime extends ArticleMetaResolved {
  readingTimeMinutes: number
  dir: string
  contentFileName: string
}
