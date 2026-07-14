import { NavLink } from 'react-router-dom'
import FlashLogo from './FlashLogo'
import SidebarProfile from './SidebarProfile'
import SearchBar from '../shared/SearchBar'
import { useSidebar } from '../../context/SidebarContext'
import useTheme from '../../context/useTheme'

export default function Sidebar() {
  const { sidebarState, toggleSidebar } = useSidebar()
  const { theme } = useTheme()
  const isCollapsed = sidebarState === 'collapsed'


  const workspaceLinks = [
    {
      label: 'Home',
      path: '/home',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      label: 'Chats',
      path: '/chats',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      label: 'Projects',
      path: '/projects',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      label: 'Watchlist',
      path: '/watchlist',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      label: 'Workflows',
      path: '/workflows',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      )
    },
  ]

  const recentsLinks = [
    {
      label: 'Workbench',
      path: '/workbench',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      label: 'My Backtests',
      path: '/backtests',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
  ]

  return (
    <div
      style={{
        height: '100%',
        borderRight: '1px solid var(--border-color)',
        width: isCollapsed ? 'var(--sidebar-collapsed-width)' : 'var(--sidebar-width)',
        transition: 'width 0.25s ease',
        overflow: 'hidden',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        isolation: 'isolate',
      }}
    >


      {/* Rectangle 2: Base Solid Background Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: isCollapsed ? 'var(--sidebar-collapsed-bg)' : 'var(--bg-secondary)',
          zIndex: -3,
          transition: 'background-color 0.25s ease',
        }}
      />

      {/* Rectangle 7: Earth Scenery Image Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("${theme.backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          opacity: isCollapsed ? 0 : 1,
          zIndex: -2,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Rectangle 8: Frosted dark gradient overlay layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--sidebar-overlay)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          opacity: isCollapsed ? 0 : 1,
          zIndex: -1,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Main Layout Flow Container.
          Collapsed, the rail follows node 108:115: logo at 60, nav at 179,
          separator at 363, recents at 407, profile at 935 — and no search. */}
      <div
        className={isCollapsed ? 'sidebar-flow sidebar-flow--rail' : 'sidebar-flow'}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isCollapsed ? '0 7px 12px 7px' : '0 20px 12px 20px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Spacer to push down the flow items for the absolutely positioned logo header */}
        <div style={{ height: isCollapsed ? '179px' : '66px', flexShrink: 0 }} />

        {/* Logo and Toggle Header */}
        <div
          style={{
            position: 'absolute',
            top: isCollapsed ? '60px' : '24px',
            left: isCollapsed ? '12px' : '20px',
            right: isCollapsed ? '12px' : '20px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: isCollapsed ? 'center' : 'space-between',
            zIndex: 10,
          }}
        >
          <FlashLogo collapsed={isCollapsed} />
          {!isCollapsed && (
            <button
              onClick={toggleSidebar}
              style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.25s ease',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10,
              }}
              aria-label="Toggle Sidebar"
              title="Collapse sidebar"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 3v18" />
              </svg>
            </button>
          )}
        </div>

        {/* Search Bar Group 5 — the design's rail has no search affordance. */}
        {!isCollapsed && (
          <>
            <div style={{ height: '40px', marginBottom: '20px', position: 'relative' }}>
              <SearchBar />
            </div>

            {/* Divider 1 */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'var(--border-color)',
                marginBottom: '20px',
              }}
            />
          </>
        )}

        {/* WORKSPACE Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0',
            marginBottom: '12px',
          }}
        >
          {!isCollapsed && (
            <div
              style={{
                fontSize: '10px',
                fontWeight: '600',
                color: 'var(--text-section-label)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                paddingLeft: '10px',
                marginTop: '0',
                marginBottom: '4px',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              Workspace
            </div>
          )}
          <div className={`nav-list${isCollapsed ? ' nav-list--rail' : ''}`}>
            {workspaceLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={`nav-item${isCollapsed ? ' nav-item--rail' : ''}`}
                title={isCollapsed ? link.label : undefined}
              >
                <span className="nav-item__icon">{link.icon}</span>
                {!isCollapsed && <span>{link.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Separator line — node 108:155, 30px wide, 363px down the rail. */}
        <div
          style={
            isCollapsed
              ? {
                  width: '30px',
                  height: '1px',
                  alignSelf: 'center',
                  backgroundColor: 'var(--rail-separator)',
                  margin: '20px 0 43px',
                }
              : { borderBottom: '1px solid var(--border-color)', margin: '12px 8px' }
          }
        />

        {/* RECENTS Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0',
            marginBottom: '12px',
          }}
        >
          {!isCollapsed && (
            <div
              style={{
                fontSize: '10px',
                fontWeight: '600',
                color: 'var(--text-section-label)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                paddingLeft: '10px',
                marginTop: '0',
                marginBottom: '4px',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              Recents
            </div>
          )}
          <div className={`nav-list${isCollapsed ? ' nav-list--rail' : ''}`}>
            {recentsLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={`nav-item${isCollapsed ? ' nav-item--rail' : ''}`}
                title={isCollapsed ? link.label : undefined}
              >
                <span className="nav-item__icon">{link.icon}</span>
                {!isCollapsed && <span>{link.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Profile Group — node 108:118 sits 935px down the 1018px rail. */}
        <div
          style={{
            marginTop: 'auto',
            marginBottom: isCollapsed ? '29px' : 0,
            width: '100%',
            boxSizing: 'border-box',
            zIndex: 10,
          }}
        >
          <SidebarProfile collapsed={isCollapsed} />
        </div>
      </div>
    </div>
  )
}
