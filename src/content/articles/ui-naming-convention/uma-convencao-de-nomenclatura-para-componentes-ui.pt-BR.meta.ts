import type { ArticleMeta } from '@/utils/typings/ArticleMeta'
import { Tag } from '@/utils/typings/Tag'

export const meta: ArticleMeta = {
  title: 'Uma convenção de nomenclatura para componentes UI',
  date: '2021-04-30',
  tags: [Tag.FRONTEND, Tag.ARCHITECTURE, Tag.COMPONENTS],
  excerpt:
    'Nomear coisas é difícil. Aqui está uma convenção prática — Contexto, Elemento, Variante — que traz clareza e consistência à sua biblioteca de componentes.',
}
