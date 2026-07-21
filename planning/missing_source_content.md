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

### Group project chapter files ✓ PORTED (Phase 3 Category D, 2026-06-30)

These group project sub-chapters have been ported as individual exercises. The parent `index.md` tables and navigation chains have been updated.

**Modern Farm** — ported as `02-book-2/25-mf-management` through `33-mf-process-queue`:

| Source file | Platform exercise | Chapter ID |
|---|---|---|
| `MF_INSTALL_PLAN.md` | `25-mf-management` | `book_2_modern_farm_management` |
| `MF_SEED_MODULES.md` | `26-mf-seed-modules` | `book_2_modern_farm_seed_modules` |
| `MF_FIELD.md` | `27-mf-tilling-field` | `book_2_modern_farm_tilling_field` |
| `MF_SOWING.md` | `28-mf-sowing-field` | `book_2_modern_farm_sowing_field` |
| `MF_HARVEST.md` | `29-mf-collecting-harvest` | `book_2_modern_farm_collecting_harvest` |
| `MF_RENDER_HARVEST.md` | `30-mf-selling-harvest` | `book_2_modern_farm_selling_harvest` |
| `MF_CHALLENGES.md` | `31-mf-optional-challenges` | `book_2_modern_farm_optional_challenges` |
| `MF_SILO_STACK.md` | `32-mf-silo-stack` | `book_2_modern_farm_silo_stack` |
| `MF_PROCESS_QUEUE.md` | `33-mf-process-queue` | `book_2_modern_farm_process_queue` |

**Cider Falls Park** — ported as `03-book-3/26-cf-intro` through `30-cf-services`:

| Source file | Platform exercise | Chapter ID |
|---|---|---|
| `CIDERFALLS_INTRO.md` | `26-cf-intro` | `book_3_cider_falls_intro` |
| `CIDERFALLS_DATA.md` | `27-cf-data-design` | `book_3_cider_falls_data_design` |
| `CIDERFALLS_ALGORITHM.md` | `28-cf-algorithmic-thinking` | `book_3_cider_falls_algorithmic_thinking` |
| `CIDERFALLS_RIVERS_AND_TRAILS.md` | `29-cf-you-are-here` | `book_3_cider_falls_you_are_here` |
| `CIDERFALLS_SERVICES.md` | `30-cf-services` | `book_3_cider_falls_services` |

**Truncheons & Flagons** — ported as `04-book-4/56-tf-structure-layout` through `63-tf-round-scores`:

| Source file | Platform exercise | Chapter ID |
|---|---|---|
| `TF_STRUCTURE_LAYOUT.md` | `56-tf-structure-layout` | `book_4_tf_structure_layout` |
| `TF_GAME_DATA.md` | `57-tf-game-data` | `book_4_tf_game_data` |
| `TF_API.md` | `58-tf-api` | `book_4_tf_api` |
| `TF_GAME_RENDER.md` | `59-tf-game-render` | `book_4_tf_game_render` |
| `TF_FORMS.md` | `60-tf-forms` | `book_4_tf_forms` |
| `TF_PLAYER_FORM.md` | `61-tf-player-form` | `book_4_tf_player_form` |
| `TF_CHOOSE_TEAMS.md` | `62-tf-choose-teams` | `book_4_tf_choose_teams` |
| `TF_ROUND_SCORES.md` | `63-tf-round-scores` | `book_4_tf_round_scores` |

Note: `bludgeon.jpg` referenced in `TF_STRUCTURE_LAYOUT.md` does not exist in the source repo and was not included.

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
| Modern Farm | `projects/tier-1/modern-farm/` | 9 chapters | ✓ Fully ported — intro at `24-group-project-modern-farm`, sub-chapters at `25–33` |
| Daily Journal | `projects/tier-2/daily-journal/` | 15 chapters | ✗ Not in platform |
| Dothard & Simbleton | `projects/tier-2/dothard-simbleton/` | 4 chapters | ✗ Not in platform |
| State Fair | `projects/tier-2/state-fair/` | 7 chapters | ✗ Not in platform |
| Cider Falls Park | `projects/tier-2/cider-falls/` | 5 chapters | ✓ Fully ported — intro at `25-group-project-cider-falls`, sub-chapters at `26–30` |
| Glassdale Cold Case | `projects/tier-3/glassdale/` | 17 chapters | ✗ Not in platform |
| Honest Abe | `projects/tier-3/honest-abe/` | 16 chapters | ✓ In platform as Pioneer: Honest Abe (exercises 48–50) |
| Pen Pal Society | `projects/tier-4/` (chapters in book-4) | 1 chapter | ✓ In platform as exercise 51 |
| GiffyGram | `projects/tier-4/giffygram/` | 20 chapters | ✓ In platform as exercise 52 (single exercise) |
| Truncheons & Flagons | `projects/tier-4/truncheons/` | 8 chapters | ✓ Fully ported — intro at `53-truncheons-and-flagons`, sub-chapters at `56–63` |
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
