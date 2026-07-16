// Vercel serverless function — server-side GNews proxy.
//
// Why this exists: GNews's free tier only returns CORS headers for `localhost`
// origins, so a browser on a deployed domain cannot call it directly (it fails
// with a CORS error). Calling GNews from here (server-side, no browser CORS)
// and letting the client hit this same-origin endpoint fixes that — and keeps
// the API key on the server, out of the client bundle.
//
// Runs on Vercel automatically (any `.js` in /api). ESM because package.json is
// `"type": "module"`. Node 18+ provides a global `fetch`.

const GNEWS_ENDPOINT = 'https://gnews.io/api/v4/top-headlines'

export default async function handler(req, res) {
  const apiKey = process.env.GNEWS_API_KEY
  if (!apiKey) {
    // No key configured on the server → let the client fall back to mock.
    res.status(500).json({ error: 'GNEWS_API_KEY is not set on the server' })
    return
  }

  const max = Math.min(Math.max(Number(req.query?.max) || 5, 1), 10)
  const category = process.env.GNEWS_CATEGORY || 'business'
  const lang = process.env.GNEWS_LANG || 'en'

  const params = new URLSearchParams({
    category,
    lang,
    max: String(max),
    apikey: apiKey,
  })

  try {
    const upstream = await fetch(`${GNEWS_ENDPOINT}?${params.toString()}`)

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: `GNews responded ${upstream.status}` })
      return
    }

    const data = await upstream.json()

    // Cache at Vercel's edge so repeat visitors don't each burn GNews quota.
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800')
    res.status(200).json({ articles: Array.isArray(data.articles) ? data.articles : [] })
  } catch {
    res.status(502).json({ error: 'Failed to reach GNews' })
  }
}
