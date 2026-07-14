import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import ThemeToggle from '../shared/ThemeToggle'
import useTheme from '../../context/useTheme'

const LANDING_PATHS = ['/', '/workbench', '/home', '/chats', '/projects', '/watchlist', '/workflows']

export default function AppLayout() {
  const location = useLocation()
  const { theme } = useTheme()
  const isLandingPage = LANDING_PATHS.includes(location.pathname)

  // The Figma frame is a screenshot of a desktop window, so its sage border,
  // rounded corners and traffic-light dots are mockup chrome, not UI — the app
  // itself fills the viewport.
  return (
    <div className="app-frame">
      <Sidebar />

      <div className="app-main">
        {/* On landing pages the toggle lives in the tab bar instead, so it
            cannot land on top of the right pane's collapse button. */}
        {!isLandingPage && (
          <div className="app-main__theme-toggle">
            <ThemeToggle />
          </div>
        )}

        {!isLandingPage && (
          <div className="app-main__backdrop">
            <img className="app-main__backdrop-image" src={theme.backgroundImage} alt="" />
            <div className="app-main__backdrop-fade" />
          </div>
        )}

        <div className="app-main__viewport">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
