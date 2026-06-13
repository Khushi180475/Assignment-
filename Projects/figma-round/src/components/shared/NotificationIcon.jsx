import { useState } from 'react'

export default function NotificationIcon() {
  const [isOpen, setIsOpen] = useState(false)
  const notifications = [
    { id: 1, text: 'Backtest "Dual Momentum" completed successfully', time: '10m ago' },
    { id: 2, text: 'Portfolio rebalancing triggered for AAPL', time: '1h ago' },
    { id: 3, text: 'New documentation update available', time: '2d ago' },
  ]

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.2s ease',
        }}
        title="Notifications"
      >
        {/* Bell Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>

        {/* Glowing notification dot (mingcute:coin-3-line/notification badge representation) */}
        <span
          style={{
            position: 'absolute',
            top: '6px',
            right: '8px',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#00e676',
            boxShadow: '0 0 8px #00e676',
          }}
        />
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: 0,
              width: '280px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
              overflow: 'hidden',
              padding: '8px 0',
              animation: 'fadeIn 0.15s ease',
            }}
          >
            <div
              style={{
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#ffffff',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              Notifications
            </div>
            {notifications.map((notif) => (
              <div
                key={notif.id}
                style={{
                  padding: '10px 16px',
                  fontSize: '12px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.02)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div style={{ color: '#ffffff', marginBottom: '2px' }}>{notif.text}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '10px' }}>{notif.time}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
