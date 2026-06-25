import { useState } from 'react'

const BACKGROUNDS = [
  'Music',
  'Restaurants & Food Service',
  'Bars & Nightlife',
  'Healthcare & Medical',
  'Retail & Sales',
  'Construction & Trades',
  'Education & Childcare',
  'Transportation & Logistics',
  'Military / Veterans',
  'Arts & Creative Industries',
]

export function BackgroundQuestionnaire({ onComplete }) {
  const [selected, setSelected] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (selected) onComplete(selected)
  }

  return (
    <div className="analogy-questionnaire-overlay">
      <div className="analogy-questionnaire">
        <h2>Welcome to the NSS Curriculum</h2>
        <p>
          To give you better explanations, we'll personalize examples based on your background.
          What field did you come from before joining NSS?
        </p>
        <form onSubmit={handleSubmit}>
          <ul className="analogy-background-list">
            {BACKGROUNDS.map(bg => (
              <li key={bg}>
                <label className={selected === bg ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="background"
                    value={bg}
                    checked={selected === bg}
                    onChange={() => setSelected(bg)}
                  />
                  {bg}
                </label>
              </li>
            ))}
          </ul>
          <button type="submit" disabled={!selected} className="analogy-submit-btn">
            Save my preference
          </button>
        </form>
      </div>
    </div>
  )
}
