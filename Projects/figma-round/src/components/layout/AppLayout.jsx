import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import ThemeToggle from '../shared/ThemeToggle'
import useTheme from '../../context/useTheme'

export default function AppLayout() {
  const location = useLocation()
  const { theme } = useTheme()
  const isLandingPage = location.pathname === '/workbench' || location.pathname === '/' || ['/home', '/chats', '/projects', '/watchlist', '/workflows'].includes(location.pathname)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-app, #FAFAF8)',
        position: 'relative',
        transition: 'background-color 0.35s ease',
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          height: '100%',
          background: 'transparent',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.35s ease',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '16px',
            zIndex: 20,
          }}
        >
          <ThemeToggle />
        </div>

        {/* Figma Background Earth & Rectangle 14 Layer */}
        {!isLandingPage && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            {/* Theme background image */}
            <img
              src={theme.backgroundImage}
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 1,
                transition: 'opacity 0.35s ease',
              }}
            />

          {/* Rectangle 14 (Gradient overlay layout) */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '197px',
              background: 'var(--gradient-overlay)',
              opacity: 1,
            }}
          />
        </div>
        )}

        {/* Page Content Viewport */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}
