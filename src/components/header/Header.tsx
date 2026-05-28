import Link from 'next/link'
import Logo from '@/components/logo'
import LanguageSwitch from '../language-switch'
import ScreenReaderLink from '../screen-reader-link'
import { ThemeToggle } from '../theme-toggle'

interface HeaderProps {
  className?: string
}

export const Header = ({ className = '' }: HeaderProps) => {
  return (
    <header
      className={`${className} w-full fixed top-0 z-10 bg-(--background) shadow-[0px_60px_60px_var(--header-shadow),0px_30px_30px_var(--header-shadow)]`}
    >
      <div className="container flex items-center relative h-(--header-height)">
        <ScreenReaderLink className="fixed! top-0 left-[50%] translate-x-[-50%]" />
        <div className="flex justify-between items-center w-full pt-3">
          <Link href="/" className="inline-flex items-center text-(--foreground)">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
