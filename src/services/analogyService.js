const ANALOGY_SERVICE_URL = import.meta.env.VITE_ANALOGY_SERVICE_URL

export async function fetchAnalogy({ concept, background, masteryLevel, context }) {
  if (!ANALOGY_SERVICE_URL) throw new Error('Analogy service is not configured for this environment.')

  const token = localStorage.getItem('github_token')

  const res = await fetch(`${ANALOGY_SERVICE_URL.replace(/\/$/, '')}/analogy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ concept, background, masteryLevel, context }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.error || `Request failed: ${res.status}`)
  }

  return res.json()
}
