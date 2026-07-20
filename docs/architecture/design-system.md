# Design System

## Overview

The Viafar Shop Design System defines the visual language, UI principles, and reusable component standards used throughout the application.

Its purpose is to ensure consistency, accessibility, maintainability, and scalability as the project grows.

---

# Goals

The design system aims to provide:

- Consistent user experience
- Reusable UI components
- Predictable spacing
- Responsive layouts
- Accessible interfaces
- Easy maintenance

---

# Technology Stack

The UI layer is built using:

- React 19
- Next.js 16
- Tailwind CSS v4
- Base UI
- shadcn structure
- Lucide React
- next-themes

---

# Design Principles

## Consistency

Components should behave consistently across the entire application.

Users should never have to "learn" the interface twice.

---

## Simplicity

Prefer simple components over highly configurable ones.

Only expose props that solve real problems.

---

## Reusability

A component should be reusable before being duplicated.

If multiple pages use the same UI pattern, create a reusable component.

---

## Accessibility

Every component should support:

- Keyboard navigation
- Screen readers
- Visible focus states
- Proper ARIA attributes

Accessibility is a requirement, not an enhancement.

---

## Responsive First

Every component should work correctly on:

- Mobile
- Tablet
- Desktop

Layouts should adapt naturally to different screen sizes.

---

# Theme

The application supports three theme modes:

- Light
- Dark
- System

Theme switching is handled globally through the Theme Provider.

Components must never implement their own theme logic.

---

# Internationalization

All visible text must come from translation files.

Never hardcode user-facing strings inside components.

Example:

✔ Correct

```tsx
t('navigation.home');
```

✘ Incorrect

```tsx
Home;
```

---

# RTL / LTR

The UI automatically supports both directions.

RTL:

- Persian
- Arabic

LTR:

- English
- Turkish

Components should rely on logical layouts rather than fixed left/right assumptions.

---

# Typography

Current font:

- Vazirmatn

Typography should follow a clear hierarchy:

- Heading
- Subheading
- Body
- Caption

Avoid arbitrary font sizes whenever possible.

---

# Icons

Primary icon library:

- Lucide React

Rules:

- Use Lucide whenever possible.
- Custom SVG icons belong in `shared/icons`.
- Icons should have a consistent visual weight.

---

# Colors

Colors are controlled by the application's theme tokens.

Avoid hardcoded color values inside components.

Preferred approach:

```tsx
bg - background;
text - foreground;
border - border;
text - muted - foreground;
```

Avoid:

```tsx
text - red - 500;
bg - blue - 600;
```

unless intentionally representing a semantic state.

---

# Spacing

Spacing should follow Tailwind's spacing scale.

Avoid arbitrary values unless necessary.

Preferred examples:

```text
p-2
p-4
p-6
gap-2
gap-4
gap-6
```

---

# Border Radius

Use consistent rounded corners.

Common values:

- rounded-md
- rounded-lg
- rounded-xl
- rounded-2xl

Avoid mixing many different radius values within the same screen.

---

# Shadows

Shadows should be subtle.

Use elevation only when needed.

Avoid stacking multiple shadows.

---

# Animations

Animations should be:

- Fast
- Smooth
- Purposeful

Avoid decorative animations that do not improve usability.

---

# Component Categories

UI components are divided into three groups.

## UI Components

Location:

```
shared/components/ui
```

Examples:

- Button
- Input
- Sheet
- Dropdown
- Avatar
- Navigation Menu

These components are generic.

They should never contain business logic.

---

## Common Components

Location:

```
shared/components/common
```

Examples:

- Logo
- Theme Toggle
- Language Switcher

These components are reusable but application-specific.

---

## Layout Components

Location:

```
shared/components/layout
```

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

---

# Component Guidelines

Every component should:

- Have a single responsibility.
- Be easy to test.
- Be reusable when appropriate.
- Avoid unnecessary props.
- Prefer composition over inheritance.

---

# Naming Convention

Examples:

```
theme-toggle.tsx
language-switcher.tsx
desktop-header.tsx
mobile-navbar.tsx
```

Use kebab-case for file names.

Component names should use PascalCase.

---

# Styling Rules

Prefer utility classes.

Use `cn()` when conditional classes are required.

Example:

```tsx
cn('rounded-lg', active && 'bg-primary');
```

---

# Future Growth

As the project evolves, the design system will expand to include:

- Color palette documentation
- Typography scale
- Elevation system
- Grid system
- Form guidelines
- Data display components
- Commerce components
- Motion guidelines

---

# Philosophy

A design system is not a collection of components.

It is a shared language that allows the entire application to feel like one cohesive product.
