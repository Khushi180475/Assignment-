import { useState } from 'react'

export default function MonthSelector() {
  const [prevHover, setPrevHover] = useState(false)
  const [nextHover, setNextHover] = useState(false)

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <button
        onMouseEnter={() => setPrevHover(true)}
        onMouseLeave={() => setPrevHover(false)}
        style={{
          color: prevHover ? '#ffffff' : 'var(--text-secondary)',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '0 4px',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
        }}
        aria-label="Previous Month"
      >
        ‹
      </button>

      <span
        style={{
          color: '#ffffff',
          fontSize: '13px',
          fontWeight: '500',
          minWidth: '85px',
          textAlign: 'center',
        }}
      >
        March, 2026
      </span>

      <button
        onMouseEnter={() => setNextHover(true)}
        onMouseLeave={() => setNextHover(false)}
        style={{
          color: nextHover ? '#ffffff' : 'var(--text-secondary)',
          fontSize: '18px',
          fontWeight: 'bold',
          padding: '0 4px',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
        }}
        aria-label="Next Month"
      >
        ›
      </button>
    </div>
  )
}
