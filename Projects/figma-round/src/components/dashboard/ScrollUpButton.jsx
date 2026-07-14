// Figma node 108:343 — the 12x12 chevron between the hero and the news feed.
// It pulls the feed up to fill the viewport, and flips to point back down once
// the feed is raised.
export default function ScrollUpButton({ onClick, raised = false }) {
  const label = raised ? 'Back to top' : 'Show news'

  return (
    <button
      type="button"
      className={`scroll-up-button${raised ? ' scroll-up-button--raised' : ''}`}
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-expanded={raised}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5.7" fill="var(--scroll-up-bg)" stroke="var(--scroll-up-stroke)" strokeWidth="0.6" />
        <path
          d="M3.49036 7L3 6.55382L5.67247 4.12361C5.7153 4.08444 5.76622 4.05335 5.82231 4.03214C5.8784 4.01092 5.93855 4 5.99931 4C6.06006 4 6.12021 4.01092 6.1763 4.03214C6.23239 4.05335 6.28331 4.08444 6.32614 4.12361L9 6.55382L8.50964 6.99958L6 4.71866L3.49036 7Z"
          fill="var(--scroll-up-stroke)"
        />
      </svg>
    </button>
  )
}
