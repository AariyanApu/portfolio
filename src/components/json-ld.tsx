type JsonLdData = Record<string, unknown>;

/** Renders a schema.org JSON-LD block. `<` is escaped so `</script>` can never break out. */
export function JsonLd({ data }: { data: JsonLdData }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD structured data
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
