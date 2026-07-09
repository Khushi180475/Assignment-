import useTheme from '../../context/useTheme'

export default function ThemeToggle() {
  const { isBlueTheme, theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isBlueTheme ? 'Green Theme' : 'Blue Theme'}`}
      aria-pressed={isBlueTheme}
      title={`Current: ${theme.shortLabel}`}
    >
      <span className="theme-toggle__label">Green</span>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          {isBlueTheme ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12.5C5.8 8 8.8 5.6 13.1 5.2C16.2 4.9 18.6 6.3 20 9.4C18.7 9.1 17.2 9.5 15.6 10.6C13.8 11.8 12 12.3 10.1 12C7.9 11.7 5.9 11.9 4 12.5Z"
                fill="currentColor"
              />
              <path
                d="M4 13.4C6 13 8.1 13 10.4 13.5C12.9 14 15 13.5 16.9 12C18 11.2 19 10.8 20 10.9C19.5 16.1 16.6 19 11.7 19C8 19 5.4 17.1 4 13.4Z"
                fill="currentColor"
                opacity="0.55"
              />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3C9.1 6.1 7.7 9.1 7.8 12C7.9 15.5 9.5 18.1 12 20C14.5 18.1 16.1 15.5 16.2 12C16.3 9.1 14.9 6.1 12 3Z"
                fill="currentColor"
              />
              <path d="M12 7V18" stroke="rgba(255,255,255,0.65)" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle__label">Blue</span>
    </button>
  )
}
