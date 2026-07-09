export default function LandingTabs({ activeTab = 'Home', onTabChange }) {
  return (
    <div className="landing-tabs">
      <span
        className={`landing-tabs__item${activeTab === 'Home' ? ' landing-tabs__item--active' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={() => onTabChange?.('Home')}
      >
        Home
      </span>
      <span
        className={`landing-tabs__item${activeTab === 'Chat' ? ' landing-tabs__item--active' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={() => onTabChange?.('Chat')}
      >
        Chat
      </span>
      <span className="landing-tabs__item" style={{ cursor: 'pointer' }}>
        History
      </span>
    </div>
  )
}
