# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Minimalist personal website built with Astro to showcase projects with metrics tracking (revenue, users, etc.).

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro       # Simple header (logo + contact)
│   └── ProjectCard.astro  # Project card with icon and metrics
├── layouts/
│   └── BaseLayout.astro   # Main layout
├── pages/
│   └── index.astro        # Single page with hero + projects
├── content/
│   ├── config.ts          # Collection schema
│   └── projects/          # Project markdown files
└── styles/
    └── global.css         # Tailwind CSS
```

## Adding a New Project

Create a `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Short description"
icon: "🚀"                    # Emoji for the card
metric: "$1.2M"               # Optional: main metric
metricLabel: "ingresos"       # Optional: metric label
url: "https://project.com"    # Optional: external link
order: 1                      # Display order (lower = first)
---

Optional longer description (not currently displayed on homepage).
```

## Design

- Single page layout
- Minimalist black/white/gray
- Font: Inter
- Projects displayed in 3-column grid with metrics
