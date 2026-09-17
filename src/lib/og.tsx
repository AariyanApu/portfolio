import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Static brand colours for the rasterised image (mirrors globals.css dark theme).
const BG = "#0b1220";
const TEAL = "#2dd4bf";
const FG = "#e2e8f0";
const MUTED = "#94a3b8";

async function loadTitleFont(): Promise<ArrayBuffer | null> {
  try {
    const buf = await readFile(
      path.join(process.cwd(), "src/utils/Kenfolg.otf"),
    );
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  } catch {
    return null;
  }
}

interface OgProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  tags?: string[];
}

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  tags = [],
}: OgProps) {
  const font = await loadTitleFont();
  const titleFamily = font ? "Kenfolg" : "sans-serif";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: `linear-gradient(135deg, ${BG} 0%, #101a33 60%, #0f2f2c 100%)`,
        color: FG,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 26,
          color: TEAL,
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: TEAL,
          }}
        />
        {eyebrow}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            fontFamily: titleFamily,
            fontSize: title.length > 24 ? 72 : 104,
            fontWeight: 900,
            lineHeight: 1.05,
            color: FG,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 34, color: MUTED, lineHeight: 1.3 }}>
          {subtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {tags.slice(0, 6).map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: `1px solid ${TEAL}55`,
                background: `${TEAL}18`,
                color: TEAL,
                fontSize: 22,
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 24, color: MUTED }}>aariyan.info</div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: font
        ? [{ name: "Kenfolg", data: font, style: "normal", weight: 900 }]
        : undefined,
    },
  );
}
