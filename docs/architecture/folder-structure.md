# Folder Structure

## Overview

Viafar Shop follows a Feature-Based Architecture with a dedicated Shared layer.

The goal is to keep business logic separated from reusable infrastructure while maintaining a scalable project structure.

Current source tree:

```
src/
├── app/
├── features/
├── i18n/
├── middleware/
├── shared/
└── tests/
```

---

# app/

Contains the Next.js App Router.

Responsibilities:

- Routing
- Layouts
- Pages
- Global styles
- Route groups
- Route-level configuration

Example:

```
app/
└── [locale]/
    ├── layout.tsx
    └── page.tsx
```

Business logic should never live inside the app directory.

---

# features/

Contains business features.

Each feature owns its own:

- Components
- Hooks
- Services
- Types
- Validation
- State
- API

Example:

```
features/
├── products/
├── cart/
├── auth/
└── checkout/
```

Features should remain isolated from one another whenever possible.

Shared code must never be duplicated inside multiple features.

---

# i18n/

Contains everything related to localization.

Current structure:

```
i18n/
├── config.ts
├── languages.ts
├── navigation.ts
├── request.ts
├── routing.ts
└── messages/
```

Responsibilities:

- Locale configuration
- Routing
- Translation loading
- Supported languages
- Translation messages

Every user-facing string must come from the messages directory.

---

# middleware/

Contains application middleware.

Responsibilities include:

- Locale detection
- Authentication (future)
- Security rules (future)
- Redirects
- Request preprocessing

---

# shared/

The Shared layer contains reusable code that is not tied to a specific business feature.

Current structure:

```
shared/
├── api/
├── components/
├── config/
├── constants/
├── hooks/
├── icons/
├── lib/
├── providers/
├── services/
├── styles/
├── types/
├── utils/
└── validations/
```

---

## shared/components/

Reusable React components.

```
components/
├── common/
├── layout/
└── ui/
```

### common/

Application-wide reusable components.

Examples:

- Logo
- Theme Toggle
- Language Switcher

These components contain application-specific behavior.

---

### layout/

Application layout components.

Examples:

- Header
- Navbar
- Container
- Main Layout

Large layout components may be split into:

```
desktop/
mobile/
components/
```

to keep files small and maintainable.

---

### ui/

Reusable UI primitives.

Examples:

- Button
- Input
- Sheet
- Navigation Menu
- Dropdown Menu
- Avatar

These components should remain generic and reusable.

Business logic should never be added here.

---

# shared/api/

Reusable API clients and request helpers.

Currently reserved for future implementation.

---

# shared/config/

Application configuration.

Examples:

- Environment configuration
- Constants
- Runtime settings

---

# shared/constants/

Application-wide constants.

Examples:

- Navigation items
- Static configuration
- Enumerations

Constants should never contain business logic.

---

# shared/hooks/

Reusable custom React hooks.

Hooks that belong to a specific feature should remain inside that feature.

---

# shared/icons/

Custom SVG icons.

Lucide icons should be used whenever possible.

Only custom brand icons belong here.

---

# shared/lib/

Low-level helper utilities.

Example:

- cn()
- Generic helper functions

Keep this directory lightweight.

---

# shared/providers/

Global React providers.

Examples:

- Theme Provider
- App Provider

Providers configure global application behavior.

---

# shared/services/

Reusable services shared across multiple features.

Business-specific services should remain inside their respective feature.

---

# shared/styles/

Shared styling resources.

Examples:

- CSS variables
- Theme styles
- Global utility styles

---

# shared/types/

Global TypeScript types.

Feature-specific types should stay inside the feature.

---

# shared/utils/

Reusable utility functions.

Avoid putting React-specific logic here.

---

# shared/validations/

Reusable validation schemas.

Feature-specific validation belongs inside that feature.

---

# tests/

Project test suites.

Recommended structure:

```
tests/
├── component/
├── unit/
└── e2e/
```

As the project grows, tests should mirror the application structure.

---

# Folder Placement Rules

Before creating a new file, ask:

1. Is this business logic?
   → Put it inside a Feature.

2. Is it reusable across features?
   → Put it inside Shared.

3. Is it related to routing?
   → Put it inside app.

4. Is it related to localization?
   → Put it inside i18n.

5. Is it a reusable UI primitive?
   → Put it inside shared/components/ui.

---

# Architecture Philosophy

A folder should have a clear responsibility.

Avoid creating folders "just in case."

Only introduce new directories when they solve a real organizational problem.
