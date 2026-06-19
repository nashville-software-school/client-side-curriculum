/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "honey_rae_repairs",
  title: "Honey Rae's Repair Shop",
  order: 50,
  description: "React fundamentals: components, hooks, routing, and full CRUD.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
