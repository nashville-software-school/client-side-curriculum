# Missing Source Content Catalog

Content that exists in the original source repo ([client-side-mastery](https://github.com/nashville-software-school/client-side-mastery)) but has no corresponding file in this platform. Use this as a reference when deciding what to bring in during Phase 3 (broken links) or Phase 5 (new material).

---

## Files Directly Referenced by Broken Links

These are linked from existing exercises but the files were never migrated. Fixing these is part of Phase 3.

### Supplementary files (single files)

| Source path | Referenced from | Notes |
|---|---|---|
| `book-1-queen-bee/chapters/TROUBLESHOOT_VSCODE.md` | `00-setup/02-getting-started-mac/index.md` | VSCode troubleshooting guide |
| `book-3-deshawns-dog-walking/chapters/code/productPrice.js` | `03-book-3/21-ba-product-click/index.md` | Code snippet for product price exercise |
| `book-3-deshawns-dog-walking/chapters/code/employeeSales.js` | `03-book-3/22-ba-employee-click/index.md` | Code snippet for employee sales exercise |
| `book-3-deshawns-dog-walking/chapters/code/dogWalker.js` | Not directly linked (exists alongside above) | Related code snippet |
| `projects/tier-3/honest-abe/chapters/data/honestabe.json` | `04-book-4/46-pioneer-abe-politicians/index.md` | Seed data for Pioneer: Honest Abe |

### Group project chapter files

These group project exercises exist as single `index.md` files that link to sub-chapter files which were never migrated.

**Modern Farm** (`02-book-2/24-group-project-modern-farm/index.md` links to `./chapters/MF_*.md`):

| Source file | Source path |
|---|---|
| `MF_INSTALL_PLAN.md` | `projects/tier-1/modern-farm/chapters/MF_INSTALL_PLAN.md` |
| `MF_SEED_MODULES.md` | `projects/tier-1/modern-farm/chapters/MF_SEED_MODULES.md` |
| `MF_FIELD.md` | `projects/tier-1/modern-farm/chapters/MF_FIELD.md` |
| `MF_SOWING.md` | `projects/tier-1/modern-farm/chapters/MF_SOWING.md` |
| `MF_HARVEST.md` | `projects/tier-1/modern-farm/chapters/MF_HARVEST.md` |
| `MF_RENDER_HARVEST.md` | `projects/tier-1/modern-farm/chapters/MF_RENDER_HARVEST.md` |
| `MF_CHALLENGES.md` | `projects/tier-1/modern-farm/chapters/MF_CHALLENGES.md` |
| `MF_SILO_STACK.md` | `projects/tier-1/modern-farm/chapters/MF_SILO_STACK.md` |
| `MF_PROCESS_QUEUE.md` | `projects/tier-1/modern-farm/chapters/MF_PROCESS_QUEUE.md` |

**Cider Falls Park** (`03-book-3/25-group-project-cider-falls/index.md` links to `./chapters/CIDERFALLS_*.md`):

| Source file | Source path |
|---|---|
| `CIDERFALLS_INTRO.md` | `projects/tier-2/cider-falls/chapters/CIDERFALLS_INTRO.md` |
| `CIDERFALLS_DATA.md` | `projects/tier-2/cider-falls/chapters/CIDERFALLS_DATA.md` |
| `CIDERFALLS_ALGORITHM.md` | `projects/tier-2/cider-falls/chapters/CIDERFALLS_ALGORITHM.md` |
| `CIDERFALLS_RIVERS_AND_TRAILS.md` | `projects/tier-2/cider-falls/chapters/CIDERFALLS_RIVERS_AND_TRAILS.md` |
| `CIDERFALLS_SERVICES.md` | `projects/tier-2/cider-falls/chapters/CIDERFALLS_SERVICES.md` |

**Truncheons & Flagons** (`04-book-4/53-truncheons-and-flagons/index.md` links to `./chapters/TF_*.md`):

| Source file | Source path |
|---|---|
| `TF_STRUCTURE_LAYOUT.md` | `projects/tier-4/truncheons/chapters/TF_STRUCTURE_LAYOUT.md` |
| `TF_GAME_DATA.md` | `projects/tier-4/truncheons/chapters/TF_GAME_DATA.md` |
| `TF_API.md` | `projects/tier-4/truncheons/chapters/TF_API.md` |
| `TF_GAME_RENDER.md` | `projects/tier-4/truncheons/chapters/TF_GAME_RENDER.md` |
| `TF_FORMS.md` | `projects/tier-4/truncheons/chapters/TF_FORMS.md` |
| `TF_PLAYER_FORM.md` | `projects/tier-4/truncheons/chapters/TF_PLAYER_FORM.md` |
| `TF_CHOOSE_TEAMS.md` | `projects/tier-4/truncheons/chapters/TF_CHOOSE_TEAMS.md` |
| `TF_ROUND_SCORES.md` | `projects/tier-4/truncheons/chapters/TF_ROUND_SCORES.md` |

### Cross-section reference

| Source path | Referenced from | Notes |
|---|---|---|
| `supplement-api/chapters/API_CLIENTS.md` (not found in source) | `04-book-4/54-holiday-road/index.md` | API client tools chapter; source path may have changed |

---

## Extra Chapters Within Included Books

Chapters that exist in the source for Books 1–3 but were not included in the new platform. These are in addition to the core exercises that were migrated.

### Book 1 (source has 60 chapters; platform has 32 exercises across Setup + Book 1)

**Setup extras not included:**
- `GETTING_STARTED_WINDOWS_OLD.md` — old Windows setup (intentionally excluded)
- `KEYBOARD_CORE.md` — general keyboard shortcuts (vs `KEYBOARD_DEBUG.md` which was included)

**Queen Bee extras not included:**
- `FUNCTIONS_RETURN.md`, `FUNCTIONS_FLOW.md`, `FUNCTIONS_REFRESH.md` — function concept reinforcement
- `FUNCTIONS_STUDENTS.md`, `FUNCTIONS_HOT_DOGS.md`, `FUNCTIONS_POTTERY.md` — extra function practice
- `FUNCTIONS_MATH.md`, `FUNCTIONS_LAMBDA.md`, `FUNCTIONS_CANDY_FACTORY.md`, `FUNCTIONS_CAR_FACTORY.md` — additional factory exercises
- `FUNCTIONS_DECONSTRUCTION.md`, `FUNCTIONS_DECONSTRUCT_CALCULATOR.md` — destructuring exercises
- `FUNCTIONS_MODULES.md`, `FUNCTIONS_ASSESSMENT.md` — modules and assessment extras
- `OBJECT_CREATE.md` — object creation exercise
- `JS_SCOPE.md` — scope exercise
- `SELF_REFLECTIONS.md` — student self-reflection exercise
- `DEBUGGER_ASSESSMENT.md` — additional debugger assessment
- `FACTORY_GENERATOR.md` — factory/generator exercise
- `CHUEGY_CROCS.md` — extra practice exercise
- `LINKS_KITCHEN.md` — standalone exercise

### Book 2 (source has 49 chapters; platform has 24 exercises)

**Git/GitHub track (not included — may be handled in setup or separately):**
- `GIT_SETUP.md`, `GIT_BASICS.md`, `GIT_WORKFLOW.md`, `GIT_REMOTE_BACKUP.md`
- `GIT_CLI_SHORTCUTS.md`, `GIT_UPGRADE.md`, `GITHUB_PAGES.md`, `REMOTE_SETUP.md`

**Terminal/CLI track (not included):**
- `CLI_BASICS.md`, `TERMINAL_WELCOME.md`, `AQUARIUM_DIRECTORIES.md`

**CSS layout project (not included — "Sally" project):**
- `SALLY_SETUP.md` and related exercises

**Extra exercises not included:**
- `VARIABLES.md`, `COPIES.md`, `HTML_COMPONENTS.md`, `POMODORO.md`
- `FROGGY.md`, `HAIRY_POTTER.md`, `REPRESENTATIVES.md`, `COFFEE_HOUSES.md`
- `MA_WIREFRAMES.md`, `MA_DATA_STRUCTURES.md`, `MA_ORGANIZATION.md`
- `MA_AQUARIUM_DESIGN.md`, `MA_AUTOMATE_LOCATIONS.md`, `MA_AUTOMATE_TIPS.md`
- `MA_CREATING_FISH_COMPONENTS.md`, `MA_EXPORTING_FISH.md`, `MA_DEBUG_THE_AQUARIUM.md`

### Book 3 (source has 33 chapters; platform has 25 exercises — close match)

**Extra exercises not included:**
- `TOUR_INTRO.md`, `TOUR_FEATURES.md`, `TOUR_BAND_MEMBERS.md` — a small "tour" extra project
- `DD_NEW_FEATURES.md`, `DD_REFACTOR.md`, `DD_MANY_MANY.md`, `DD_WALKERS.md` — extra DeShawn exercises
- `DD_EVENT_LISTENER_DEBUGGING.md`, `DEBUGGING_INTRO.md` — extra debugging exercises

---

## Entire Projects Not Included

Projects that exist in the source repo under `projects/` with no corresponding exercises in the new platform.

| Project | Source path | Size | Notes |
|---|---|---|---|
| Fish Fusion | `projects/tier-1/fish-fusion/` | 7 chapters | ✓ Already in platform as `39-group-project-fish-fusion` (single exercise) |
| Modern Farm | `projects/tier-1/modern-farm/` | 9 chapters | ✓ In platform as `24-group-project-modern-farm` but sub-chapters missing (see above) |
| Daily Journal | `projects/tier-2/daily-journal/` | 15 chapters | ✗ Not in platform |
| Dothard & Simbleton | `projects/tier-2/dothard-simbleton/` | 4 chapters | ✗ Not in platform |
| State Fair | `projects/tier-2/state-fair/` | 7 chapters | ✗ Not in platform |
| Cider Falls Park | `projects/tier-2/cider-falls/` | 5 chapters | ✓ In platform as `25-group-project-cider-falls` but sub-chapters missing (see above) |
| Glassdale Cold Case | `projects/tier-3/glassdale/` | 17 chapters | ✗ Not in platform |
| Honest Abe | `projects/tier-3/honest-abe/` | 16 chapters | ✓ In platform as Pioneer: Honest Abe (exercises 48–50) |
| Pen Pal Society | `projects/tier-4/` (chapters in book-4) | 1 chapter | ✓ In platform as exercise 51 |
| GiffyGram | `projects/tier-4/giffygram/` | 20 chapters | ✓ In platform as exercise 52 (single exercise) |
| Truncheons & Flagons | `projects/tier-4/truncheons/` | 8 chapters | ✓ In platform as exercise 53 but sub-chapters missing (see above) |
| Holiday Road | `projects/tier-4/holidayroad/` | README only | ✓ In platform as exercise 54 |
| Algorithms | `projects/tier-5/algorithms/` | 14 chapters | ✗ Not in platform |
| Kennels (React) | `projects/tier-5/kennels/` | 13 chapters | ✗ Not in platform |
| Thorns & Roses | `projects/tier-5/thorns-roses/` | 7 chapters | ✗ Not in platform |

---

## Supplement Foundations Track

An entirely separate foundational JavaScript track (`supplement-foundations/`) covering arrays, conditions, objects, and iteration with three practice project threads (Digital Notes, Library Tracker, Meal Planner). 60+ files. Has no presence in the new platform.

Source path: `supplement-foundations/`

Notable sub-sections:
- `ARRAYS_*.md` — array fundamentals series (8 files)
- `CONDITIONS_INTRO.md` — conditionals
- `DN_*.md` — Digital Notes project (13 files)
- `LT_*.md` — Library Tracker project (12 files)
- `MP_*.md` — Meal Planner project (3 files)
- `JS_DATA_ASSESSMENT.md` — assessment

---

## Images

All images referenced in exercises were never migrated from the source repo. They exist at `book-N-*/chapters/images/` in the source. See the Phase 3 Category C/E sessions for the full list of broken image references and the migration plan.
