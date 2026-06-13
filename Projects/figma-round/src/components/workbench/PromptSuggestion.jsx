import { useState } from 'react'

export default function PromptSuggestion({ label, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.06)',
        border: hovered ? '1px solid var(--border-hover)' : '1px solid var(--border-color)',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '12px',
        color: hovered ? '#ffffff' : 'var(--text-secondary)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {label}
    </button>
  )
}
