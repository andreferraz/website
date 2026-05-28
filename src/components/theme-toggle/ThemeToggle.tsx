'use client'

import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'
  const label = useMemo(
    () => (mounted ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Toggle theme'),
    [isDark, mounted],
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
    <button
      type="button"
      onClick={handleToggle}
      className="btn text-sm px-2.5"
      aria-label={label}
      aria-pressed={mounted ? isDark : undefined}
      title={label}
    >
      {isDark ? (
        <RiSunLine size={20} aria-hidden="true" />
      ) : (
        <RiMoonLine size={20} aria-hidden="true" />
      )}
    </button>
  )
}
