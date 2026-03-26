export function PostBody({ html }: { html: string }) {
  return (
    <div
      className="prose prose-invert max-w-none"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted markdown rendered at build time
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
