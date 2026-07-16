import { useEffect, useState } from 'react'
import { fetchSpotlightNews, getFallbackSpotlight, isNewsApiConfigured } from '../services/newsService'

/**
 * @typedef {import('../services/newsService').SpotlightData} SpotlightData
 * @typedef {'loading' | 'ready' | 'fallback'} SpotlightStatus
 */

/**
 * Loads Spotlight news for the section.
 *
 * - No API key (or mock mode) → returns the mock immediately as `fallback`,
 *   with no network request and no loading flash.
 * - Otherwise → `loading` first (skeleton), then `ready` on success or
 *   `fallback` (mock) if the request fails.
 *
 * The underlying service caches its request, so React StrictMode's double
 * mount in development does not trigger a second fetch.
 *
 * @returns {{ status: SpotlightStatus, data: SpotlightData }}
 */
export default function useSpotlightNews() {
  const [state, setState] = useState(() =>
    isNewsApiConfigured()
      ? { status: 'loading', data: getFallbackSpotlight() }
      : { status: 'fallback', data: getFallbackSpotlight() },
  )

  useEffect(() => {
    if (!isNewsApiConfigured()) return undefined

    let active = true
    fetchSpotlightNews()
      .then((data) => {
        if (active) setState({ status: 'ready', data })
      })
      .catch(() => {
        // API failure → keep the design populated with the existing mock data.
        if (active) setState({ status: 'fallback', data: getFallbackSpotlight() })
      })

    return () => {
      active = false
    }
  }, [])

  return state
}
