import { useState } from 'react'

export default function RecentChatsHolder() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const items = [
    { title: 'Dual Momentum Strategy', time: '2h ago' },
    { title: 'Short the Stock analysis', time: 'Yesterday' },
    { title: 'Backtest Three review', time: '3 days ago' },
    { title: 'Compare Bench setup', time: 'Last week' },
  ]

  return (
    <div style={{ padding: '20px 16px' }}>
      {/* Title label */}
      <div
        style={{
          color: 'var(--text-secondary)',
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.06em',
          marginBottom: '16px',
          textTransform: 'uppercase',
        }}
      >
        Recent Chats
      </div>

      {/* List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((item, index) => {
          const isHovered = hoveredIdx === index
          const isLast = index === items.length - 1

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => alert(`Simulating navigation to chat: "${item.title}"`)}
              style={{
                padding: '10px 8px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
                cursor: 'pointer',
                backgroundColor: isHovered ? 'var(--bg-hover)' : 'transparent',
                borderBottom: isLast ? 'none' : '1px solid var(--border-color)',
                transition: 'background-color 0.15s ease',
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '11px',
                }}
              >
                {item.time}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
