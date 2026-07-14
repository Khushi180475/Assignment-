// Figma nodes 6:76 / 6:121 — "Filter" pill with a count badge and a caret.
// `tone` picks between the Spotlight (olive) and Upcoming Events (grey) label colors.
export default function FilterChip({ count, tone = 'grey', onClick }) {
  return (
    <button
      type="button"
      className={`filter-chip filter-chip--${tone}`}
      onClick={onClick}
      title={`Filter (${count})`}
    >
      <span className="filter-chip__badge">{count}</span>
      <span className="filter-chip__label">Filter</span>
      <svg className="filter-chip__caret" width="4" height="2" viewBox="0 0 4 2" fill="none" aria-hidden="true">
        <path d="M0.326908 0L0 0.297447L1.78165 1.91759C1.8102 1.94371 1.84415 1.96443 1.88154 1.97858C1.91893 1.99272 1.95904 2 1.99954 2C2.04004 2 2.08014 1.99272 2.11753 1.97858C2.15493 1.96443 2.18888 1.94371 2.21742 1.91759L4 0.297447L3.67309 0.000280142L2 1.4791L0.326908 0Z" fill="currentColor" />
      </svg>
    </button>
  )
}
