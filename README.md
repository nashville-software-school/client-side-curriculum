# Curriculum Site Template

A React-based template for creating student-facing curriculum workshop sites with interactive exercises, quizzes, and content management.

## Creating a New Course Repo

### 1. Create the repo from this template

1. Go to this template repo on GitHub
2. Click **"Use this template" → "Create a new repository"**
3. Choose your organization and give the repo a name — use a lowercase hyphenated slug (e.g. `intro-to-python`)
4. Set visibility to **Public** (required for GitHub Pages deployment)
5. Click **"Create repository"**

### 2. Add GitHub Secrets and Variables

Secrets and variables are **not** copied from the template — they must be set fresh on every new repo.

Go to **Settings → Secrets and variables → Actions** in the new repo and add the secrets and variables listed in the [Customization Checklist](#customization-checklist) below.

### GitHub OAUTH app details
#### Use for localhost
https://github.com/organizations/nashville-software-school/settings/applications/3687637

### Use for previews (PRs) deployed to S3 AWS 
https://github.com/organizations/nashville-software-school/settings/applications/3690311

#### Use for Prod
https://github.com/organizations/nashville-software-school/settings/applications/3687647


### 3. Enable GitHub Actions

GitHub copies the workflow files but **does not copy secrets, variables, or workflow permissions** — you must configure these on the new repo.

**Enable workflows:**
1. Click the **Actions** tab in the new repo
2. If you see a banner saying workflows aren't running, click **"I understand my workflows, enable them"**

**Set workflow permissions:**
1. Go to **Settings → Actions → General**
2. Under **Workflow permissions**, choose **"Read and write permissions"**
3. Check **"Allow GitHub Actions to create and approve pull requests"**

### 4. Clone and set up locally

```bash
git clone <your-new-repo-url>
```

Then follow the [Quick Start](#quick-start) steps below.

---

## Quick Start

### Prerequisites

First-time setup for a project that depends on **nss-core**:

- Create and set your **NPM token (`NPM_TOKEN`)** as described [here](https://github.com/NSS-Workshops/platform?tab=readme-ov-file#installation-consumer-projects-installation)

### Installation

1. **Create environment variables**:
   Create a `.env.local` file in the project root (use `.env.template` as a base):
   ```
   VITE_COURSE_NAME='Your Course Name'
   BASE_URL=your-course-slug
   VITE_LEARNING_PLATFORM_API=http://localhost:8000
   VITE_REQUIRES_GITHUB_AUTHENTICATION=false
   VITE_GLOBAL_PROGRESS_BAR=false
   ```

   If authentication is enabled, also add:
   ```
   VITE_OAUTH_CLIENT_ID=your_oauth_client_id
   VITE_PROXY_DOMAIN=your_proxy_domain
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173/[your-course-slug]/`.

---

## Using This Template

### Customization Checklist

#### 1. `package.json`
Change `"name"` from `"ADD COURSE NAME HERE"` to a lowercase, hyphenated slug matching your course:
```json
"name": "intro-to-python"
```

#### 2. `.env.local` (local development)

| Variable | What to set |
|---|---|
| `VITE_COURSE_NAME` | Full display name, e.g. `'Intro to Python'` |
| `BASE_URL` | URL-friendly slug, e.g. `intro-to-python` |
| `VITE_LEARNING_PLATFORM_API` | API endpoint URL |
| `VITE_REQUIRES_GITHUB_AUTHENTICATION` | `true` or `false` |
| `VITE_GLOBAL_PROGRESS_BAR` | `true` or `false` |
| `VITE_OAUTH_CLIENT_ID` | OAuth app client ID *(if auth enabled)* |
| `VITE_PROXY_DOMAIN` | OAuth proxy domain *(if auth enabled)* |

#### 3. GitHub Secrets — Deploy workflow

Set these in **Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|---|---|
| `WORKSHOP_NAME` | Course display name |
| `WORKSHOP_BASE_URL` | URL-friendly slug |
| `WORKSHOP_GLOBAL_PROGRESS_BAR` | `true`/`false` |
| `REQUIRES_AUTHENTICATION` | `true`/`false` |
| `OAUTH_CLIENT_ID` | *(if auth enabled)* |
| `OAUTH_CLIENT_SECRET` | *(if auth enabled)* |
| `VITE_PROXY_DOMAIN` | *(if auth enabled)* |
| `SLACK_WEBHOOK_URL` | Deployment Slack notifications |

#### 4. GitHub Secrets & Variables — PR Preview workflow

**Secrets:**

| Secret | Purpose |
|---|---|
| `WORKSHOP_NAME` | Course display name |
| `VITE_GLOBAL_PROGRESS_BAR` | `true`/`false` |
| `VITE_REQUIRES_GITHUB_AUTHENTICATION` | `true`/`false` |
| `AWS_ROLE_TO_ASSUME` | IAM role for S3 access |

**Variables** (Settings → Secrets and variables → Variables):

| Variable | Purpose |
|---|---|
| `AWS_REGION` | S3 region |
| `S3_BUCKET` | Bucket name for preview files |
| `S3_WEBSITE_BASE` | Base URL for PR preview links |

---

### Course Content Structure

Course content lives in `src/sections/`. Start by copying `src/sections/01-example/` as a template — the internal wiring is already set up. Each section is **auto-discovered**, so just create the folder with the right structure and the app picks it up automatically.

```
src/sections/
└── 01-your-module/
    ├── index.js              ← section config (id, title, order, description)
    └── 01-chapter-name/
        ├── index.jsx         ← chapter metadata (id, title, nav links)
        ├── index.md          ← markdown lesson content
        ├── exercise.js       ← starter code (imported with ?raw)
        ├── solution.js       ← solution code (imported with ?raw)
        └── tests.js          ← tests (imported as module, must export `tests` array)
```

**Naming convention:** prefix directories with a number (`01-`, `02-`, etc.) — this controls the display order.

#### Section config — `index.js`

Copy `src/sections/01-example/` and rename the directory. The only things to edit in `index.js` are the four values inside the `config` object: `id`, `title`, `order` (controls nav sort order), and `description`. Everything else in the file is wiring that never needs to change.

#### Chapter metadata — `index.jsx`

In each chapter's `index.jsx`, edit `id`, `title`, `description`, `previousChapterId`, and `nextChapterId`. The markdown content is auto-imported from `index.md` in the same folder — write your lesson there. Don't touch the import line at the top.

**Images:** use relative paths in markdown (`./image.png`) — the loader rewrites them to the correct asset URL automatically.

---

### Development Workflow

1. **Use this template** on GitHub → clone the new repo locally
2. **Set `"name"`** in `package.json` to your course slug
3. **Create `.env.local`** from `.env.template` and fill in all values
4. **Set GitHub repository secrets** for the deploy and PR preview workflows
5. **Create your content** under `src/sections/`
6. **Install and run**: `npm install` → `npm run dev`
7. **Deploy**: push to `main` — GitHub Actions handles the rest

---

## File Import Patterns

Understanding when to use `?raw` vs module imports:

### Use `?raw` for:
- Markdown content files (`.md`)
- Code files that should be displayed as text
- Exercise starter code
- Solution code
- Any file where you want the raw text content

### Use module imports for:
- JavaScript files that export functions or objects
- Test files that export a `tests` array
- Question files that export a `questions` array
- React components
- Any executable JavaScript code

---

## Support

For questions about the NSS Core platform or this template, refer to the [NSS Workshops Platform documentation](https://github.com/NSS-Workshops/platform).

---

*This template is developed by Nashville Software School to provide free, accessible curriculum development tools for educators.*
