# Navigation Refactor — Curriculum Changes Context

## What This Is

`@nss-workshops/nss-core` now supports two new optional fields on chapter data:

- `chapterGroup: string` — groups chapters under a collapsible sub-heading inside a book section
- `type: string` — drives a visual badge on the chapter link in the nav

Both fields are **fully optional and backward compatible**. Chapters that don't have them render exactly as they did before.

---

## How to Add the Fields

Each chapter's data lives in its `index.jsx`. The current shape is:

```js
export default {
    id: "book_1_queen_bee_intro",
    title: "Introduction to Functions",
    previousChapterId: null,
    nextChapterId: "book_1_queen_bee_hail",
    content,
}
```

Add `chapterGroup` and/or `type` alongside the existing fields:

```js
export default {
    id: "book_1_queen_bee_intro",
    title: "Introduction to Functions",
    previousChapterId: null,
    nextChapterId: "book_1_queen_bee_hail",
    chapterGroup: "Queen Bee",
    content,
}
```

```js
export default {
    id: "book_1_self_assessment",
    title: "Self-Assess Your Debugging Skills",
    previousChapterId: "book_1_bjorn_diagram",
    nextChapterId: "book_1_explorer_queen_bee_modular",
    chapterGroup: "Self-Assessment",
    type: "assessment",
    content,
}
```

---

## Valid `type` Values and Their Nav Badges

| `type` value    | Badge shown       | When to use |
|-----------------|-------------------|-------------|
| _(omitted)_     | no badge          | Core chapters — the default required work |
| `"assessment"`  | Self-Assessment   | The self-assessment chapter at the end of each book |
| `"advanced"`    | Explorer          | Explorer chapters (optional expansion) |
| `"expert"`      | Pioneer           | Pioneer chapters (deep learning) |
| `"group-project"` | Group Project   | Group project chapters |
| `"capstone"`    | Capstone          | Capstone resources (Book 5 only) |

---

## Complete Chapter Mapping

### Book 1 — Functions & Modules (`src/sections/01-book-1/`)

| Directory | `chapterGroup` | `type` |
|-----------|---------------|--------|
| 08-queen-intro → 15-queen-tribute-by-queen | `"Queen Bee"` | _(omit)_ |
| 16-surf-intro → 23-surf-diagram | `"Sequina's Surf Shop"` | _(omit)_ |
| 24-bjorn-intro → 30-bjorn-diagram | `"Björn's Wilderness Adventures"` | _(omit)_ |
| 31-self-assessment | `"Self-Assessment"` | `"assessment"` |
| 32-explorer-queen-modular → 38-explorer-bjorn-array-find | `"Explorer Chapters"` | `"advanced"` |
| 39-group-project-fish-fusion | `"Group Project"` | `"group-project"` |

---

### Book 2 — Martin's Aquarium (`src/sections/02-book-2/`)

| Directory | `chapterGroup` | `type` |
|-----------|---------------|--------|
| 01-duo-setup → 08-duo-review | `"Dynamite Duo"` | _(omit)_ |
| 09-mm-setup → 15-mm-card-layout | `"Movie Majesty"` | _(omit)_ |
| 16-ma-setup → 20-ma-filtering-fish | `"Martin's Aquarium"` | _(omit)_ |
| self-assessment chapter | `"Self-Assessment"` | `"assessment"` |
| explorer chapters | `"Explorer Chapters"` | `"advanced"` |
| group-project chapter | `"Group Project"` | `"group-project"` |

_(Verify exact directory names against the current section — numbering may differ from the above.)_

---

### Book 3 — DeShawn's Dog Walking (`src/sections/03-book-3/`)

| Directory | `chapterGroup` | `type` |
|-----------|---------------|--------|
| DeShawn chapters | `"DeShawn's Dog Walking"` | _(omit)_ |
| Shipping Ship Ships chapters | `"Shipping Ship Ships"` | _(omit)_ |
| Brewed Awakenings chapters | `"Brewed Awakenings"` | _(omit)_ |
| self-assessment | `"Self-Assessment"` | `"assessment"` |
| group-project | `"Group Project"` | `"group-project"` |

---

### Book 4 — Kneel Diamonds (`src/sections/04-book-4/`)

| Directory | `chapterGroup` | `type` |
|-----------|---------------|--------|
| Fox y Dog chapters | `"Fox y Dog"` | _(omit)_ |
| Indiana Jeans chapters | `"Indiana Jeans"` | _(omit)_ |
| Kneel Diamonds chapters | `"Kneel Diamonds"` | _(omit)_ |
| Cars 'R Us chapters | `"Cars 'R Us"` | _(omit)_ |
| self-assessment | `"Self-Assessment"` | `"assessment"` |
| Explorer chapters | `"Explorer Chapters"` | `"advanced"` |
| Pioneer chapters | `"Pioneer Chapters"` | `"expert"` |
| Advanced projects (Pen Pal, Giffygram, etc.) | `"Advanced Projects"` | `"advanced"` |
| group-project (Exomine) | `"Group Project"` | `"group-project"` |

---

### Book 5 — Honey Rae's Repair Shop (`src/sections/05-book-5/`)

| Directory | `chapterGroup` | `type` |
|-----------|---------------|--------|
| 01–16 Honey Rae chapters | `"Honey Rae's Repair Shop"` | _(omit)_ |
| 17–21 Chuckle Checklist chapters | `"Chuckle Checklist"` | _(omit)_ |
| 22–33 Learning Moments chapters | `"Learning Moments"` | _(omit)_ |
| 34–35 Explorer (deployment) chapters | `"Explorer Chapters"` | `"advanced"` |
| 36-capstone-resources | `"Capstone Resources"` | `"capstone"` |
| 37-group-project | `"Group Project"` | `"group-project"` |

> **Note:** Book 5 has no self-assessment. After the group project, students move directly to capstones.

---

## Testing with the Local Platform Build

The platform package must be symlinked before changes here will reflect in the UI.

```sh
# In the platform repo — build and register the local package
cd /home/gmkorte/workspace/nss/curriculum/platform
npm run build && npm link

# In this repo — point to the local build
npm link @nss-workshops/nss-core
npm run dev
```

To restore the published package when done:

```sh
npm unlink @nss-workshops/nss-core
npm install

# In platform repo
npm unlink
```

---

## What to Verify

1. **No regression** — a book section with no `chapterGroup` or `type` added yet should look identical to before.
2. **Group headers** — chapters with the same `chapterGroup` string appear under a collapsible header; the active chapter's group auto-expands on load.
3. **Badges** — chapters with `type` show the correct pill label; chapters without `type` show nothing.
4. **Book 5 capstone** — `type: "capstone"` renders the Capstone badge (crimson pill).
