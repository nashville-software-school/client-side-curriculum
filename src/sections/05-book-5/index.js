/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.jsx', { eager: true })

// Section configuration
const config = {
  id: "book_5",
  title: "Book 5",
  order: 50,
  description: "React fundamentals: components, hooks, routing, and full CRUD.",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
