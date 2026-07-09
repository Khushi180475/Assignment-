import { useState } from 'react'
import { useSidebar } from '../context/SidebarContext'
import LandingHero from '../components/landing/LandingHero'
import LandingSidePanel from '../components/landing/LandingSidePanel'
import LandingTabs from '../components/landing/LandingTabs'
import ChatPanel from '../components/workbench/ChatPanel'

export default function HomePage() {
  const { sidebarState } = useSidebar()
  const isCollapsed = sidebarState === 'collapsed'
  const [isChatMaximized, setIsChatMaximized] = useState(false)

  return (
    <div className="landing-page">
      <div className="landing-page__main">
        <LandingTabs
          activeTab={isChatMaximized ? 'Chat' : 'Home'}
          onTabChange={(tab) => setIsChatMaximized(tab === 'Chat')}
        />
        {isChatMaximized ? (
          <div style={{ flex: 1, minHeight: 0 }}>
            <ChatPanel variant="full" onToggle={() => setIsChatMaximized(false)} />
          </div>
        ) : (
          <div className="landing-page__content">
            <LandingHero />
          </div>
        )}
      </div>

      <LandingSidePanel
        collapsed={isCollapsed}
        isChatMaximized={isChatMaximized}
        onMaximizeChat={() => setIsChatMaximized(true)}
      />
    </div>
  )
}
