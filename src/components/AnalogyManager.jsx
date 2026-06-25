import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { AnalogyPopover } from './AnalogyPopover'

export function AnalogyManager({ background }) {
  const [active, setActive] = useState(null) // { concept, context, anchorEl }

  const handleClick = useCallback((e) => {
    const span = e.target.closest('[data-analogy]')
    if (!span) return
    e.stopPropagation()

    const concept = span.dataset.analogy
    // Grab the surrounding paragraph text as context for the LLM
    const context = span.closest('p, li')?.textContent?.trim() || ''

    setActive({ concept, context, anchorEl: span })
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])

  if (!active || !background) return null

  return createPortal(
    <AnalogyPopover
      concept={active.concept}
      context={active.context}
      background={background}
      anchorEl={active.anchorEl}
      onClose={() => setActive(null)}
    />,
    document.body
  )
}
