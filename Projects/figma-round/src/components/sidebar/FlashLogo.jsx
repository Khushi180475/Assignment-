export default function FlashLogo({ collapsed }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxSizing: 'border-box',
        width: collapsed ? '30px' : '95px',
        height: '30px',
        transform: 'rotate(0deg)',
        opacity: 1,
      }}
    >
      {/* 30x30 Rounded Square - High-Fidelity Glossy Black Button */}
      <div
        style={{
          width: '30px',
          height: '30px',
          background: 'linear-gradient(180deg, #2c2c2e 0%, #171719 50%, #0c0c0d 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.28), inset 0 -1px 1px rgba(0, 0, 0, 0.5)',
          flexShrink: 0,
        }}
      >
        {/* Stylized metallic Flash "F" symbol */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoMetal" x1="20%" y1="30%" x2="80%" y2="80%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          {/* Chevron Part */}
          <path
            d="M 20 68 L 50 38 L 60 48 L 53 55 L 50 52 L 34 68 Z"
            fill="url(#logoMetal)"
          />
          {/* Lower-Right Split Block */}
          <path
            d="M 63 51 L 76 64 L 69 71 L 56 58 Z"
            fill="url(#logoMetal)"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {!collapsed && (
        <span
          style={{
            color: '#ffffff',
            fontSize: '18px',
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


