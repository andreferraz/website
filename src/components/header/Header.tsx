import Link from 'next/link'
import Logo from '@/components/logo'
import type { Locale } from '@/i18n/routing'
import LanguageSwitch from '../language-switch'
import ScreenReaderLink from '../screen-reader-link'
import { ThemeToggle } from '../theme-toggle'

interface HeaderProps {
  className?: string
  alternates?: Partial<Record<Locale, string>>
}

export const Header = ({ className = '', alternates }: HeaderProps) => {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 right-0 h-(--header-height) z-20 shadow-[0px_60px_60px_var(--header-shadow),0px_30px_30px_var(--header-shadow)]"
      />
      <header className={`${className} w-full fixed top-0 z-30 bg-(--background)`}>
        <div className="container flex items-center relative h-(--header-height)">
          <ScreenReaderLink className="fixed! top-0 left-[50%] translate-x-[-50%]" />
          <div className="flex justify-between items-center w-full pt-3">
            <Link href="/" className="inline-flex items-center text-(--foreground)">
              <Logo />
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSwitch alternates={alternates} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
