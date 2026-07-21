# Project Notes for Contributors (Human or AI)

This file is the shared, version-controlled memory for this repo. Anyone working
on the curriculum content — a human contributor or a Claude Code session — should
read it before making changes. It's separate from any single person's private
notes: nothing here should assume the reader already has private context from a
prior conversation.

For setup, tech stack, and deployment, see [README.md](README.md).

## Project context

This is an internal curriculum delivery platform for Nashville Software School (NSS),
displaying client-side JavaScript curriculum to **beginner** students. That audience
matters for every content decision — concept definitions, analogy guidance, and which
vocabulary terms need explanation should all assume no prior background.

Content originates from the public GitHub repo
[nashville-software-school/client-side-mastery](https://github.com/nashville-software-school/client-side-mastery)
but is being restructured and extended locally, not synced 1:1. In the source repo,
each book is a flat `book-N-name/chapters/` directory of markdown files with no
subdirectory hierarchy — the local platform has adapted this into numbered
`index.jsx` + `index.md` exercise directories. The source repo also has a
`supplement-foundations/` track (60+ files covering arrays, conditionals, etc.) that
has not been ported into the platform yet.

## Who's working on this repo right now

Identify the current contributor from git, don't assume:

```bash
git config user.name
git config user.email
```

Known contributors and the local paths their work references:

| Name | Email | This repo | `nss-core` (platform) repo | Completed project reference |
|---|---|---|---|---|
| Greg Korte | gregmkorte@gmail.com | `/home/gmkorte/workspace/nss/curriculum/client-side-curriculum` | `/home/gmkorte/workspace/nss/curriculum/platform` | `/home/gmkorte/workspace/client-side` |

If the current contributor (by `git config user.email`) isn't in this table, or a path
for them is unknown, **ask rather than assume or guess a path from convention** —
local clone locations vary per developer. Add their answer as a new row so future
sessions don't have to ask again.

If `git config user.email` doesn't match anyone in this table, treat the session
as a new contributor — add them here once you learn their name and local path
rather than guessing.

### Current work

Contributors take ownership of a phase, or a specific thread/section within a phase
(see `project_plan.md`), for the duration of a session or longer. This table is the
live claim board — check it before starting anything so two people don't pick up
the same work without knowing it. The **Status** column should make it possible to
tell at a glance who's still actively working versus who needs new work assigned.

| Contributor | Working on | Status | Branch | Since |
|---|---|---|---|---|
| Greg Korte | Repo governance setup — `CLAUDE.md` contributor onboarding, current-work tracking, memory rules | In progress | `general_edits` | 2026-07-20 |

Status values:
- **In progress** — actively working; continue where they left off
- **Needs new work** — finished their claim, hasn't picked up anything else yet
- **Blocked** — waiting on something (a decision, a dependency, another contributor) before continuing

**Session-start protocol:**
1. Identify the current contributor via `git config` (see above). If they're not in
   the contributor table, ask for their name and local paths and add a row — this
   is their profile going forward.
2. Print the Current Work table so everyone can see what's currently claimed and
   its status.
3. If the contributor already has a row marked **In progress**, ask whether they
   want to continue that work.
4. If they have a row marked **Needs new work** or **Blocked**, or don't have a row
   at all (new contributor, or first session), ask which phase they want to work on
   next (see the phase table in `project_plan.md`) — and if that phase has
   sub-threads or sections (e.g. Phase 5's five threads, Phase 4.5's sub-sessions),
   ask which one specifically.
5. Update their row — status, "Working on" if it changed, and `Branch` via
   `git branch --show-current`. If they're stepping away without new work picked,
   set status to **Needs new work** rather than leaving a stale **In progress**
   claim. Set `Since` to today's date whenever the `Working on` value changes; leave
   it as-is if they're just continuing the same claim.

This table tracks active, in-flight claims only — it's not a history log. An empty
table means nothing is currently claimed, not "nobody's ever worked here." Completed
work status belongs in `project_plan.md`, per the "What's tracked here vs. private
memory" rule below.

**Same-day fast path.** The transcript editing workflow (see Content Conventions
below) deliberately ends a session and expects a `/clear` after each topic section —
replaying the full session-start protocol on every single re-entry within the same
working day would be redundant and wastes tokens printing a table that hasn't
changed. Whether today's protocol has already run for this contributor is itself
private, moment-specific state per the "What's tracked here vs. private memory"
rule below — it does not belong in this shared file.

1. Before running the full protocol, check private memory for a note recording that
   the session-start protocol already ran today for this contributor, and what claim
   was active when it did.
2. If today's date matches and the claim is unchanged, skip the full print-and-ask —
   just a one-line confirmation ("Continuing [claim], picked up earlier today") is
   enough.
3. If there's no matching note (first session of the day, no note yet, or the claim
   has changed since — e.g. marked complete last session), run the full protocol as
   written above, then write or update that private memory note.
4. Finishing a claim mid-day updates both places: the private note (so the fast path
   stays accurate for the rest of the day) and the contributor's row in the shared
   Current Work table (so everyone else sees it too).

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

## What's tracked here vs. private memory

Two different problems, two different places:

**Goes in this repo** (`CLAUDE.md`, `planning/`, or a code comment) — anything a
different contributor, or a Claude Code session with no prior history in this repo,
would need in order to avoid repeating a mistake or re-deriving a decision already
made:
- Established content/technical conventions — especially ones that came from a
  correction ("we tried X, it broke Y, do Z instead")
- Durable project facts: purpose, audience, source-of-truth repos, contributor roster
- Current plan/status — lives in `project_plan.md`, not scattered elsewhere

**Stays in private memory only** (for a Claude Code session, the per-user memory
store outside this repo; for a human, wherever personal notes live) — anything
specific to one person or one moment that wouldn't help a different contributor:
- How a specific person likes to collaborate (communication style, review habits)
- Facts about a specific person's role or background, as opposed to the project itself
- In-flight scratch state that duplicates `project_plan.md` — prune the private copy
  once a phase is stable rather than letting two sources of truth drift apart (see
  the "Prune stale history actively" rule in `project_plan.md`)

**Rule of thumb:** if it would still be true and useful after swapping out who's
doing the work, it belongs here. If it's about *this person* or *this exact moment*,
it stays private.

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

**Linking to another chapter in-platform** — The platform (nss-core) routes chapters
via `/:chapterId`, so an internal link looks like `[text](/book_5_learn_wireframe)`.
A chapter's ID is defined in its own `index.jsx` (the `id:` field) and is **not**
derivable from the directory name or the old source-repo filename — e.g.
`REPAIR_FIRST_COMPONENT.md` maps to `book_5_honey_rae_first_component`, not
`book_5_repair_first_component`. Always read the target `index.jsx` to confirm the
ID rather than guessing. Anchor fragments (`#section-name`) do not work in SPA
links — drop them when converting a file-path link.

**External links** — Format as
`<a href="url" target="_blank" rel="noopener noreferrer">text</a>`, not markdown
`[text](url)`, so they open in a new tab. Leave URLs inside fenced code blocks
untouched.

## Local dev gotcha

Stop the Vite dev server before any bulk file-creation operation (e.g. downloading
many images, scaffolding many exercises at once). Vite's watcher rebuilds on every
new file, and concurrent rebuilds during a large loop can cause commands to time out.
