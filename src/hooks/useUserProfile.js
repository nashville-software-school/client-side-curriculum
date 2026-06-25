import { useState } from 'react'

const STORAGE_KEY = 'nss_user_background'

export function useUserProfile() {
  const [background, setBackgroundState] = useState(
    () => localStorage.getItem(STORAGE_KEY) || null
  )

  function setBackground(value) {
    localStorage.setItem(STORAGE_KEY, value)
    setBackgroundState(value)
  }

  function clearBackground() {
    localStorage.removeItem(STORAGE_KEY)
    setBackgroundState(null)
  }

  return { background, setBackground, clearBackground }
}
