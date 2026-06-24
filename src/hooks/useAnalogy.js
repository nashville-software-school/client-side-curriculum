import { useState, useRef } from 'react'
import { fetchAnalogy } from '../services/analogyService'

export function useAnalogy() {
  const [analogy, setAnalogy] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const cache = useRef(new Map())

  async function requestAnalogy({ concept, background, masteryLevel, context }) {
    const key = `${concept}||${background}||${masteryLevel}`

    if (cache.current.has(key)) {
      setAnalogy(cache.current.get(key))
      setError(null)
      return
    }

    setIsLoading(true)
    setError(null)
    setAnalogy(null)

    try {
      const result = await fetchAnalogy({ concept, background, masteryLevel, context })
      cache.current.set(key, result)
      setAnalogy(result)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  function reset() {
    setAnalogy(null)
    setError(null)
    setIsLoading(false)
  }

  return { analogy, isLoading, error, requestAnalogy, reset }
}
