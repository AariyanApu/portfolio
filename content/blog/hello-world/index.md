---
title: "Hello World: Why I Started This Blog"
excerpt: "Welcome to my blog — a space where I share thoughts on web development, the tools I use, and lessons learned while building real-world projects."
date: "2026-03-26"
tags: ["web-dev", "personal"]
---

## Why a Blog?

I've been building websites and web apps for a while now, and along the way I've picked up lessons that I wish someone had told me earlier. This blog is my attempt to share those lessons — not as polished tutorials, but as honest reflections from someone who's still learning.

## What I'll Write About

Here's a rough idea of what to expect:

- **Web development** — React, Next.js, TypeScript, and the modern stack I use daily
- **Project breakdowns** — Behind-the-scenes looks at real projects I've built
- **Tools & workflow** — The editors, terminals, and dev tools that keep me productive
- **Lessons learned** — Mistakes I've made and what I took from them

## A Quick Code Example

Here's a simple React hook I use in almost every project:

```typescript
import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    function listener(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
```

It's nothing fancy, but it shows how a small utility can save you from writing the same boilerplate over and over.

## What's Next

I plan to write here regularly — not on a strict schedule, but whenever I have something worth sharing. If you're into web dev, feel free to stick around.

> "The best time to start writing was yesterday. The second best time is now."

Thanks for reading — more posts coming soon.
