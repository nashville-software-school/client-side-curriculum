import { sections, chapters } from './sections'
import config from './config'

import { Course } from '@nss-workshops/nss-core'
import './index.css'

import { useUserProfile } from './hooks/useUserProfile'
import { BackgroundQuestionnaire } from './components/BackgroundQuestionnaire'
import { AnalogyManager } from './components/AnalogyManager'

function App() {
  const { background, setBackground } = useUserProfile()

  return (
    <>
      {!background && <BackgroundQuestionnaire onComplete={setBackground} />}
      <Course chapters={chapters}
              config={config}
              nav={sections} />
      <AnalogyManager background={background} />
    </>
  )
}

export default App