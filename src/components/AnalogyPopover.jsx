import { useState, useEffect, useRef } from 'react'
import { useAnalogy } from '../hooks/useAnalogy'

const MASTERY_OPTIONS = [
  { value: 0, label: 'No knowledge' },
  { value: 1, label: 'Heard of it' },
  { value: 2, label: 'Can follow with help' },
  { value: 3, label: 'Can use independently' },
  { value: 4, label: 'Could teach it' },
]

export function AnalogyPopover({ concept, context, background, anchorEl, onClose }) {
  const [masteryLevel, setMasteryLevel] = useState(null)
  const [hoveredLevel, setHoveredLevel] = useState(null)
  const { analogy, isLoading, error, requestAnalogy, reset } = useAnalogy()
  const popoverRef = useRef(null)

  // Position the popover near the clicked element
  const [position, setPosition] = useState({ top: 0, left: 0 })
  useEffect(() => {
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect()
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: Math.min(rect.left + window.scrollX, window.innerWidth - 340),
      })
    }
  }, [anchorEl])

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && e.target !== anchorEl) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [anchorEl, onClose])

  function handleMasterySelect(value) {
    setMasteryLevel(value)
    reset()
    requestAnalogy({ concept, background, masteryLevel: value, context })
  }

  function handleChangeMastery() {
    setMasteryLevel(null)
    reset()
  }

  return (
    <div
      className="analogy-popover"
      ref={popoverRef}
      style={{ top: position.top, left: position.left }}
    >
      <div className="analogy-popover-header">
        <span className="analogy-popover-concept">{concept}</span>
        <button className="analogy-popover-close" onClick={onClose} aria-label="Close">✕</button>
      </div>

      {!masteryLevel && masteryLevel !== 0 ? (
        <div className="analogy-mastery-picker">
          <p>How familiar are you with this concept?</p>
          <div className="mastery-grid">
            {MASTERY_OPTIONS.map(opt => (
              <button
                key={opt.value}
                className="mastery-num-btn"
                onClick={() => handleMasterySelect(opt.value)}
                onMouseEnter={() => setHoveredLevel(opt.value)}
                onMouseLeave={() => setHoveredLevel(null)}
              >
                {opt.value}
              </button>
            ))}
          </div>
          <p className="mastery-description">
            {hoveredLevel !== null
              ? `${hoveredLevel} — ${MASTERY_OPTIONS[hoveredLevel].label}`
              : ' '}
          </p>
        </div>
      ) : isLoading ? (
        <div className="analogy-loading">Generating analogy…</div>
      ) : error ? (
        <div className="analogy-error">
          <p>{error}</p>
          <button onClick={handleChangeMastery}>Try again</button>
        </div>
      ) : analogy ? (
        <div className="analogy-result">
          <p className="analogy-text">{analogy.analogy}</p>
          <p className="analogy-example"><em>{analogy.example}</em></p>
          <button className="analogy-change-level" onClick={handleChangeMastery}>
            Change mastery level
          </button>
        </div>
      ) : null}
    </div>
  )
}
