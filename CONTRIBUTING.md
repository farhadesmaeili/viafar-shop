# Contributing to Viafar Shop

Thank you for your interest in contributing to Viafar Shop.

Our goal is to maintain a clean, scalable, and maintainable codebase. Please read this guide before submitting changes.

---

# Development Environment

Required software:

- Node.js 24+
- pnpm 11+
- Git

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

---

# Before You Start

Before implementing a new feature:

- Check the project roadmap.
- Read the architecture documentation.
- Review the coding guidelines.
- Keep changes focused on a single purpose.

---

# Project Structure

The project follows a Feature-Based Architecture.

Business logic belongs inside:

```
src/features
```

Reusable infrastructure belongs inside:

```
src/shared
```

Application routing belongs inside:

```
src/app
```

Localization belongs inside:

```
src/i18n
```

---

# Coding Standards

Please follow:

- TypeScript strict mode
- ESLint rules
- Prettier formatting
- Tailwind CSS conventions
- Existing project architecture

Avoid introducing new patterns unless they solve a real problem.

---

# Commits

The project follows Conventional Commits.

Examples:

```text
feat: add product card
fix: resolve mobile navigation issue
docs: update roadmap
refactor: simplify header layout
```

Interactive commits:

```bash
pnpm commit
```

---

# Before Every Commit

Run:

```bash
pnpm check
```

This verifies:

- ESLint
- TypeScript
- Formatting

Only commit when all checks pass.

---

# Pull Requests

A pull request should:

- Focus on one feature or fix.
- Include clear descriptions.
- Keep commits clean.
- Update documentation when necessary.

Large unrelated changes should be split into multiple pull requests.

---

# Documentation

Documentation is considered part of the project.

Whenever architecture, workflow, or features change, update the relevant documentation.

---

# Philosophy

Good software is built through consistent decisions rather than isolated improvements.

Every contribution should make the project easier to understand, maintain, and extend.
