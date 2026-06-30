# NSS Client-Side Curriculum — Project Plan

## Purpose
This document is the guiding reference for restructuring the NSS client-side curriculum platform. It governs how we work, what we're building toward, and the order in which we tackle each session.

---

## Source Reference
- **Local repo:** `/home/gmkorte/workspace/nss/curriculum/client-side-curriculum`
- **GitHub reference:** https://github.com/nashville-software-school/client-side-mastery
- Use the GitHub repo as a structural guide for content; it is not the source of truth for the new ID/chapter organization.

---

## How We Work

- Work **one chapter at a time** per session to keep context clean and changes focused.
- At the start of every session, read `project_plan.md` and the relevant memory files before touching any code.
- At the end of every session, update all three governing documents as needed before running `/clear`:
  1. **`project_plan.md`** — mark the session complete, advance "next" to the following session
  2. **`concept_map.md`** — review exercises just completed; add missing terms, update Reinforced In, mark chapter as Reviewed ✓, flag any inconsistencies with ⚠️
  3. **`curriculum_map.md`** — verify IDs are correct (usually no changes needed, but confirm)
  - Then update the memory file at `.claude/projects/.../memory/project_curriculum_restructure.md` with what was done and what comes next. Memory is the handoff between sessions — the conversation context will not survive a `/clear`.

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
| ◑ | **Phase 2: Navigation UX** — Path B chosen; `nss-core` updated externally; all 173 chapter files updated with `chapterGroup`/`type`; cross-course regression testing in progress |
| — | **Phase 2b: Course Landing Page** — platform feature: render `README.md` as the course intro page; requires `nss-core` changes and team discussion |
| ◑ | **Phase 3: Broken Links** — Categories A–C complete; D–G not started |
| — | **Phase 4: General Errors** — typos, broken code examples, outdated syntax |
| — | **Phase 5: New Material Threads** — LLM integration across all books; longhand React hooks scaffolding in Books 1–4 |
| — | **Phase 6: Curriculum Scripts** — audit and repair `course-bash-scripts` repo once new material is finalized |
| — | **Phase 7: Concept Map Refactor** — final pass; reflects all content including new material from Phase 5 |

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

## Phase 2b: Course Landing Page

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

## Phase 3: Broken Links ◑

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

### Category D: Group Project Sub-Chapter Files — 21 links

Three group projects link to sub-chapter `.md` files that were never migrated:
- **Modern Farm** (`02-book-2/24-group-project-modern-farm`) — 8 files (`./chapters/MF_*.md`), source at `projects/tier-1/modern-farm/chapters/`
- **Cider Falls Park** (`03-book-3/25-group-project-cider-falls`) — 5 files (`./chapters/CIDERFALLS_*.md`), source at `projects/tier-2/cider-falls/chapters/`
- **Truncheons & Flagons** (`04-book-4/53-truncheons-and-flagons`) — 8 files (`./chapters/TF_*.md`), source at (TBD in source repo)

**Approach:** TBD — source from the GitHub reference repo or redesign inline.

**Status:** Not started.

---

### Category E: Broken `<img src>` References — 51 references

Uses correct HTML syntax but paths are wrong:
- `../../book-1-queen-bee/chapters/images/video-play-icon.gif` — old directory path, used across many Books 1–3 exercises
- `./images/...` — image files not migrated (same fix as Category C)
- `./learning-objectives.png` in intro — actually lives at `public/assets/learning-objectives.png`

**Approach:** Download missing images from source repo (same process as Category C). The `learning-objectives.png` path is a trivial one-liner fix.

**Status:** Not started.

---

### Category F: Misc One-Offs — 6 links

| Link | File | Notes |
|------|------|-------|
| `./TROUBLESHOOT_VSCODE.md` | `00-setup/02-getting-started-mac/index.md` | File not migrated; source at `book-1-queen-bee/chapters/` |
| `./data/honestabe.json` | `04-book-4/46-pioneer-abe-politicians/index.md` | Data file not migrated; source at `projects/tier-3/honest-abe/chapters/data/` |
| `../../../supplement-api/chapters/API_CLIENTS.md` | Holiday Road exercise | Cross-section reference; supplement track not ported |
| `./code/productPrice.js` | `03-book-3/21-ba-product-click/index.md` | Code snippet not migrated |
| `./code/employeeSales.js` | `03-book-3/22-ba-employee-click/index.md` | Code snippet not migrated |

**Approach:** Handle individually. Likely convert to inline content or port from source repo.

**Status:** Not started.

---

### Category G: External Links — 124 links (107 unique, 44 domains)

Spot-check for dead or moved URLs. Notable domains:
- `watch.screencastify.com` — 15 links (screencasts; service may have changed)
- `youtu.be` / `www.youtube.com` — 32 links (videos)
- `learning.nss.team` — 2 links (internal NSS tool; verify still live)
- `marketplace.visualstudio.com` — 9 links (VSCode extensions)
- `developer.mozilla.org` — 5 links (stable)
- `giffygram.nss.team` — 1 link (NSS demo app; verify still live)

**Status:** Not started.

---

## Phase 4: General Errors

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

### Thread 3: CS Theory Foreshadowing (OOP / SOLID / ACID)

Introduce selected OOP pillars, SOLID principles, and ACID properties at the exercises where the pattern already exists naturally — so students arrive at Python/Django and C#/.NET with the vocabulary already partially formed. Concepts with no genuine client-side analog are left entirely to the server-side courses.

**Goals:**
- Name the concept at the point where students are already doing it
- Give server-side instructors a shared vocabulary to build on
- Keep additions lightweight — a sentence or callout, not a new exercise

**Mapping — what gets introduced client-side:**

| Concept | Type | Exercise |
|---------|------|----------|
| Encapsulation | OOP Pillar | Book 1 → Surf Shop → Just the Data / Just a Function |
| Abstraction | OOP Pillar | Book 4 → Fox y Dog → First We "Fetch" |
| Polymorphism | OOP Pillar | Book 4 → Kneel Diamonds → Building Options with Map |
| Single Responsibility | SOLID | Book 1 → Surf Shop → Just the Data |
| Interface Segregation | SOLID | Book 1 → Surf Shop → Just a Function |
| Open/Closed | SOLID | Book 2 → Movie Majesty → The Main Algorithm |
| Dependency Inversion | SOLID | Book 4 → Indiana Jeans → Your own API with JSON-Server |
| Durability | ACID | Book 4 → Indiana Jeans → Saving Survey Submissions |

**Deferred to server-side courses (Python/Django, C#/.NET):**
- Inheritance, Liskov Substitution (OOP)
- Atomicity, Consistency, Isolation (ACID)

**Open questions:**
- Should the callout be a named sidebar component (`<CSTheory>` tag) or inline prose?
- Do these get their own concept map entries in Phase 7, or a separate theory section?

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

## Phase 6: Curriculum Scripts

*Scope: the `course-bash-scripts` repository at https://github.com/nashville-software-school/course-bash-scripts. Scripts in this repo are referenced directly in exercise markdown — students run them to scaffold project files, seed databases, and configure their environments. This phase follows Phase 5 so that scripts can be updated to match whatever the new material requires, avoiding a second pass.*

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
