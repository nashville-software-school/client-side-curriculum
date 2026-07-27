
Imagine a factory that makes toys. At the end of the assembly line, before any toy gets boxed up and shipped, an inspector checks it: does it work, is anything broken, did the last step actually do what it was supposed to? The inspector never gets tired, never forgets to check, and never lets a broken toy slip through by accident.

That's what a <analogy>CI/CD pipeline</analogy> does for code. In this Explorer chapter, you'll learn what that means, what <analogy>GitHub Actions</analogy> is, and how it's already quietly running in some of the projects you've built.

## What Is Continuous Integration (CI)?

**<analogy>Continuous Integration</analogy>** (CI for short) means automatically checking code every time it changes, instead of only checking it once in a while by hand. "Integration" refers to merging your code with everyone else's, and "continuous" means it happens constantly, on every push, not just when someone remembers to do it.

You've already been doing a manual version of this. When you run:

```
npm run test
```

...you're checking your own code by hand. CI takes that exact same idea and automates it: instead of *you* remembering to run the tests, a robot runs them for you, every single time code changes.

## What About Continuous Deployment (CD)?

**<analogy>Continuous Deployment</analogy>** (CD) is the next step after CI: once the tests pass, the code gets automatically shipped somewhere — a live website, an app store, a server. This chapter focuses on the CI half, since that's what's running in your projects today, but CI and CD are usually mentioned together because they're two stages of the same assembly line: check the code, then ship the code.

## What Is GitHub Actions?

**<analogy>GitHub Actions</analogy>** is GitHub's built-in tool for automating tasks like this — it's free to use on public repositories and is the most common CI/CD tool you'll run into as a working developer.

A few vocabulary terms worth knowing:

| Term | What it means |
|---|---|
| **Workflow** | A set of automated steps, written in a file, that GitHub runs for you |
| **Trigger** | The event that kicks a workflow off — usually a `push` or a `pull_request` |
| **Job** | A group of steps that run together (e.g. "install dependencies, then run tests") |
| **Runner** | The computer (managed by GitHub, in the cloud) that actually executes your workflow |

Workflows live in a special folder at the root of a repository: `.github/workflows/`. Each file in there is a `.yml` file describing what should run and when.

## Connecting This to What You've Already Built

Some of your own projects already have this set up. **Fish Fusion**, **Modern Farm**, **Hairy Potter**, and **House O Hummus** all have GitHub Actions configured to run their existing test suites automatically.

Here's the part that matters most for you right now: **you won't see any of this unless you go looking.** Just like tests today are invisible unless you run `npm run test` yourself, these workflows run quietly in the background. Nothing blocks you, nothing pops up — the checks just happen.

Go try it:

1. Open one of your repos above on GitHub.com (Fish Fusion or Modern Farm are good ones to start with).
2. Click the **Actions** tab near the top of the repo.
3. You'll see a list of workflow runs — one for every push that's happened since Actions was set up.
4. Click on the most recent run, then click into a job, to see the actual test output — the same kind of output you'd see running `npm run test` locally, just captured automatically.

## Anatomy of a Workflow File

Here's a simplified example of what a workflow file that runs tests looks like. This isn't copy-pasted from your exact repos, but it shows the same shape:

```yaml
name: Run Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Check out the code
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test
```

Reading it top to bottom, in plain English:

- **`on:`** — this is the trigger. This workflow runs whenever someone pushes to `main` or `develop`, or opens a pull request targeting those branches.
- **`jobs:` → `test:`** — this defines one job named "test."
- **`runs-on:`** — GitHub spins up a brand new cloud computer (a "runner") running Ubuntu Linux just for this job.
- **`steps:`** — the actual to-do list, run in order: grab the code, install Node.js, install the project's dependencies, then run the exact same test command you'd type yourself.

## Best Practices (Even at Your Level)

- **A red X isn't a punishment.** If a workflow run fails, it's the same signal as a failing test locally — something to fix, not something to be embarrassed about.
- **Keep workflows fast and simple.** A workflow that takes 20 minutes to tell you something broke is a lot less useful than one that takes 20 seconds.
- **Never put passwords, API keys, or tokens directly in a workflow file.** Anyone who can see the repo can see the file. (GitHub has a feature called *Secrets* for this — you don't need it yet, but the name is worth remembering.)
- **Small, frequent commits make failures easier to track down.** If you push one giant commit with 400 changed lines and the tests fail, you have 400 lines to search through. If you push five small commits, you know almost immediately which one broke things.

## Why This Matters

Virtually every professional software team you'll join uses some form of CI/CD — it's not a "senior developer" tool, it's baseline practice everywhere. Getting comfortable with the vocabulary now (workflow, trigger, job, runner) means none of it will be unfamiliar when you see it running for real.

## Additional Resources

<a href="https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions" target="_blank" rel="noopener noreferrer">GitHub Docs: Understanding GitHub Actions</a>
