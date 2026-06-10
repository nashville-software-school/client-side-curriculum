/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "kneel_diamonds",
  title: "Kneel Diamonds",
  order: 40,
  description: "HTTP requests, async/await, JSON-server, and array methods.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
