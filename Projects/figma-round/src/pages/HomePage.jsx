import { useRef, useState } from 'react'
import LandingHero from '../components/landing/LandingHero'
import LandingSidePanel from '../components/landing/LandingSidePanel'
import LandingTabs from '../components/landing/LandingTabs'
import ScrollUpButton from '../components/dashboard/ScrollUpButton'
import Spotlight from '../components/dashboard/Spotlight'
import UpcomingEvents from '../components/dashboard/UpcomingEvents'

// Figma node 6:2 (chat open) and node 9:324 (chat collapsed): the hero, prompt
// box, scroll-up button and news feed all scroll in one column, and the main
// column widens when the right chat collapses to its rail.
export default function HomePage() {
  const [isChatCollapsed, setIsChatCollapsed] = useState(false)
  const [isFeedRaised, setIsFeedRaised] = useState(false)
  const scrollRef = useRef(null)
  const feedRef = useRef(null)

  // The chevron pulls the news up: it lifts the feed to the top of the viewport,
  // and pressing it again drops back to the hero.
  const toggleFeed = () => {
    const scroller = scrollRef.current
    const feed = feedRef.current
    if (!scroller || !feed) return

    if (isFeedRaised) {
      scroller.scrollTo({ top: 0, behavior: 'smooth' })
      setIsFeedRaised(false)
      return
    }

    const target = feed.offsetTop - scroller.offsetTop
    scroller.scrollTo({ top: target, behavior: 'smooth' })
    setIsFeedRaised(true)
  }

  return (
    <div className="landing-page">
      <div className="landing-page__main">
        <LandingTabs />

        <div
          className="landing-page__content"
          ref={scrollRef}
          onScroll={(e) => setIsFeedRaised(e.currentTarget.scrollTop > 8)}
        >
          <div className="landing-page__hero">
            <LandingHero onSubmit={() => {}} />
          </div>

          <ScrollUpButton onClick={toggleFeed} raised={isFeedRaised} />

          <div className="dashboard-feed" ref={feedRef}>
            <div className="dashboard-feed__events">
              <UpcomingEvents />
            </div>
            <div className="dashboard-feed__spotlight">
              <Spotlight />
            </div>
          </div>
        </div>

        {/* Figma node 9:557 "Rectangle 946" — fade over the bottom of the feed. */}
        <div className="landing-page__fade" />
      </div>

      <LandingSidePanel
        collapsed={isChatCollapsed}
        onToggleCollapsed={() => setIsChatCollapsed((value) => !value)}
      />
    </div>
  )
}
