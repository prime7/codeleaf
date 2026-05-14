import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TerminalNav } from "@/components/page/terminal-nav"
import { MatrixFooter } from "@/components/page/matrix-footer"
import { ArticleLayout } from "@/components/page/article-layout"
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Not Found | CodeLeaf",
    }
  }

  return {
    title: `${post.title} | CodeLeaf`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://codeleaf.ca/insights/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://codeleaf.ca/insights/${post.slug}/`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <ArticleLayout
        title={post.title}
        category={post.category}
        date={post.date}
        author={post.author}
        authorRole={post.authorRole}
        readingTime={post.readingTime}
      >
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground prose-ul:my-6 prose-ol:my-6 prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-8 prose-h3:mb-4 prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:italic prose-table:border-border prose-th:text-foreground prose-th:border-border prose-td:border-border prose-td:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </ArticleLayout>
      <MatrixFooter />
    </main>
  )
}
