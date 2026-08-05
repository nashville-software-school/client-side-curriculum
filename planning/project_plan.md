# NSS Client-Side Curriculum — Project Plan

## Purpose
This document is the guiding reference for restructuring the NSS client-side curriculum platform. It governs how we work, what we're building toward, and the order in which we tackle each session.

---

## Source Reference
- **Local paths** (this repo, the `nss-core` platform repo, the completed-project reference): see the contributor table in [`CLAUDE.md`](../CLAUDE.md) — identify the current contributor via `git config user.name`/`user.email` rather than assuming a single hardcoded path.
- **GitHub reference:** https://github.com/nashville-software-school/client-side-mastery
- Use the GitHub repo as a structural guide for content; it is not the source of truth for the new ID/chapter organization.

---

## How We Work

- Work **one chapter at a time** per session to keep context clean and changes focused.
- At the start of every session, follow [`CLAUDE.md`](../CLAUDE.md)'s session-start protocol (contributor identity, the Current Work claim board, and shared content conventions), then read `project_plan.md` and the relevant memory files before touching any code.
- At the end of every session, update all three governing documents as needed before running `/clear`:
  1. **`project_plan.md`** — mark the session complete, advance "next" to the following session
  2. **`concept_map.md`** — review exercises just completed; add missing terms, update Reinforced In, mark chapter as Reviewed ✓, flag any inconsistencies with ⚠️
  3. **`curriculum_map.md`** — verify IDs are correct (usually no changes needed, but confirm)
  - Then update the memory file at `.claude/projects/.../memory/project_curriculum_restructure.md` with what was done and what comes next. Memory is the handoff between sessions — the conversation context will not survive a `/clear`.
- **Prune stale history actively.** When session-level detail in the memory file (`project_curriculum_restructure.md`) is no longer actionable — because the work is complete and the decisions are captured in `project_plan.md` — delete it. The memory file should always reflect current state, not an append-only log. A good trigger: if a whole phase is complete and its decisions are stable, collapse its session history to a one-line status entry. See [`CLAUDE.md`](../CLAUDE.md) → "What's tracked here vs. private memory" for the general rule on what belongs in this repo versus private memory.
- **Transcript editing: one topic section per session.** When editing a transcript and the current topic section is complete (i.e., you reach the boundary where the next `### [Topic]` header gets inserted), stop work, update project_plan.md and memory with the partial progress, and tell the user you are ready for `/clear`. Begin the next topic section in the following session.
- **Completed project reference.** When questions arise about a specific exercise — expected output, correct variable names, intended code structure — refer to the completed-project path in the [`CLAUDE.md`](../CLAUDE.md) contributor table for a working example of the full course project.
- **Curl script boilerplate is the starting state.** Most chapters begin with a `curl` command that scaffolds the boilerplate for that exercise. That scaffolded code is the canonical starting point for the student. When evaluating whether code examples, variable names, or expected output in an exercise are correct, treat the curl script's output as the ground truth for the starting state, and the completed project (see [`CLAUDE.md`](../CLAUDE.md)) as the ground truth for the end state.

---

## Vision

### Near-Term
Restructure the curriculum into a clean **Section → Chapter → Exercise** hierarchy with accurate IDs and naming conventions.

### Long-Term
- `<Analogy>` tags on vocabulary terms throughout exercises, triggering API calls to Anthropic for student-personalized analogies
- Agent-tested code that scores student submissions on specific skills
- Gamification: badges, skill trees, progress tracking
- Skill levels graded from the concept map's vocabulary terms

---

## Core Structural Rules

### Hierarchy
```
Section (Book or Setup)
  └── Chapter (a named sub-project or topic cluster)
        └── Exercise (individual lesson/step)
```

### Section Types
- **Section 00: Setup** — Prerequisite before Book 1. Not a "book."
- **Books 1–5** — Named by their primary narrative project. The book name is separate from the chapter names inside it.
- **Explorer Chapters** — High-flier optional chapters structured like core chapters. Named "Explorer: [Chapter Name]"
- **Pioneer Projects** — Advanced multi-exercise projects. Named "Pioneer: [Project Name]"
- **Group Projects** — Collaborative end-of-book projects.
- **Self-Assessments** — Standalone chapters.

### ID Convention (new)
```
{section_slug}_{exercise_slug}
```
Where section is `setup`, `book_1`, `book_2`, etc.
Example: `book_1_queen_bee_intro` instead of the legacy `queen_bee_queen_intro`

---

## Books and Their Chapters (Target Structure)

