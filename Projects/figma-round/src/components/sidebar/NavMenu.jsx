import { NavLink } from 'react-router-dom'

export default function NavMenu({ collapsed }) {
  const items = [
    { label: 'Workbench', path: '/workbench', icon: '⬡', top: 226 },
    { label: 'My Backtests', path: '/backtests', icon: '⊞', top: 281 },
    { label: 'Help Center', path: '/help', icon: '◎', top: 395 },
    { label: 'Documentation', path: '/docs', icon: '❒', top: 440 },
  ]

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
      }}
    >
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          style={{
            position: 'absolute',
            top: `${item.top}px`,
            left: collapsed ? '10px' : '19px',
            width: collapsed ? '40px' : '238px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            paddingLeft: collapsed ? '0' : '10px', // Centers the icon at exactly 19+10 = 29px from left
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            fontSize: '14px',
            fontWeight: '500',
            pointerEvents: 'auto',
            boxSizing: 'border-box',
          }}
          title={collapsed ? item.label : undefined}
        >
          {/* Nav Icon */}
          <span
            style={{
              fontSize: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '20px',
              height: '20px',
              marginRight: collapsed ? '0' : '12px',
            }}
          >
            {item.icon}
          </span>

          {/* Nav Label */}
          {!collapsed && (
            <span
              style={{
                whiteSpace: 'nowrap',
                animation: 'fadeIn 0.2s ease',
              }}
            >
              {item.label}
            </span>
          )}
        </NavLink>
      ))}
    </div>
  )
}
