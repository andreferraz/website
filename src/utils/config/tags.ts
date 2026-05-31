import type { Locale } from '@/i18n/routing'
import { Tag } from '@/utils/typings/Tag'

export interface TagDisplay {
  value: Tag
  displayName: Record<Locale, string>
  icon?: string
}

export const tags: Record<Tag, TagDisplay> = {
  [Tag.FRONTEND]: {
    value: Tag.FRONTEND,
    displayName: {
      en: 'Frontend',
      'pt-BR': 'Frontend',
    },
    icon: 'monitor',
  },
  [Tag.ARCHITECTURE]: {
    value: Tag.ARCHITECTURE,
    displayName: {
      en: 'Architecture',
      'pt-BR': 'Arquitetura',
    },
    icon: 'blueprint',
  },
  [Tag.COMPONENTS]: {
    value: Tag.COMPONENTS,
    displayName: {
      en: 'Components',
      'pt-BR': 'Componentes',
    },
    icon: 'blocks',
  },
  [Tag.PROGRAMMING]: {
    value: Tag.PROGRAMMING,
    displayName: {
      en: 'Programming',
      'pt-BR': 'Programação',
    },
    icon: 'code',
  },
  [Tag.REGEX]: {
    value: Tag.REGEX,
    displayName: {
      en: 'Regex',
      'pt-BR': 'Regex',
    },
    icon: 'search',
  },
}

export function getTagDisplayName(tag: Tag, locale: Locale): string {
  return tags[tag].displayName[locale]
}
