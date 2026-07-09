export default function SidebarProfile({ collapsed }) {
  return (
    <div
      style={{
        padding: '10px 0',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        justifyContent: collapsed ? 'center' : 'flex-start',
        boxSizing: 'border-box',
      }}
    >
      {/* Avatar Circle - Initials Circle "CJ" */}
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: '#E3E3E3',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: '600',
            color: '#000000',
            lineHeight: '1',
          }}
        >
          CJ
        </span>
      </div>

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
                fontFamily: 'Inter, system-ui, sans-serif',
                color: 'var(--text-primary, #000000)',
                fontSize: '11px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Chirag S Jalade
            </span>
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                color: 'var(--text-secondary, #CACACA)',
                fontSize: '9px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginTop: '1px',
              }}
            >
              chirag@quanthive.in
            </span>
          </div>

          {/* Three dots option button */}
          <button
            onClick={() => alert('Simulated options menu')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary, #CACACA)',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              transition: 'color 0.2s ease',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '14px',
              lineHeight: '1',
              fontWeight: 'bold',
            }}
            title="Options"
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary, #000000)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary, #CACACA)')}
          >
            ⋯
          </button>
        </>
      )}
    </div>
  )
}
