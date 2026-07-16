import LandingTabs from '../components/landing/LandingTabs'
import CompanySearch from '../components/watchlist/CompanySearch'
import FollowedCompanies from '../components/watchlist/FollowedCompanies'

// Figma node 38:507 (Watchlist): a 239px search column beside a 600px
// followed-companies column, under a Home / Chat / History tab bar.
// No right-hand chat pane on this page — the content spans the full width.
export default function WatchlistPage() {
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
    </div>
  )
}