### Section 00: Setup
*Extracted from Book 1's first 7 chapters. A prerequisite, not a book.*
- Installations for Everyone
- Installations for Mac Users
- Installations for Windows Users (Python)
- Installations for Windows Users (C#)
- Core Professional Skills
- Debugging Shortcuts
- ADHD Strategies

### Book 1: Functions & Modules
*The book is renamed. "Queen Bee" becomes a chapter inside it.*
- **Queen Bee** *(functions, debugging, iteration)*
- **Sequina's Surf Shop** *(debugging practice, modules)*
- **Björn's Wilderness Adventures** *(data, objects, modules combined)*
- Self-Assessment
- Explorer: Queen Bee
- Explorer: Sequina's Surf Shop
- Explorer: Björn's Wilderness Adventures
- Group Project: Fish Fusion

### Book 2: Martin's Aquarium
*HTML, CSS, DOM manipulation*
- **Dynamite Duo** *(HTML generation, DOM updates)*
- **Movie Majesty** *(components, rendering, algorithm)*
- **Martin's Aquarium** *(filtering, layout)*
- Self-Assessment
- Explorer: Dynamite Duo
- Group Project: Modern Farm

### Book 3: DeShawn's Dog Walking
*State management, data relationships, interactive UIs*
- **DeShawn's Dog Walking** *(state, foreign keys)*
- **Shipping Ship Ships** *(ERD, dependency graph)*
- **Brewed Awakenings** *(click events, locations)*
- Self-Assessment
- Group Project: Cider Falls Park

### Book 4: Kneel Diamonds
*HTTP, async/await, JSON-server, array methods*
- **Fox y Dog** *(fetch, then, async/await)*
- **Indiana Jeans** *(JSON-server, components, state)*
- **Kneel Diamonds** *(radio buttons, map method, change events)*
- **Cars 'R Us** *(dropdowns, factories)*
- Self-Assessment
- Explorer: Indiana Jeans
- Explorer: Kneel Diamonds
- Explorer: Cars 'R Us
- Pioneer: The Big Company
- Pioneer: Bouquet
- Pioneer: Honest Abe
- Advanced Project: Pen Pal Society
- Advanced Project: Giffygram
- Advanced Project: Truncheons & Flagons
- Advanced Project: Holiday Road
- Group Project: Exomine

### Book 5: Honey Rae's Repair Shop
*React: components, hooks, routing, CRUD*
- **Honey Rae's Repair Shop** *(React basics, tickets, routes)*
- **Chuckle Checklist** *(full CRUD)*
- **Learning Moments** *(auth, routes, full CRUD at scale)*
- Explorer: Deployment
- Capstone Resources
- Group Project

---

## Artifacts to Maintain

| File | Purpose |
|------|---------|
| `project_plan.md` | This document — guiding reference |
| `curriculum_map.md` | Full Book → Chapter → Exercise directory with current and target IDs |
| `concept_map.md` | Vocabulary terms mapped to exercises, with `<Analogy>` tagging context |

---

## Session Workflow

Work **one chapter at a time** per session:
1. Review the chapter's exercises (read the markdown content)
2. Confirm or update the chapter's target IDs in `curriculum_map.md`
3. Add/update vocabulary terms in `concept_map.md` based on what the exercises actually contain
4. Restructure the exercise files: rename directories, update IDs, update `previousChapterId`/`nextChapterId` navigation links
5. Update the book's `index.js` if the section ID or chapter list changes
6. Clear session, move to next chapter

---

## Session Order

| Session | Task |
|---------|------|
| 1 ✓ | Create planning documents; define new structure; map all chapters and target IDs |
| 2 ✓ | Create `00-setup` section; migrate chapters 01–07 from Book 1; rename Book 1 section |
| 3 ✓ | Restructure Book 1 → Queen Bee chapter (exercises 08–15) |
| 4 ✓ | Restructure Book 1 → Sequina's Surf Shop (exercises 16–23) |
| 5 ✓ | Restructure Book 1 → Björn (exercises 24–30), self-assessment, explorers, group project |
| 6 ✓ | Restructure Book 2 → Dynamite Duo (exercises 01–08) |
| 7 ✓ | Restructure Book 2 → Movie Majesty (exercises 09–15) |
| 8 ✓ | Restructure Book 2 → Martin's Aquarium (exercises 16–20), self-assessment, explorers, group project |
| 9 ✓ | Restructure Book 3 → DeShawn's Dog Walking (exercises 01–09) |
| 10 ✓ | Restructure Book 3 → Shipping Ship Ships (exercises 10–18) |
| 11 ✓ | Restructure Book 3 → Brewed Awakenings (exercises 19–23), self-assessment, group project |
| 12 ✓ | Restructure Book 4 → Fox y Dog (exercises 01–05) |
| 13 ✓ | Restructure Book 4 → Indiana Jeans (exercises 06–13) |
| 14 ✓ | Restructure Book 4 → Kneel Diamonds (exercises 14–22) |
| 15 ✓ | Restructure Book 4 → Cars 'R Us (exercises 23–28), self-assessment, explorers |
| 16 ✓ | Restructure Book 4 → Pioneer projects (exercises 35–50) |
| 17 ✓ | Restructure Book 4 → Advanced projects and group project (exercises 51–55) |
| 18 ✓ | Restructure Book 5 → Honey Rae's Repair Shop (exercises 01–16) |
| 19 ✓ | Restructure Book 5 → Chuckle Checklist (exercises 17–21) |
| 20 ✓ | Restructure Book 5 → Learning Moments (exercises 22–33), explorers, capstone, group project |
| ◑ | **Phase 2: Navigation UX** — Path B chosen; `nss-core` updated externally; all 173 chapter files updated with `chapterGroup`/`type`. **Blocked on an nss-core decision:** cross-course regression testing, then publishing the new `nss-core` version, before the local `npm link` can be removed. |
| ✓ | **Phase 2b: Course Landing Page** — resolved with a curriculum-side-only fix (`src/sections/introduction/`); the `nss-core` change originally scoped below was not needed |
| ✓ | **Phase 3: Broken Links** — All categories A–G complete |
| ✓ | **Phase 3.5: Housekeeping** — removed stray `type: "group-project"` values; added `chapterGroup` emojis across 116 files |
| ✓ | **Phase 3.6: Explorer Chapter Icons** — Björn's chapterGroup icon changed 🏕️ → 🌲; 14 Explorer exercise titles prefixed with their originating chapter's icon (see detail below) |
| ✓ | **Phase 4: General Errors** — typos, broken code examples, outdated syntax |
| ✓ | **Phase 4.5: Polish Pass** — spacing/formatting, localhost link audit, video audit, and transcript readability (18/18 exercises) all complete |
| ✓ | **Phase 4.6: Duplicate Title Cleanup** — nss-core renders `index.jsx`'s `title` as an `<h1>` above the markdown body; 194/202 exercises also had a redundant leading heading in `index.md`. 90 stripped, 112 kept (see detail below) |
| ◑ | **Phase 5: New Material Threads** — LLM integration across all books; longhand React hooks scaffolding in Books 1–4. Thread 3 (CS Theory Foreshadowing) reopened for a density pass (see detail below); Threads 1, 2, 4, 5 not started |
| — | **Phase 5.1: Exercise Standardization** — once Phase 5's threads are woven in, standardize the shape/flow of every exercise so the curriculum reads as one coherent course |
| — | **Phase 6: Curriculum Scripts** — audit and repair `course-bash-scripts` repo once new material is finalized |
| ◑ | **Phase 7: Testing Infrastructure** — GH Actions CI/CD and test suite authoring; depends on Phase 6 |
| — | **Phase 8: Concept Map Refactor** — final pass; reflects all content including new material from Phase 5; see detail below |
| — | **Phase 9: Analogy Tag Refactor** — see detail below |
| 🛑 | **Phase 10: Source Content Integration** — team decision required; missing `projects/` chapters and `supplement-foundations/` track not yet in platform |
| 🛑 | **Phase 11: Video Consolidation** — blocked on external prep; Screencastify → YouTube migration (16 exercises) and, once a unified YouTube account is ready, moving existing YouTube videos over to it |
| ✓ | **Phase 12: Transcript Side-by-Side Layout** — all 18 video+transcript pairs across 14 Book 5 files wrapped in `.video-transcript-row`; CSS-verified via static harness (live in-app check still pending, blocked on GitHub OAuth in headless session — see detail below) |
| 🛑 | **Phase 13: Explorer Cross-Linking** — link Explorer exercises back to the chapter they extend; blocked on the same nss-core cross-chapter link base-URL bug already tracked in Open Questions |

---

## Key Decisions Made

- **`queen_bee_` prefix is wrong.** "Queen Bee" is a chapter inside Book 1, not the book itself. New IDs: `book_1_queen_bee_*`.
- **Setup is a prerequisite section** (`00-setup`), not part of Book 1. Gated — students must complete Setup before Book 1.
- **Setup chapter IDs use `setup_` prefix** (e.g., `setup_getting_started`, `setup_adhd_strategies`).
- **Book 1 section ID is `book_1`, title is `"Book 1"`** — no subtitle. Chapters carry their own names.
- **Explorer chapters are first-class chapters** — structured like any other chapter, named "Explorer: [Chapter Name]".
- **Group Projects, Self-Assessments, Pioneer Projects** are all treated as named chapters at the same level.
- **Chapter names come from the first exercise's markdown content** — not the abbreviated directory prefix.
- **Concept map is vocabulary-first** — it lists terms that appear (or should appear) in exercise text, paired with the concept domain they belong to.
- **Work one chapter per session** to keep context clean and changes focused.
- **Section directories use short names:** `src/sections/01-book-1/`, `02-book-2/`, etc. — the legacy verbose suffixes (`-queen-bee`, `-martins-aquarium`, etc.) were removed. `00-setup` keeps its name since it is not a book.

---

## Open Questions / Future Decisions

- What is the skill-scoring schema for the gamification model?
- What does an `<Analogy>` tag look like in JSX, and what data does it pass to the API (term, book/chapter context, student profile)?
- **Explorer/Pioneer `previousChapterId` navigation:** Should the first exercise of an Explorer or Pioneer chapter point back to the last exercise of the chapter it expands, or continue chaining linearly through the Self-Assessment?
- Should Explorer and Pioneer chapters appear in the primary nav alongside core chapters, or in a separate "challenge" track? (Deferred to Phase 2 decision.)
- Should the concept map drive which exercises need content review? (Relevant to Phase 7.)
- **Cross-chapter link base URL bug (nss-core fix needed):** 44 absolute `/chapter_id` links across 12 files render as plain `<a>` tags and navigate outside the Vite base path (`/client-side-curriculum/`), causing 404s. Fix: nss-core's `Chapter` component should post-process rendered HTML to prepend `baseUrl` to any `href` starting with `/`. See `platform/memory/cross_chapter_links_base_url.md` for full spec. Interim workaround: prepend `/client-side-curriculum/` to all 44 link href values in the markdown (fragile — not recommended).

---

## Phase 2: Navigation UX ◑

### Where We Stopped (2026-06-23)

**Completed:**
- Team chose **Path B** — `nss-core` changes (Greg completed this externally on the platform repo)
- `nss-core` now supports two new optional fields on chapter data: `chapterGroup: string` and `type: string`
- All 173 chapter `index.jsx` files across Books 1–5 updated with the correct `chapterGroup` and `type` values per the `nav-refactor-context.md` mapping
- Dev server running at `http://localhost:5174/client-side-curriculum/` pointed at the local platform build via `npm link @nss-workshops/nss-core`

**Remaining before Phase 2 is fully closed:**
- Cross-course regression testing — verify the new `nss-core` branch doesn't break any existing courses
- Once testing passes: publish the new `nss-core` version and `npm unlink`/`npm install` in this repo
- Fix the hardcoded chapter IDs in `IntroPage.jsx` and `IntroRedirect` (`/what-is-algorithm`, `/github-account`) — these don't exist in this curriculum and will 404 for any unauthenticated or first-time visitor

**To restore the published package when done testing:**
```sh
# In this repo
npm unlink @nss-workshops/nss-core && npm install
# In platform repo
npm unlink
```

---

*Background: nss-core's `Navigation` component renders one flat ordered list of chapters per book — Book 1 has ~32 nav entries with no sub-grouping. There is no chapter-group or chapter-type concept in the current data model or nss-core UI. The team must choose a path before any implementation begins.*

### Problems to Solve

1. **No chapter grouping** — within each book, Queen Bee, Surf Shop, Björn, Self-Assessment, Explorers, and Group Project appear as one undifferentiated list. Students cannot orient themselves.
2. **No chapter type distinction** — no visual signal distinguishes a core exercise from a Self-Assessment, Explorer, Pioneer, or Group Project.
3. **Book-boundary navigation** — `previousChapterId: null` on each book's first chapter means no prev/next link crosses book boundaries. Decide if cross-book navigation is desired.

### Path A — Index Pages (no nss-core changes required)

Add a single "index" chapter at the head of each chapter group whose markdown content describes the group and links to every exercise within it.

**Path A1 — Index as orientation (exercises stay in nav)**
- ~20 new chapter files (one per chapter group across all books); no existing exercise files touched
- Nav grows slightly (e.g., Book 1: ~32 → ~40 items) but each group has a named landing page
- Links in index pages trigger a full page reload (nss-core renders markdown as static HTML — no React Router interception)
- **Effort:** low | **Does not solve:** exercises still run together in the nav; no type distinction

**Path A2 — Index as gateway (exercises hidden from nav)**
- Add `chapterGroup` field to each exercise's `index.jsx`; update each book's `index.js` by one line to use it as `sectionId`
- Exercises whose `sectionId` is not a registered nav section disappear from the sidebar; Book 1 nav shrinks from ~32 to ~8 items
- Students navigate exercises via prev/next only; index pages link into them
- **Known UX regressions:** no active nav highlight when on an exercise; nav progress bar counts index completions only
- **Effort:** large (~175 exercise files + ~20 index files) | **Resolves:** grouping; type distinction requires additional `type` field work

### Path B — nss-core changes

Modify `@nss-workshops/nss-core` to support `chapterGroup` and `type` fields natively, publish a new version, then consume it here.

- `chapterGroup` → nav renders sub-headings or collapsible sub-sections per book
- `type` (`"core"`, `"explorer"`, `"assessment"`, `"group_project"`, `"pioneer"`, `"capstone"`) → type badges/icons in nav; optional chapters can move to the existing "Optional Work" nav section
- No UX regressions; active state and progress tracking preserved
- **Effort:** two-repo coordination; requires a new nss-core release before this repo can consume it

### Team Decision Needed

| Question | Options |
|----------|---------|
| Which path? | A1 / A2 / B |
| Chapter type distinction | Badges/icons, separate optional section, or deferred |
| Cross-book prev/next | Yes (nss-core `rF` fix) / No (hard book boundaries) |
| Data fields to add | `chapterGroup`, `type`, `optional` — decide before any data work starts |

### Known Bug Fixed (Session 20)

**Book 1 was missing from the nav.** nss-core's `rF` function finds the head of each section's chapter chain by looking for `!previousChapterId`. Book 1's first chapter had `previousChapterId: "setup_adhd_strategies"` (cross-section), so `rF` returned an empty list. **Fixed:** set `previousChapterId: null` on `01-book-1/08-queen-intro/index.jsx`.

---

## Phase 2b: Course Landing Page ✓ COMPLETE

**Resolution:** Implemented as a curriculum-side-only fix — no `nss-core` changes needed. `src/sections/introduction/` was added as its own section with an `id: "introduction"` chapter at `order: 1`, rendering the course intro content directly as a normal chapter rather than requiring platform changes to `Course.jsx`/`IntroPage.jsx`. Image at `public/assets/learning-objectives.png`; global image CSS added to `src/index.css`. The planning detail below reflects the original approach that was considered and superseded by this simpler fix — kept for context.

*Motivation: long course repositories like this one have a meaningful README that serves as the student-facing introduction to the course — its goals, structure, and what students will build. Currently the platform's intro page is a generic animated screen with a "Start Learning!" button and no course-specific content. Surfacing the README as the actual landing page makes the first impression intentional and course-specific.*

### What Needs to Happen

**Platform changes (`@nss-workshops/nss-core`) — requires team decision:**

1. **`Course.jsx`** — add an optional `introContent` prop (raw markdown string); pass it to `<IntroPage />`.
2. **`IntroPage.jsx`** — accept a `content` prop; render it as markdown using the same renderer used in `Chapter.jsx`. Decide whether to keep the existing header/button UI above the content or replace it entirely.
3. **`IntroRedirect` / `IntroPage` navigation** — `IntroRedirect` currently hardcodes `/what-is-algorithm` and `/github-account` as chapter destinations. These don't exist in this curriculum. Fix to navigate to the first chapter in the first section (or accept a `firstChapterId` prop from `Course`).

**Curriculum change (this repo — trivial once platform is updated):**

- **`src/App.jsx`** — import `README.md` as a raw string and pass it as `introContent` to `<Course />`:
  ```jsx
  import introContent from '../README.md?raw'
  // ...
  <Course chapters={chapters} config={config} nav={sections} introContent={introContent} />
  ```
  The `?raw` import already works — every chapter exercise uses it.

### Team Discussion Points

| Question | Options |
|----------|---------|
| Where does the README land relative to GitHub auth? | Pre-auth only (static, no login required) / Post-auth only (inside the SPA) / Both (root always shows README; login button overlaid or linked) |
| Keep the existing header/button above the README content? | Yes (README supplements) / No (README replaces) |
| What triggers "I've seen the intro"? | Same cookie as today / A scroll-to-bottom + button / Always show |
| Should `firstChapterId` be a prop on `Course`, or derived automatically? | Prop (explicit) / Derive from `chapters` (automatic) |
| Does every course repo get its own README/landing, or is this opt-in? | Required / Optional via prop |

---

## Phase 3: Broken Links ✓ COMPLETE

### Audit Summary (2026-06-30)
- **Internal broken links:** 166 across 181 exercise files
- **External links:** 124 (107 unique) across 44 domains — spot-check deferred to Category G
- **Non-HTTP image references (`<img src>`):** 51

Work is divided into categories, each handled in its own session.

---

### Category A: Navigation Cruft ✓ COMPLETE (2026-06-30)

Dead-end navigation links left over from the legacy file structure. The platform has built-in prev/next navigation so these were redundant AND broken.

**Types removed:**
- 41× `Up Next: [Chapter Title](./CHAPTER_FILE.md)` — bottom of exercises in Books 4 & 5
- 7× `Back to [Table of Contents](../README.md)` — bottom of Setup exercises
- 4× `Next chapter: [Title](./MA_FILE.md)` — Martin's Aquarium chain (Book 2)
- 2× `[Table of Contents](../README.md)` — Book 4 exercises 05 and 13

**Result:** 54 links removed across 52 files. Entire link lines deleted, including any preceding `---` separator.

---

### Category B: Book 5 Cross-Reference Links ✓ COMPLETE (2026-06-30)

Inline callouts pointing students back to earlier exercises. Clicking them 404'd because the SPA routes by chapter ID, not file path.

**Types fixed:**
- 9× wireframe links → SPA chapter IDs
- 15× "Skills used" prereq list links → chapter IDs (anchor fragments dropped — SPA doesn't support in-page scroll)
- 6× "For more information" blockquote callout links → chapter IDs
- 2× Book 4 inline links to `FD_INTRO_TO_API.md` → `/book_4_fox_y_dog_intro_to_api`

**Result:** 32 links fixed across 12 files. One link intentionally left broken: `[explorer chapter](./EXPLORE_CSS.md)` in `24-learn-all-posts` — placeholder for a CSS explorer chapter not yet ported.

---

### Category C: Images via Markdown `![]()` Syntax ✓ COMPLETE (2026-06-30)

Two problems: (1) `![alt](url)` isn't path-rewritten (only `<img src>` is); (2) image files were never migrated from the source repo.

**Approach:**
- Downloaded each referenced image from the GitHub source repo (`client-side-mastery`) into the exercise's local `images/` directory
- Converted all `![]()` syntax to `<img src="./images/...">` via sed
- Only images currently referenced were downloaded; images for unported chapters deferred until those pages are ported

**Source book → GitHub directory mapping:**
- Book 1 → `book-1-queen-bee/chapters/images/`
- Book 2 → `book-2-martins-aquarium/chapters/images/`
- Book 3 → `book-3-deshawns-dog-walking/chapters/images/`
- Book 4 → `book-4-kneel-diamonds/chapters/images/`
- Book 5 → `book-5-honey-rae-repairs/chapters/images/`

**Result:** 34 exercise `images/` directories created; 47 images downloaded; 47 syntax conversions. Also fixed 3 files that used `./chapters/../images/` path (normalized to `./images/`).

---

### Category D: Group Project Sub-Chapter Files ✓ COMPLETE (2026-06-30)

Three group projects linked to sub-chapter `.md` files that were never migrated. Ported as individual exercises sourced from `client-side-mastery` (`master` branch).

**Modern Farm** — 9 chapters ported as `02-book-2/25-mf-management` through `33-mf-process-queue` (chapterGroup: "Group Project")
**Cider Falls Park** — 5 chapters ported as `03-book-3/26-cf-intro` through `30-cf-services` (chapterGroup: "Group Project")
**Truncheons & Flagons** — 8 chapters ported as `04-book-4/56-tf-structure-layout` through `63-tf-round-scores` (chapterGroup: "Advanced Projects")

Each exercise has `index.md` (content + images), `index.jsx` (chapter ID + nav chain), and an `images/` dir. Parent `index.md` tables updated to SPA `/chapter_id` links. Navigation chains wired — T&F intro now points into sub-chapters; `54-holiday-road` previousChapterId updated to `book_4_tf_round_scores`. Source images downloaded; `bludgeon.jpg` not present in source repo and was dropped.

**Status:** Complete.

---

### Category E: Broken `<img src>` References ✓ COMPLETE (2026-06-30)

Uses correct HTML syntax but paths are wrong. Two sub-types:

**E1 — `video-play-icon.gif` (18 refs, 17 files, Books 1–3):** All used the old path `../../book-1-queen-bee/chapters/images/video-play-icon.gif`, which also didn't match the `./`-prefixed regex so the path rewriter ignored it entirely. **Fix:** Downloaded one canonical copy to `src/sections/shared/images/video-play-icon.gif` (the `shared/` dir has no `index.js` so it's invisible to the nav glob). Updated all 18 refs to `./images/video-play-icon.gif` to match the path rewriter regex.

**E2 — `./images/...` missing locally (31 refs, 26 exercises):** Image files that used the correct `./images/` path but were never downloaded during migration. Affected exercises span Setup, Books 1, 3, 4, and 5. All source images confirmed in `client-side-mastery` (`master` branch). Note: the github-token-*.gif files are in `book-1-queen-bee/chapters/images/`, not a setup/ directory. **Fix:** Downloaded all 31 images into each affected exercise's `images/` dir. No markdown changes needed — syntax was already correct.

**Final audit:** 0 broken `./images/` refs; 0 legacy-path img src attributes remaining across all 181 exercise files.

**Status:** ✓ Complete.

---

### Category F: Misc One-Offs ✓ COMPLETE (2026-06-30)

| Link | File | Fix |
|------|------|-----|
| `./TROUBLESHOOT_VSCODE.md` | `00-setup/02-getting-started-mac/index.md` | Inlined full content from source (`book-1-queen-bee/chapters/TROUBLESHOOT_VSCODE.md`) directly in the mentor `<details>` block |
| `./data/honestabe.json` | `04-book-4/46-pioneer-abe-politicians/index.md` | Inlined full 634-line JSON database in a `<details>` block (Vite doesn't serve arbitrary files from `src/`) |
| `../../../supplement-api/chapters/API_CLIENTS.md` | `04-book-4/54-holiday-road/index.md` | Supplement track not in platform; removed link, kept "Thunder Client or Postman" as plain text |
| `./code/productPrice.js` | `03-book-3/21-ba-product-click/index.md` | Downloaded from source, then inlined as `<details>` code block |
| `./code/employeeSales.js` | `03-book-3/22-ba-employee-click/index.md` | Downloaded from source, then inlined as `<details>` code block |

**Status:** ✓ Complete. 5 files edited; 3 source files downloaded (honestabe.json, productPrice.js, employeeSales.js) but kept as local copies only — content served inline.

---

### Category G: External Links ✓ COMPLETE (2026-06-30)

**Spot-check results:**
- `watch.screencastify.com` (15 links) — 200 ✓
- `app.screencastify.com/v3/watch/...` (2 links) — 302 → 200 ✓ (redirect works)
- `learning.nss.team` (2 links) — 200 ✓
- `giffygram.nss.team` (1 link) — 200 ✓
- `truncheons.nss.team` (1 link) — DEAD (502). Removed "Previous Cohort Implementation" section from `04-book-4/56-tf-structure-layout/index.md`.
- YouTube, MDN, VSCode Marketplace, GitHub — all presumed stable.

**Also fixed:** `lcoalhost:3000` typo → `localhost:3000` in `02-book-2/13-mm-main/index.md`.

**New tab conversion:** All 122 external `[text](url)` markdown links converted to `<a href="url" target="_blank" rel="noopener noreferrer">text</a>` across 67 files. URLs inside fenced code blocks left untouched.

**Status:** ✓ Complete.

---

## Phase 3.5: Housekeeping ✓ COMPLETE (2026-07-13)

*Two cleanup items identified and resolved during the external link review pass.*

- Removed `type: "group-project"` from all group project `index.jsx` files (Books 1, 3, 4, 5 — Book 2 was already clean).
- Added emojis to all 14 `chapterGroup` values across 116 files (Queen Bee already had 👑; all others assigned matching emojis).
- Also documented (in the `platform` repo, not here): an `nss-core` JavaScript code block rendering bug where HTML tags inside JS template literals render as real DOM elements instead of literal text — see `platform/memory/js_codeblock_html_rendering.md`. Fix requires changes to `nss-core`'s `marked` renderer; tracked as an open `nss-core`-side item.

---

## Phase 3.6: Explorer Chapter Icons ✓ COMPLETE (2026-07-21)

*All Explorer exercises across every book shared one flat `chapterGroup: "Explorer Chapters"` value with no per-project distinction, and no icon anywhere tying an Explorer exercise back to the chapter it extends. Decision: keep the nav structure exactly as-is (one flat "Explorer Chapters" group, no `nss-core` change) and instead prefix each Explorer exercise's `title` with the icon of the chapter it maps to, using the `id` field's `book_N_explorer_{chapter}_*` naming to determine the mapping.*

**Also fixed:** Björn's Wilderness Adventures' `chapterGroup` icon was 🏕️ (tent) — hard to distinguish from other icons at a glance. Changed to 🌲 across all 7 core chapter files (exercises 24–30).

**Explorer title icon mapping (14 of 16 files — see table):**

| Exercise | Chapter it extends | Icon added |
|---|---|---|
| `32-explorer-queen-modular` "Modular Majesty" | Queen Bee | 👑 |
| `33-explorer-queen-database` "Combined Data" | Queen Bee | 👑 |
| `34-explorer-queen-array-find` "Finding Tribute" | Queen Bee | 👑 |
| `35-explorer-surf-modular` "Separate Reports" | Sequina's Surf Shop | 🏄 |
| `36-explorer-bjorn-module-madness` "Modular Madness" | Björn's Wilderness Adventures | 🌲 |
| `37-explorer-bjorn-database` "Tours Consolidated" | Björn's Wilderness Adventures | 🌲 |
| `38-explorer-bjorn-array-find` "Filtering Tours" | Björn's Wilderness Adventures | 🌲 |
| `22-explorer-duo-variables` "Are you primitive?" | Dynamite Duo | 💥 |
| `23-explorer-duo-copies` "Copy me if you can" | Dynamite Duo | 💥 |
| `30-explorer-ij-more-inputs` "Adding Form Inputs" | Indiana Jeans | 👖 |
| `31-explorer-ij-state-map` "Replace Object With Map" | Indiana Jeans | 👖 |
| `32-explorer-kd-earrings` "Ordering Earrings & Necklaces" | Kneel Diamonds | 💎 |
| `33-explorer-kd-advanced-state` "User Option Choices as State" | Kneel Diamonds | 💎 |
| `34-explorer-cb-more-factories` "Expanded Auto Offerings" | Cars 'R Us | 🚗 |

**Left unprefixed (2 files):** `05-book-5/34-explorer-cloud-api` and `35-explorer-cloud-static` (Digital Ocean deployment) — these form their own "Explorer: Deployment" chapter per the target structure, not an extension of Honey Rae's/Chuckle Checklist/Learning Moments, so no existing chapter icon applies.

**Note:** Book 3 has no Explorer chapters at all (confirmed — not an oversight).

---

## Phase 4: General Errors ✓ COMPLETE

*Scope: all exercise markdown content across all 5 books and Setup. This is an editorial pass — finding and fixing errors that would confuse or block students.*

### Categories

- **Typos and grammar** — misspelled words, broken sentences, incorrect terminology
- **Broken code examples** — code blocks that use outdated syntax, reference variables that don't exist, or won't run in the current environment
- **Inconsistent naming** — exercises that refer to files, functions, or variables by names that don't match what was created in prior steps
- **Outdated tool references** — instructions for tools or versions that have changed (e.g., deprecated npm packages, renamed CLI commands)
- **Instruction drift** — step-by-step instructions that skip steps, assume context that hasn't been established, or contradict the preceding exercise

### Work to Do

- Read every exercise in order, within each book
- Log errors by type and exercise ID
- Fix errors that have a clear correct answer
- Flag errors that require a curriculum design decision (e.g., whether to update an approach or remove the exercise)

### Session Log

| Chapter | Status | Notes |
|---------|--------|-------|
| Setup: Getting Started (all platforms) | ✓ | mac: "an mentor" ×5 fixed, duplicate Homebrew block removed; win: "Copy pasta" fixed; win-csharp: "you an work" fixed, "Windows Terminal Preview" → "Windows Terminal" |
| Setup: Core Professional Skills | ✓ | "at a the follow skills", "This the ability", "functions implement" — 3 grammar fixes |
| Setup: Debugging Shortcuts | ✓ | No errors found |
| Setup: ADHD Strategies | ✓ | "an mentor", "Visit" typo, "earthy" → "earthly", "of if" → "or if" — 4 fixes |
| Book 1: Queen Bee | ✓ | 09: "Copy pasta"×2, "the follow"×2, quoted console.log output removed; 11: "Copy pasta"×2, "queen's name" missing "the", Unfortunately typo; 12: comment added to starter code re: queens array; 14: tribute typo, "that values" → "the values", Hint 2 description wrong |
| Book 1: Sequina's Surf Shop | ✓ | 16: "understand" → "understanding"; 17: "job is understand" ×1; 18–20: step numbering fixed (1→3 became 1→2); 18–19: "job is understand" ×2; 19: "accounting form" → "firm", REPL notation removed from JS code block; 21: `properties.js` → `averagePrice.js` (stale name); 22: "odularize" typo, "import the data" → "import the functions"; 23: algorithmic typo, "Properties" → "AveragePrice" in actors list |
| Book 1: Björn's Wilderness Adventures | ✓ | 24: "so easily" → "so easy"; 25: "Bjorn" → "Björn", "should looks like" fixed across 25–28; 26: duplicate "the the"; 28: "produces does the same" → "does the same"; 36 explorer: `bjorn.js` → `adventure.js` ×2 (file never created) |
| Book 1: Self-Assessment | ✓ | No errors found |
| Book 1: Explorer chapters | ✓ | No additional errors (35, 37–38) |
| Book 1: Group Project | ✓ | No errors found |
| Book 2: Dynamite Duo | ✓ | 01: "don't any content" (missing "have"), "SSH options/command" ×2; 02: "Copy pasta", "an mentor"; 04: missing `getHeroes` getter + `heroes.js` update (broke after removing `export const database`) — fixed with Socratic prompt + hints; 07: "The goals is"; 08: "non-intuitive" |
| Book 2: Movie Majesty | ✓ | 11: Step 3 code missing `export` (refactored to Socratic challenge in Step 4 + hint), "never explain" → "never explained"; 13: Conclusion incorrectly included CSS bullets before CSS chapters — trimmed to JS-only; 15: Step 3 implied link might be missing (it was set up in ex. 09) — updated to "verify", fixed `./styles/` → `styles/` consistency; conclusion "upcoming chapters" → correct handoff to Martin's Aquarium |
| Book 2: Martin's Aquarium | ✓ | 16: removed stray empty bash block, fixed description ("CSS at end of body" → in `<head>`); 17: duplicate Step 4 labels (second → Step 5), "Create a new file" → "Open the file" (already created in ex. 16); 20: narrative typos (Martin's/hurriedly/you eyes/could understanding/hard to understanding ×5), "three functions module" phrasing, "Martin's has specified"; added process-based hint below starter code skeleton |
| Book 2: Self-Assessment | ✓ | 21: "your task to build" → "your task is to build" |
| Book 2: Explorer chapters | ✓ | 22: stray `"` end of para 1, double "and" ×2, missing comma in `console.log` (SyntaxError), "to a see" ×2; 23: "Create a files" → "Create the following files" |
| Book 2: Group Project | ✓ | 24: "working products" → "working product"; 25: "visit an mentor", "responsible" spelling; 28: `fields.js` → `field.js` (wrong filename), "to be plants" → "to be planted"; 32: "return the the last crop", "occasionally" spelling; 33: section header said "Stack Data Structures" for Queue chapter |
| Book 3: DeShawn's Dog Walking | ✓ | 03: "encourage" → "encouraged", "developer store" → "developers store"; 05: "metadate" → "metadata" |
| Book 3: Shipping Ship Ships | ✓ | 13: "Only the primary" → "Only the primary key"; 14: "hauling ship objects" → "shipping ship objects", same primary key fix; 15: "item the store" → "item to store"; 16: title was "Hauler Cargo" (copy of ex.15) → "Shipping Ship's Hauler" |
| Book 3: Brewed Awakenings | ✓ | 19: "Viual" → "Visual"; 21: "an mentor" → "a mentor"; 22: "an mentor" → "a mentor", `const fulfilledOrders` → `let fulfilledOrders`; 23: "many subject" → "many subjects" |
| Book 3: Self-Assessment | ✓ | 24: "the would like" → "they would like", "should should contain" → "should contain" |
| Book 3: Group Project | ✓ | 25: "challenging that" → "challenging than"; 26: "Ther eis" → "There is", "services is supports" → "services it supports", "area support" → "area supports"; 27: "you hav" → "you have", "be visting" → "be visiting", "the you have" → "then you have", "answer both one" → "answer to both of"; 28: "spcific" → "specific"; 30: "displayed show" → "displayed showing" |
| Book 4: Fox y Dog | ✓ | 01: duplicate "6." in key concepts fixed → "7.", "Api" → "API"; 02: "Copy pasta"×2, truncated sentence ("URLs from" → "URLs from the APIs."); 03: "javascript" → "JavaScript", "different two" → "two different"; 04: "That promises still fulfilled" → "That promise was still fulfilled"; 05: "who's" → "whose", spurious `<analogy>Key</analogy>` tag removed, list skips 3→fixed twice, missing `=` in ❌ code example |
| Book 4: Indiana Jeans | ✓ | 06: "her's" → "hers", "pair a" → "pair of", "boiler plate" → "boilerplate"; 07: missing verb "Open" added, version `0.17.3` → `0.17.4` (install command installs 0.17.4); 09: "Fox y Cat" → "Fox y Dog", algorithm hint list 1,2,3,5,6 → 1,2,3,4,5; 10: code bug — handler checked `"ownJeans"` but radio buttons use `name="ownsJeans"` (fixed both code and description), removed false bullet "Each function logs to console"; 12: "the the" → "the", Key Concepts list 1,2,4 → 1,2,3; 13: "defined the type" → "define the type" |
| Book 4: Kneel Diamonds | ✓ | 14: "Intead" → "Instead", "vitage" → "vintage"; 16: `database.js` → `database.json`; 17: "Indian Jeans" → "Indiana Jeans", "correct use" → "correctly use", `render` missing `async`; 18: "to to" → "want to", `const optionsHTML +=` → `optionsHTML +=` (syntax error), "`size` parameter" → "`metal` parameter"; 19: "defualt" → "default"; 21: "Diplaying" → "Displaying", missing `await` on `fetchResponse.json()` |
| Book 4: Cars 'R Us | ✓ | 23: "animataion" → "animation" (alt text), "the follow options" ×3 → "following", "reat" → "rear", "an mentor" → "a mentor"; 24: "displayed...an an" → "displays...as an"; 25: extra "them" removed; 27: `?)__` → `?)_` (stray underscore broke italic close); 28: "paramter" → "parameter", "toLocalString()" → "toLocaleString()" in prose |
| Book 4: Self-Assessment | ✓ | 29: list numbering skipped 3 (1,2,4,5,6,7 → 1,2,3,4,5,6) |
| Book 4: Explorer chapters | ✓ | 31: "representaiton" → "representation", `iPhone2.get(price)` → `get("price")` (unquoted key); 32: "earrings 4x" → "necklace 4x" (copy-paste error); 33: "You seen" → "You've seen", "styles, or metal" → "style, or metal"; 34: second "If a car" → "If a truck" (copy-paste error) |
| Book 4: Pioneer projects | ✓ | 35: "name, and age" → "name" (no age field in data model); 36: "an 4" → "4", "code the generates" → "that generates"; 37: "refactor you" → "your"; 38: `EmployeeList` missing `async`, duplicate `const response` → `ecResponse`; 39: "relationships" → "relationship", "approrpriately" → "appropriately", "for build" → "for building"; 40: "**Flowers**resource" → "**Flowers** resource"; 42: "Distibutors" × 2 → "Distributors", missing period; 45: URL missing closing `)` in Wikipedia href; 46: "going list" → "going to list", "Workforce ERD" → "Honest Abe ERD"; 47: "Infuential" → "Influential", "going list" → "going to list"; 48–49: "going list" → "going to list"; 50: "you task" → "your task" |
| Book 4: Advanced projects | ✓ | 51: "an recipient" → "a recipient", missing "a" before textarea; 52: "An new" → "A new", "an mentor" → "a mentor"; 54: "will a national park" → "will be a national park", "fetures" → "features", "to the the latitude" → "to get the latitude" |
| Book 4: Group Project | ✓ | 55: no errors |
| Book 4: T&F sub-chapters | ✓ | 56: "are be arranged" → "are to be arranged", "distract a Knight" → "distracts", "Bludgeons" → "Truncheons", "cumulative of" → "cumulative total of"; 58: "one some game score" → "some game scores"; 59: "Create a array" × 3 → "an array"; 62: "immediate display" → "immediately display"; 63: "saves a round scores" → "a round of scores", "the score" → "the scores" |
| Book 5: Honey Rae's Repair Shop | ✓ | **Pre-pass (2026-07-14):** Extracted transcripts from all 18 YouTube videos via yt-dlp + VTT parser; embedded as collapsible `<details>` blocks with `[MM:SS]` topic markers in ex 01–16 (ex 03 skipped — Screencastify; ex 09 has no video). **Editorial fixes:** 01: "call in an mentor"; 02: missing backtick in template literal, extra `)` in onClick; 03: "Expand to the your"; 04: wrong alt text; 05: double `return (`, missing `}` in App fn, "it's value", "and and"; 06: JSX missing fragment wrapper, missing `}` in Ticket fn, broken emoji; 07: stray `u` in note, "this function this function"; 08: `</>` closing div, `<h1></h2>` ×2, `<>` instead of `</>` ×2; 09: "this exercises"; 10: missing space before backtick, "set up up", `path="/">`, "you child route", wrong alt text; 11: "fo routes", `</Route>` → `</Routes>`, `path="/">` ×4, missing fragment wrapper ×4, "/projcets", stray backtick, "the the user", value `3`→`2`, wrong alt text, "to the the new route"; 12: "we has to pass"; 14: missing space before backtick |
| Book 5: Chuckle Checklist | ✓ | 17: "This a" → "is a", `width="10000"` → `"1000px"`, missing `</details>` added; 18: `steve.png` copied to images dir (was missing), code fence `javascript` → `jsx`; 19: "your not" → "you're not", "joke are" → "jokes are", "in it's own" → "in its own"; 20: "same expect for" → "except", "If told it" → "If told is", "to it's opposite" → "its opposite"; 21: wrong alt text on delete gif (said "told and untold" → "being deleted") |
| Book 5: Learning Moments | ✓ | 22: "an mentor"; 23: "an mentor", broken link `REPAIR_WIREFRAME.md` → `/book_5_honey_rae_wireframe`; 26: `</Route>` → `</Routes>` (code bug), `App.js` → `App.jsx` ×2, "Copy and past" → "paste", "not bee defined" → "been defined"; 27: "by it's" → "its"; 31: "remove to post" → "remove the post" |
| Book 5: Explorer / Capstone / Group Project | ✓ | 34: "applications" spelling ×1; 35: "applications" spelling ×1; 36: "by click the" → "by clicking the", "you and you coach" → "your coach" |

### Embedded Video + Timestamp-Linked Transcripts ◑ IN PROGRESS

During the Book 5 transcript pass, transcripts were embedded as collapsible `<details>` blocks with `[MM:SS]` markers grouped by topic. **Proof-of-concept implemented on ex 01 (react-basics) — 2026-07-14.**

#### What Was Learned (renderer research)

- `marked` (used by nss-core) runs with no sanitizer and `gfm: true` — raw HTML blocks pass through unchanged
- Content injected via `dangerouslySetInnerHTML` — **iframes render without restriction**
- No CSP configured on the platform or curriculum Vite configs
- `<script>` tags injected via innerHTML are **not executed** (browser security fundamental)
- Inline `onclick="..."` attributes **do** execute when injected via innerHTML — but messy to write per-timestamp

#### Chosen Approach: Named Iframe + `?start=` Target Links

No JavaScript required. Pure HTML.

1. Replace `<a href="https://youtu.be/..."><img .../></a>` with a named `<iframe>`:
   ```html
   <iframe name="yt-ex01" src="https://www.youtube.com/embed/VIDEO_ID"
     width="700" height="394" frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>
   ```

2. Convert each `[M:SS]` timestamp in the transcript to a link targeting the iframe:
   ```html
   <a href="https://www.youtube.com/embed/VIDEO_ID?start=N&autoplay=1" target="yt-ex01">[M:SS]</a>
   ```
   Clicking the link reloads the iframe at that second position with autoplay. `N` is the timestamp converted to total seconds.

3. Each exercise gets a unique `name` on its iframe (e.g., `yt-ex01`, `yt-ex02`, ...).

#### Status ✓ COMPLETE (2026-07-14)

- [x] ex 01 (react-basics) — proof-of-concept complete
- [x] ex 02–16 (minus ex 03 Screencastify, ex 09 no video) — rolled out via `embed_videos.py` script

All 13 remaining exercises processed. Each YouTube text link replaced with an embedded `<iframe>`, and all `[M:SS]` transcript timestamps converted to `<a href="...?start=N&autoplay=1" target="yt-exNN">` links. Multi-video exercises (11, 12, 15) received two iframes each; ex 06 also has a second optional-video iframe (`yt-ex06b`).

Ex 03 (Screencastify) stays as clickable thumbnail — no YouTube URL to embed.
Ex 09 has no video — no change needed.

---

## Phase 4.5: Polish Pass ✓ COMPLETE

*Four improvement areas identified after completing the video embedding work. Independent sessions — no blocking dependencies between them. Recommended order: 1 → 2 → 3 → 4.*

---

### Session 4.5.1: Spacing & Visual Formatting ✓ COMPLETE (2026-07-14)

**A — Global vertical spacing:** Added a full vertical rhythm CSS block to `src/index.css` scoped to `div[class$="contentContainer"]`. Rules cover h1–h4 (`margin-top: 2rem`; first-child reset to 0), ul/ol (`padding-left: 1.75rem; margin-bottom: 1rem`), li spacing, blockquote (left border + tint), details (border + radius + padding; `details[open] summary` gets `margin-bottom: 0.75rem`), iframe (`display:block; margin: 1.5rem 0; border-radius: 6px`), and hr (`margin: 2rem 0`).

**B — Iframe/transcript spacing:** Covered by the global fix (iframe `margin: 1.5rem 0` + details `margin: 1.5rem 0` provide breathing room between consecutive iframes and transcripts on ex 11, 12, 15).

**C — User story containment:** Added `.user-story` CSS class (left border using `--primary-light`, `--bg-dark` background, `padding: 0.75rem 1rem`, `margin: 1rem 0`). Wrapped all Given/When/Then story blocks in `<div class="user-story">...</div>` across 11 files:
- `04-book-4/51-pen-pal-society` — 8 stories; normalized `<br/>` → `<br>`
- `05-book-5/23-learn-wireframe` — 23 stories across 8 view sections
- `05-book-5/24–25, 27–33` (9 exercises) — 1–4 stories each
- `05-book-5/26-learn-routes-setup` — 1 story left as blockquote (it's contextual reference inline in instructions, not an assigned story)
- `05-book-5/36-capstone-resources` — table format; no change (template for students)

---

### Session 4.5.2: Localhost Link Audit ✓ COMPLETE (2026-07-14)

**Full grep results (excluding `localhost:8088` JSON server):**

| File | Line | Found | Disposition |
|------|------|-------|-------------|
| `05-book-5/26-learn-routes-setup/index.md` | 145, 149 | `localhost:3000/login`, `localhost:3000` ×4 | **Fixed** → `localhost:5173` — Learning Moments is a React/Vite app |
| `02-book-2/02-duo-dev-tools-intro/index.md` | 48 | `localhost:3000` | ✓ Correct — Books 1–4 use `npx serve` (port 3000), not Vite; no `package.json` exists |
| `02-book-2/13-mm-main/index.md` | 43 | `localhost:3000` | ✓ Correct — same reason |
| `04-book-4/08-ij-jeans-component/index.md` | 92 | `localhost:3000` | ✓ Correct — same reason |
| `05-book-5/01-react-basics/index.md` | 77, 81 | `localhost:5173/` | ✓ Correct — student's own Honey Rae's Vite app |
| `05-book-5/05-repair-all-tickets/index.md` | (transcript) | "localhost 8088" in speech text | ✓ Correct — JSON server reference in transcript prose |

**User-reported `localhost:5173/<path>` platform link issue:** Not present in any markdown files. No instances of `localhost:5173/` other than the correctly-scoped `01-react-basics` student app reference.

---

### Session 4.5.3: Full Video Audit (Books 1–4 + Setup) ✓ COMPLETE (2026-07-14)

**Complete video inventory with durations (yt-dlp):**

| File | Video | Duration | Decision |
|------|-------|----------|----------|
| `00-setup/02-getting-started-mac` | Rectangle (`tFeDyqZG4z4`) | 9:11 | Leave — external tutorial |
| `00-setup/02-getting-started-mac` | Git Config Dir (`exva3J_jojc`) | 1:57 | Leave — short utility, mentor section |
| `00-setup/04-getting-started-windows-csharp` | Git global config (`66EB9oxGMzQ`) | 1:24 | Leave — short utility |
| `00-setup/04-getting-started-windows-csharp` | Creating SSH key (`znRMcNG9_qQ`) | 1:58 | Leave — short utility |
| `00-setup/04-getting-started-windows-csharp` | SSH key → GitHub (`8hlmIObpMd4`) | 2:05 | Leave — short utility |
| `00-setup/05-thinking` | Andy Harris (`azcrPFhaY9k`) | 1:00:07 | Leave — external |
| `00-setup/05-thinking` | Joel Rivera (`XpulVva97eU`) | 9:21 | Leave — external |
| `00-setup/05-thinking` | Forrest Knight (`NNazO2tMHno`) | 11:10 | Leave — external |
| `01-book-1/34-explorer-queen-array-find` | `.find()` (`N1QcR8F3xFY`) | 2:55 | Leave — too short for transcript |
| `01-book-1/38-explorer-bjorn-array-find` | `.filter()` (`3LOEGS4qcRM`) | 5:44 | Leave — optional explorer, supplementary |
| `02-book-2/07-duo-dom-update` | innerHTML/textContent (`1UsllDMhvN4`) | 4:38 | Leave — < 5 min, supplementary |
| `02-book-2/22-explorer-duo-variables` | Ref vs Value (`-hBJz2PPIVE`) | 15:11 | Leave — external (not NSS-authored) |
| `03-book-3/02-dd-erd` | ERD Tutorial pt 1 (`QpdhBUYk7Kk`) | 6:57 | Leave — external (Lucidchart) |
| `03-book-3/02-dd-erd` | ERD Tutorial pt 2 (`-CuY5ADwn24`) | 13:50 | Leave — external (Lucidchart) |
| `03-book-3/02-dd-erd` | NSS ERD walkthrough (Vimeo `520416989`) | — | Leave — Vimeo, can't embed as YouTube iframe |
| `04-book-4/16-kd-erd` | KD ERD hint (Vimeo `523171683`) | — | Leave — Vimeo, last-resort hint only |

**Result: No video changes made.** All 16 videos fall into the "leave as-is" category — external content, sub-5-minute utilities, or Vimeo videos that can't use YouTube `<iframe>`. The 3 NSS-authored thumbnail videos (`.find()`, `.filter()`, `innerHTML`) are too short or too supplementary to warrant transcript work.

**Decision framework used:**
- **Embed + transcript:** Only for NSS-authored primary instruction. A bare iframe (no transcript) adds no value over a thumbnail.
- **Leave as text/thumbnail link:** External tutorials, short utilities (< 5 min), supplementary/optional content, Vimeo.

---

### Sessions 4.5.4–4.5.X: Transcript Readability ✓ COMPLETE (2026-07-20)

**Problem:** All 14 Book 5 video transcripts are raw speech-to-text output — no punctuation, no capitalization, no paragraph breaks beyond the `[M:SS]` markers, and no section headers. Wall-of-text format is difficult to read and impossible to skim.

**Two improvements:**
1. **Punctuation & capitalization** — Add periods, commas, sentence capitalization (preserve the exact words)
2. **Topic section headers** — Insert `### [Topic]` headings at natural topic transitions to allow quick navigation

**Scope:**

| Exercise | Video(s) | Est. length |
|----------|----------|-------------|
| ex 01 | React Dev Tools | ~4 min |
| ex 02 | First Component | ~12 min |
| ex 04 | Wireframe Walkthrough | ~4 min |
| ex 05 | All Tickets | ~12 min |
| ex 06a | Ticket Assignee | ~14 min |
| ex 06b | Alternative Solution | ~9 min |
| ex 07 | Search Tickets | ~6 min |
| ex 08 | Customer List | ~8 min |
| ex 10 | Intro to Routes | ~11 min |
| ex 11a | useParams Hook | ~17 min |
| ex 11b | Customer Details | ~10 min |
| ex 12a | Authentication Setup | ~17 min |
| ex 12b | Claim vs Close | ~13 min |
| ex 13 | Employee Form | ~8 min |
| ex 14 | Employee vs Customer | ~9 min |
| ex 15a | Customer Tickets | ~7 min |
| ex 15b | Customer Ticket Buttons | ~7 min |
| ex 16 | Create Ticket | ~5 min |

**Approach: AI-assisted per transcript, human-reviewed**
1. For each transcript block, pass the raw text to Claude: "Add punctuation and sentence capitalization. Preserve the exact words. Identify 3–5 natural topic transitions and insert `### [Topic]` headers."
2. Human reviews and accepts/edits the output
3. Paste final text back into the `<details>` block — timestamp links are unaffected (they're HTML not plain text)
4. Verify timestamps still link correctly after the edit

**Decision (2026-07-14):** Exact words only — punctuation and capitalization only; no words added, removed, or changed. Filler words and repetition stay in.

**Approach:** Single-paragraph Edit replacements are reliable for these files; multi-paragraph matches spanning blank lines are unreliable due to subtle encoding/whitespace variations. Match one paragraph at a time.

**Suggested session order:** Longest transcripts first (ex 12a, ex 11a, ex 12b, ex 11b). Short ones (ex 01, ex 04, ex 16) can be batched in one session.

**Note:** This is independent of 4.5.1 and 4.5.2 and can run in parallel.

**Session log:**

| Exercise | File | Status | Topic headers |
|----------|------|--------|---------------|
| ex 12a | `12-repair-claim-vs-close/index.md` | ✓ COMPLETE | Setting Up the Auth Script / Reviewing the Login and Register Components / Adding Routes for Login and Register / Protecting Routes with the Authorized Component / Testing Auth Flow and Adding Logout / Storing the Current User in State |
| ex 12b | `12-repair-claim-vs-close/index.md` | ✓ COMPLETE | Overview: Claim and Close Logic / Adding the Button Container / Passing currentUser Down via Prop Drilling / Writing the Claim Button / Writing the Close Button / Implementing handleClaim and assignedTicket / Testing Claim and Introducing getAndSetTickets / Implementing handleClose / Recap: Claim, Close, and Prop Drilling |
| ex 11a | `11-repair-cust-details/index.md` | ✓ COMPLETE | Building the Welcome Component / Using the Index Route / Wrapping Customers with Links / Setting Up Route Parameters / The useParams Hook / How Route Parameters and useParams Work Together |
| ex 11b | `11-repair-cust-details/index.md` | ✓ COMPLETE | Overview: What Customer Details Needs / Understanding the Data / Building the Fetch Function / Setting Up State and useEffect / Building the JSX / Fixing the Array Issue / Recap |
| ex 02 | `02-repair-first-component/index.md` | ✓ COMPLETE | Introduction and JSX Basics / JSX Rules: Parent Elements and Fragments / Adding a Button with onClick / Tracking State with useState / The Setter Function and React Dev Tools |
| ex 05 | `05-repair-all-tickets/index.md` | ✓ COMPLETE | Setting Up Services and Fetching Tickets / Introducing useEffect to Prevent Infinite Re-renders / Building the Ticket JSX / Filtering Tickets with a Toggle / Managing filteredTickets and the Component Lifecycle |
| ex 06a | `06-repair-ticket-assignee/index.md` | ✓ COMPLETE | Creating the TicketList Component / Creating the Ticket Component / Passing Props to Child Components / React Dev Tools and the Key Prop Warning / Fetching Employees: Embed vs Expand / Setting Up State and Finding the Assigned Employee / Rendering the Assignee Name |
| ex 06b | `06-repair-ticket-assignee/index.md` | ✓ COMPLETE | Overview / Building the getEmployeeById Service / Debugging the Empty Object Bug |
| ex 08 | `08-repair-customer-list/index.md` | ✓ COMPLETE | Overview and Wireframe Review / Building the User Service / Creating the CustomerList Component / Testing the CustomerList in the Browser / Rendering Customers as JSX / Creating a Reusable User Component / Passing Props and Viewing the Component Tree |
| ex 10 | `10-repair-routes-intro/index.md` | ✓ COMPLETE | Overview: Current Components and Introducing BrowserRouter / Defining Routes / Building the NavBar with the Link Component / Persisting the NavBar with a Parent Route / The Outlet Component / Adding the Customers Route |
| ex 13 | `13-repair-employee-edit/index.md` | ✓ COMPLETE | Adding the Profile Link and Route / Building the Employee Form JSX / Fetching the Current User and Employee / Storing the Employee in State / Debugging the Undefined Current User Bug / Populating Inputs and Wiring Up onChange Handlers / Writing handleSave and Preventing Default Submission / Building and Saving the Updated Employee Object / Navigating After Save and Recap |
| ex 14 | `14-repair-employee-vs-customer/index.md` | ✓ COMPLETE | Recap and Planning: Employee Views vs Customer Views / Creating the EmployeeViews Component / Setting Up the Ternary for Employee vs Customer Rendering / Testing Employee and Customer Login / Building the CustomerViews Routes / Testing the Customer Home Route and Choosing a NavBar Approach / Renaming to EmployeeNav and Creating CustomerNav / Rendering CustomerNav and Testing the Full Flow / Recap |
| ex 15a | `15-repair-customer-tickets/index.md` | ✓ COMPLETE | Overview: Wireframe Differences for Customer Tickets / Adding the Tickets Link to the Nav Bar / Adding the Tickets Route and Reusing TicketList / Passing currentUser to CustomerViews / Filtering Tickets for the Current User / Testing with a Multi-Ticket Customer / Debugging the Refresh Bug / Fixing the Dependency Array and Recap |
| ex 15b | `15-repair-customer-tickets/index.md` | ✓ COMPLETE | Overview: New Buttons for the Customer Ticket View / Wrapping the Conditional Buttons in a Fragment / Adding the Customer Ticket Buttons / Adding Toggle State for the Open Tickets Button / Filtering Tickets by Open Status with useEffect / Implementing the Delete Button / Adding a Delete Ticket Service Function / Rendering the Delete Button / An Alternate Way to Write the Conditional / Wiring Up the Delete Handler |
| ex 07 | `07-repair-search-tickets/index.md` | ✓ COMPLETE | Adding the Search Input and Filter Bar / Capturing the Search Term in State / Filtering Tickets with useEffect / Testing the Search Filter / Extracting the TicketFilterBar Component / Passing State Setters as Props / Testing the Completed Filter Bar and Recap |
| ex 01 | `01-react-basics/index.md` | ✓ COMPLETE | Introducing React Developer Tools / Exploring the Components Tab / Inspecting State with the Home Component / Wrap-Up |
| ex 04 | `04-repair-wireframe/index.md` | ✓ COMPLETE | Overview: Employee Views vs Customer Views / Employee Views: Tickets, Employees, and Profile / Customer Views: Tickets and Creating a Ticket / Customer Views: Editing Tickets and Profile / Wrap-Up |
| ex 16 | `16-repair-create-ticket/index.md` | ✓ COMPLETE | Setting Up Navigation to the Create Ticket Form / Adding Routes for Creating a Ticket / Building the Ticket Form JSX / Capturing the Description Input in State / Capturing the Emergency Checkbox and Setting Default State / Creating the createTicket Service Function and Adding Validation / Building the New Ticket Object with Prop-Drilled currentUser / Navigating After Save and Fixing the Page Refresh Bug |

---

## Phase 4.6: Duplicate Title Cleanup ✓ COMPLETE (2026-07-21)

**Problem:** nss-core's `ChapterContent.jsx` renders `index.jsx`'s `title` field as an `<h1>` directly above the rendered markdown body. Since 194 of 202 exercises also start their `index.md` with their own `#`/`##` heading, most exercise pages showed two headings back-to-back. Not a new nss-core regression — the `<h1>{title}</h1>` line has been there since the platform's first commits; it only became visible once the curriculum started consuming the published `nss-core` package against content that duplicates it.

**Decision:** Content-side fix only (no `nss-core` change, no new package release needed). For each of the 202 exercises, compared the `index.jsx` `title` against the `index.md` leading heading:
- **Strip the heading** when it's a near-restatement of the title (paraphrase, tense/punctuation difference, or a literal acronym expansion like ERD = Entity Relationship Diagram).
- **Keep the heading** when it says something meaningfully different from the title — a narrative/thematic heading (e.g. "Sequina's Sales" vs jsx title "Constant Tide"), a running pun-header reused across a chapter's exercises (the "Are You Feeling Bouquet? - X" headers in the Bouquet pioneer chapter), a per-exercise **stage heading in a multi-exercise pioneer/group-project chapter** (e.g. `37-pioneer-tbc-locations`'s "A Growing Business" and `38-pioneer-tbc-customers`'s "Handling Large Customers" — these play the same structural role as `36-pioneer-tbc-departments`'s h1 opener and `39-pioneer-tbc-customer-report`'s kept "Who Wrote this Code?", even when the wording happens to be close to the jsx title), or a bare project/chapter name sitting above an exercise-specific action title (e.g. md "Honest Abe" vs jsx "Honest Abe ERD").

A plain string-similarity ratio was used only as a first-pass hint — it was unreliable on its own (some low-ratio pairs are the same idea reworded; some high-ratio pairs are a project name vs. a specific topic, a real scope difference) so every pair was read and judged individually. Two files (37 and 38 above) were initially stripped on a too-literal reading of the ratio and had to be corrected after their h2 heading turned out to be load-bearing — leaving `### The Workforce ERD` orphaned as the file's first heading with no parent level above it, inconsistent with how every sibling exercise in that pioneer chapter opens.

**Result:** 90 headings stripped (heading line + its trailing blank line removed, no other content touched), 112 kept as a distinct heading. 1 file (`02-book-2/24-group-project-modern-farm/index.md`) has no leading heading at all — left untouched.

**Heading level on the 112 kept:** a page with the jsx `title` rendered as `<h1>` and a *kept* markdown heading that's also `#` (h1) still has two `<h1>` elements on the page — same bug, just with legitimately different text instead of duplicate text. Of the 112 kept headings, 103 were `#` and were demoted to `##` (text unchanged, only the heading level dropped) so each page has exactly one `<h1>` (the jsx title) with the markdown's own heading as a proper `<h2>` subheading beneath it. 8 were already `##` (untouched); 1 file has no heading at all (untouched).

**Session status:** ✓ Complete. 90 headings stripped, 103 headings demoted from `#` to `##`, all verified via diff (each change touches only the heading line(s), no other content).

---

## Phase 5: New Material Threads

*Two parallel threads of new content to weave into the existing curriculum. These are additive — they do not replace existing exercises but expand them. Phase 6 (Curriculum Scripts) follows this phase so scripts can be updated to reflect whatever scaffolding the new material requires.*

### Thread 1: LLM Integration

Add an LLM-focused component to every book and chapter, teaching students to work effectively with AI tools as a learning accelerator — not a shortcut.

**Goals:**
- Students learn to prompt LLMs to explain concepts, not just generate code
- Students learn to critically evaluate LLM output
- Each chapter gets at least one LLM-specific callout, exercise, or sidebar

**Open questions:**
- What is the standard format? (A dedicated exercise per chapter? An inline callout? A recurring `<LLMThread>` component?)
- Which LLM tool(s) are recommended? (Claude? ChatGPT? Tool-agnostic prompting?)
- How do LLM exercises interact with the `<Analogy>` tag vision in the long-term roadmap?

### Thread 2: Longhand React Hooks Scaffolding

Introduce the *concepts* behind React hooks in Books 1–4 using vanilla JS patterns, so that when students encounter hooks in Book 5 the ideas are already familiar. Not all hooks can be scaffolded before React — some are React-specific and will only appear in Book 5.

**Goals:**
- Students arrive at Book 5 with an intuition for state, side effects, derived values, and DOM references
- Foreshadowing is woven into existing chapters, not bolted on as separate exercises

**Hook reference materials** (slide decks for each hook):

| Hook | Pre-React? | Vanilla JS analogue | Google Slides |
|------|-----------|---------------------|---------------|
| `useState` | Yes — Books 1–3 | Tracking a value that changes over time | https://docs.google.com/presentation/d/1Dlx4UfswyfLYqB-GwTv_MzsKMEMuHZB7 |
| `useEffect` | Yes — Book 4 | Side effect triggered by data arriving (fetch) | https://docs.google.com/presentation/d/1_QwsRQIoSEkrH1xpj6Vx878xqJ_kRIgW |
| `useRef` | Yes — Books 2–3 | `document.querySelector()` / `getElementById()` | https://docs.google.com/presentation/d/1k68eMySuXwGheV3pKmcIZ9yKqd96yLON |
| `useMemo` | Partial — Book 4 | A value computed from state, recalculated only when inputs change | https://docs.google.com/presentation/d/1XqqXyCpeUjV8NJcC4ve1lmW0vs_DsIxc |
| `useCallback` | Partial — Book 4 | A function that depends on state, only recreated when state changes | https://docs.google.com/presentation/d/1nHg7CtWWLnpH-lCjqlnaCsR2AAiNiYd6 |
| `useReducer` | React only | No clean vanilla JS analogue before components | https://docs.google.com/presentation/d/1-TwO23FdO2mq9TKjV8D6XCF11o0dUUIJ |
| `useContext` | React only | Global state sharing requires the component model | https://docs.google.com/presentation/d/1GJv2sqDEcd_nioaBZFHWrbyzfEbO7WHW |
| `React.memo` | React only | Component memoization has no pre-React equivalent | https://docs.google.com/presentation/d/1cqxZyJ9FjdSuDULQt86qQOGB8Sc-W3p7 |
| `useTransition` | React only | React concurrent feature | https://docs.google.com/presentation/d/1OdnfuS3tRsgdKjPkHPewjQjUEnvbt-y9 |
| `useDeferredValue` | React only | React concurrent feature | https://docs.google.com/presentation/d/1ygfnCuoUX1ubXYiCyDsLA5jSXeY8kZ8j |

**Open questions:**
- Should foreshadowing be explicit ("You're doing what React calls state management") or implicit (same pattern, different vocabulary)?
- Where exactly in each book does each pre-React hook concept map to existing exercises?
- Does this require new exercises, or additions to existing ones?

### Thread 3: CS Theory Foreshadowing (OOP / SOLID / ACID) ◑ Reopened for Density Pass (2026-07-21)

Introduce selected OOP pillars, SOLID principles, and ACID properties at the exercises where the pattern already exists naturally — so students arrive at Python/Django and C#/.NET with the vocabulary already partially formed. Concepts with no genuine client-side analog are left entirely to the server-side courses.

**Format decided:** Not a named component — this thread reuses the existing `<details>/<summary>` disclosure pattern already used for Hints throughout the curriculum (no `nss-core`/platform changes, no new CSS). Two tiers:
- **Tier 1 — Introduction**: `<summary>🏛️ CS Theory: [Concept]</summary>` — one full, concrete explanation per concept, tied to the code just shown, at its first natural occurrence.
- **Tier 2 — Check-in**: `<summary>🏛️ CS Theory Check-in: [Concept]</summary>` — a short reflective question only, no answer given, placed wherever the same underlying pattern recurs later in the course, so the concept stays active in students' minds instead of fading after one exposure.

**Design decision — this isn't a one-touch mapping.** The original plan (single callout per concept) was expanded mid-session: the thread now builds across all of Books 1–5, with periodic check-ins, rather than mentioning each concept once and moving on. The client-side course is only the first three months of a longer program (an equivalent server-side course continues the same conversation), so no capstone/synthesis exercise was built — steady exposure through Book 5 was judged sufficient.

**Sequencing note:** Polymorphism was originally slated for introduction at Book 4 (Kneel Diamonds, `.map()`), but that came *after* naturally-occurring "same loop shape, different behavior" patterns already existed in Book 2 (Martin's Aquarium's three fish-filtering functions) and Book 3 (Shipping Ship Ships). Introducing it that late would have wasted those earlier opportunities, so its introduction was moved to Book 2, and the original Kneel Diamonds callout was reworked into a check-in / "level-up" moment (same idea, now expressed via a real array method instead of manual loops).

**Sequencing note (density pass, 2026-07-21):** Single Responsibility was originally introduced at Surf Shop → Just the Data, but Queen Bee (the chapter immediately before Surf Shop) had zero CS theory touchpoints and its `createQueen`/`payTribute` functions already exhibit a natural "this function does two jobs" pattern — the same shape SRP addresses. Its Tier 1 introduction was moved to Queen Bee → Collection of Queens, with a same-chapter Tier 2 check-in at Paying Tribute, and the original Surf Shop → Just the Data callout was reworked into a Tier 2 check-in using explicit recurrence wording ("this is the third time..."), the first applied instance of the wording-adjustment item from the Density Pass work-to-do list below.

**Introductions (Tier 1):**

| Concept | Type | Exercise |
|---------|------|----------|
| Encapsulation | OOP Pillar | Book 1 → Surf Shop → Just the Data / Just a Function |
| Single Responsibility | SOLID | Book 1 → Queen Bee → Collection of Queens *(moved earlier during density pass — see note below)* |
| Interface Segregation | SOLID | Book 1 → Surf Shop → Just a Function |
| Open/Closed | SOLID | Book 2 → Movie Majesty → The Main Algorithm |
| Polymorphism | OOP Pillar | Book 2 → Martin's Aquarium → Filtering Fish *(moved earlier — see sequencing note)* |
| Abstraction | OOP Pillar | Book 4 → Fox y Dog → First We "Fetch" |
| Dependency Inversion | SOLID | Book 4 → Indiana Jeans → Your own API with JSON-Server |
| Durability | ACID | Book 4 → Indiana Jeans → Saving Survey Submissions |

**Check-ins (Tier 2), in course order:**

| Concept(s) | Exercise |
|---|---|
| Single Responsibility | Book 1 → Queen Bee → Paying Tribute (2nd occurrence, same-chapter recurrence) |
| Single Responsibility | Book 1 → Surf Shop → Just the Data (3rd occurrence, reworked from original Tier-1 intro) |
| Encapsulation, SRP, ISP | Book 1 → Surf Shop → Diagrams (dependency graph reflection) |
| Encapsulation, SRP | Book 1 → Björn's Wilderness Adventures → Presentation to Björn (modularization strategy choice) |
| Encapsulation, SRP, ISP | Book 1 → Björn's Wilderness Adventures → Visualizations for Björn (dependency graph reflection, echoes Surf Shop Diagrams) |
| Encapsulation | Book 2 → Dynamite Duo → Defining Villains (private data + getter function pattern) |
| Single Responsibility | Book 2 → Dynamite Duo → Composing All HTML (HeroList/VillainList, single-purpose generators) |
| Encapsulation, ISP | Book 2 → Martin's Aquarium → Creating Fish Data |
| Encapsulation, ISP | Book 2 → Modern Farm → Seed Producing Modules |
| Open/Closed | Book 2 → Modern Farm → Collecting the Harvest |
| Polymorphism | Book 2 → Modern Farm → Selling the Harvest Online |
| Encapsulation, SRP, ISP | Book 3 → DeShawn's Dog Walking → Fixing DeShawn's Application (dependency/sequence graph reflection, 3rd echo of Surf Shop Diagrams) |
| Polymorphism | Book 3 → DeShawn's Dog Walking → Finding the Walker for a City (same "search array by foreign key" shape as the previous exercise) |
| Encapsulation, ISP | Book 3 → Shipping Ship Ships → Shipping Ship List (3rd repetition callback) |
| Polymorphism | Book 3 → Shipping Ship Ships → Shipping Ship Hauler |
| Polymorphism | Book 3 → Brewed Awakenings → Employee Click (3rd instance of "search array by matching id" shape, echoes DeShawn's) |
| Single Responsibility | Book 3 → Brewed Awakenings → Employee Click (`employeeOrders` pulled out of the click handler) |
| Encapsulation, Open/Closed | Book 3 → Cider Falls Park → Data Design (open-ended, design-only) |
| Abstraction | Book 4 → Fox y Dog → Awaiting Data (3rd fetch syntax) |
| Polymorphism (level-up) | Book 4 → Kneel Diamonds → Building Options with Map *(reworked from original Tier-1 intro)* |
| Dependency Inversion, Durability | Book 4 → Indiana Jeans → Displaying Submissions with .map() |
| Single Responsibility, Interface Segregation | Book 4 → Cars 'R Us → Modules and Components Setup (four single-purpose option modules, explicitly parallels Kneel Diamonds) |
| Polymorphism | Book 4 → Cars 'R Us → Choosing Car Options (same generator shape repeated for Wheels/Paints/Interiors, echoes the Kneel Diamonds level-up) |
| Dependency Inversion | Book 5 → Honey Rae's → Repair API (JSON-Server setup) |
| Encapsulation, SRP | Book 5 → Honey Rae's → List All Tickets (services module) |
| Single Responsibility | Book 5 → Honey Rae's → Employee List (existing Explorer prompt) |
| Open/Closed | Book 5 → Honey Rae's → Intro to Routes |
| Durability | Book 5 → Honey Rae's → Create Ticket (POST-then-navigate) |
| Encapsulation, Single Responsibility | Book 5 → Chuckle Checklist → Creating a New One Liner (self-built services module, echoes Honey Rae's) |
| Single Responsibility | Book 5 → Chuckle Checklist → Listing the Jokes (hint-driven extraction of repeated fetch-and-set logic) |
| Interface Segregation, Open/Closed | Book 5 → Learning Moments → Routing and Authentication |

**Deferred to server-side courses (Python/Django, C#/.NET):**
- Inheritance, Liskov Substitution (OOP)
- Atomicity, Consistency, Isolation (ACID)

**Open questions resolved:**
- Callout format: `<details>/<summary>` disclosure blocks, not a named JSX component (see Format decided, above).
- Concept map entries: still open — deferred to Phase 7/9 as originally planned.

#### Density Pass (reopened 2026-07-21)

*After reviewing Books 1–3 against the Introductions/Check-ins tables above, several core chapters have zero CS theory touchpoints at all — the original one-touch-per-concept mapping left real gaps rather than even coverage. Goal: every chapter gets at least 1–2 check-ins (Tier 1 intro or Tier 2 check-in), not just the chapters where a concept happened to be introduced.*

**Chapters currently with zero touchpoints:**
- ~~Book 1 → Queen Bee~~ — resolved 2026-07-21, see below
- ~~Book 1 → Björn's Wilderness Adventures~~ — resolved 2026-07-21, see below
- ~~Book 2 → Dynamite Duo~~ — resolved 2026-07-21, see below
- ~~Book 3 → DeShawn's Dog Walking~~ — resolved 2026-07-21, see below
- ~~Book 3 → Brewed Awakenings~~ — resolved 2026-07-21, see below

**Work to do:**
1. For each zero-touchpoint chapter above, find at least one exercise where an already-introduced concept (Encapsulation, SRP, ISP, Open/Closed, Polymorphism from Books 1–2; more from Book 3+) recurs naturally, and add a Tier 2 check-in there
2. Re-audit Books 4–5 with the same zero-touchpoint lens once Books 1–3 are done — the original table may have the same gaps there
3. **Wording adjustment:** as check-ins get denser, some should reference recurrence explicitly (e.g. "This is the third time you've seen this pattern — where else has it shown up?") rather than reading as a fresh prompt each time. Needs a running count per concept per student-facing check-in, not just per-file tracking
4. Update the Introductions/Check-ins tables above once new check-ins are placed, and update `concept_map.md`'s Reinforced In column accordingly

**Book 1 → Queen Bee (resolved 2026-07-21):** Queen Bee is the very first chapter in the course, appearing *before* any concept's original Tier 1 intro (Surf Shop) — so a Tier 2 check-in wasn't literally possible there (nothing had been introduced yet to check in on). Rather than force a check-in or leave the gap, Single Responsibility's Tier 1 introduction was moved earlier into Queen Bee → Collection of Queens (`createQueen` naturally builds an object and pushes it to an array in one function — the same "two jobs, one unit" shape SRP addresses), with a same-chapter Tier 2 check-in at Paying Tribute. The original Surf Shop → Just the Data SRP callout was reworked into a Tier 2 recurrence check-in ("this is the third time..."), which also gave item 3 above (wording adjustment) its first real instance. See the density-pass sequencing note above the Introductions table for full detail. This resolution pattern — check whether a concept's intro can move earlier to a zero-touchpoint chapter, rather than always forcing a check-in — should be considered for the remaining four chapters too, not just the check-in-only approach.

**Book 1 → Björn's Wilderness Adventures (resolved 2026-07-21):** Unlike Queen Bee, this chapter comes after Surf Shop, so Encapsulation/SRP/ISP were already available to check in on — the gap here was a plain oversight, not a sequencing problem. Two natural fits: Presentation to Björn (the "Cleanup" exercise) asks students to choose a modularization strategy (by content type vs. by function), a direct echo of Surf Shop's data.js/functions.js split, so it got an Encapsulation + SRP check-in framed around that choice. Visualizations for Björn (the "Diagram" exercise) is a near-exact structural repeat of Surf Shop's Diagrams exercise, so its check-in explicitly calls back to "you built a graph like this once before" and reuses the same Encapsulation/SRP/ISP trio.

**Book 2 → Dynamite Duo (resolved 2026-07-21):** This chapter comes before Movie Majesty and Martin's Aquarium, so only Encapsulation/SRP/ISP were available to check in on (no Open/Closed or Polymorphism yet). Defining Villains already contains an explicit private-data-plus-getter pattern (`database` is no longer exported, only `getVillains`/`getHeroes` are) — a richer, more textbook encapsulation example than anything seen so far, so it got an Encapsulation check-in. Composing All HTML has `HeroList` and `VillainList` as two single-purpose generator functions combined by `main.js` into one string, a clean SRP check-in.

**Book 3 → DeShawn's Dog Walking (resolved 2026-07-21):** Book 3's opening chapter, but it comes after Movie Majesty and Martin's Aquarium (Book 2), so Open/Closed and Polymorphism were already available alongside Encapsulation/SRP/ISP. Fixing DeShawn's Application already has both a dependency graph and a sequence diagram covering four structurally identical generator modules (`Walkers`, `CityList`, `RegisteredPets`, `Assignments`, each: ask `Database` for data, convert to HTML, return it) — a natural third echo of the Surf Shop → Björn's "Diagrams" check-in pattern, so it got the Encapsulation/SRP/ISP trio with explicit "third project" recurrence wording. Finding the Walker for a City repeats the exact "read a foreign key from DOM state, search an array for the matching id" shape from the immediately preceding exercise (Finding the Walker for a Pet), so it got a Polymorphism check-in.

**Book 3 → Brewed Awakenings (resolved 2026-07-21):** Comes after Shipping Ship Ships, so all five concepts introduced so far (Encapsulation, SRP, ISP, Open/Closed, Polymorphism) were available. Product Click and Employee Click repeat the same "read data off the clicked element, search an array for the matching id" shape a third time (after the two DeShawn's instances), so Employee Click got a Polymorphism check-in referencing the recurrence. Employee Click's hint also pulls order-counting out into its own `employeeOrders` function rather than inlining it in the click handler, a clean, ungrudging SRP example, so it got a second check-in there too. This chapter doesn't have a dependency-graph/sequence-diagram exercise the way Surf Shop/Björn's/DeShawn's did, so the recurring "Diagrams" check-in pattern wasn't extended here — two check-ins on the click-handler pair was judged sufficient rather than forcing a third.

**Status:** All 5 chapters from the Books 1–3 density-pass audit are resolved (Queen Bee, Björn's Wilderness Adventures, Dynamite Duo, DeShawn's Dog Walking, Brewed Awakenings). Work item 1 is complete. Remaining work-to-do items: (3) the recurrence-wording adjustment has now been applied several times live (Surf Shop → Just the Data, DeShawn's Diagrams, Brewed Awakenings Employee Click) but hasn't been retrofitted onto older check-ins that predate this pass; (4) the Introductions/Check-ins tables above are current as of this session, but `concept_map.md` still has no rows for any Thread 3 concepts (deferred to Phase 7/9, unchanged by this pass).

#### Books 4–5 Re-audit (item 2, started 2026-07-21)

Cross-referencing the Introductions/Check-ins tables above against every **core** chapter in Books 4–5 (Explorer/Pioneer/Advanced Project/Group Project/Capstone Resources chapters are out of scope, same as the Books 1–3 audit):

| Book 4 core chapter | Touchpoints found |
|---|---|
| Fox y Dog | 2 (Abstraction intro + check-in) |
| Indiana Jeans | 2 (Dependency Inversion intro, Durability intro) |
| Kneel Diamonds | 1 (Polymorphism level-up check-in) |
| **Cars 'R Us** | **0 — zero-touchpoint chapter** |

| Book 5 core chapter | Touchpoints found |
|---|---|
| Honey Rae's Repair Shop | 5 |
| **Chuckle Checklist** | **0 — zero-touchpoint chapter** |
| Learning Moments | 1 |

**Chapters currently with zero touchpoints (Books 4–5):**
- ~~Book 4 → Cars 'R Us~~ — resolved 2026-07-21, see below
- ~~Book 5 → Chuckle Checklist~~ — resolved 2026-07-21, see below

**Book 4 → Cars 'R Us (resolved 2026-07-21):** Modules and Components Setup already tells students to build "four modules... just like you did in Kneel Diamonds" (where Polymorphism's level-up check-in lives), so it got an SRP/ISP check-in on the four single-purpose option modules. Choosing Car Options shows the concrete `Technologies` generator function students then repeat three more times for Wheels/Paints/Interiors, so it got a Polymorphism check-in explicitly calling back to the Kneel Diamonds level-up moment.

**Book 5 → Chuckle Checklist (resolved 2026-07-21):** This is the first React project after Honey Rae's where students build a services module themselves rather than following along, so Creating a New One Liner got an Encapsulation/SRP check-in on the self-built `jokeService`, explicitly calling back to Honey Rae's. Listing the Jokes has a hint that explicitly tells students to extract repeated fetch-and-set logic into its own function, a concrete, hint-driven SRP moment, so it got a check-in there too.

**Status:** The Books 4–5 re-audit (work item 2) is complete — both zero-touchpoint chapters found (Cars 'R Us, Chuckle Checklist) are now resolved. Combined with the earlier Books 1–3 audit, all 7 originally-flagged zero-touchpoint core chapters across Books 1–5 are resolved.

#### Recurrence-Wording Retrofit (item 3, completed 2026-07-22)

Audited every pre-density-pass Tier 2 check-in in course order for explicit backward references (naming the specific earlier exercise or pattern being echoed, not just a fresh-sounding prompt). Most already did this well (Martin's Aquarium, Shipping Ship Ships, Kneel Diamonds, Indiana Jeans, Honey Rae's List All Tickets). Seven had none and were retrofitted:

| Exercise | Concept(s) | What was added |
|---|---|---|
| Björn's → Presentation to Björn | Encapsulation, SRP | Callback to Surf Shop's `data.js`/`functions.js` split |
| Modern Farm → Seed Producing Modules | Encapsulation, ISP | "Third time" callback to Surf Shop and Martin's Aquarium |
| Modern Farm → Collecting the Harvest | Open/Closed | Callback to Movie Majesty's Main Algorithm |
| Honey Rae's → Employee List | SRP | Callback spanning Queen Bee's `createQueen` through this project's services modules |
| Honey Rae's → Intro to Routes | Open/Closed | Callback to Movie Majesty and Modern Farm |
| Honey Rae's → Create Ticket | Durability | Callback to Indiana Jeans' survey submissions |
| Learning Moments → Routing and Authentication | ISP, Open/Closed | Callback spanning Surf Shop's `functions.js` through Honey Rae's routes |

**Status:** Thread 3 density-pass work items 1–3 are all complete. Remaining item: (4) `concept_map.md` still has no Thread 3 rows — deferred to Phase 7/9, unchanged by this pass.

### Thread 4: Testing Mindset

Introduce testing as a practice starting in Book 1 by connecting it to what students already do — verifying output with `console.log`. Build the vocabulary and mental model progressively so that when students encounter automated tests and GitHub Actions in the dedicated testing infrastructure phase, none of it is foreign.

**Goals:**
- Students understand that verification is part of writing code, not a separate activity
- Each book gets at least one explicit testing callout that names what they're doing and connects it to formal testing practice
- Students arrive at the infrastructure phase having already internalized why tests exist

**Progression through books:**

| Book | Testing concept | What students already do |
|------|----------------|--------------------------|
| Book 1 | Manual verification / `console.log` as a test | Log return values to confirm functions work |
| Book 2 | Expected vs. actual output | Inspect the DOM to verify rendered HTML matches data |
| Book 3 | Testing state changes | Check that clicking/interacting produces the right state update |
| Book 4 | Testing async behavior | Verify fetch returns the expected data before rendering |
| Book 5 | Component-level verification | Confirm React state changes produce the correct UI |

**Open questions:**
- Should each book get a dedicated testing callout exercise, or inline additions to existing exercises?
- What vocabulary gets introduced here vs. saved for the infrastructure phase? (e.g., `assertion`, `test suite`, `test runner`)

### Thread 5: Tandem Pair Programming Integration

[Tandem](https://github.com/Valerie-Freeman/tandem) is a pair programming interface for students. Each chapter project's parameters — roadmaps, PRDs, and session configuration — are defined in the chapter's scripts. Phase 5 should identify which chapters are good candidates for Tandem sessions and document what Tandem-specific context (goals, constraints, starting state) each chapter project needs to provide.

**Goals:**
- Identify which chapters and projects are well-suited for structured pair programming via Tandem
- Determine what Tandem-facing metadata each chapter needs (roadmap, PRD, session goals)
- Ensure exercise instructions introduce students to Tandem at the right point in the curriculum

**Open questions:**
- Which books/chapters get Tandem sessions — all chapters, or selected ones?
- What does a Tandem-ready chapter look like from the student's perspective?
- Does Tandem require a dedicated exercise introducing it, or is it woven into existing project setup steps?

---

## Phase 5.1: Exercise Standardization

*Runs after Phase 5's threads are woven in — new content (LLM callouts, CS theory notes, testing callouts, hook foreshadowing) is exactly the kind of addition that's easiest to place consistently against a settled template, rather than retrofitted into whatever shape each exercise already happens to have.*

**Motivation:** Exercises were authored over time, by different people, without a shared structural template. The "shape" of an exercise — where the video goes, how instructions are sequenced, where callouts and wrap-ups land — varies book to book and sometimes chapter to chapter. That inconsistency makes the curriculum feel stitched-together rather than authored as one coherent course, and makes it harder to guess where a new content type belongs without checking each book's own convention first.

**Goals:**
- Every exercise follows the same overall shape/section order, regardless of book or original author
- The four Phase 5 threads (LLM integration, hooks foreshadowing, CS theory, testing mindset) each get one canonical position in that shape, not an ad hoc placement per chapter
- Exercise-to-exercise transitions feel like a continuous flow rather than isolated units — moving from one exercise to the next shouldn't require re-orienting to a different structure

**Work to do:**
1. Audit the current exercise shape across all 5 books — catalog what sections exist (video, wireframe callout, step instructions, hints, wrap-up, etc.) and where they fall, book by book
2. Define one canonical exercise template — the order and required/optional sections every exercise should have
3. Decide where each Phase 5 thread callout lives in that template (e.g., a testing-mindset note always follows the step that introduces the behavior being verified; an LLM callout always lives in the wrap-up)
4. Apply the template across all ~175 exercises — a structural pass, not a content rewrite; existing prose stays, sections get reordered/retitled/added to match

**Open questions:**
- Is the canonical shape identical across all 5 books, or does it flex for book-specific needs (e.g., Book 5's Honey Rae's transcripts vs. Books 1–4's static instructions)?
- Does this require a shared markdown template/snippet contributors copy for new exercises, or just a documented convention in `CLAUDE.md`?
- Should this run before or after Phase 7 (Concept Map Refactor) — a stable exercise shape might make it easier to audit where vocabulary terms are introduced?

---

## Phase 6: Curriculum Scripts

*Scope: the `course-bash-scripts` repository at https://github.com/nashville-software-school/course-bash-scripts. Scripts in this repo are referenced directly in exercise markdown — students run them to scaffold project files, seed databases, and configure their environments. This phase follows Phase 5 and Phase 5.1 so that scripts can be updated to match whatever the new material and standardized exercise shape require, avoiding a second pass.*

*Problems: scripts are outdated, broken on some setups, and inconsistent across Mac/Windows/Linux.*

*Note: [Tandem](https://github.com/Valerie-Freeman/tandem) parameters (roadmaps, PRDs, session configuration) are set per chapter project in these scripts. When auditing and rewriting scripts in this phase, include the Tandem configuration for any chapter identified in Phase 5 Thread 5 as a Tandem candidate.*

### Problems to Solve

1. **Broken scripts** — some scripts fail on current OS versions or shell environments
2. **Machine inconsistency** — scripts that work on Mac fail on Windows (WSL), or vice versa
3. **Outdated scaffolding** — scripts create file structures or seed data that no longer match exercise expectations
4. **Undocumented dependencies** — scripts assume tools (e.g., specific Node versions, Python, curl) are installed without checking

### Work to Do

- Audit every script referenced in exercise markdown across all 5 books (build a cross-reference map of exercise → script)
- Test each script on Mac and Windows/WSL; log failures
- Rewrite or replace broken scripts; add OS detection where behavior differs
- Verify that scaffolded output matches what the exercise expects students to start with
- If a script changes what it generates, update the exercise instructions in this repo accordingly

---

## Phase 7: Testing Infrastructure

*Scope: GitHub Actions CI/CD setup and test suite authoring for all core book chapters. This phase depends on Phase 6 (Curriculum Scripts) because GH Actions workflow files need to be scaffolded into student projects via the bash scripts. Thread 4 (Testing Mindset) in Phase 5 prepares students conceptually; this phase builds the actual hidden grading mechanism.*

*Currently some assessments have tests — those are the starting reference point for format and tooling decisions.*

### Goals

- Tests run automatically when students push to GitHub — no student action required beyond normal git workflow
- Tests are invisible as a grading mechanism; students experience them as feedback, not a quiz
- Each core chapter has at least one test that verifies the primary concept was applied correctly

### Work to Do

1. **Tooling decision** — confirm test runner (Jest / Vitest), assertion style, and how test files are distributed to student repos
2. **GH Actions workflow** — write the workflow YAML; coordinate with Phase 6 so bash scripts scaffold it into new projects
3. **Test authoring** — write test suites for each core chapter, one book at a time, starting from Book 1
4. **Calibration** — run tests against sample student solutions; adjust to avoid false positives/negatives
5. **Failure messaging** — ensure test output gives students useful feedback, not just pass/fail

### Open Questions

- Are tests scoped per exercise, per chapter, or per book?
- Do students see test output in the terminal, in GitHub Actions UI, or surfaced back into the platform?
- How does test scoring connect to the gamification/skill-tree long-term vision?

### Working Breakdown (Rebecca, started 2026-07-20)

*Breaking Phase 7 into smaller chunks and tracking progress here as it happens, ahead of the "Session Log" table format used elsewhere in this doc.*

**Step 1 — Identify group projects/self-assessments that already have test suites; add GitHub Actions to run them.**

No overhead for students — these Actions are invisible unless a student clicks the Actions tab in their repo, same as tests today being invisible unless a student runs `npm run test`. Instructors can point students there directly, or an Explorer chapter covering GitHub Actions at a high level could be added later.

Group Projects:

| Book | Project | Tests | Actions |
|---|---|---|---|
| 1 | Fish Fusion | true | true |
| 2 | Modern Farm | true | true |
| 3 | Cider Falls Park | false | false |
| 4 | Exomine | false | false |
| 5 | Shepherd's Pie | false | false |

Notes: Cider Falls Park has no starter code to add tests to — students build it entirely from scratch. 
Action: Exomine and Shepherd's Pie could have tests and Actions added.

Assessments: 

| Book | Project | Tests | Actions |
|---|---|---|---|
| 1 | Bug Ranch | false | false |
| 2 | Hairy Potter | true | true |
| 3 | Kids Dreams | false | false |
| 4 | House O Hummus | true | true |

Note: Kids Dreams looks like it used to have cypress tests that were removed

**Step 2 — Comb through projects (including bash-script-scaffolded ones) to see where tests can be added.** For any project where tests get added, add GitHub Actions to run them on push to `main` and `develop`.

**Step 3 — Once Steps 1–2 are complete, explore using agents to test student projects against learning goals**, feeding into the gamification/badge vision. Could run in the background via GitHub Actions.

---

## Phase 8: Concept Map Refactor

*Deferred to last because Phases 3–5 will introduce new concepts, fix existing attributions, and add material that changes what terms need to be mapped. Running this phase before new material is stable guarantees re-work.*

### Work to Do

1. **Resolve all ⚠️ flagged issues** — there are currently 5 open flags in `concept_map.md` covering `default export`, `CSS Grid`, `filter`, `try/catch`, and `useCallback`
2. **Audit Dynamite Duo** — concept map review was skipped in Session 6; Book 2 → Dynamite Duo is the only chapter marked *Pending* without a plan to revisit it
3. **Incorporate new material** — add vocabulary terms introduced by Phase 5 (LLM concepts, React hook foreshadowing terms)
4. **Verify First Introduced accuracy** — re-confirm all attributions after Phases 3–4 may have moved or corrected content
5. **Phase 2 follow-up** — if Phase 2 adds `type` or `chapterGroup` fields, update the concept map's coverage table to reflect the new chapter types

---

## Phase 9: Analogy Tag Refactor

*Scope: all exercise files that introduce vocabulary terms added or moved during Phases 5–8 — specifically new terms from Thread 2 (React hook foreshadowing), Thread 3 (CS theory foreshadowing), Thread 4 (testing mindset), and any terms whose First Introduced attribution changed during Phase 8. The `<Analogy>` component is being developed in parallel as a separate project and is expected to be available before this phase runs.*

*This phase does not tag the entire curriculum — only the net-new terms from Phase 5 that weren't in the original content. A full curriculum-wide Analogy pass is a separate future effort.*

### Work to Do

1. Pull the list of new/moved terms from Phase 7's concept map final state
2. For each term, locate its First Introduced exercise file
3. Wrap the vocabulary term's first appearance with `<Analogy term="..." />`
4. Verify the component renders correctly in the platform for each tagged term
5. Flag any terms where the natural sentence position makes tagging awkward — may need minor prose edits

---

## Phase 10: Source Content Integration 🛑 Team Decision Required

*Two directories in the source repo (`client-side-mastery`) have not been fully incorporated into the platform. This phase cannot begin until the team decides whether and how to include them. All detail below is for scoping the conversation — no work has started.*

---

### Part A: Unincorporated Projects (`projects/`)

Seven project directories exist in the source repo with no corresponding platform exercises. See `missing_source_content.md` for the full catalog.

| Project | Tier | Chapters | Notes |
|---|---|---|---|
| Daily Journal | 2 | 15 | Standalone multi-session project |
| Dothard & Simbleton | 2 | 4 | Short project |
| State Fair | 2 | 7 | Intermediate project |
| Glassdale Cold Case | 3 | 17 | Longer project; cross-cutting concerns |
| Algorithms | 5 | 14 | Conceptual; no specific framework |
| Kennels (React) | 5 | 13 | React; overlaps with Book 5 content |
| Thorns & Roses | 5 | 7 | React; capstone-adjacent |

**Total:** ~77 chapters across 7 projects.

**Questions for the team:**

1. Are any of these projects still actively used in the cohort curriculum, or are they legacy/retired?
2. If included, do they become standalone books, chapters within existing books, or a separate "extended practice" track?
3. Tier 2 projects (Daily Journal, Dothard & Simbleton, State Fair) — do they slot into Book 2 as optional extensions, or form their own section?
4. Tier 5 projects (Algorithms, Kennels, Thorns & Roses) — do they extend Book 5, or live outside the main 5-book structure?
5. Should Glassdale (17 chapters, tier 3) replace or supplement Cider Falls Park as the Book 3 group project?

---

### Part B: Supplement Foundations Track (`supplement-foundations/`)

A fully separate foundational JavaScript track covering arrays, conditions, objects, and iteration. Three parallel practice threads run through it: Digital Notes, Library Tracker, and Meal Planner. 60+ files total. No presence in the platform.

**Questions for the team:**

1. Is this track still in use, or has its content been absorbed into Books 1–2?
2. If included, does it become a prerequisite track (before Book 1), a parallel track students can opt into, or woven chapter-by-chapter into Books 1–2?
3. The three practice threads (Digital Notes, Library Tracker, Meal Planner) — do they replace the current Book 1 chapter projects (Queen Bee, Surf Shop, Björn), supplement them, or form their own Explorer-style challenges?
4. Would adding this track require nss-core changes to support multiple parallel tracks?

---

## Phase 11: Video Consolidation 🛑 Blocked — External Prep Pending

*Two related pieces of video infrastructure work, sequenced: (1) migrate Screencastify-hosted videos to YouTube now that account access is in hand, then (2) once a unified YouTube account ("one account to rule them all") is ready, move existing YouTube videos over to it. Neither part can start until its external prerequisite (upload, or account/email setup) is ready — this phase exists to hold the scope so it isn't lost, not to begin work now.*

### Part A: Screencastify → YouTube Migration

16 exercise files currently link to Screencastify-hosted videos via a thumbnail-image link (`<a href="https://watch.screencastify.com/v/..."><img src="./images/video-play-icon.gif" .../></a>`) rather than an embedded iframe — a legacy pattern from before the Book 5 YouTube iframe-embed work (see Phase 4 → "Embedded Video + Timestamp-Linked Transcripts" above for the markup pattern to reuse). One of these — `05-book-5/03-repair-api` — is the Book 5 exercise that was explicitly skipped during the original transcript/iframe pass for exactly this reason ("ex 03 skipped — Screencastify").

**Affected files:**
| File |
|---|
| `00-setup/06-keyboard-debug` |
| `01-book-1/10-queen-debugger` |
| `01-book-1/11-queen-errors` |
| `01-book-1/13-queen-iteration` |
| `01-book-1/14-queen-tribute` |
| `01-book-1/15-queen-tribute-by-queen` |
| `01-book-1/23-surf-diagram` |
| `02-book-2/08-duo-review` |
| `03-book-3/03-dd-add-state-to-dom` |
| `03-book-3/04-dd-accessing-state` |
| `03-book-3/05-dd-metadata-as-state` |
| `03-book-3/06-dd-foreign-key-state` |
| `03-book-3/07-dd-find-dog-walker` |
| `03-book-3/08-dd-find-city-walker` |
| `03-book-3/15-ss-hauler-cargo` |
| `05-book-5/03-repair-api` |

**Work to do once videos are uploaded:**
1. Get the new YouTube video ID for each of the 16 Screencastify videos above
2. Replace the thumbnail-link markup with a named `<iframe>` (same pattern as Book 5)
3. Decide whether these get transcript treatment too — Phase 4.5.3's standard ("embed + transcript only for NSS-authored primary instruction") would say yes, since these are NSS-authored
4. Re-run a link check for any other place in the curriculum that references these videos

### Part B: YouTube Account Consolidation

Once the unified YouTube account/email is ready, some subset of the videos already embedded via YouTube iframe (cataloged in Phase 4.5.3's audit — 16 files, mostly Book 5) will move to the new account. Moving a video to a new channel changes its video ID, which breaks:
- The `src="https://www.youtube.com/embed/VIDEO_ID"` on the iframe
- Every `?start=N&autoplay=1` timestamp link that targets that iframe (the `target="yt-exNN"` name stays the same; only `VIDEO_ID` in the href changes)

**Open questions (need answers before this can start):**
- Which of the 16 YouTube-embedded files/videos are moving — all of them, or a specific subset?
- Do old video IDs stay live (as unlisted, or redirected), or go fully dead once moved?
- Is there an old-ID → new-ID mapping provided during the move, or does each need to be found manually afterward?

**Status:** 🛑 Not started — blocked on the unified account being created and the video move happening outside this repo.

---

## Phase 12: Transcript Side-by-Side Layout

*Currently, each Book 5 video exercise stacks its `<iframe>` and its `<details>` transcript block vertically — watch the video, then scroll down to read the transcript below it. Goal: put the transcript beside the video instead, height-capped to the video so it scrolls independently, letting a student watch and read at the same time without losing the video off-screen. The `<details>` collapse/expand behavior must be preserved.*

**Current markup (per video), e.g. `05-book-5/01-react-basics/index.md`:**
```html
<iframe name="yt-ex01" src="..." width="700" height="394" ...></iframe>

<details>
<summary>📄 Video Transcript — ...</summary>
...
</details>
```
The two elements are siblings directly under the exercise's content container — no wrapping element around a video+transcript pair today.

**Planned approach:**
1. Wrap each iframe+details pair in a container `<div class="video-transcript-row">...</div>` in the markdown
2. Add CSS in `src/index.css`: `.video-transcript-row { display: flex; gap: ...; align-items: flex-start; }`, iframe sized as today, `.video-transcript-row details { flex: 1 1 auto; max-height: <iframe height>; overflow-y: auto; }`
3. Verify the `<summary>` click still opens/closes correctly inside the flex layout, and that the scrollable region only applies to the transcript body, not the summary line
4. Decide the small-screen behavior (stack vertically below a breakpoint, since side-by-side won't fit on narrow viewports)

**Scope:** All Book 5 exercises with an embedded video/transcript pair — 14 exercise files, 18 video+transcript pairs total (ex 06, 11, 12, 15 each have two pairs; each pair is its own row).

**Status:** ✓ Complete. All 4 planned-approach steps done:
1. All 18 pairs across the 14 files wrapped in `<div class="video-transcript-row">` (mechanical regex-based edit — diff is additions-only, no transcript text touched).
2. `.video-transcript-row` CSS added to `src/index.css`: flex row, iframe unchanged, `details` flexes to fill remaining width and caps at `max-height: 394px` (the iframe's height) with `overflow-y: auto`.
3. Verified with a standalone static HTML harness (real `index.css` rules + real transcript markup from ex 06, rendered via a scratch Playwright/Chromium script) rather than the live app — see note below. Confirmed: closed `<summary>` sits beside the video and fills the row; clicking it opens the transcript to a height-capped, independently scrollable panel; no page/console errors.
4. Small-screen behavior: `@media (max-width: 1080px)` switches the row to `flex-direction: column` and removes the height cap, reverting to the original stacked/full-height behavior below that breakpoint.

**Verification caveat:** Could not screenshot the actual running app — every chapter route is behind `ProtectedRoute` (GitHub OAuth, see `platform/src/context/AuthContext.jsx` and `platform/src/components/ProtectedRoute.jsx`), which a headless session can't authenticate through. The static harness used the same `div[class$="contentContainer"]` selectors and CSS rules from `src/index.css` against real transcript HTML, so the CSS itself is verified — but a live in-app visual check (nav sidebar width, actual `contentContainer` sizing) hasn't been done. Greg to spot-check in his authenticated browser session.

---

## Phase 13: Explorer Cross-Linking 🛑 Blocked on nss-core

*Goal: link an Explorer exercise back to the specific chapter exercise it extends (e.g. a "👑 Modular Majesty" Explorer callout linking to the Queen Bee exercise where modules were introduced), and vice versa — a mention in the core chapter pointing forward to the relevant Explorer challenge. This keeps the Explorer section itself intact as a standalone way to browse the curriculum (per Phase 3.6 above and the existing CLAUDE.md convention that Explorer chapters are first-class), while also surfacing the connection contextually at the point in the core chapter where it's relevant.*

**Blocked on:** the same cross-chapter link base-URL bug already tracked in "Open Questions / Future Decisions" above — internal `/chapter_id` links render as plain `<a>` tags that navigate outside the Vite base path (`/client-side-curriculum/`), 404ing. That fix lives in `nss-core`'s `Chapter` component (post-process rendered HTML to prepend `baseUrl` to any `href` starting with `/`) and has not shipped yet.

**Work to do once the nss-core fix ships:**
1. Confirm the fix is live and cross-chapter links work without the fragile "prepend `/client-side-curriculum/` to every href" workaround
2. For each Explorer exercise, identify the specific exercise in its originating chapter most relevant to the explorer's extension topic (not just the chapter's intro exercise)
3. Add the link both directions: from the Explorer exercise back to that specific chapter exercise, and from that chapter exercise forward to the Explorer exercise (e.g. as a "Want to go deeper? → [Explorer: ...]" callout)
4. Apply across all 16 Explorer exercises (14 chapter-mapped + 2 Deployment ones, which would link to whatever Book 5 deployment-related exercise is most relevant instead of a narrative chapter)

**Status:** 🛑 Not started — blocked on nss-core.
