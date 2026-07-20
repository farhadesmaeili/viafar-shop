# Coding Guidelines

## Introduction

This document defines the coding standards used throughout the Viafar Shop project.

Every contributor should follow these guidelines to maintain consistency, readability, and long-term maintainability.

---

# General Principles

Code should be:

- Readable
- Predictable
- Reusable
- Maintainable
- Type-safe

Always prefer clarity over cleverness.

---

# TypeScript

TypeScript is used in strict mode.

Avoid using:

```ts
any;
```

Prefer:

```ts
unknown;
```

or create proper interfaces and types.

Always define types when they improve readability.

---

# File Naming

Use **kebab-case** for file names.

Examples:

```
theme-toggle.tsx
language-switcher.tsx
desktop-header.tsx
mobile-navbar.tsx
```

Do not use:

```
ThemeToggle.tsx
themeToggle.tsx
```

---

# Component Naming

React component names must use PascalCase.

Example:

```tsx
export function ThemeToggle() {}
```

---

# Folder Naming

Folders should also use kebab-case.

Example:

```
desktop/
mobile/
components/
```

---

# Import Order

Organize imports in logical groups.

Recommended order:

1. External packages
2. Internal aliases
3. Relative imports
4. Type imports

Example:

```tsx
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Button } from '@/shared/components/ui';

import type { Locale } from '@/i18n/config';
```

Separate groups with one blank line.

---

# Absolute Imports

Always prefer project aliases.

✔ Correct

```tsx
import { Button } from '@/shared/components/ui';
```

✘ Avoid

```tsx
import { Button } from '../../../../components/ui';
```

---

# Components

Each component should have a single responsibility.

If a component becomes too large, split it into smaller components.

Example:

```
header/
├── desktop/
├── mobile/
└── components/
```

Avoid creating files with hundreds of lines.

---

# Feature Organization

Business logic belongs inside `features/`.

Do not place business logic inside the Shared layer.

Shared should only contain reusable infrastructure.

---

# Shared Components

Only reusable components belong inside:

```
shared/components
```

Feature-specific components should stay inside their feature.

---

# Styling

Use Tailwind CSS utilities.

Avoid inline styles.

Preferred:

```tsx
className = 'rounded-lg p-4';
```

Avoid:

```tsx
style={{ padding: 16 }}
```

---

# Conditional Classes

Use the project's `cn()` helper.

Example:

```tsx
cn('rounded-lg', active && 'bg-primary');
```

---

# Hardcoded Values

Avoid hardcoded UI text.

✔ Correct

```tsx
t('navigation.home');
```

✘ Incorrect

```tsx
Home;
```

---

# Internationalization

Every user-facing string must come from translation files.

Supported locales:

- fa
- en
- tr
- ar

---

# RTL Support

Never assume left or right.

Instead, rely on:

- locale
- logical layouts
- reusable helpers

The interface must work correctly for both RTL and LTR languages.

---

# Props

Keep component props minimal.

Only expose props that are actually needed.

Avoid overly generic components with excessive configuration.

---

# Functions

Functions should do one thing well.

Large functions should be broken into smaller reusable functions.

---

# Constants

Static values belong in:

```
shared/constants
```

Do not duplicate the same value across multiple files.

---

# Types

Global reusable types:

```
shared/types
```

Feature-specific types:

```
features/<feature>/types
```

---

# Hooks

Reusable hooks:

```
shared/hooks
```

Feature-specific hooks:

```
features/<feature>/hooks
```

---

# Comments

Write self-explanatory code.

Use comments only when they provide useful context.

Avoid commenting obvious code.

---

# TODO Comments

When a task is intentionally postponed, use:

```ts
// TODO:
```

Keep TODO comments short and actionable.

---

# Code Duplication

If code is duplicated more than once, consider extracting it into a reusable utility or component.

---

# Testing

As features are implemented, tests should accompany critical functionality.

Test structure:

```
tests/
├── component/
├── unit/
└── e2e/
```

---

# Formatting

The project uses:

- ESLint
- Prettier

Do not manually format code differently from the configured rules.

---

# Philosophy

Good code is not code that is difficult to write.

Good code is code that is easy to read, easy to modify, and easy to maintain months later.
