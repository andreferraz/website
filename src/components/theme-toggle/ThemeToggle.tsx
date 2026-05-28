'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { Tooltip } from 'react-tooltip'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('themeToggle')
  const { resolvedTheme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'
  const label = useMemo(
    () =>
      mounted ? t('switchToTheme', { mode: isDark ? t('light') : t('dark') }) : t('toggleTheme'),
    [isDark, mounted, t],
  )

  const handleToggle = () => {
    const next = isDark ? 'light' : 'dark'
    const currentSystemTheme = systemTheme === 'dark' ? 'dark' : 'light'

    if (next === currentSystemTheme) {
      setTheme('system')
      return
    }

    setTheme(next)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        className="btn text-sm px-2.5 cursor-pointer"
        aria-pressed={mounted ? isDark : undefined}
        data-tooltip-id="theme-toggle-tooltip"
        data-tooltip-content={label}
      >
        {isDark ? (
          <RiSunLine size={20} aria-hidden="true" />
        ) : (
          <RiMoonLine size={20} aria-hidden="true" />
        )}
      </button>
      <Tooltip id="theme-toggle-tooltip" place="bottom" className="sr-only lg:not-sr-only" />
    </>
  )
}
