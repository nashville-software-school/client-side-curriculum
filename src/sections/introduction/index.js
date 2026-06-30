import content from './index.md?raw'

const config = {
  id: "introduction",
  title: "Introduction",
  order: 1,
}

const chapters = [
  {
    id: "introduction",
    title: "Welcome to Nashville Software School",
    previousChapterId: null,
    nextChapterId: "setup_getting_started",
    sectionId: config.id,
    content,
  }
]

export { chapters, config }
