import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import { Navigation } from '../../components/page/navigation';
import { MatrixFooter } from '../../components/page/matrix-footer';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Insights & <span className="text-primary">Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Exploring the frontier of AI-driven software engineering.
          </p>
        </header>

        <div className="grid gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute -inset-y-2.5 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span className="relative z-10">{post.title}</span>
                </Link>
              </h2>
              <time className="relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground pl-3.5">
                <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                </span>
                {post.date}
              </time>
              <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary">
                Read article
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                  <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </main>

      <MatrixFooter />
    </div>
  );
}
