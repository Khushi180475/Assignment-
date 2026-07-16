// News service — fetches real headlines from GNews and maps them into the shape
// the Spotlight component already expects. The UI never talks to the API
// directly; it only ever sees `SpotlightData`, whether that came from the
// network or from the bundled mock fallback.
//
// GNews (https://gnews.io) is used because its free tier returns image, source,
// description, publishedAt and url in a single top-headlines call and allows
// browser requests. Swapping providers only means editing `mapArticle` +
// `buildRequestUrl` below — nothing in the components changes.

import { latestPosts as mockLatest, spotlightFeature as mockFeature } from '../data/dashboardFeed'
import spotlightHero from '../assets/news/spotlightHero.png'

/** Placeholder used whenever an article has no usable image. */
export const PLACEHOLDER_IMAGE: string = spotlightHero

/** A single normalized article, provider-agnostic. */
export interface NewsArticle {
  id: string
  title: string
  description: string
  image: string | null
  source: string
  /** Formatted for the featured card, e.g. "16 July". */
  dateLong: string
  /** Formatted for the latest-post rail, e.g. "16 Jul". */
  dateShort: string
  url: string | null
}

/** Everything the Spotlight section needs, in one object. */
export interface SpotlightData {
  feature: NewsArticle
  latest: NewsArticle[]
}

/** Raw GNews article — only the fields we consume are typed. */
interface GNewsArticle {
  title?: string
  description?: string
  content?: string
  url?: string
  image?: string
  publishedAt?: string
  source?: { name?: string; url?: string }
}

interface GNewsResponse {
  totalArticles?: number
  articles?: GNewsArticle[]
}

// Production talks to our own same-origin serverless proxy (src: api/news.js):
// GNews's free tier only allows browser CORS from localhost, so a deployed
// domain must reach GNews server-side. In dev we call GNews directly, which is
// allowed from localhost and keeps `bun run dev` working without a proxy.
const PROXY_ENDPOINT = '/api/news'
const GNEWS_ENDPOINT = 'https://gnews.io/api/v4/top-headlines'
const REQUEST_TIMEOUT_MS = 8000
const ARTICLE_COUNT = 5 // 1 featured + 4 latest

const env = import.meta.env as Record<string, string | undefined>
const IS_PROD = Boolean(import.meta.env.PROD)
const API_KEY = env.VITE_GNEWS_API_KEY?.trim()
const CATEGORY = env.VITE_GNEWS_CATEGORY?.trim() || 'business'
const LANG = env.VITE_GNEWS_LANG?.trim() || 'en'

/**
 * True when a live fetch should be attempted (mock mode off).
 * - Production: always try the proxy; if the server has no key or the request
 *   fails, the caller falls back to mock.
 * - Development: only if a client key exists for the direct GNews call.
 */
export function isNewsApiConfigured(): boolean {
  if (env.VITE_USE_MOCK_NEWS === 'true') return false
  return IS_PROD || Boolean(API_KEY)
}

function buildRequestUrl(): string {
  if (IS_PROD) {
    // Same-origin proxy — no CORS, key stays server-side.
    return `${PROXY_ENDPOINT}?max=${ARTICLE_COUNT}`
  }
  const params = new URLSearchParams({
    category: CATEGORY,
    lang: LANG,
    max: String(ARTICLE_COUNT),
    apikey: API_KEY ?? '',
  })
  return `${GNEWS_ENDPOINT}?${params.toString()}`
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function formatLong(iso?: string): string {
  const d = iso ? new Date(iso) : new Date()
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`
}

function formatShort(iso?: string): string {
  const d = iso ? new Date(iso) : new Date()
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`
}

/** Trim overly long copy to a sentence-ish length for the featured subheading. */
function truncate(text: string, max = 140): string {
  if (text.length <= max) return text
  return `${text.slice(0, max).trimEnd()}...`
}

function mapArticle(article: GNewsArticle, index: number): NewsArticle {
  const description = article.description?.trim() || article.content?.trim() || 'Tap to read the full story.'
  return {
    id: article.url || `article-${index}`,
    title: article.title?.trim() || 'Untitled',
    description: truncate(description),
    image: article.image?.trim() || null,
    source: article.source?.name?.trim() || 'News',
    dateLong: formatLong(article.publishedAt),
    dateShort: formatShort(article.publishedAt),
    url: article.url?.trim() || null,
  }
}

/**
 * Fallback built from the bundled mock so the section always renders — used when
 * no API key is configured or a request fails. Reuses the existing design data.
 */
export function getFallbackSpotlight(): SpotlightData {
  const feature: NewsArticle = {
    id: 'mock-feature',
    title: mockFeature.title,
    description: '',
    image: mockFeature.image,
    source: mockFeature.readTime,
    dateLong: mockFeature.date,
    dateShort: mockFeature.date,
    url: null,
  }

  const latest: NewsArticle[] = mockLatest.map((post) => ({
    id: post.id,
    title: post.title,
    description: '',
    image: null,
    source: '',
    dateLong: post.date,
    dateShort: post.date,
    url: null,
  }))

  return { feature, latest }
}

// Cache the in-flight promise so React StrictMode's double-mount (and any
// concurrent callers) share one network request rather than firing duplicates.
let inFlight: Promise<SpotlightData> | null = null

async function requestSpotlight(): Promise<SpotlightData> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(buildRequestUrl(), { signal: controller.signal })
    if (!response.ok) {
      throw new Error(`GNews request failed: ${response.status}`)
    }

    const body = (await response.json()) as GNewsResponse
    const articles = body.articles ?? []
    if (articles.length === 0) {
      throw new Error('GNews returned no articles')
    }

    const mapped = articles.map(mapArticle)
    return {
      feature: mapped[0],
      latest: mapped.slice(1, 5),
    }
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Fetch the Spotlight news. Resolves with mapped live data, or rejects so the
 * caller can fall back to `getFallbackSpotlight()`. Concurrent calls are
 * de-duplicated; a failed attempt clears the cache so a later retry can run.
 */
export function fetchSpotlightNews(): Promise<SpotlightData> {
  if (!isNewsApiConfigured()) {
    return Promise.reject(new Error('News API not configured'))
  }
  if (!inFlight) {
    inFlight = requestSpotlight().catch((error) => {
      inFlight = null
      throw error
    })
  }
  return inFlight
}
