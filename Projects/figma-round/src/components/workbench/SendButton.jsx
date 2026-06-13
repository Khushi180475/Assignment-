import { useState } from 'react'

export default function SendButton({ onClick, disabled }) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '12px',
        backgroundColor: '#1C1C1C',
        border: '1px solid #212121',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : (hovered ? 0.85 : 1),
        transition: 'all 0.2s ease',
        transform: 'rotate(0deg)',
      }}
      title="Send prompt"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: 'rotate(0deg)',
          opacity: 1,
        }}
      >
        {/* ^ Vector layout */}
        <path
          d="M 3.75 9 L 9 3.75 L 14.25 9"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* | Vector layout */}
        <path
          d="M 9 3.75 L 9 14.25"
          stroke="#FFFFFF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
