export default function TickerSearchShortcut({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '12px',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.2s ease',
      }}
      title="Search Tickers (Shortcut ⌘T)"
    >
      <span>🔍</span>
      <span>⌘T</span>
    </button>
  )
}
