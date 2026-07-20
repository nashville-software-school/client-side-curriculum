# Project Notes for Contributors (Human or AI)

This file is the shared, version-controlled memory for this repo. Anyone working
on the curriculum content — a human contributor or a Claude Code session — should
read it before making changes. It's separate from any single person's private
notes: nothing here should assume the reader already has private context from a
prior conversation.

For setup, tech stack, and deployment, see [README.md](README.md).

## Who's working on this repo right now

Identify the current contributor from git, don't assume:

```bash
git config user.name
git config user.email
```

Known contributors:

| Name | Email | Local repo path |
|---|---|---|
| Greg Korte | gregmkorte@gmail.com | `/home/gmkorte/workspace/nss/curriculum/client-side-curriculum` |

If `git config user.email` doesn't match anyone in this table, treat the session
as a new contributor — add them here once you learn their name and local path
rather than guessing.

## Planning documents

Long-lived planning and reference docs live in [planning/](planning/):

| File | Purpose |
|---|---|
| [project_plan.md](planning/project_plan.md) | Guiding reference for the curriculum restructure project — session status, next steps |
| [curriculum_map.md](planning/curriculum_map.md) | Full Book → Chapter → Exercise directory with current and target IDs |
| [concept_map.md](planning/concept_map.md) | Vocabulary terms mapped to exercises, with `<Analogy>` tagging context |
| [missing_source_content.md](planning/missing_source_content.md) | Catalog of source-repo directories with no corresponding platform exercise |
| [nav-refactor-context.md](planning/nav-refactor-context.md) | Mapping used for the `chapterGroup`/`type` navigation refactor |

At the start of any restructuring or content-editing session, read `project_plan.md`
first — it tracks what phase of work is active and what's already decided.

## Content conventions

These are established rules, not defaults to rediscover each time:

**Images** — Use HTML `<img src="./filename.png" alt="...">` syntax in markdown,
never `![alt](./filename.png)`. The path-rewriter in `src/sections/index.js` only
matches HTML `<img>` tags; markdown image syntax produces broken paths in
production. Images live in `public/assets/`.

**Chapter naming** — Derive chapter names from the first exercise's `index.md`
`#` heading, never from the directory prefix abbreviation (`mm`, `fd`, `ij`, etc.).
Abbreviations are guesses; the markdown content is authoritative.

**Explorer / Self-Assessment / Pioneer / Group Project chapters** — These are
first-class chapters at the same level as core chapters, not folded into a
generic "Extras" section. Naming conventions:
- `Explorer: [Chapter Name]`
- `Pioneer: [Project Name]`
- `Advanced Project: [Name]`
- `Group Project: [Name]`

All appear in `curriculum_map.md` using the same table format as core chapters.

**Concept map format** — `concept_map.md` uses one row per vocabulary term:
`Concept | Vocabulary Term | Definition | First Introduced | Reinforced In`.
"First Introduced" must name the specific exercise, not just the book — the
analogy system uses it to locate the term in content. Don't guess at terms;
read the exercise markdown before adding a row.

**Transcript style** — When normalizing video transcripts to markdown:
- Add `### Topic Name` headers before each thematic group of timestamp paragraphs
- Capitalize sentence starts and proper brand names (React, ESLint, JavaScript);
  do NOT capitalize spoken compound terms ("use effect", "use state")
- No backticks around code identifiers, no em/en dashes, no ellipsis between
  paragraphs, "all right" as two words
- Keep all dialog exactly as spoken — fillers, false starts, and self-corrections
  are part of the instructor's voice, not errors
- Reference: `src/sections/05-book-5/11-repair-cust-details/index.md` (ex 11a/11b)
  is the established style baseline

**Transcript editing workflow** — Edit one topic section per work session, not a
whole file at once — raw transcript text is token-heavy and compounds fast.
Confirm which transcript/section is active before starting, and stop cleanly at
a topic-section boundary rather than mid-section.

## Local dev gotcha

Stop the Vite dev server before any bulk file-creation operation (e.g. downloading
many images, scaffolding many exercises at once). Vite's watcher rebuilds on every
new file, and concurrent rebuilds during a large loop can cause commands to time out.
