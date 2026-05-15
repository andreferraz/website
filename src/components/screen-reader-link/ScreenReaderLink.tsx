import { useTranslations } from 'next-intl'

interface ScreenReaderLinkProps {
  className?: string
}

export const ScreenReaderLink = ({ className = '' }: ScreenReaderLinkProps) => {
  const t = useTranslations('common')

  return (
    <a
      href="#content"
      className={`${className} btn sr-only focus-visible:not-sr-only whitespace-nowrap py-2! px-3! rounded-b-lg rounded-t-none`}
    >
      {t('skipToContent')}
    </a>
  )
}
