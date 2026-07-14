import { upcomingEventGroups } from '../../data/dashboardFeed'
import EventCard from './EventCard'
import FilterChip from './FilterChip'

// Figma node 6:119 "upcoming events".
export default function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <header className="feed-section__header">
        <h2 className="feed-section__title">Upcoming Events</h2>
        <FilterChip count={2} tone="grey" />
      </header>

      {upcomingEventGroups.map((group) => (
        <div key={group.id} className="upcoming-events__group">
          <h3 className="upcoming-events__date">{group.date}</h3>
          <div className="upcoming-events__list">
            {group.events.map((event) =>
              // Node 108:320 "Event Card 8" is hidden but still occupies its
              // slot, so the design shows a gap here — keep it.
              event.placeholder ? (
                <div key={event.id} className="event-card-placeholder" />
              ) : (
                <EventCard
                  key={event.id}
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  crop={event.crop}
                />
              ),
            )}
          </div>
        </div>
      ))}
    </section>
  )
}
