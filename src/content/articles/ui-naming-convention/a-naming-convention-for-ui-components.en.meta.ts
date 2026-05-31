import type { ArticleMeta } from '@/utils/typings/ArticleMeta'
import { Tag } from '@/utils/typings/Tag'

export const meta: ArticleMeta = {
  title: 'A naming convention for UI components',
  date: '2021-04-30',
  tags: [Tag.FRONTEND, Tag.ARCHITECTURE, Tag.COMPONENTS],
  excerpt:
    'Naming things is hard. Here is a practical convention — Context, Element, Variant — that brings clarity and consistency to your component library.',
}
