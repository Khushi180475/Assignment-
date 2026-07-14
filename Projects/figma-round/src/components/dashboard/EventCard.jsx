// Figma nodes 6:132 / 6:143 / 6:154 / 6:165 / 6:176 etc. "Event Card"
// 240x80 card: 60x60 thumbnail, 9px title, 7px description, stacked avatar
// dots (node 6:134 "Group 1361") pinned to the bottom-right.
// Figma offsets each thumbnail rather than centring it (e.g. node 108:245 uses
// left:-51.46% at 177.78% width), so each item carries its own crop position.
export default function EventCard({ image, title, description, crop = '66%' }) {
  return (
    <article className="event-card">
      <img className="event-card__thumb" src={image} alt="" style={{ objectPosition: `${crop} center` }} />

      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__desc">{description}</p>
      </div>

      <svg className="event-card__dots" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
        <circle cx="9" cy="5" r="4.75" fill="var(--card-dot-bg)" stroke="var(--card-dot-border)" strokeWidth="0.5" />
        <circle cx="5" cy="5" r="4.75" fill="var(--card-dot-bg)" stroke="var(--card-dot-border)" strokeWidth="0.5" />
      </svg>
    </article>
  )
}
