import FilterChip from './FilterChip'
import useSpotlightNews from '../../hooks/useSpotlightNews'
import { PLACEHOLDER_IMAGE } from '../../services/newsService'

// Figma node 6:74 "spotlight" — the feature card (node 6:84) pairs a 356x232 image
// carrying a blurred info bar with the "Latest Post" rail (node 6:86).
//
// Data now comes from the news service via useSpotlightNews(); the markup,
// classes and layout are unchanged from the original mock-driven version.

// When a real article URL exists the card links out (new tab); otherwise (mock
// data) it renders as a plain wrapper so nothing about the layout changes.
// `.spotlight-link` is display:contents, so the anchor is layout-transparent.
function CardLink({ url, className, children, ariaLabel }) {
  if (!url) return <div className={className}>{children}</div>
  return (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

export default function Spotlight() {
  const { status, data } = useSpotlightNews()
  const isLoading = status === 'loading'
  const { feature, latest } = data

  return (
    <section className="spotlight">
      <header className="feed-section__header">
        <h2 className="feed-section__title">Spotlight</h2>
        <FilterChip count={4} tone="olive" />
      </header>

      <div className="spotlight__card">
        <CardLink
          url={isLoading ? null : feature.url}
          className="spotlight-link spotlight-link--feature"
          ariaLabel={feature.title}
        >
          <figure className={`spotlight__feature${isLoading ? ' is-loading' : ''}`}>
            {!isLoading && (
              <img
                className="spotlight__feature-image"
                src={feature.image || PLACEHOLDER_IMAGE}
                alt=""
                onError={(event) => {
                  event.currentTarget.src = PLACEHOLDER_IMAGE
                }}
              />
            )}

            <figcaption className="spotlight__info">
              <h3 className="spotlight__info-title">{isLoading ? '' : feature.title}</h3>
              <div className="spotlight__info-meta">
                <span>{isLoading ? '' : feature.dateLong}</span>
                {!isLoading && feature.source && <span className="spotlight__info-dot" />}
                <span>{isLoading ? '' : feature.source}</span>
              </div>
            </figcaption>
          </figure>
        </CardLink>

        <div className="spotlight__latest">
          <h3 className="spotlight__latest-title">Latest Post</h3>

          <ul className="spotlight__latest-list">
            {(isLoading ? PLACEHOLDER_POSTS : latest).map((post) => (
              <li key={post.id} className="spotlight__post">
                <CardLink
                  url={isLoading ? null : post.url}
                  className="spotlight-link spotlight-link--post"
                  ariaLabel={post.title}
                >
                  <span className={`spotlight__post-thumb${isLoading ? ' is-loading' : ''}`}>
                    {!isLoading && post.image && (
                      <img
                        className="spotlight__post-thumb-image"
                        src={post.image}
                        alt=""
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                    )}
                  </span>
                  <div className="spotlight__post-body">
                    <p className={`spotlight__post-title${isLoading ? ' is-loading' : ''}`}>
                      {isLoading ? '' : post.title}
                    </p>
                    <span className="spotlight__post-date">{isLoading ? '' : post.dateShort}</span>
                  </div>
                </CardLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// Four empty rows so the skeleton keeps the exact list height while loading.
const PLACEHOLDER_POSTS = [{ id: 's1' }, { id: 's2' }, { id: 's3' }, { id: 's4' }]
