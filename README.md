# Client-Side Curriculum

A React + Vite template for building student-facing curriculum sites at Nashville Software School. Course content lives in markdown files; the app auto-discovers chapters, renders them with an embedded code editor, and tracks student progress.

Lesson authors can wrap any term in `<analogy>` tags in markdown content:

```md
<analogy>Functions</analogy> are the heart and soul of JavaScript developers.
```

When a student clicks a tagged term, a popover fetches a personalized analogy from an LLM — tailored to the student's professional background collected during the initial questionnaire. The analogy service endpoint is configured via `VITE_ANALOGY_SERVICE_URL`.

## Tech Stack

- **React 18** + **React Router v6**
- **Vite 6** (build tool + custom plugins)
- **Monaco Editor** (in-browser code editing)
- **nss-core** (NSS platform components and logic)
- Deployed to **GitHub Pages** (prod) and **AWS S3** (PR previews)

## Quick Start

1. Copy `.env.template` to `.env.local` and fill in the values:
   ```
   VITE_COURSE_NAME='Your Course Name'
   BASE_URL=your-course-slug
   VITE_LEARNING_PLATFORM_API=http://localhost:8000
   VITE_REQUIRES_GITHUB_AUTHENTICATION=false
   VITE_GLOBAL_PROGRESS_BAR=false
   ```

2. Install dependencies (requires an NPM token for `nss-core`):
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

   App runs at `http://localhost:5173/[your-course-slug]/`.

## Content Structure

Course content lives in `src/sections/`. Each section is auto-discovered by the app — no manual registration needed.

```
src/sections/
└── 01-your-module/
    ├── index.js          # section config (id, title, order)
    └── 01-chapter-name/
        ├── index.jsx     # chapter metadata and nav links
        ├── index.md      # lesson content (markdown)
        ├── exercise.js   # starter code (imported with ?raw)
        ├── solution.js   # solution code (imported with ?raw)
        └── tests.js      # tests (must export a `tests` array)
```

Prefix directories with numbers (`01-`, `02-`, …) to control display order.

## Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically. Pull requests get a preview deployment to S3.

### Enable GitHub Actions (new repos)

GitHub copies workflow files but **not** secrets, variables, or permissions — configure these on every new repo.

**Enable workflows:**
1. Click the **Actions** tab
2. If workflows are paused, click **"I understand my workflows, enable them"**

**Set workflow permissions:**
1. Go to **Settings → Actions → General**
2. Under **Workflow permissions**, select **"Read and write permissions"**
3. Check **"Allow GitHub Actions to create and approve pull requests"**

See the [NSS Workshops Platform docs](https://github.com/NSS-Workshops/platform) for full setup details including GitHub secrets and OAuth configuration.

## GitHub OAuth Apps (NSS org)

| Environment | Link |
|---|---|
| Localhost | https://github.com/organizations/nashville-software-school/settings/applications/3687637 |
| PR Previews (S3) | https://github.com/organizations/nashville-software-school/settings/applications/3690311 |
| Production | https://github.com/organizations/nashville-software-school/settings/applications/3687647 |
