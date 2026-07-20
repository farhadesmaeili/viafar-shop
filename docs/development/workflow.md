# Development Workflow

## Introduction

This document defines the standard development workflow for the Viafar Shop project.

Following a consistent workflow helps maintain code quality, reduces integration issues, and keeps the project history clean.

---

# Development Environment

## Required Software

The project currently requires:

- Node.js 24+
- pnpm 11+
- Git

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

---

# Project Scripts

## Start Development

```bash
pnpm dev
```

---

## Build

```bash
pnpm build
```

---

## Start Production Build

```bash
pnpm start
```

---

## Lint

```bash
pnpm lint
```

---

## Fix Lint Issues

```bash
pnpm lint:fix
```

---

## Type Check

```bash
pnpm type-check
```

---

## Format Code

```bash
pnpm format
```

---

## Check Everything

Runs linting, type checking, and formatting checks.

```bash
pnpm check
```

---

# Package Manager

The project uses **pnpm**.

Do not use:

- npm
- yarn

Using a single package manager keeps dependency resolution consistent across all environments.

---

# Git Workflow

The project follows a simple feature-based Git workflow.

Typical flow:

```
main
  │
  ├── feature/header
  ├── feature/products
  ├── feature/cart
  └── feature/checkout
```

The `main` branch should always remain stable.

---

# Commit Convention

Commits follow the Conventional Commits specification.

Examples:

```text
feat: add responsive mobile navbar
fix: resolve language switcher routing
refactor: split desktop navbar into components
docs: update architecture documentation
style: improve spacing in header
chore: update dependencies
```

---

# Commitizen

Interactive commits are available through:

```bash
pnpm commit
```

Commit messages should be concise and clearly describe the change.

---

# Husky

Husky is used to automate Git hooks.

Hooks help ensure that code quality checks run before changes are committed.

---

# lint-staged

Only staged files are processed before each commit.

Current checks include:

- ESLint
- Prettier

This keeps commits clean and avoids formatting unrelated files.

---

# ESLint

ESLint enforces code quality and consistency.

All lint warnings and errors should be resolved before creating a commit.

---

# Prettier

Prettier automatically formats the project according to the shared configuration.

Avoid manual formatting that conflicts with Prettier.

---

# TypeScript

The project uses strict TypeScript settings.

Type errors should always be fixed before merging changes.

---

# Before Every Commit

Run:

```bash
pnpm check
```

This verifies:

- Formatting
- Linting
- Type safety

---

# Pull Requests

Every pull request should:

- Have a clear purpose.
- Focus on a single feature or fix.
- Keep changes as small as practical.
- Include documentation updates when necessary.

---

# Documentation

Whenever the architecture or workflow changes, the corresponding documentation should be updated in the same commit.

Documentation should always reflect the current state of the project.

---

# Future Workflow

As the project evolves, the workflow may include:

- Unit testing
- Component testing
- End-to-end testing
- Continuous Integration
- Automatic deployment
- Release automation

These additions should integrate into the existing workflow without changing the core development principles.

---

# Philosophy

A good workflow minimizes friction while maintaining high code quality.

Automation should handle repetitive tasks, allowing developers to focus on building reliable features.
