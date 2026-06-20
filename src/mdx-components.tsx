import type { MDXComponents } from 'mdx/types'
import CitationQuote from '@/components/citation-quote'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CitationQuote,
    ...components,
  }
}
