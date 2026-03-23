# Aariyan Apu — Portfolio

> Personal portfolio of **Aariyan Apu**, Full Stack Web Developer from Bangladesh.
> Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

---

## Tech Stack

| Layer              | Technology              |
| ------------------ | ----------------------- |
| Framework          | Next.js 16 (App Router) |
| Language           | TypeScript 5 (strict)   |
| Styling            | Tailwind CSS v4         |
| UI Components      | shadcn/ui + Radix UI    |
| Icons              | Lucide React            |
| Linter / Formatter | Biome                   |
| Package Manager    | Bun                     |

---

## Getting Started

**Prerequisites:** [Bun](https://bun.sh) installed.

```bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# 2. Install dependencies
bun install

# 3. Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Commands

| Command          | Description                 |
| ---------------- | --------------------------- |
| `bun run dev`    | Start development server    |
| `bun run build`  | Create production build     |
| `bun start`      | Start production server     |
| `bun run lint`   | Run Biome linter            |
| `bun run format` | Format all files with Biome |

### Adding shadcn/ui Components

```bash
bunx shadcn@latest add <component-name>

# Examples
bunx shadcn@latest add card
bunx shadcn@latest add dialog
```

---

## Folder Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout — fonts, metadata
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Tailwind theme, color tokens, base styles
│   ├── components/
│   │   └── ui/               # Reusable UI components (shadcn/ui conventions)
│   │       └── button.tsx
│   ├── lib/
│   │   └── utils.ts          # cn() helper — clsx + tailwind-merge
│   └── utils/
│       └── Kenfolg.otf       # Local display / title font
├── CLAUDE.md                 # Guidance for AI coding assistants
├── biome.json                # Linter + formatter config
├── components.json           # shadcn/ui config
├── next.config.ts            # Next.js config (React Compiler enabled)
└── package.json
```

---

## Fonts

This project uses two fonts, both loaded via `next/font` for zero layout shift and automatic optimization.

### Quicksand — Body font (Google Fonts)

Applied globally to `<body>`. This is the default font everywhere — no class needed.

```tsx
<p>This already uses Quicksand.</p>
```

To use explicitly via Tailwind:

```tsx
<p className="font-sans">Quicksand text</p>
```

---

### Kenfolg — Title / Display font (local)

A custom `.otf` font stored at `src/utils/Kenfolg.otf`. Use it via the `font-title` Tailwind utility.

```tsx
<h1 className="font-title">Aariyan Apu</h1>
<span className="font-title text-4xl">Display Text</span>
```

#### Adding a new local font

1. Place the font file in `src/utils/`
2. Register it in `src/app/layout.tsx`:

```ts
import localFont from "next/font/local";

const myFont = localFont({
  src: "../utils/MyFont.otf",
  variable: "--font-my-font",
});
```

1. Add the variable to `<body>`:

```tsx
<body className={`... ${myFont.variable} antialiased`}>
```

1. Expose it in `src/app/globals.css` inside `@theme inline`:

```css
@theme inline {
  --font-my-font: var(--font-my-font), sans-serif;
}
```

1. Use it anywhere with `font-my-font`.

---

## Theming

Colors are defined in `src/app/globals.css` using CSS custom properties in the **OKLch color space** with full dark mode support. To change the palette, update the values in `:root` (light) and `.dark` (dark).

The Tailwind theme is configured entirely in CSS — there is no `tailwind.config.*` file.

---

## License

MIT — free to use, fork, and adapt.
