export default function FlashLogo({ collapsed }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxSizing: 'border-box',
        height: '28px',
        opacity: 1,
      }}
    >
      {/* 28x28px Flat Dark Rounded Square */}
      <div
        style={{
          width: '28px',
          height: '28px',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Inter, system-ui, sans-serif',
            lineHeight: '1',
          }}
        >
          F
        </span>
      </div>

      {/* Brand Text */}
      {!collapsed && (
        <span
          style={{
            color: 'var(--text-primary, #000000)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            letterSpacing: '0.02em',
            animation: 'fadeIn 0.2s ease',
            whiteSpace: 'nowrap',
          }}
        >
          Flash
        </span>
      )}
    </div>
  )
}


