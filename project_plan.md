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
| — | **Phase 2: Concept Map Refactor** — resolve all ⚠️ flagged issues, audit Dynamite Duo concept map (skipped in Session 6), verify First Introduced accuracy across all chapters |
| — | **Phase 3: Navigation UX** — see open questions below; requires team discussion before nss-core changes |

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

- Should Explorer and Pioneer chapters appear in the primary navigation alongside core chapters, or in a separate "challenge" track?
- What is the skill-scoring schema for the gamification model?
- Should the concept map drive which exercises need content review/updates (e.g., to ensure the vocabulary term is actually present in the text before tagging it)?
- What does an `<Analogy>` tag look like in JSX, and what data does it pass to the API (term, book/chapter context, student profile)?
- **Explorer/Pioneer `previousChapterId` navigation:** Should the first exercise of an Explorer or Pioneer chapter have its `previousChapterId` point back to the last exercise of the original chapter it expands (e.g., Explorer: Queen Bee exercise 1 → `book_1_queen_bee_tribute_by_queen`), or should it continue chaining linearly through the Self-Assessment? The linear chain is simpler but severs the conceptual connection between the Explorer and its parent chapter.

---

## Phase 3: Navigation UX — Open Questions

*Requires team discussion before any nss-core changes. Background: the nss-core `Navigation` component renders one flat ordered list of chapters per book (Book 1 → 32 chapters, no sub-grouping). There is no concept of chapter groups or chapter types in the current data model or nss-core UI.*

### Problems to Solve

1. **No chapter grouping** — within each book, Queen Bee, Surf Shop, Björn, Self-Assessment, Explorers, and Group Project all appear as one undifferentiated list. Students cannot orient themselves.
2. **No chapter type distinction** — there is no visual signal in the nav that distinguishes a core exercise from a Self-Assessment, Explorer, Pioneer, or Group Project.
3. **Book-boundary navigation** — currently `previousChapterId: null` on the first chapter of each book means there is no prev/next link across book boundaries. Decide if cross-book navigation is desired.

### Design Questions for the Team

- **Grouping approach:** Should chapter groups (Queen Bee, Surf Shop, etc.) appear as:
  - (a) Non-clickable sub-headings within the book's nav list — flat but labeled
  - (b) Collapsible sub-sections within each book — a true 3-level tree
  - (c) No grouping — rely on title naming and visual type badges only
- **Chapter type treatment:** Should Explorer, Pioneer, Assessment, and Group Project chapters be:
  - (a) Visually badged/colored within the main list
  - (b) Separated into an "Optional Work" or "Challenges" section in the nav (nss-core already splits nav into "Required Work" / optional using a `required` flag on section configs)
  - (c) Hidden by default and revealed when a student reaches them
- **What data fields would be added to each chapter's `index.jsx`?** Candidates: `chapterGroup`, `type` (`"core"`, `"explorer"`, `"assessment"`, `"group_project"`, `"pioneer"`, `"capstone"`), `optional` (boolean).
- **Who makes nss-core changes?** nss-core is a separate package (`@nss-workshops/nss-core`). Any nav improvements require publishing a new version there before this repo can consume them.

### Known Bug Fixed (Session 20)

- **Book 1 was missing from the nav.** Root cause: nss-core's `rF` function finds the head of each section's chapter chain by looking for `!previousChapterId`. Book 1's first chapter had `previousChapterId: "setup_adhd_strategies"` (a cross-section reference), so `rF` returned an empty list and Book 1 disappeared. **Fixed:** set `previousChapterId: null` on `01-book-1/08-queen-intro/index.jsx`. Books 2–5 were unaffected because their first chapters already had `previousChapterId: null`.
