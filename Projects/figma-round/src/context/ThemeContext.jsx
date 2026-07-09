import { createContext, useLayoutEffect, useMemo, useState } from 'react'
import { THEME_STORAGE_KEY } from '../theme/themeStorage'
import { getTheme, themes } from '../theme/themes'

const ThemeContext = createContext(null)

const getInitialThemeId = () => {
  if (typeof window === 'undefined') return 'green'

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return themes[savedTheme] ? savedTheme : 'green'
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(getInitialThemeId)
  const theme = getTheme(themeId)

  useLayoutEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme.id)
    document.documentElement.setAttribute('data-app-theme', theme.id)

    Object.entries(theme.tokens).forEach(([token, value]) => {
      document.documentElement.style.setProperty(token, value)
    })
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      themeId,
      isBlueTheme: themeId === 'blue',
      setTheme: (nextThemeId) => setThemeId(themes[nextThemeId] ? nextThemeId : 'green'),
      toggleTheme: () => setThemeId((currentThemeId) => (currentThemeId === 'green' ? 'blue' : 'green')),
    }),
    [theme, themeId],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext }
