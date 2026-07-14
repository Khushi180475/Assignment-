import LandingSidePanel from '../components/landing/LandingSidePanel'
import LandingTabs from '../components/landing/LandingTabs'
import CompanySearch from '../components/watchlist/CompanySearch'
import FollowedCompanies from '../components/watchlist/FollowedCompanies'
import { useState } from 'react'

// Figma node 38:507 "Flash Dashboard" (Watchlist): the same two-column grid the
// home feed uses — a 239px search column beside a 600px followed-companies
// column — under a Home / Chat / History tab bar.
export default function WatchlistPage() {
  const [isChatCollapsed, setIsChatCollapsed] = useState(false)

  return (
    <div className="landing-page">
      <div className="landing-page__main">
        <LandingTabs items={['Home', 'Chat', 'History']} active="Home" />

        <div className="landing-page__content">
          <div className="watchlist">
            <div className="watchlist__search">
              <CompanySearch />
            </div>
            <div className="watchlist__followed">
              <FollowedCompanies />
            </div>
          </div>
        </div>
      </div>

      <LandingSidePanel
        collapsed={isChatCollapsed}
        onToggleCollapsed={() => setIsChatCollapsed((value) => !value)}
      />
    </div>
  )
}
