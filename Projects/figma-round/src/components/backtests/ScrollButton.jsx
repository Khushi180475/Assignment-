import { useState } from 'react'

export default function ScrollButton({ onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        backgroundColor: hovered ? 'var(--accent-soft)' : 'color-mix(in srgb, var(--accent-soft) 60%, transparent)',
        border: hovered ? '1px solid var(--accent-strong)' : '1px solid var(--accent-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent)',
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        flexShrink: 0,
      }}
      title="Scroll folders right"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  )
}
