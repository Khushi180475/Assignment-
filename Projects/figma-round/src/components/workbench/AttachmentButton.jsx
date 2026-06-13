import { useState } from 'react'

export default function AttachmentButton({ onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '28px',
        height: '28px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: hovered ? '#ffffff' : 'var(--text-muted)',
        
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      title="Add Attachment"
    >
      <span style={{ fontSize: '18px', lineHeight: 1, display: 'inline-flex' }}>⊕</span>
    </button>
  )
}
