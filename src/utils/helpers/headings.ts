import GithubSlugger from 'github-slugger'
import { Children, isValidElement, type ReactNode } from 'react'
import type { ArticleHeading } from '@/utils/typings/ArticleMeta'

function decodeInlineMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/~~([^~]+)~~/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/<[^>]+>/g, '')
}

export function getHeadingId(text: string): string {
  const slugger = new GithubSlugger()
  return slugger.slug(text) || 'section'
}

export function getNodeText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (!node) {
    return ''
  }

  return Children.toArray(node)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child)
      }

      if (isValidElement<{ children?: ReactNode }>(child)) {
        return getNodeText(child.props.children)
      }

      return ''
    })
    .join('')
}

export function extractHeadingsFromMdx(content: string): ArticleHeading[] {
  const lines = content.split('\n')
  const headings: ArticleHeading[] = []
  const slugger = new GithubSlugger()

  let inCodeBlock = false

  for (const line of lines) {
    if (line.trimStart().startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }

    if (inCodeBlock) continue

    const match = line.match(/^(#{2,3})\s+(.+?)\s*#*\s*$/)
    if (!match) continue

    const level = match[1].length
    if (level !== 2 && level !== 3) continue

    const text = decodeInlineMarkdown(match[2]).trim()
    if (!text) continue

    headings.push({
      level,
      text,
      id: slugger.slug(text),
    })
  }

  return headings
}
