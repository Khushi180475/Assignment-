export default function BalanceCredits() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 204, 0, 0.08)',
        border: '1px solid rgba(255, 204, 0, 0.2)',
        borderRadius: 'var(--radius-sm)',
        padding: '6px 12px',
        gap: '6px',
        height: '32px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      title="Credits Balance (Click to purchase)"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 204, 0, 0.15)'
        e.currentTarget.style.borderColor = 'rgba(255, 204, 0, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 204, 0, 0.08)'
        e.currentTarget.style.borderColor = 'rgba(255, 204, 0, 0.2)'
      }}
      onClick={() => alert('Simulated purchase: 1000 credits added!')}
    >
      {/* Coin Icon */}
      <span
        style={{
          color: '#ffcc00',
          fontSize: '12px',
          display: 'inline-flex',
          filter: 'drop-shadow(0 0 4px rgba(255, 204, 0, 0.4))',
        }}
      >
        🪙
      </span>

      {/* Credit balance text */}
      <span
        style={{
          color: '#ffcc00',
          fontSize: '12px',
          fontWeight: '600',
        }}
      >
        1,200
      </span>
    </div>
  )
}
