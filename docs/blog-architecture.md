# Markdown Blog Architecture Specification

This document outlines the architectural design for the markdown-based blog section in the Next.js project.

## 1. Directory Structure

The blog content and related logic will be organized as follows:

```text
/
├── content/
│   └── blog/
│       ├── post-one.md
│       └── post-two.md
├── src/
│   ├── app/
│   │   └── blog/
│   │       ├── page.tsx          # Blog Index (List of posts)
│   │       └── [slug]/
│   │           └── page.tsx      # Individual Blog Post
│   ├── components/
│   │   └── blog/
│   │       ├── markdown-renderer.tsx
│   │       └── post-card.tsx
│   └── lib/
│       └── blog.ts               # Data fetching utilities (fs, gray-matter)
```

## 2. Data Fetching Strategy

We will use a server-side data fetching strategy reading directly from the file system.

- **Library**: `gray-matter` for parsing frontmatter.
- **Logic**:
    - `getBlogPosts()`: Reads `content/blog/*.md`, parses frontmatter, and returns a sorted list of posts.
    - `getBlogPostBySlug(slug)`: Reads a specific file, returns frontmatter and content.
- **Next.js Integration**: Use `generateStaticParams` in `src/app/blog/[slug]/page.tsx` to statically generate all blog routes at build time.

## 3. Component Structure

### Index Page (`src/app/blog/page.tsx`)
- Fetches all post metadata.
- Renders a list of `PostCard` components.

### Post Page (`src/app/blog/[slug]/page.tsx`)
- Fetches specific post content and metadata based on the slug.
- Renders the title, date, and the `MarkdownRenderer`.

### Markdown Renderer (`src/components/blog/markdown-renderer.tsx`)
- **Library**: `streamdown` for rendering markdown to HTML.
- Responsible for converting the raw markdown string into JSX/HTML.

## 4. Styling Approach

We will use **Tailwind CSS Typography** (`@tailwindcss/typography`) to style the rendered markdown.

- The `MarkdownRenderer` will wrap the output in a `prose` class.
- Customizations (e.g., dark mode, specific link colors) will be handled in `tailwind.config.ts` or via specific prose modifiers (e.g., `prose-invert`, `prose-headings:text-primary`).

```tsx
<article className="prose prose-slate dark:prose-invert max-w-none">
  <MarkdownRenderer content={content} />
</article>
```

## 5. Metadata Handling

Metadata will be defined in the markdown files using YAML frontmatter.

### Required Fields:
- `title`: string
- `date`: string (ISO 8601)
- `description`: string
- `published`: boolean

### SEO Integration:
The `generateMetadata` function in `src/app/blog/[slug]/page.tsx` will map these frontmatter fields to Next.js Metadata objects for proper OpenGraph and Twitter card support.
