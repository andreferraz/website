import type { MDXComponents } from 'mdx/types'
import { HiOutlineLink } from 'react-icons/hi'
import { getHeadingId, getNodeText } from '@/utils/helpers/headings'

interface HeadingProps {
  id?: string
  children?: React.ReactNode
}

function HeadingAnchor({ level, id, children }: HeadingProps & { level: 2 | 3 }) {
  const text = getNodeText(children).trim()
  const resolvedId = id ?? getHeadingId(text)
  const Tag = `h${level}` as const

  return (
    <Tag id={resolvedId} className="article-heading">
      <span className="article-heading-text">{children}</span>
      <a
        href={`#${resolvedId}`}
        aria-label={`Link to section: ${text}`}
        className="article-heading-anchor-link inline-block"
      >
        <HiOutlineLink aria-hidden="true" focusable="false" />
      </a>
    </Tag>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ id, children }: HeadingProps) => (
      <HeadingAnchor level={2} id={id}>
        {children}
      </HeadingAnchor>
    ),
    h3: ({ id, children }: HeadingProps) => (
      <HeadingAnchor level={3} id={id}>
        {children}
      </HeadingAnchor>
    ),
    ...components,
  }
}
