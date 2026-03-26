export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  readingTime: number;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  html: string;
  headings: Heading[];
}
