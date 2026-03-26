# Adding a Blog Post

## 1. Create the folder

```
content/blog/<your-slug>/
```

Use lowercase, hyphens only. The folder name becomes the URL: `/blog/your-slug`.

## 2. Create `index.md`

```
content/blog/<your-slug>/index.md
```

```markdown
---
title: "Your Post Title"
excerpt: "A one or two sentence summary shown on the blog card."
date: "2026-03-27"
tags: ["tag-one", "tag-two"]
---

Your content here...
```

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Shown on card and post page |
| `excerpt` | yes | Shown on card (keep under 150 chars) |
| `date` | yes | ISO format `YYYY-MM-DD`, used for sorting |
| `tags` | no | Used for filtering on /blog |

## 3. Add a cover image (optional)

Drop a `cover.webp` (or `.jpg`, `.png`, `.svg`) into the same folder:

```
public/blog/<your-slug>/cover.webp
```

No URL needed — it's picked up automatically by the slug name. If omitted, a default placeholder is used.

## 4. Write your content

Standard Markdown is supported:

- `## Heading` / `### Subheading` — appear in the table of contents
- ` ```ts ... ``` ` — syntax-highlighted code blocks
- `**bold**`, `*italic*`, `> blockquote`
- `![alt](./image.png)` — inline images (place them in `public/blog/<your-slug>/`)

## 5. Done

The post is statically pre-rendered at build time. Run `bun run dev` to preview locally.
