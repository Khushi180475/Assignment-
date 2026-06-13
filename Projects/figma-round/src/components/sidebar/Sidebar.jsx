import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import FlashLogo from './FlashLogo'
import SidebarProfile from './SidebarProfile'
import SearchBar from '../shared/SearchBar'
import { useSidebar } from '../../context/SidebarContext'

export default function Sidebar() {
  const { sidebarState, toggleSidebar } = useSidebar()
  const isCollapsed = sidebarState === 'collapsed'
  const location = useLocation()
  const [hoveredChatIdx, setHoveredChatIdx] = useState(null)

  const recentChats = [
    "Dual Momentum Strategy Report ...",
    "Backtest a strategy for shorting a...",
    "Generate 10 edge cases that will re...",
    "Compare these two prompt very p...",
    "Write a Python backtest using pre...",
    "Modify this backtest to use the tic...",
    "Score the following model output t...",
    "Review these 8 failed prompt and ...",
    "I have a strategy with these pile of...",
    "Add a benchmark comparison to m...",
    "My backtest currently ignores my r...",
    "Split my backtest results into 3 col...",
    "Generate 10 edge cases that will re..."
  ]

  const workspaceLinks = [
    {
      label: 'Workbench',
      path: '/workbench',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zM6 21a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v12a3 3 0 0 0 3 3zM3 18a3 3 0 0 0 3-3h12a3 3 0 0 0 0-6H6a3 3 0 0 0-3 3zM21 6a3 3 0 0 0-3 3H6a3 3 0 0 0 0 6h12a3 3 0 0 0 3-3z" />
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

  const supportLinks = [
    {
      label: 'Help Center',
      path: '/help',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    },
    {
      label: 'Documentation',
      path: '/docs',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      )
    },
  ]

  return (
    <div
      style={{
        height: '100vh',
        borderRight: '1px solid #1C2029',
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
          backgroundColor: '#161616',
          zIndex: -3,
        }}
      />

      {/* Rectangle 7: Earth Scenery Image Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/sidebar_bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          opacity: 1,
          zIndex: -2,
        }}
      />

      {/* Rectangle 8: Frosted dark gradient overlay layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(16, 16, 16, 0.82) 0%, rgba(16, 16, 16, 0.75) 100%)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          opacity: 1,
          zIndex: -1,
        }}
      />

      {/* Main Layout Flow Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          padding: isCollapsed ? '0 10px 12px 10px' : '0 20px 12px 20px',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Spacer to push down the flow items for the absolutely positioned logo header */}
        <div style={{ height: '66px', flexShrink: 0 }} />

        {/* Logo and Toggle Header */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: isCollapsed ? '15px' : '20px',
            right: isCollapsed ? '15px' : '20px',
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

        {/* Search Bar Group 5 */}
        <div
          style={{
            height: '40px',
            marginBottom: isCollapsed ? '12px' : '20px',
            position: 'relative',
          }}
        >
          <SearchBar />
        </div>

        {/* Divider 1 */}
        <div
          style={{
            height: '1px',
            backgroundColor: '#262626',
            margin: '0',
            marginBottom: isCollapsed ? '12px' : '20px',
          }}
        />

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
                color: 'rgba(255,255,255,0.3)',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: isCollapsed ? 'center' : 'stretch' }}>
            {workspaceLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  padding: isCollapsed ? '0' : '6px 12px',
                  width: isCollapsed ? '40px' : 'auto',
                  height: isCollapsed ? '40px' : 'auto',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  fontSize: '13px',
                  fontWeight: '500',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  backgroundColor: isActive ? 'rgba(172, 200, 33, 0.15)' : 'transparent',
                  color: isActive ? '#EEFF9A' : '#8F8F8F',
                  border: isActive ? '1px solid rgba(172, 200, 33, 0.2)' : '1px solid transparent',
                })}
                className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                title={isCollapsed ? link.label : undefined}
              >
                <span
                  style={{
                    fontSize: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '16px',
                    height: '16px',
                    marginRight: isCollapsed ? '0' : '8px',
                  }}
                >
                  {link.icon}
                </span>
                {!isCollapsed && <span>{link.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Divider 2 */}
        <div
          style={{
            height: '1px',
            backgroundColor: '#262626',
            margin: '0',
            marginBottom: '12px',
          }}
        />

        {/* SUPPORT Section */}
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
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                paddingLeft: '10px',
                marginTop: '16px',
                marginBottom: '4px',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              Support
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: isCollapsed ? 'center' : 'stretch' }}>
            {supportLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  padding: isCollapsed ? '0' : '6px 12px',
                  width: isCollapsed ? '40px' : 'auto',
                  height: isCollapsed ? '40px' : 'auto',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  fontSize: '13px',
                  fontWeight: '500',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  backgroundColor: isActive ? 'rgba(172, 200, 33, 0.15)' : 'transparent',
                  color: isActive ? '#EEFF9A' : '#8F8F8F',
                  border: isActive ? '1px solid rgba(172, 200, 33, 0.2)' : '1px solid transparent',
                })}
                className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                title={isCollapsed ? link.label : undefined}
              >
                <span
                  style={{
                    fontSize: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '16px',
                    height: '16px',
                    marginRight: isCollapsed ? '0' : '8px',
                  }}
                >
                  {link.icon}
                </span>
                {!isCollapsed && <span>{link.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

        {/* RECENTS Section */}
        {!isCollapsed && location.pathname === '/backtests' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '0',
              marginBottom: '12px',
            }}
          >
            {/* Divider 3 */}
            <div
              style={{
                height: '1px',
                backgroundColor: '#262626',
                margin: '0',
                marginBottom: '12px',
              }}
            />
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                paddingLeft: '10px',
                marginBottom: '4px',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              RECENTS
            </div>
            <div
              className="no-scrollbar"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '2px 0',
                maxHeight: '180px',
                overflowY: 'auto',
                marginTop: '6px',
              }}
            >
              {recentChats.map((chatText, index) => {
                const isHovered = hoveredChatIdx === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredChatIdx(index)}
                    onMouseLeave={() => setHoveredChatIdx(null)}
                    style={{
                      padding: '4px 10px',
                      fontSize: '11px',
                      lineHeight: '1.6',
                      color: isHovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)',
                      backgroundColor: isHovered ? 'rgba(255,255,255,0.04)' : 'transparent',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    title={chatText}
                  >
                    {chatText}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Profile Group */}
        <div
          style={{
            marginTop: 'auto',
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
