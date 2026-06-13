export default function SidebarProfile({ collapsed }) {
  return (
    <div
      style={{
        padding: '10px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        justifyContent: collapsed ? 'center' : 'flex-start',
        boxSizing: 'border-box',
      }}
    >
      {/* Avatar Circle - Sunset Scenery Profile Picture */}
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundImage: 'url("/profile_pic.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flexShrink: 0,
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      />

      {/* User Information */}
      {!collapsed && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0,
              flexGrow: 1,
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
              Chirag Jalade
            </span>
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.4)',
                fontSize: '11px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              chirag@quanthive.in
            </span>
          </div>

          {/* Logout button with outline SVG */}
          <button
            onClick={() => alert('Simulated log out')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent',
              border: 'none',
            }}
            title="Log out"
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ff4d4f')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)')}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
