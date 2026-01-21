import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '../../../lib/blog';
import { MarkdownRenderer } from '../../../components/blog/markdown-renderer';
import { Navigation } from '../../../components/page/navigation';
import { MatrixFooter } from '../../../components/page/matrix-footer';
import Link from 'next/link';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mr-2 h-4 w-4 stroke-current rotate-180">
            <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to blog
        </Link>

        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground mb-4 block">
              {post.date}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>By {post.author}</span>
            </div>
          </header>

          <MarkdownRenderer content={post.content} />
        </article>
      </main>

      <MatrixFooter />
    </div>
  );
}
