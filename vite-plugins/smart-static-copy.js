import fs from 'fs'
import path from 'path'
import { normalizePath } from 'vite'
import { glob } from 'glob'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * Smart static copy plugin - syncs section images to public/assets/images/ at startup.
 *
 * The path rewriter in nss-core converts <img src="./images/foo.gif"> to
 * /{base}/assets/images/foo.gif, so images must be present in public/assets/images/
 * for Vite's dev server to serve them.
 *
 * Files are copied only when the source is newer than the destination.
 * Source files with duplicate basenames across exercises (same filename,
 * identical content) are deduplicated — only the first occurrence is copied.
 *
 * No server.restart() is called — public/ files are served directly by Vite's
 * dev server without a rebuild step, so images are available immediately after
 * this hook completes. imageWatcherPlugin handles new images added mid-session.
 */
export const smartStaticCopyPlugin = {
  name: 'smart-static-copy',
  async buildStart() {
    const projectRoot = path.resolve(__dirname, '..')
    const imagePattern = path.resolve(projectRoot, 'src/sections/**/*.{png,jpg,jpeg,svg,gif,webp,avif}')
    const sourceFiles = glob.sync(normalizePath(imagePattern))

    if (sourceFiles.length === 0) {
      console.log('[smart-static-copy] No source images found, skipping.')
      return
    }

    const destDir = path.resolve(projectRoot, 'public/assets/images')

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }

    // Deduplicate by basename — two exercises can share the same filename
    // (e.g. indiana-jeans-erd.png). Only copy the first occurrence.
    const seen = new Set()
    const uniqueSourceFiles = sourceFiles.filter(f => {
      const name = path.basename(f)
      if (seen.has(name)) return false
      seen.add(name)
      return true
    })

    let copiedCount = 0
    for (const sourceFile of uniqueSourceFiles) {
      const fileName = path.basename(sourceFile)
      const destFile = path.join(destDir, fileName)

      let needsCopy = true
      if (fs.existsSync(destFile)) {
        const sourceMtime = fs.statSync(sourceFile).mtime
        const destMtime = fs.statSync(destFile).mtime
        needsCopy = sourceMtime > destMtime
      }

      if (needsCopy) {
        try {
          fs.copyFileSync(sourceFile, destFile)
          copiedCount++
        } catch (error) {
          console.error(`[smart-static-copy] Failed to copy ${fileName}:`, error.message)
        }
      }
    }

    if (copiedCount > 0) {
      console.log(`[smart-static-copy] Copied ${copiedCount} image(s) to public/assets/images/`)
    } else {
      console.log('[smart-static-copy] All images up to date.')
    }
  }
}
