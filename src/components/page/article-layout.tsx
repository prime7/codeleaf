"use client"

import { ArrowLeft, Calendar, Tag, Clock, User } from "lucide-react"
import Link from "next/link"
import { AvatarPlaceholder } from "@/components/avatar-placeholder"

interface ArticleLayoutProps {
  title: string
  category: string
  date: string
  author?: string
  authorRole?: string
  readingTime?: string
  children: React.ReactNode
}

export function ArticleLayout({ title, category, date, author, authorRole, readingTime, children }: ArticleLayoutProps) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/insights/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to insights
        </Link>

        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-xs text-primary font-mono px-2 py-1 bg-primary/10 border border-primary/20">
            <Tag size={12} />
            {category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            {date}
          </span>
          {readingTime && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={12} />
              {readingTime}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">{title}</h1>

        {author && (
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-primary/10">
            <AvatarPlaceholder name={author} size={40} />
            <div>
              <div className="text-sm font-medium text-foreground">{author}</div>
              {authorRole && <div className="text-xs text-muted-foreground">{authorRole}</div>}
            </div>
          </div>
        )}

        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:bg-card/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-card/50 prose-pre:border prose-pre:border-primary/10">
          {children}
        </article>

        <div className="mt-16 pt-8 border-t border-primary/10">
          <p className="text-sm text-muted-foreground mb-4">
            Want to discuss how this applies to your business?
          </p>
          <Link
            href="/#audit"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Get your free AI audit
            <ArrowLeft size={16} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
