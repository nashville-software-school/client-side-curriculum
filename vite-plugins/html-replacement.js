import fs from 'fs/promises'
import path from 'path'

/**
 * HTML replacement plugin - replaces placeholders in HTML with dynamic values
 * Replaces %COURSE_NAME% and %COURSE_URL% placeholders in index.html and 404.html
 */
export const createHtmlReplacementPlugin = (courseName, courseUrl) => ({
  name: 'html-replacement',
  transformIndexHtml(html) {
    return html
      .replace(/%COURSE_NAME%/g, courseName)
      .replace(/%COURSE_URL%/g, courseUrl)
  },
  async writeBundle(options) {
    const outDir = options.dir || 'dist'
    const filePath = path.join(outDir, '404.html')
    let content = await fs.readFile(filePath, 'utf-8')
    content = content
      .replace(/%COURSE_NAME%/g, courseName)
      .replace(/%COURSE_URL%/g, courseUrl)
    await fs.writeFile(filePath, content)
  }
})