# Architecture Overview

## Introduction

Viafar Shop is being developed as a modern, scalable, and maintainable e-commerce platform using the latest React ecosystem and Next.js App Router.

The project follows a **Feature-Based Architecture** combined with a **Shared Layer**, allowing the application to grow without sacrificing maintainability or code quality.

The primary goals of this architecture are:

- Scalability
- Maintainability
- Reusability
- Separation of concerns
- Excellent developer experience
- Multi-language support
- Responsive design
- Long-term project sustainability

---

# Core Principles

The architecture is built around several fundamental principles.

## 1. Feature-First Development

Business logic belongs inside Features.

Each feature should own:

- Components
- Hooks
- Services
- API logic
- Types
- Validation
- State management

Features should be independent from one another whenever possible.

---

## 2. Shared Layer

Anything that is reusable across multiple features belongs inside the Shared layer.

Examples include:

- UI components
- Layout components
- Utility functions
- Providers
- Configuration
- Icons
- Constants
- Types

The Shared layer must never contain business-specific logic.

---

## 3. Separation of Concerns

Every folder should have a single responsibility.

Examples:

- UI components render the interface.
- Services communicate with APIs.
- Constants store static values.
- Providers configure global application behavior.
- Utilities contain helper functions.

Mixing responsibilities should be avoided.

---

## 4. Component Composition

Large components should be composed from smaller reusable components.

Example:

Header

- Logo
- Search
- Actions
- Navigation

instead of creating one very large component.

---

## 5. Internationalization (i18n)

The application is designed to support multiple languages from the beginning.

Currently supported locales:

- Persian (fa)
- English (en)
- Turkish (tr)
- Arabic (ar)

All user-facing text must come from translation files.

Hardcoded UI text is not allowed.

---

## 6. RTL & LTR Support

The layout automatically adapts based on the active locale.

RTL:

- Persian
- Arabic

LTR:

- English
- Turkish

Components should rely on logical CSS properties and avoid assumptions about text direction.

---

## 7. Responsive First

Every new component should work correctly on:

- Mobile
- Tablet
- Desktop

Desktop-only or Mobile-only implementations should only be created when necessary.

---

# Current Project Structure

The project currently consists of these primary layers:

```
src/
├── app/
├── features/
├── i18n/
├── middleware/
└── shared/
```

---

# UI Architecture

The UI layer is built using:

- Tailwind CSS v4
- Base UI primitives
- shadcn structure
- Lucide Icons

Reusable UI components are located inside:

```
shared/components/ui
```

Application-specific reusable components are located inside:

```
shared/components/common
```

Layout components are located inside:

```
shared/components/layout
```

---

# State Management

At the current stage of the project, no global state management library has been introduced.

Global state will only be added when a real requirement exists.

This helps avoid unnecessary complexity during the foundation phase.

---

# API Layer

The project already includes a dedicated location for API-related code:

```
shared/api
```

As the project grows, API clients and reusable request logic will be placed here.

---

# Code Quality

The project emphasizes:

- Strict TypeScript
- ESLint
- Prettier
- Conventional Commits
- Consistent folder organization

Every new feature should follow the established project conventions.

---

# Current Phase

The project is currently in the **Foundation Phase**.

Completed:

- Project setup
- Internationalization
- Theme system
- Responsive Header
- Responsive Navigation
- Shared UI foundation

Future phases will introduce business features such as:

- Products
- Categories
- Cart
- Checkout
- Authentication
- User Dashboard

---

# Philosophy

A clean architecture is not about adding more folders.

It is about making future development easier.

Every architectural decision in Viafar Shop should prioritize clarity, maintainability, and long-term scalability over short-term convenience.
