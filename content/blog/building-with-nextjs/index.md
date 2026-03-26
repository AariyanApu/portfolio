---
title: "Building a Modern Portfolio with Next.js 16"
excerpt: "How I built this portfolio site using Next.js 16, React 19, Tailwind CSS v4, and Framer Motion — with a focus on performance and design."
date: "2026-03-20"
tags: ["web-dev", "nextjs", "react"]
---

## Why Next.js 16?

Next.js has been my framework of choice for a while now, and version 16 brings some solid improvements:

- **React Compiler** — no more manual `useMemo` and `useCallback`
- **Turbopack** — dramatically faster dev server
- **Server Components by default** — less client JS shipped

## The Stack

Here's what powers this portfolio:

| Technology | Role |
|---|---|
| Next.js 16 | Framework |
| React 19 | UI library |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| shadcn/ui | Component library |
| Biome | Linting & formatting |

## Design Decisions

### Color System

I chose OKLCh for the color space because it provides perceptually uniform colors. The primary accent is a teal that works well in both light and dark modes.

### Animations

Every section uses a scroll-triggered entrance animation — a subtle combination of opacity, Y-translate, and scale:

```typescript
const variants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
```

The easing curve `[0.22, 1, 0.36, 1]` gives a snappy-but-smooth feel that avoids the bounciness of spring animations.

### Mobile First

Every component starts with the mobile layout and scales up. This isn't just a best practice — it forces you to prioritize content and avoid layout bloat.

## Performance

The React Compiler eliminates unnecessary re-renders automatically. Combined with Server Components (which ship zero JS to the client by default), the portfolio stays fast even with rich animations.

## What I Learned

1. **Tailwind v4's CSS-only config** is a game changer — no more `tailwind.config.js`
2. **Framer Motion + Server Components** work well together when you keep animations in client components
3. **Biome** is a worthy replacement for ESLint + Prettier — faster and simpler

Building this portfolio was a great exercise in balancing aesthetics with performance. Every decision had a trade-off, and I tried to lean toward simplicity wherever I could.
