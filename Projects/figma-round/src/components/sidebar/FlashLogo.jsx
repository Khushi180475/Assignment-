import flashLogoMark from '../../assets/flashLogo.png'

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
      {/* Figma node 1:48 "Flash Logo" composited export */}
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <img
          src={flashLogoMark}
          alt="Flash"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
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


