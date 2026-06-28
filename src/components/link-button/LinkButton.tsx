import type { ComponentProps, ReactNode } from 'react'
import { Link } from '@/i18n/routing'

type LinkHref = ComponentProps<typeof Link>['href']

interface LinkButtonProps {
  className?: string
  children: ReactNode
  href: LinkHref
  isHighlighted?: boolean
  variant?: 'default' | 'highlight'
}

export const LinkButton = ({
  className = '',
  children,
  href,
  isHighlighted = false,
  variant = 'default',
}: LinkButtonProps) => {
  const sharedClassName = `${className} inline-flex items-center justify-center font-bold text-xs lg:text-sm`
  const defaultClassName = `${sharedClassName} uppercase underline`
  const highlightClassName = `${sharedClassName} relative isolate overflow-hidden rounded-full transition-[padding] ease-out px-5 py-3 uppercase tracking-[0.075em] text-(--foreground) before:absolute before:left-0 before:top-0 before:h-11 before:w-11 before:rounded-4xl before:bg-(--cta-background) before:transition-all before:duration-250 before:ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:before:before:h-full motion-reduce:before:w-full motion-reduce:before:transition-none hover:before:h-full hover:before:w-full hover:before:opacity-[0.65] focus-visible:before:hidden`

  return (
    <Link
      href={href}
      {...(isHighlighted ? { 'data-highlighted': '' } : {})}
      className={variant === 'highlight' ? highlightClassName : defaultClassName}
    >
      <span className="relative z-10 flex items-center justify-center gap-x-1.5">{children}</span>
    </Link>
  )
}
