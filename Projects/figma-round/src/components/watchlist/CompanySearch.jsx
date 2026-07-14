import { useState } from 'react'
import FilterChip from '../dashboard/FilterChip'

// Figma node 38:507, "watchlist search": a 239x22 input over a 239x136 results
// panel. Both are empty in the design, so the panel renders as an empty surface
// until a query returns something.
export default function CompanySearch() {
  const [query, setQuery] = useState('')

  return (
    <section className="company-search">
      <header className="feed-section__header">
        <h2 className="feed-section__title feed-section__title--plain">Search Companies</h2>
        <FilterChip count={2} tone="grey" />
      </header>

      <div className="company-search__field">
        <svg className="company-search__icon" width="7" height="7" viewBox="0 0 8 8" fill="none" aria-hidden="true">
          <circle cx="3.1" cy="3.1" r="2.7" stroke="currentColor" strokeWidth="0.8" />
          <path d="M5.1 5.1 7.2 7.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        </svg>

        <input
          className="company-search__input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search companies"
        />

        {query && (
          <button className="company-search__clear" onClick={() => setQuery('')} type="button">
            Clear
          </button>
        )}
      </div>

      <div className="company-search__results" role="listbox" aria-label="Search results" />
    </section>
  )
}
