---
title: "My Daily Use Developer Toolbox in 2026"
excerpt: "A look at the editors, terminals, and tools that power my daily workflow as a full-stack developer."
date: "2026-03-25"
tags: ["tools", "productivity"]
---

## The Editor: Neovim

I switched to Neovim about two years ago and never looked back. The speed of modal editing, combined with the Lua-based configuration, makes it incredibly powerful once you get past the learning curve.

Key plugins I rely on:

- **Telescope** for fuzzy finding
- **LSP** for TypeScript, Go, and Python
- **Treesitter** for syntax highlighting
- **Oil.nvim** for file management

## Terminal: Ghostty

I've been using Ghostty as my daily terminal. It's fast, GPU-accelerated, and has excellent font rendering. The configuration is minimal — just the way I like it.

```bash
# My shell prompt is powered by Starship
eval "$(starship init zsh)"
```

## Package Manager: Bun

For JavaScript/TypeScript projects, Bun has replaced Node.js + npm for me. The speed difference is noticeable — installs that used to take 30 seconds now finish in under 5.

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "lint": "biome check .",
    "format": "biome format --write ."
  }
}
```

## Hosting: Vercel

For frontend and full-stack Next.js projects, Vercel is hard to beat. The Git-push-to-deploy workflow removes an entire category of DevOps work.

## Final Thoughts

The best tools are the ones that stay out of your way. I optimize for speed and simplicity — if a tool requires too much configuration to be useful, it's probably not the right fit.

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci
