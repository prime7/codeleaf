import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { TerminalNav } from "@/components/page/terminal-nav";
import { MatrixFooter } from "@/components/page/matrix-footer";

export default function BlogIndexPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            BLOG<span className="text-primary">_</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Insights, updates, and technical deep dives from the team.
          </p>
        </header>

        <div className="grid gap-8">
          {allPostsData.map(({ slug, date, title, description }) => (
            <article key={slug} className="group relative p-6 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all">
              <div className="flex flex-col gap-2">
                <time className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  {date}
                </time>
                <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  <Link href={`/blog/${slug}`}>
                    {title}
                  </Link>
                </h2>
                <p className="text-zinc-400 line-clamp-2">
                  {description}
                </p>
                <Link 
                  href={`/blog/${slug}`}
                  className="mt-4 text-sm font-mono text-primary flex items-center gap-2 hover:underline"
                >
                  READ_MORE <span className="text-xs">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <MatrixFooter />
    </main>
  );
}
