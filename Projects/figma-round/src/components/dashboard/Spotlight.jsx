import { latestPosts, spotlightFeature } from '../../data/dashboardFeed'
import FilterChip from './FilterChip'

// Figma node 6:74 "spotlight" — the feature card (node 6:84) pairs a 356x232 image
// carrying a blurred info bar with the "Latest Post" rail (node 6:86).
export default function Spotlight() {
  return (
    <section className="spotlight">
      <header className="feed-section__header">
        <h2 className="feed-section__title">Spotlight</h2>
        <FilterChip count={4} tone="olive" />
      </header>

      <div className="spotlight__card">
        <figure className="spotlight__feature">
          <img className="spotlight__feature-image" src={spotlightFeature.image} alt="" />

          <figcaption className="spotlight__info">
            <h3 className="spotlight__info-title">{spotlightFeature.title}</h3>
            <div className="spotlight__info-meta">
              <span>{spotlightFeature.date}</span>
              <span className="spotlight__info-dot" />
              <span>{spotlightFeature.readTime}</span>
            </div>
          </figcaption>
        </figure>

        <div className="spotlight__latest">
          <h3 className="spotlight__latest-title">Latest Post</h3>

          <ul className="spotlight__latest-list">
            {latestPosts.map((post) => (
              <li key={post.id} className="spotlight__post">
                <span className="spotlight__post-thumb" />
                <div className="spotlight__post-body">
                  <p className="spotlight__post-title">{post.title}</p>
                  <span className="spotlight__post-date">{post.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
