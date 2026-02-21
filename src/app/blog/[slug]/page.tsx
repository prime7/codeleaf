import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData } from '@/lib/blog';
import { MarkdownRenderer } from '@/components/blog/markdown-renderer';
import { TerminalNav } from "@/components/page/terminal-nav";
import { MatrixFooter } from "@/components/page/matrix-footer";
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      
      <article className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-primary mb-8 transition-colors"
        >
          <span>←</span> BACK_TO_BLOG
        </Link>

        <header className="mb-12">
          <time className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 block">
            {post.date}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="border-t border-zinc-800 pt-12">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>

      <MatrixFooter />
    </main>
  );
}
