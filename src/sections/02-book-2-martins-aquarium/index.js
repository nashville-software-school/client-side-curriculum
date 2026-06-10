/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "martins_aquarium",
  title: "Martin's Aquarium",
  order: 20,
  description: "Build your first dynamic web page with HTML, CSS, and JavaScript.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
