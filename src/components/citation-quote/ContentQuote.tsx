interface CitationQuoteProps {
  className?: string
  children: React.ReactNode
  cite: string
}

export const CitationQuote = ({ className = '', children, cite }: CitationQuoteProps) => {
  return (
    <figure
      className={`${className} my-8 border-l-4 border-(--border) pl-5 md:pl-6 italic text-lg leading-relaxed`}
    >
      <blockquote>{children}</blockquote>
      <figcaption className="not-italic text-sm text-muted">
        – <cite>{cite}</cite>
      </figcaption>
    </figure>
  )
}
