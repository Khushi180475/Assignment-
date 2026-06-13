import { useSidebar } from '../../context/SidebarContext'

export default function WorkbenchBreadcrumb() {
  const { toggleSidebar } = useSidebar()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <button
        onClick={toggleSidebar}
        style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          transition: 'color 0.2s',
          backgroundColor: 'transparent',
          border: 'none',
        }}
        title="Toggle Sidebar"
        onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
      >
        ☰
      </button>
      <div style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>
        <span style={{ color: 'var(--text-muted)' }}>Workbench</span>
        <span style={{ color: 'var(--text-muted)', margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--text-secondary)' }}>Dual Momentum</span>
      </div>
    </div>
  )
}
