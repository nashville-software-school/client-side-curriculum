/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "deshawns_dog_walking",
  title: "DeShawn's Dog Walking Service",
  order: 30,
  description: "State management, data relationships, and interactive UIs.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
