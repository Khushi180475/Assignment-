import FilterChip from '../dashboard/FilterChip'

// Figma node 38:507, "Event Card 13": a 600x166 surface at rgba(255,255,255,0.7)
// carrying the stacked avatar dots ("Group 1361"). Its inner text layers
// (Rectangle 858/859/860) are hidden in the design, so the card is an empty
// followed-company slot.
export default function FollowedCompanies() {
  return (
    <section className="followed-companies">
      <header className="feed-section__header">
        <h2 className="feed-section__title feed-section__title--plain">Followed Companies</h2>
        <FilterChip count={4} tone="grey" />
      </header>

      <article className="followed-card">
        <svg className="followed-card__dots" width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <circle cx="13" cy="7" r="6.75" fill="var(--card-dot-bg)" stroke="var(--card-dot-border)" strokeWidth="0.5" />
          <circle cx="7" cy="7" r="6.75" fill="var(--card-dot-bg)" stroke="var(--card-dot-border)" strokeWidth="0.5" />
        </svg>
      </article>
    </section>
  )
}
